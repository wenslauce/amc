"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "@/components/icons"
import { countries } from "@/lib/countries"

interface ServiceOnboardingFormProps {
  serviceName: string
  serviceDescription: string
}

export function ServiceOnboardingForm({ serviceName, serviceDescription }: ServiceOnboardingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

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

      setIsSubmitted(true)
    } catch (error) {
      console.error('Quote request submission error:', error)
      alert('Failed to submit quote request. Please try again or contact us directly.')
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
