"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Lock, Eye, MapPin, Clock, CheckCircle2, AlertTriangle, Package } from "lucide-react"
import { useState } from "react"

export default function SKRTrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [trackingResult, setTrackingResult] = useState<any>(null)

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
                  setError(null)
                  setSuccess(null)
                  setTrackingResult(null)

                  if (!trackingNumber.trim()) {
                    setError("Please enter a tracking number")
                    setIsLoading(false)
                    return
                  }

                  // Basic validation for tracking number format
                  if (trackingNumber.length < 8) {
                    setError("Tracking number must be at least 8 characters long")
                    setIsLoading(false)
                    return
                  }

                  try {
                    // Simulate API call delay
                    await new Promise(resolve => setTimeout(resolve, 1500))
                    
                    // For now, show a mock tracking result
                    setTrackingResult({
                      trackingNumber: trackingNumber,
                      status: "In Transit",
                      location: "Nairobi, Kenya",
                      lastUpdate: new Date().toLocaleString(),
                      estimatedDelivery: "2-3 business days",
                      route: ["Nairobi", "Dubai", "Destination"]
                    })
                    setSuccess("Tracking information retrieved successfully!")
                  } catch (error) {
                    setError("Failed to retrieve tracking information. Please try again or contact support.")
                  } finally {
                    setIsLoading(false)
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
              {/* Tracking Result */}
              {trackingResult && (
                <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Tracking Information</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Tracking Number</p>
                      <p className="font-mono text-sm">{trackingResult.trackingNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-semibold text-primary">{trackingResult.status}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Location</p>
                      <p className="font-semibold">{trackingResult.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <p className="font-semibold">{trackingResult.estimatedDelivery}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground">Last Update</p>
                      <p className="text-sm">{trackingResult.lastUpdate}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground mb-2">Route</p>
                    <div className="flex items-center gap-2">
                      {trackingResult.route.map((location: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-sm font-medium">{location}</span>
                          {index < trackingResult.route.length - 1 && (
                            <span className="text-muted-foreground">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
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
