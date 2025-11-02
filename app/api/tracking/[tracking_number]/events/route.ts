import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

interface RouteParams {
  params: Promise<{
    tracking_number: string
  }>
}

/**
 * GET /api/tracking/[tracking_number]/events
 * Get events history for a tracking number
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { tracking_number } = await params
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
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

    // Check if input looks like an SKR number
    const isSKRNumber = /^[A-Z]+-SKR-/i.test(tracking_number)
    let skrId: string | null = null

    if (isSKRNumber) {
      // Find SKR by SKR number
      const { data: skr, error: skrError } = await supabaseAdmin
        .from('skrs')
        .select('id')
        .eq('skr_number', tracking_number)
        .single()

      if (skrError || !skr) {
        return NextResponse.json(
          { error: 'SKR number not found' },
          { status: 404 }
        )
      }
      skrId = skr.id
    } else {
      // Get the tracking record to find the SKR ID
      const { data: tracking, error: trackingError } = await supabaseAdmin
        .from('tracking')
        .select('skr_id')
        .eq('tracking_number', tracking_number)
        .eq('is_latest', true)
        .single()

      if (trackingError || !tracking || !tracking.skr_id) {
        return NextResponse.json(
          { error: 'Tracking number not found' },
          { status: 404 }
        )
      }
      skrId = tracking.skr_id
    }

    // Get events for this SKR ID
    const { data: events, error: eventsError, count } = await supabaseAdmin
      .from('tracking_events')
      .select('*', { count: 'exact' })
      .eq('skr_id', skrId)
      .order('event_date', { ascending: false })
      .range(offset, offset + limit - 1)

    if (eventsError) {
      console.error('Events lookup error:', eventsError)
      return NextResponse.json(
        { error: 'Failed to retrieve events' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: events || [],
      pagination: {
        total: count || 0,
        limit,
        offset,
        hasMore: count ? offset + limit < count : false
      }
    })

  } catch (error) {
    console.error('Events API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

