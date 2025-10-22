"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "@/components/icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ]

  const services = [
    { name: "All Services", href: "/services" },
    { name: "Trade Finance & Capital Solutions", href: "/services/trade-finance" },
    { name: "Gold Trading (Our Specialty)", href: "/services/commodities-trading/gold" },
    { name: "Commodities Trading & Brokerage", href: "/services/commodities-trading" },
    { name: "Logistics & Supply Chain", href: "/services/logistics" },
    { name: "Insurance & Risk Advisory", href: "/services/insurance" },
    { name: "Business Consultancy", href: "/services/consultancy" },
    { name: "Investment & Wealth Management", href: "/services/wealth-management" },
  ]

  const additionalItems = [
    { name: "SKR & Tracking", href: "/skr-tracking" },
    { name: "Partners", href: "/partners" },
  ]

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-background/95 backdrop-blur-md rounded-2xl shadow-lg border border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="G1 Group of Companies" 
              width={48} 
              height={48}
              className="object-contain"
            />
            <div className="hidden sm:block text-sm font-medium text-foreground">G1 Group of Companies</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link href={service.href} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {additionalItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-hover-lift">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background rounded-b-2xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-3 py-2 text-base font-semibold text-foreground">Services</div>
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}

            {additionalItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full btn-hover-lift">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
