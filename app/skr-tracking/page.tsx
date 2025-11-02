"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, MapPin, Clock, CheckCircle2, AlertTriangle, Package, Truck, History, CheckCircle, XCircle, FileText, User, Calendar, Hash, EyeOff, Loader2 } from "lucide-react"
import { useState } from "react"
import type { TrackingResponse, TrackingEvent, EventsResponse, CRMTrackingResponse } from "@/lib/types/tracking"

interface TrackingRecord {
  id: string
  tracking_number: string
  status: string
  current_location: string
  current_country: string | null
  estimated_delivery?: string | null
  actual_delivery?: string | null
  notes?: string | null
  created_at: string
  updated_at: string
}

interface VerificationResult {
  valid: boolean
  skr_number: string
  status?: string
  issue_date?: string
  hash_valid?: boolean
  verification_time?: string
  client?: {
    name: string
    country: string
  }
  asset?: {
    name: string
    type: string
    declared_value: number
    currency: string
  }
  hash_provided?: boolean
  hash_available?: boolean
  error?: string
}

export default function SKRTrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingVerification, setIsLoadingVerification] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null)
  const [trackingResult, setTrackingResult] = useState<TrackingResponse["data"] | null>(null)
  // Events from CRM response use snake_case (event_type, event_date, etc.)
  const [trackingEvents, setTrackingEvents] = useState<CRMTrackingResponse['events']>([])
  const [trackingRecords, setTrackingRecords] = useState<TrackingRecord[]>([])
  const [crmResponse, setCrmResponse] = useState<CRMTrackingResponse | null>(null)
  const [activeTab, setActiveTab] = useState("tracking")
  const [hashInput, setHashInput] = useState('')
  const [showHashInput, setShowHashInput] = useState(false)
  const [verifyingHash, setVerifyingHash] = useState(false)

  // Helper functions for status display
  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      issued: 'bg-yellow-100 text-yellow-800',
      in_transit: 'bg-orange-100 text-orange-800',
      delivered: 'bg-green-100 text-green-800',
      closed: 'bg-purple-100 text-purple-800',
      pending: 'bg-gray-100 text-gray-800',
      picked_up: 'bg-blue-100 text-blue-800',
      customs: 'bg-red-100 text-red-800',
      out_for_delivery: 'bg-indigo-100 text-indigo-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getStatusDisplayName = (status: string) => {
    const names: Record<string, string> = {
      issued: 'Issued',
      in_transit: 'In Transit',
      delivered: 'Delivered',
      closed: 'Closed',
      pending: 'Pending',
      picked_up: 'Picked Up',
      customs: 'In Customs',
      out_for_delivery: 'Out for Delivery'
    }
    return names[status] || status.replace(/_/g, ' ').toUpperCase()
  }

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'picked_up':
        return <Package className="h-5 w-5" />
      case 'in_transit':
        return <Truck className="h-5 w-5" />
      case 'customs':
        return <Shield className="h-5 w-5" />
      case 'delivered':
        return <CheckCircle className="h-5 w-5" />
      case 'location_update':
        return <MapPin className="h-5 w-5" />
      default:
        return <Package className="h-5 w-5" />
    }
  }

  const handleHashVerification = async () => {
    if (!hashInput.trim() || !trackingNumber.trim()) return
    
    setVerifyingHash(true)
    try {
      const url = new URL(`/api/verify/skr/${encodeURIComponent(trackingNumber.trim())}`, window.location.origin)
      url.searchParams.set('hash', hashInput.trim())
      
      const response = await fetch(url.toString())
      const result = await response.json()
      
      setVerificationResult(result)
    } catch (error) {
      console.error('Hash verification error:', error)
    } finally {
      setVerifyingHash(false)
    }
  }

  const formatDateTime = (dateString: string | null | undefined) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleString()
  }

  const formatCurrency = (value: number | null | undefined, currency: string | null | undefined) => {
    if (value === null || value === undefined) return 'N/A'
    const currencyCode = currency || 'USD'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode
    }).format(value)
  }

  const features = [
    {
      icon: Shield,
      title: "Secure Custody",
      description: "SKR (Safe Keeping Receipt) ensures your high-value consignments are held under verified custody.",
    },
    {
      icon: Lock,
      title: "Tamper-Proof Sealing",
      description: "Advanced sealing technology with real-time tamper alerts and incident escalation protocols.",
    },
    {
      icon: Eye,
      title: "Real-Time Tracking",
      description: "24/7 GPS monitoring and live status updates throughout the entire shipment journey.",
    },
    {
      icon: MapPin,
      title: "Route Verification",
      description: "Pre-approved routes with checkpoint verification and deviation alerts for maximum security.",
    },
  ]

  const securityMeasures = [
    "Armed escort services for high-value shipments",
    "Biometric access control and verification",
    "Multi-layer authentication for custody transfer",
    "Insurance coverage for full shipment value",
    "Compliance with international security standards",
    "24/7 command center monitoring",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">SKR & Shipment Tracking</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Advanced security and real-time tracking for high-value consignments across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Track Your Shipment</CardTitle>
              <p className="text-muted-foreground">Enter your tracking number to view real-time shipment status</p>
            </CardHeader>
            <CardContent>
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 text-sm">{success}</p>
                  </div>
                </div>
              )}

              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  setIsLoading(true)
                  setIsLoadingVerification(true)
                  setError(null)
                  setSuccess(null)
                  setTrackingResult(null)
                  setVerificationResult(null)
                  setTrackingRecords([])
                  setTrackingEvents([])
                  setCrmResponse(null)
                  
                  // Check if it's an SKR number and set default tab accordingly
                  const isSKRNumberCheck = /^[A-Z0-9]+-SKR-/i.test(trackingNumber.trim())
                  if (isSKRNumberCheck) {
                    setActiveTab("verification")
                  } else {
                    setActiveTab("tracking")
                  }

                  if (!trackingNumber.trim()) {
                    setError("Please enter a tracking number")
                    setIsLoading(false)
                    return
                  }

                  // Basic validation for tracking number format
                  if (trackingNumber.trim().length < 3) {
                    setError("Please enter a valid tracking number")
                    setIsLoading(false)
                    return
                  }

                  try {
                    // Check if it's an SKR number to fetch verification
                    const isSKRNumber = /^[A-Z0-9]+-SKR-/i.test(trackingNumber.trim())
                    
                    // Fetch verification if SKR number - do this first for instant display
                    if (isSKRNumber) {
                      try {
                        const verificationResponse = await fetch(`/api/verify/skr/${encodeURIComponent(trackingNumber.trim())}`)
                        const verificationData = await verificationResponse.json()
                        setVerificationResult(verificationData)
                        // Set verification tab as active immediately when verification loads
                        setActiveTab("verification")
                        setIsLoadingVerification(false) // Stop verification loading immediately
                      } catch (verificationError) {
                        console.error('Failed to fetch verification:', verificationError)
                        setIsLoadingVerification(false)
                      }
                    }

                    // Fetch tracking information (can happen in parallel)
                    const trackingResponse = await fetch(`/api/tracking/${encodeURIComponent(trackingNumber.trim())}`)
                    const trackingData: TrackingResponse | CRMTrackingResponse | { error: string; success?: boolean } = await trackingResponse.json()

                    // Check if response has an error (and it's not a successful CRM response)
                    if (!trackingResponse.ok) {
                      // HTTP error status (404, 500, etc.)
                      const errorData = trackingData as { error: string; success?: boolean }
                      throw new Error(errorData.error || 'Failed to retrieve tracking information')
                    }

                    // Check if response indicates an error (success: false or has error field)
                    if ('success' in trackingData && trackingData.success === false) {
                      const errorData = trackingData as { error: string; success: false }
                      throw new Error(errorData.error || 'Failed to retrieve tracking information')
                    }

                    if ('error' in trackingData && !('success' in trackingData && trackingData.success === true)) {
                      throw new Error((trackingData as { error: string }).error || 'Failed to retrieve tracking information')
                    }

                    // Handle successful response - check for success flag
                    if (trackingData.success) {
                      // If response has CRM-style tracking/events arrays, use them
                      if ('tracking' in trackingData && 'events' in trackingData) {
                        // CRM-style response - matches CRM exactly
                        const crmData = trackingData as CRMTrackingResponse
                        setCrmResponse(crmData)
                        setTrackingRecords(crmData.tracking || [])
                        setTrackingEvents(crmData.events || [])
                        
                        // Use first tracking record for display if available
                        if (crmData.tracking && crmData.tracking.length > 0) {
                          const firstTrack = crmData.tracking[0]
                          setTrackingResult({
                            id: firstTrack.id,
                            trackingNumber: firstTrack.tracking_number,
                            skrId: null,
                            status: firstTrack.status,
                            currentLocation: firstTrack.current_location || null,
                            currentCountry: firstTrack.current_country || null,
                            coordinates: null,
                            estimatedDelivery: firstTrack.estimated_delivery || null,
                            actualDelivery: firstTrack.actual_delivery || null,
                            lastUpdate: firstTrack.updated_at || null,
                            notes: firstTrack.notes || null,
                            createdAt: firstTrack.created_at,
                            updatedAt: firstTrack.updated_at
                          })
                        } else {
                          // No tracking but SKR verified - use placeholder values
                    setTrackingResult({
                            id: 'no-tracking',
                            trackingNumber: crmData.skr_number || 'N/A',
                            skrId: null,
                            status: crmData.skr_status || 'verified',
                            currentLocation: null,
                            currentCountry: null,
                            coordinates: null,
                            estimatedDelivery: null,
                            actualDelivery: null,
                            lastUpdate: null,
                            notes: 'SKR verified but tracking information not yet available',
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                          })
                        }
                        
                        setSuccess('SKR information loaded successfully!')
                        // Ensure verification tab is active for SKR numbers
                        if (isSKRNumber) {
                          setActiveTab("verification")
                        }
                      } else if ('data' in trackingData && trackingData.data) {
                        // Standard response format (tracking exists)
                        const standardData = trackingData as TrackingResponse
                        setTrackingResult(standardData.data)
                        
                        // Fetch events history separately
                        try {
                          const eventsResponse = await fetch(`/api/tracking/${encodeURIComponent(trackingNumber.trim())}/events`)
                          const eventsData: EventsResponse | { error: string } = await eventsResponse.json()

                          if (eventsResponse.ok && 'success' in eventsData && eventsData.success && eventsData.data) {
                            // Convert TrackingEvent format to CRM-style format for display
                            const crmStyleEvents = eventsData.data.map((event: TrackingEvent) => ({
                              id: event.id,
                              event_type: event.eventType,
                              event_date: event.eventDate,
                              location: event.location,
                              country: event.country || null,
                              description: event.description || null,
                              created_at: event.createdAt
                            }))
                            setTrackingEvents(crmStyleEvents)
                          }
                        } catch (eventsError) {
                          // Don't fail if events fetch fails, just log it
                          console.error('Failed to fetch events:', eventsError)
                        }
                        
                        setSuccess("Tracking information retrieved successfully!")
                        // Set active tab to tracking for regular tracking numbers
                        if (!isSKRNumber) {
                          setActiveTab("tracking")
                        }
                      } else {
                        // Response has success=true but no data structure - still show as verified
                        setSuccess("SKR verified successfully!")
                      }
                    } else {
                      throw new Error('Invalid response from server')
                    }
                  } catch (error) {
                    console.error('Tracking error:', error)
                    setError(error instanceof Error ? error.message : "Failed to retrieve tracking information. Please try again or contact support.")
                  } finally {
                    setIsLoading(false)
                    setIsLoadingVerification(false)
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="tracking">Tracking Number</Label>
                  <Input
                    id="tracking"
                    placeholder="Enter your SKR tracking number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? "Tracking..." : "Track Shipment"}
                </Button>
              </form>
              {/* Tracking Result with Tabs */}
              {(trackingResult || crmResponse || verificationResult) && (
                <div className="mt-6">
                  {/* SKR Number Display - Only show if it's an SKR */}
                  {(crmResponse?.skr_number || verificationResult?.skr_number) && (
                    <Card className="mb-6">
                      <CardHeader className="text-center">
                        <CardTitle className="flex items-center justify-center gap-2">
                          <FileText className="h-6 w-6" />
                          SKR Number
                        </CardTitle>
                        <div className="text-2xl font-mono font-bold text-primary mt-2">
                          {crmResponse?.skr_number || verificationResult?.skr_number}
                        </div>
                      </CardHeader>
                    </Card>
                  )}

                  {/* Tracking Number Display - For regular tracking numbers */}
                  {trackingResult?.trackingNumber && !crmResponse?.skr_number && !verificationResult?.skr_number && (
                    <Card className="mb-6">
                      <CardHeader className="text-center">
                        <CardTitle className="flex items-center justify-center gap-2">
                          <Package className="h-6 w-6" />
                          Tracking Number
                        </CardTitle>
                        <div className="text-2xl font-mono font-bold text-primary mt-2">
                          {trackingResult.trackingNumber}
                        </div>
                      </CardHeader>
                    </Card>
                  )}

                  <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    {/* Show 3 tabs for SKR numbers, 2 tabs for regular tracking numbers */}
                    {verificationResult || crmResponse?.skr_number ? (
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="verification" className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          Verification
                        </TabsTrigger>
                        <TabsTrigger value="tracking" className="flex items-center gap-2">
                          <Truck className="h-4 w-4" />
                          Tracking
                        </TabsTrigger>
                        <TabsTrigger value="history" className="flex items-center gap-2">
                          <History className="h-4 w-4" />
                          History
                        </TabsTrigger>
                      </TabsList>
                    ) : (
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="tracking" className="flex items-center gap-2">
                          <Truck className="h-4 w-4" />
                          Tracking
                        </TabsTrigger>
                        <TabsTrigger value="history" className="flex items-center gap-2">
                          <History className="h-4 w-4" />
                          History
                        </TabsTrigger>
                      </TabsList>
                    )}

                    {/* VERIFICATION TAB */}
                    <TabsContent value="verification" className="space-y-6">
                      {isLoadingVerification && !verificationResult ? (
                        <Card>
                          <CardContent className="p-8">
                            <div className="flex items-center justify-center">
                              <Loader2 className="h-8 w-8 animate-spin text-primary mr-3" />
                              <span className="text-lg">Verifying SKR...</span>
                            </div>
                          </CardContent>
                        </Card>
                      ) : verificationResult ? (
                        <>
                          {/* Verification Status */}
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                {verificationResult.valid ? (
                                  <CheckCircle className="h-6 w-6 text-green-600" />
                                ) : (
                                  <XCircle className="h-6 w-6 text-red-600" />
                                )}
                                Verification Status
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              {verificationResult.valid ? (
                                <div className="text-center py-4">
                                  <div className="text-2xl font-bold text-green-600 mb-2">
                                    ✓ VALID SKR
                                  </div>
                                  <p className="text-muted-foreground">
                                    This SKR has been verified as authentic and issued by G1 Holding
                                  </p>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    Verified on: {formatDateTime(verificationResult.verification_time || new Date().toISOString())}
                                  </p>
                                </div>
                              ) : (
                                <div className="text-center py-4">
                                  <div className="text-2xl font-bold text-red-600 mb-2">
                                    ✗ INVALID SKR
                                  </div>
                                  <p className="text-muted-foreground mb-2">
                                    {verificationResult.error || 'This SKR could not be verified'}
                                  </p>
                                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                                    <div className="flex items-center">
                                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                                      <span className="text-sm text-red-800">
                                        Warning: This document may not be authentic. Please contact G1 Holding to verify.
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>

                          {/* SKR Details (only if valid) */}
                          {verificationResult.valid && (
                            <>
                              {/* Basic Information */}
                              <Card>
                                <CardHeader>
                                  <CardTitle>SKR Information</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                                      <div className="mt-1">
                                        <Badge className={getStatusColor(verificationResult.status || '')}>
                                          {getStatusDisplayName(verificationResult.status || '')}
                                        </Badge>
                                      </div>
                                    </div>
                                    
                                    {verificationResult.issue_date && (
                                      <div>
                                        <Label className="text-sm font-medium text-muted-foreground">Issue Date</Label>
                                        <div className="mt-1 flex items-center">
                                          <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                                          {formatDateTime(verificationResult.issue_date)}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Client Information */}
                              {verificationResult.client && (
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                      <User className="h-5 w-5" />
                                      Client Information
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm font-medium text-muted-foreground">Client Name</Label>
                                        <div className="mt-1 font-medium">{verificationResult.client.name}</div>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium text-muted-foreground">Country</Label>
                                        <div className="mt-1">{verificationResult.client.country}</div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              )}

                              {/* Asset Information */}
                              {verificationResult.asset && (
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                      <Package className="h-5 w-5" />
                                      Asset Information
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <Label className="text-sm font-medium text-muted-foreground">Asset Name</Label>
                                        <div className="mt-1 font-medium">{verificationResult.asset.name}</div>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium text-muted-foreground">Asset Type</Label>
                                        <div className="mt-1">{verificationResult.asset.type}</div>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium text-muted-foreground">Declared Value</Label>
                                        <div className="mt-1 font-medium">
                                          {formatCurrency(verificationResult.asset.declared_value, verificationResult.asset.currency)}
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              )}

                              {/* Hash Verification */}
                              {verificationResult.hash_available && (
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                      <Hash className="h-5 w-5" />
                                      Digital Hash Verification
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                      Verify the document's digital signature for additional security
                                    </p>
                                  </CardHeader>
                                  <CardContent>
                                    {!showHashInput ? (
                                      <div className="text-center">
                                        <Button 
                                          onClick={() => setShowHashInput(true)}
                                          variant="outline"
                                          className="flex items-center gap-2"
                                        >
                                          <Eye className="h-4 w-4" />
                                          Verify Digital Hash
                                        </Button>
                                      </div>
                                    ) : (
                                      <div className="space-y-4">
                                        <div>
                                          <Label htmlFor="hash">Enter Digital Hash</Label>
                                          <Input
                                            id="hash"
                                            value={hashInput}
                                            onChange={(e) => setHashInput(e.target.value)}
                                            placeholder="Enter the digital hash from the original document"
                                            className="font-mono text-sm mt-2"
                                          />
                                        </div>
                                        
                                        <div className="flex gap-2">
                                          <Button 
                                            onClick={handleHashVerification}
                                            disabled={!hashInput.trim() || verifyingHash}
                                            className="flex items-center gap-2"
                                          >
                                            {verifyingHash ? (
                                              <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                              <Shield className="h-4 w-4" />
                                            )}
                                            {verifyingHash ? 'Verifying...' : 'Verify Hash'}
                                          </Button>
                                          
                                          <Button 
                                            variant="outline"
                                            onClick={() => {
                                              setShowHashInput(false)
                                              setHashInput('')
                                            }}
                                          >
                                            <EyeOff className="h-4 w-4 mr-2" />
                                            Hide
                                          </Button>
                                        </div>
                                        
                                        {verificationResult.hash_provided !== undefined && (
                                          <div className={`p-3 rounded-lg ${
                                            verificationResult.hash_valid 
                                              ? 'bg-green-50 border border-green-200' 
                                              : 'bg-red-50 border border-red-200'
                                          }`}>
                                            <div className="flex items-center">
                                              {verificationResult.hash_valid ? (
                                                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                                              ) : (
                                                <XCircle className="h-5 w-5 text-red-600 mr-2" />
                                              )}
                                              <span className={`text-sm font-medium ${
                                                verificationResult.hash_valid ? 'text-green-800' : 'text-red-800'
                                              }`}>
                                                {verificationResult.hash_valid 
                                                  ? 'Hash verification successful - Document is authentic'
                                                  : 'Hash verification failed - Document may have been modified'
                                                }
                                              </span>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </CardContent>
                                </Card>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <Card>
                          <CardContent className="p-8 text-center">
                            <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No Verification Information</h3>
                            <p className="text-muted-foreground">
                              Enter an SKR number to verify it.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </TabsContent>

                    {/* TRACKING TAB */}
                    <TabsContent value="tracking" className="space-y-6">
                      {/* For CRM-style responses (SKR numbers with multiple tracking records) */}
                      {trackingRecords.length > 0 ? (
                        trackingRecords.map((track) => (
                          <Card key={track.id}>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                <MapPin className="h-6 w-6 text-primary" />
                                Current Status
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                Last updated: {new Date(track.updated_at).toLocaleString()}
                              </p>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div>
                                    <Label className="text-sm font-medium text-muted-foreground">Tracking Number</Label>
                                    <div className="mt-1 font-mono font-semibold text-lg">{track.tracking_number}</div>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                                    <div className="mt-1">
                                      <Badge className="bg-primary text-primary-foreground capitalize">
                                        {track.status?.replace(/_/g, ' ') || 'Unknown'}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <Label className="text-sm font-medium text-muted-foreground">Current Location</Label>
                                    <div className="mt-1 flex items-center">
                                      <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                                      <span className="font-medium">{track.current_location}</span>
                                    </div>
                                    {track.current_country && (
                                      <div className="text-sm text-muted-foreground mt-1">{track.current_country}</div>
                                    )}
                                  </div>
                                  {track.estimated_delivery && (
                                    <div>
                                      <Label className="text-sm font-medium text-muted-foreground">
                                        {track.actual_delivery ? 'Delivered On' : 'Estimated Delivery'}
                                      </Label>
                                      <div className="mt-1 flex items-center">
                                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                                        {new Date(track.actual_delivery || track.estimated_delivery).toLocaleString()}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {track.notes && (
                                <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                                  <p className="text-sm">{track.notes}</p>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))
                      ) : trackingResult && !crmResponse ? (
                        // For regular tracking numbers (standard response format)
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <MapPin className="h-6 w-6 text-primary" />
                              Current Status
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {trackingResult.lastUpdate ? `Last updated: ${formatDateTime(trackingResult.lastUpdate)}` : ''}
                            </p>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                {trackingResult.trackingNumber && (
                                  <div>
                                    <Label className="text-sm font-medium text-muted-foreground">Tracking Number</Label>
                                    <div className="mt-1 font-mono font-semibold text-lg">{trackingResult.trackingNumber}</div>
                                  </div>
                                )}
                                <div>
                                  <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                                  <div className="mt-1">
                                    <Badge className={getStatusColor(trackingResult.status || '')}>
                                      {getStatusDisplayName(trackingResult.status || '')}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                {trackingResult.currentLocation && (
                                  <div>
                                    <Label className="text-sm font-medium text-muted-foreground">Current Location</Label>
                                    <div className="mt-1 flex items-center">
                                      <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                                      <span className="font-medium">{trackingResult.currentLocation}</span>
                                    </div>
                                    {trackingResult.currentCountry && (
                                      <div className="text-sm text-muted-foreground mt-1">{trackingResult.currentCountry}</div>
                                    )}
                                  </div>
                                )}
                                {trackingResult.estimatedDelivery && (
                                  <div>
                                    <Label className="text-sm font-medium text-muted-foreground">
                                      {trackingResult.actualDelivery ? 'Delivered On' : 'Estimated Delivery'}
                                    </Label>
                                    <div className="mt-1 flex items-center">
                                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                                      {formatDateTime(trackingResult.actualDelivery || trackingResult.estimatedDelivery)}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            {trackingResult.notes && (
                              <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                                <p className="text-sm">{trackingResult.notes}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ) : (
                        <Card>
                          <CardContent className="p-8 text-center">
                            <Truck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No Tracking Information Available</h3>
                            <p className="text-muted-foreground">
                              {crmResponse?.error || 'Tracking information has not been added for this shipment yet.'}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </TabsContent>

                    {/* HISTORY TAB */}
                    <TabsContent value="history" className="space-y-6">
                      {trackingEvents.length > 0 ? (
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <History className="h-6 w-6" />
                              Tracking History
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              Complete timeline of all tracking events
                            </p>
                          </CardHeader>
                          <CardContent>
                            <div className="relative">
                              {/* Timeline line */}
                              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                              
                              {/* Events */}
                              <div className="space-y-6">
                                {trackingEvents.map((event, index) => (
                                  <div key={event.id} className="relative flex gap-4">
                                    {/* Icon */}
                                    <div className={`relative z-10 flex items-center justify-center h-12 w-12 rounded-full ${
                                      index === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                    }`}>
                                      {index === 0 ? (
                                        <CheckCircle2 className="h-6 w-6" />
                                      ) : event.event_type === 'picked_up' ? (
                                        <Package className="h-6 w-6" />
                                      ) : event.event_type === 'in_transit' ? (
                                        <Truck className="h-6 w-6" />
                                      ) : (
                                        <MapPin className="h-6 w-6" />
                                      )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-6">
                                      <div className="bg-card border rounded-lg p-4 shadow-sm">
                                        <div className="flex items-start justify-between mb-2">
                                          <div>
                                            <h4 className="font-semibold capitalize">
                                              {event.event_type?.replace(/_/g, ' ') || 'Event'}
                                            </h4>
                                            {event.description && (
                                              <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                                            )}
                                          </div>
                                          {index === 0 && (
                                            <Badge className="bg-primary text-primary-foreground ml-2">Latest</Badge>
                                          )}
                                        </div>
                                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                                          <div className="flex items-center">
                                            <MapPin className="h-3.5 w-3.5 mr-1" />
                                            {event.location}
                                            {event.country && `, ${event.country}`}
                                          </div>
                                          <div className="flex items-center">
                                            <Clock className="h-3.5 w-3.5 mr-1" />
                                            {new Date(event.event_date).toLocaleString()}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card>
                          <CardContent className="p-8 text-center">
                            <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No History Available</h3>
                            <p className="text-muted-foreground">
                              No tracking events have been recorded for this SKR yet.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Tracking numbers are provided upon shipment initiation. For assistance, please
                  contact our support team.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">SKR Security Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection for your high-value assets throughout the entire logistics chain
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <feature.icon className="text-primary mx-auto mb-4" size={48} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How SKR Tracking Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <Package className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Pickup</h3>
                <p className="text-sm text-muted-foreground">
                  Consignment collected with full documentation and SKR issuance
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Armed Escort</h3>
                <p className="text-sm text-muted-foreground">
                  Professional security escort throughout the entire journey
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 GPS tracking with live updates and checkpoint verification
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Verified handover with complete documentation and confirmation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Security Measures</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every SKR shipment is protected by multiple layers of security, ensuring the highest level of protection
                for your valuable assets.
              </p>
              <ul className="space-y-3">
                {securityMeasures.map((measure, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/secure-armored-vehicle-transport-logistics.jpg"
                alt="Secure Transport"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Incident Management */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-accent">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-accent flex-shrink-0" size={40} />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Incident & Compliance Handling</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In the unlikely event of a security incident, our rapid response protocol ensures immediate action:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Tamper Detection</h4>
                      <p className="text-sm text-muted-foreground">
                        Instant alerts triggered by any unauthorized access attempts
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Immediate Escalation</h4>
                      <p className="text-sm text-muted-foreground">
                        Security team and authorities notified within minutes
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Claims Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        Fast-tracked insurance claims and audit procedures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Secure Logistics?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contact us to discuss SKR-secured logistics solutions for your high-value shipments.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Request SKR Service</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
