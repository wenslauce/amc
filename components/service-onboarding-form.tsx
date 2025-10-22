"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertTriangle } from "@/components/icons"
import { countries } from "@/lib/countries"

interface ServiceOnboardingFormProps {
  serviceName: string
  serviceDescription: string
}

export function ServiceOnboardingForm({ serviceName, serviceDescription }: ServiceOnboardingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      country: selectedCountry,
      serviceName,
      requirements: formData.get('requirements') as string,
    }

    // Basic validation
    if (!data.firstName?.trim() || !data.lastName?.trim() || !data.email?.trim() || !data.phone?.trim() || !data.country || !data.requirements?.trim()) {
      setError('Please fill in all required fields')
      setIsLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/service-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit quote request')
      }

      setSuccess('Quote request submitted successfully! We will contact you within 24 hours.')
      setIsSubmitted(true)
    } catch (error) {
      console.error('Quote request submission error:', error)
      setError(error instanceof Error ? error.message : 'Failed to submit quote request. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-primary">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="text-muted-foreground">
              We've received your inquiry for {serviceName}. Our team will contact you within 24 hours to discuss your
              requirements.
            </p>
            <Button onClick={() => {
              setIsSubmitted(false)
              setError(null)
              setSuccess(null)
              setSelectedCountry("")
            }} variant="outline" className="btn-hover-lift">
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get Started with {serviceName}</CardTitle>
        <CardDescription>{serviceDescription}</CardDescription>
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" name="company" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Select required value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Tell us about your requirements *</Label>
            <Textarea
              id="requirements"
              name="requirements"
              rows={4}
              placeholder="Please describe your needs, transaction details, or any specific questions..."
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full btn-hover-lift" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Inquiry"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our terms and privacy policy. We'll only use your information to
            respond to your inquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
