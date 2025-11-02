import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Service role key for server-side operations
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Validate required environment variables
if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
}

/**
 * Client-side Supabase client (uses anon key)
 * Use this for client-side operations with RLS
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Server-side Supabase client (uses service role key)
 * Use this for server-side API routes that need to bypass RLS
 */
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : (() => {
      console.warn('SUPABASE_SERVICE_ROLE_KEY is not set. Server-side admin operations will not be available.')
      return null
    })()

