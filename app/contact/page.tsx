"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertTriangle } from "@/components/icons"
import { useState } from "react"
import { countries } from "@/lib/countries"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    service: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.service.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Service, and Message)')
      setIsLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setSuccess('Message sent successfully! We will contact you within 24 hours.')
      setIsSubmitted(true)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Villa 46, No 25, Mwananchi Road, Syokimau, Nairobi, Kenya", "East Africa Hub"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 789 764 967", "Mon-Fri: 8:00 AM - 6:00 PM EAT"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@g1groupofcompanies.com", "support@g1groupofcompanies.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
  ]

  const offices = [
    {
      region: "East Africa",
      location: "Nairobi, Kenya",
      description: "Headquarters & Regional Hub",
    },
    {
      region: "Middle East",
      location: "Dubai, UAE",
      description: "Regional Office",
    },
    {
      region: "West Africa",
      location: "Lagos, Nigeria",
      description: "Regional Office",
    },
    {
      region: "Southern Africa",
      location: "Johannesburg, South Africa",
      description: "Regional Office",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Get in touch with our team to discuss how we can facilitate your next high-value transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {isSubmitted ? (
              <Card className="border-primary">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4 py-8">
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your inquiry. Our team will contact you within 24 hours.
                    </p>
                    <Button onClick={() => {
                      setIsSubmitted(false)
                      setError(null)
                      setSuccess(null)
                    }} variant="outline" className="btn-hover-lift">
                      Send Another Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
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
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => setFormData({ ...formData, country: value })}
                      >
                        <SelectTrigger id="country" className="mt-2">
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
                    <div>
                      <Label htmlFor="service">Service of Interest *</Label>
                      <Select required onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="trade-finance">Trade Finance & Capital Solutions</SelectItem>
                          <SelectItem value="commodities">Commodities Trading & Brokerage</SelectItem>
                          <SelectItem value="logistics">Logistics & Supply Chain</SelectItem>
                          <SelectItem value="insurance">Insurance & Risk Advisory</SelectItem>
                          <SelectItem value="consultancy">Business Consultancy</SelectItem>
                          <SelectItem value="wealth">Investment & Wealth Management</SelectItem>
                          <SelectItem value="energy">Renewable Energy & Solar</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-2"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full btn-hover-lift" disabled={isLoading}>
                      {isLoading ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <info.icon className="text-primary flex-shrink-0 mt-1" size={24} />
                          <div>
                            <h3 className="font-semibold mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Offices</h2>
            <p className="text-lg text-muted-foreground">Regional presence across key markets</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{office.region}</h3>
                  <p className="text-muted-foreground mb-1">{office.location}</p>
                  <p className="text-sm text-muted-foreground">{office.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">24/7 Emergency Support</h2>
              <p className="text-lg mb-4">
                For urgent matters related to active shipments or time-sensitive transactions:
              </p>
              <p className="text-xl font-semibold">+243 861 005 766 (24/7 Hotline)</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
