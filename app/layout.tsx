import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { CookieBanner } from "@/components/cookie-banner"
import { BackToTop } from "@/components/back-to-top"
import { Suspense } from "react"
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: "Adams Minerals and Consultancy | Excellence in Minerals and Strategic Consultancy",
  description:
    "Comprehensive minerals trading and strategic consultancy services. Expert guidance in mineral resources, trade facilitation, and business consultancy solutions.",
  generator: "v0.app",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Adams Minerals and Consultancy | Excellence in Minerals and Strategic Consultancy",
    description:
      "Comprehensive minerals trading and strategic consultancy services. Expert guidance in mineral resources, trade facilitation, and business consultancy solutions.",
    url: "https://adamsmineralsconsultancy.com",
    siteName: "Adams Minerals and Consultancy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adams Minerals and Consultancy - Excellence in Minerals and Strategic Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adams Minerals and Consultancy | Excellence in Minerals and Strategic Consultancy",
    description:
      "Comprehensive minerals trading and strategic consultancy services. Expert guidance in mineral resources, trade facilitation, and business consultancy solutions.",
    images: ["/og-image.png"],
  },
  keywords: [
    "minerals trading",
    "strategic consultancy",
    "mineral resources",
    "business consultancy",
    "trade facilitation",
    "mining consultancy",
    "Adams Minerals",
    "AMC",
    "mineral expertise",
    "consultancy services",
  ],
  authors: [{ name: "Adams Minerals and Consultancy Limited" }],
  creator: "Adams Minerals and Consultancy Limited",
  publisher: "Adams Minerals and Consultancy Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/video/amcloop.mp4" as="video" type="video/mp4" />
      </head>
      <body className="font-sans">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <CookieBanner />
            <BackToTop />
          </Suspense>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
