"use client"

import { useState, useEffect } from "react"
import { X } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
                clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more
                in our{" "}
                <Link href="/privacy" className="text-[#ef393b] hover:underline font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                onClick={declineCookies}
                variant="outline"
                className="w-full sm:w-auto border-border hover:bg-muted bg-transparent"
              >
                Decline
              </Button>
              <Button onClick={acceptCookies} className="w-full sm:w-auto btn-hover-lift">
                Accept All
              </Button>
            </div>
          </div>
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}
