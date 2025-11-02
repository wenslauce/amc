import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

interface RouteParams {
  params: Promise<{
    skr_id: string
  }>
}

/**
 * GET /api/tracking/skr/[skr_id]
 * Get tracking information by SKR ID
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { skr_id } = await params

    if (!skr_id) {
      return NextResponse.json(
        { error: 'SKR ID is required' },
        { status: 400 }
      )
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      )
    }

    // Get the latest tracking record for this SKR ID
    const { data: tracking, error } = await supabaseAdmin
      .from('tracking')
      .select(`
        *,
        skr:skrs (
          id,
          skr_number,
          status,
          issue_date,
          hash,
          client_id,
          asset_id,
          metadata
        )
      `)
      .eq('skr_id', skr_id)
      .eq('is_latest', true)
      .single()

    if (error) {
      console.error('Tracking lookup error:', error)
      
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Tracking information not found for this SKR' },
          { status: 404 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to retrieve tracking information' },
        { status: 500 }
      )
    }

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

    return NextResponse.json({
      success: true,
      data: {
        id: tracking.id,
        trackingNumber: tracking.tracking_number,
        skrId: tracking.skr_id,
        skr: tracking.skr,
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
      }
    })

  } catch (error) {
    console.error('Tracking API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

