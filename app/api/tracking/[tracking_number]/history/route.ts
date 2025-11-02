import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

interface RouteParams {
  params: Promise<{
    tracking_number: string
  }>
}

/**
 * GET /api/tracking/[tracking_number]/history
 * Get full tracking history (all tracking records) for a tracking number
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { tracking_number } = await params
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '100')
    const offset = parseInt(searchParams.get('offset') || '0')

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

    // Get all tracking records for this tracking number (not just latest)
    const { data: history, error, count } = await supabaseAdmin
      .from('tracking')
      .select('*', { count: 'exact' })
      .eq('tracking_number', tracking_number)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error('Tracking history lookup error:', error)
      return NextResponse.json(
        { error: 'Failed to retrieve tracking history' },
        { status: 500 }
      )
    }

    if (!history || history.length === 0) {
      return NextResponse.json(
        { error: 'Tracking number not found' },
        { status: 404 }
      )
    }

    // Parse coordinates for each record
    const historyWithCoords = history.map(record => {
      let coordinates = null
      if (record.coordinates) {
        const coords = record.coordinates.match(/\((-?\d+\.?\d*),(-?\d+\.?\d*)\)/)
        if (coords) {
          coordinates = {
            latitude: parseFloat(coords[2]),
            longitude: parseFloat(coords[1])
          }
        }
      }

      return {
        id: record.id,
        trackingNumber: record.tracking_number,
        skrId: record.skr_id,
        status: record.status,
        currentLocation: record.current_location,
        currentCountry: record.current_country,
        coordinates,
        estimatedDelivery: record.estimated_delivery,
        actualDelivery: record.actual_delivery,
        lastUpdate: record.last_update,
        notes: record.notes,
        isLatest: record.is_latest,
        createdAt: record.created_at,
        updatedAt: record.updated_at
      }
    })

    return NextResponse.json({
      success: true,
      data: historyWithCoords,
      pagination: {
        total: count || 0,
        limit,
        offset,
        hasMore: count ? offset + limit < count : false
      }
    })

  } catch (error) {
    console.error('Tracking history API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

