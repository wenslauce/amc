/**
 * Type definitions for Tracking, SKR, and Events API responses
 */

export interface TrackingRecord {
  id: string
  trackingNumber: string
  skrId: string | null
  skr?: SKRDetails | null
  status: string
  currentLocation: string | null
  currentCountry: string | null
  coordinates: {
    latitude: number
    longitude: number
  } | null
  estimatedDelivery: string | null
  actualDelivery: string | null
  lastUpdate: string | null
  notes: string | null
  isLatest?: boolean
  createdAt: string
  updatedAt: string
}

export interface SKRDetails {
  id: string
  skr_number: string
  status: 'draft' | 'approved' | 'issued' | 'in_transit' | 'delivered' | 'closed'
  issue_date?: string | null
  hash?: string | null
  pdf_url?: string | null
  qr_code_url?: string | null
  remarks?: string | null
  metadata?: Record<string, any>
  client?: {
    id: string
    name: string
    email: string
    country: string
  } | null
  asset?: {
    id: string
    asset_name: string
    asset_type: string
    declared_value: number
    currency: string
  } | null
  created_at?: string
  updated_at?: string
}

export interface TrackingEvent {
  id: string
  skrId: string
  eventType: string
  eventDate: string
  location: string
  country: string
  description: string | null
  metadata: Record<string, any>
  createdAt: string
}

export interface TrackingResponse {
  success: boolean
  data: TrackingRecord
}

// CRM-style response for SKR tracking (matches CRM API structure)
export interface CRMTrackingResponse {
  success: boolean
  skr_number: string
  skr_status: string
  tracking: Array<{
    id: string
    tracking_number: string
    status: string
    current_location: string
    current_country: string | null
    estimated_delivery: string | null
    actual_delivery: string | null
    notes: string | null
    created_at: string
    updated_at: string
  }>
  events: Array<{
    id: string
    event_type: string
    event_date: string
    location: string
    country: string | null
    description: string | null
    created_at: string
  }>
  last_updated: string
  error?: string
}

export interface SKRResponse {
  success: boolean
  data: SKRDetails & {
    tracking?: Omit<TrackingRecord, 'id' | 'skrId' | 'skr' | 'createdAt' | 'updatedAt' | 'isLatest'> | null
  }
}

export interface SKRVerificationResponse {
  success: boolean
  verified: boolean
  error?: string
  data?: {
    skrNumber: string
    status: string
    issueDate: string | null
    message: string
  } | {
    message: string
    expectedHash: string
    providedHash: string
  }
}

export interface EventsResponse {
  success: boolean
  data: TrackingEvent[]
  pagination: {
    total: number
    limit: number
    offset: number
    hasMore: boolean
  }
}

export interface TrackingHistoryResponse {
  success: boolean
  data: TrackingRecord[]
  pagination: {
    total: number
    limit: number
    offset: number
    hasMore: boolean
  }
}

export interface APIErrorResponse {
  error: string
}

