import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

/**
 * POST /api/skr/verify
 * Verify SKR authenticity using hash
 * 
 * Request body:
 * {
 *   "skr_number": "G1-SKR-2024-00008",
 *   "hash": "2439c618601cf4db3ab1a28681677e0309426c43232fa52809d8c5861ff94348"
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { skr_number, hash } = body

    if (!skr_number || !hash) {
      return NextResponse.json(
        { error: 'SKR number and hash are required' },
        { status: 400 }
      )
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      )
    }

    // Get SKR by number
    const { data: skr, error } = await supabaseAdmin
      .from('skrs')
      .select('id, skr_number, hash, status, issue_date')
      .eq('skr_number', skr_number)
      .single()

    if (error) {
      console.error('SKR verification lookup error:', error)
      
      if (error.code === 'PGRST116') {
        return NextResponse.json({
          success: false,
          verified: false,
          error: 'SKR number not found'
        }, { status: 404 })
      }

      return NextResponse.json(
        { error: 'Failed to verify SKR' },
        { status: 500 }
      )
    }

    // Verify hash matches
    const verified = skr.hash === hash

    return NextResponse.json({
      success: true,
      verified,
      data: verified ? {
        skrNumber: skr.skr_number,
        status: skr.status,
        issueDate: skr.issue_date,
        message: 'SKR verified successfully'
      } : {
        message: 'Hash verification failed. This SKR may be tampered with or invalid.',
        expectedHash: skr.hash,
        providedHash: hash
      }
    })

  } catch (error) {
    console.error('SKR verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

