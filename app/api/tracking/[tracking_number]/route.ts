import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

interface RouteParams {
  params: Promise<{
    tracking_number: string
  }>
}

/**
 * GET /api/tracking/[tracking_number]
 * Get current tracking information by tracking number or SKR number
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { tracking_number } = await params

    if (!tracking_number) {
      return NextResponse.json(
        { error: 'Tracking number is required' },
        { status: 400 }
      )
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      )
    }

    // Check if input looks like an SKR number (starts with letters/numbers followed by "-SKR-")
    // Matches patterns like: G1-SKR-, ABC-SKR-, 123-SKR-, etc.
    const isSKRNumber = /^[A-Z0-9]+-SKR-/i.test(tracking_number)
    
    if (isSKRNumber) {
      // Match CRM pattern: /api/verify/tracking/[skrNumber]
      // Returns all tracking records and events for the SKR
      const { data: skr, error: skrError } = await supabaseAdmin
        .from('skrs')
        .select('id, skr_number, status')
        .eq('skr_number', tracking_number)
        .single()

      if (skrError || !skr) {
        return NextResponse.json(
          { 
            success: false,
            error: 'SKR not found',
            skr_number: tracking_number
          },
          { status: 404 }
        )
      }

      // Fetch ALL tracking data for this SKR (not just latest) - matches CRM pattern
      const { data: trackingData, error: trackingError } = await supabaseAdmin
        .from('tracking')
        .select(`
          id,
          tracking_number,
          status,
          current_location,
          current_country,
          estimated_delivery,
          actual_delivery,
          notes,
          created_at,
          updated_at
        `)
        .eq('skr_id', skr.id)
        .order('created_at', { ascending: false })

      if (trackingError) {
        console.error('Tracking fetch error:', trackingError)
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to fetch tracking data'
          },
          { status: 500 }
        )
      }

      // Fetch ALL tracking events/history - matches CRM pattern
      const { data: trackingEvents, error: eventsError } = await supabaseAdmin
        .from('tracking_events')
        .select(`
          id,
          event_type,
          event_date,
          location,
          country,
          description,
          created_at
        `)
        .eq('skr_id', skr.id)
        .order('event_date', { ascending: false })

      if (eventsError) {
        console.error('Tracking events fetch error:', eventsError)
      }

      // Return combined tracking information - EXACT CRM pattern
      return NextResponse.json(
        {
          success: true,
          skr_number: skr.skr_number,
          skr_status: skr.status,
          tracking: trackingData || [],
          events: trackingEvents || [],
          last_updated: new Date().toISOString()
        },
        {
          headers: {
            'Cache-Control': 'public, max-age=60', // Cache for 1 minute
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        }
      )
    } else {
      // Handle regular tracking number (not SKR)
      const trackingResult = await supabaseAdmin
        .from('tracking')
        .select('*')
        .eq('tracking_number', tracking_number)
        .eq('is_latest', true)
        .maybeSingle()
      
      if (trackingResult.error) {
        console.error('Tracking lookup error:', trackingResult.error)
        
        if (trackingResult.error.code === 'PGRST116') {
          return NextResponse.json(
            { error: `Tracking number "${tracking_number}" not found` },
            { status: 404 }
          )
        }

        return NextResponse.json(
          { error: 'Failed to retrieve tracking information' },
          { status: 500 }
        )
      }
      
      if (!trackingResult.data) {
        return NextResponse.json(
          { error: 'No tracking information found' },
          { status: 404 }
        )
      }

      const tracking = trackingResult.data

      // Parse coordinates if they exist
      let coordinates = null
      if (tracking.coordinates) {
        const coords = tracking.coordinates.match(/\((-?\d+\.?\d*),(-?\d+\.?\d*)\)/)
        if (coords) {
          coordinates = {
            latitude: parseFloat(coords[2]),
            longitude: parseFloat(coords[1])
          }
        }
      }

      // Fetch SKR details if available
      let skrDetails = null
      if (tracking.skr_id) {
        const { data: skr } = await supabaseAdmin
          .from('skrs')
          .select('id, skr_number, status, issue_date, hash')
          .eq('id', tracking.skr_id)
          .single()
        
        if (skr) {
          skrDetails = skr
        }
      }

      // Return standard response for tracking numbers
      return NextResponse.json({
        success: true,
        verified: !!skrDetails,
        data: {
          id: tracking.id,
          trackingNumber: tracking.tracking_number,
          skrId: tracking.skr_id,
          skr: skrDetails,
          status: tracking.status,
          currentLocation: tracking.current_location,
          currentCountry: tracking.current_country,
          coordinates,
          estimatedDelivery: tracking.estimated_delivery,
          actualDelivery: tracking.actual_delivery,
          lastUpdate: tracking.last_update,
          notes: tracking.notes,
          createdAt: tracking.created_at,
          updatedAt: tracking.updated_at
        },
        last_updated: new Date().toISOString()
      })
    }

  } catch (error) {
    console.error('Tracking API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

