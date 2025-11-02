import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

interface RouteParams {
  params: Promise<{
    skrNumber: string
  }>
}

/**
 * GET /api/verify/skr/[skrNumber]
 * Verify SKR and return public information (matches CRM structure)
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { skrNumber } = await params
    const decodedSkrNumber = decodeURIComponent(skrNumber)

    if (!supabaseAdmin) {
      return NextResponse.json(
        { 
          valid: false,
          error: 'Database connection not configured',
          skr_number: decodedSkrNumber
        },
        { status: 500 }
      )
    }

    // Fetch SKR data (public information only) - matches CRM structure
    const { data: skr, error } = await supabaseAdmin
      .from('skrs')
      .select(`
        id,
        skr_number,
        status,
        issue_date,
        hash,
        created_at,
        client:clients(id, name, country),
        asset:assets(id, asset_name, asset_type, declared_value, currency)
      `)
      .eq('skr_number', decodedSkrNumber)
      .single()

    if (error || !skr) {
      return NextResponse.json(
        { 
          valid: false, 
          error: 'SKR not found',
          skr_number: decodedSkrNumber
        },
        { status: 404 }
      )
    }

    // Only allow verification of issued SKRs (matches CRM logic)
    if (skr.status !== 'issued' && skr.status !== 'in_transit' && skr.status !== 'delivered' && skr.status !== 'closed') {
      return NextResponse.json(
        {
          valid: false,
          error: 'SKR is not in a verifiable state',
          skr_number: decodedSkrNumber,
          status: skr.status
        },
        { status: 400 }
      )
    }

    // Verify hash if provided in query params (matches CRM pattern)
    const { searchParams } = new URL(request.url)
    const providedHash = searchParams.get('hash')
    
    let hashValid = true
    if (providedHash && skr.hash) {
      // Simple hash validation (can be enhanced with proper hash verification utility)
      hashValid = skr.hash === providedHash
    }

    // Return verification result with public information (matches CRM structure)
    const verificationResult = {
      valid: true,
      skr_number: skr.skr_number,
      status: skr.status,
      issue_date: skr.issue_date,
      hash_valid: hashValid,
      verification_time: new Date().toISOString(),
      client: {
        name: Array.isArray(skr.client) ? (skr.client as any[])[0]?.name : (skr.client as any)?.name,
        country: Array.isArray(skr.client) ? (skr.client as any[])[0]?.country : (skr.client as any)?.country
      },
      asset: {
        name: Array.isArray(skr.asset) ? (skr.asset as any[])[0]?.asset_name : (skr.asset as any)?.asset_name,
        type: Array.isArray(skr.asset) ? (skr.asset as any[])[0]?.asset_type : (skr.asset as any)?.asset_type,
        declared_value: Array.isArray(skr.asset) ? (skr.asset as any[])[0]?.declared_value : (skr.asset as any)?.declared_value,
        currency: Array.isArray(skr.asset) ? (skr.asset as any[])[0]?.currency : (skr.asset as any)?.currency
      },
      hash_provided: !!providedHash,
      hash_available: !!skr.hash
    }

    return NextResponse.json(verificationResult, {
      headers: {
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    })
  } catch (error) {
    console.error('SKR verification error:', error)
    
    return NextResponse.json(
      { 
        valid: false,
        error: 'Verification service temporarily unavailable',
        skr_number: (await params).skrNumber
      },
      { status: 500 }
    )
  }
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

