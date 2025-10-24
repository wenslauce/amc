import Link from "next/link"
import { Mail, Phone, MapPin, Info, Facebook, Twitter, Linkedin, Instagram } from "@/components/icons"

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Company Info Card */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">G1 Group of Companies</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Securing high-value trade across borders with integrated finance, commodities, logistics, and risk
              management solutions.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/skr-tracking"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  SKR & Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Card */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">Trade Finance</li>
              <li className="text-primary-foreground/80">Commodities Trading</li>
              <li className="text-primary-foreground/80">Logistics & Security</li>
              <li className="text-primary-foreground/80">Insurance & Risk Advisory</li>
              <li className="text-primary-foreground/80">Business Consultancy</li>
              <li className="text-primary-foreground/80">Wealth Management</li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Villa 46, Airport Rd, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">+32 465 93 22 50 | +254 789 764 967 | +243 861 005 766</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">info@g1groupofcompanies.com</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors btn-hover-lift"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl mb-8">
          <div className="flex items-start gap-3">
            <Info size={20} className="flex-shrink-0 text-accent mt-0.5" />
            <div>
              <h5 className="font-semibold mb-2">Legal Disclaimer</h5>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                G1 Holdings & Security Limited operates as a trade facilitation and brokerage firm with both owned
                subsidiaries and strategic partnerships. While we own and operate certain companies within our group,
                logistics, security, and insurance services may also be provided by licensed third-party operators
                where appropriate. We arrange trade finance, commodities brokerage, and risk management services
                through our owned entities and certified service providers. Asset security, regulatory compliance,
                and operational safety are managed through our integrated network of owned companies and trusted
                partners. G1 Group provides comprehensive solutions through both direct operations and strategic
                partnerships to ensure optimal service delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} G1 Holdings & Security Limited. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/case-studies" className="hover:text-primary-foreground transition-colors">
                Case Studies
              </Link>
              <Link href="/news" className="hover:text-primary-foreground transition-colors">
                News & Insights
              </Link>
              <Link href="/careers" className="hover:text-primary-foreground transition-colors">
                Careers
              </Link>
              <Link href="/privacy-policy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
