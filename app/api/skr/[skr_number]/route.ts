import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

interface RouteParams {
  params: Promise<{
    skr_number: string
  }>
}

/**
 * GET /api/skr/[skr_number]
 * Get SKR details by SKR number
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { skr_number } = await params

    if (!skr_number) {
      return NextResponse.json(
        { error: 'SKR number is required' },
        { status: 400 }
      )
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      )
    }

    // Get SKR details
    const { data: skr, error } = await supabaseAdmin
      .from('skrs')
      .select(`
        *,
        client:clients (
          id,
          name,
          email,
          country
        ),
        asset:assets (
          id,
          asset_name,
          asset_type,
          declared_value,
          currency
        )
      `)
      .eq('skr_number', skr_number)
      .single()

    if (error) {
      console.error('SKR lookup error:', error)
      
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'SKR number not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to retrieve SKR information' },
        { status: 500 }
      )
    }

    // Get latest tracking information for this SKR
    const { data: latestTracking } = await supabaseAdmin
      .from('tracking')
      .select('*')
      .eq('skr_id', skr.id)
      .eq('is_latest', true)
      .single()

    // Parse coordinates if they exist
    let coordinates = null
    if (latestTracking?.coordinates) {
      const coords = latestTracking.coordinates.match(/\((-?\d+\.?\d*),(-?\d+\.?\d*)\)/)
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
        id: skr.id,
        skrNumber: skr.skr_number,
        status: skr.status,
        issueDate: skr.issue_date,
        hash: skr.hash,
        pdfUrl: skr.pdf_url,
        qrCodeUrl: skr.qr_code_url,
        remarks: skr.remarks,
        metadata: skr.metadata,
        client: skr.client,
        asset: skr.asset,
        createdAt: skr.created_at,
        updatedAt: skr.updated_at,
        tracking: latestTracking ? {
          trackingNumber: latestTracking.tracking_number,
          status: latestTracking.status,
          currentLocation: latestTracking.current_location,
          currentCountry: latestTracking.current_country,
          coordinates,
          estimatedDelivery: latestTracking.estimated_delivery,
          actualDelivery: latestTracking.actual_delivery,
          lastUpdate: latestTracking.last_update
        } : null
      }
    })

  } catch (error) {
    console.error('SKR API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

