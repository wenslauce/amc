import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "@/components/icons"
import { AnimatedCounter } from "@/components/animated-counter"
import { TrustCredibilitySection } from "@/components/trust-credibility-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { GlobalReachSection } from "@/components/global-reach-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SecurityHighlightsSection } from "@/components/security-highlights-section"

export default function HomePage() {
  const services = [
    {
      image: "/service-trade-finance.jpg",
      title: "Trade Finance & Capital Solutions",
      description: "Corporate loans and structured finance for high-value transactions across borders.",
      href: "/services/trade-finance",
    },
    {
      image: "/service-commodities-trading.jpg",
      title: "Commodities Trading & Brokerage",
      description: "Agricultural commodities, metals, energy products, and oil & gas trading.",
      href: "/services/commodities-trading",
    },
    {
      image: "/service-logistics.jpg",
      title: "Logistics & Supply Chain",
      description: "Freight coordination, customs clearance, and secure shipment management.",
      href: "/services/logistics",
    },
    {
      image: "/service-insurance.jpg",
      title: "Insurance & Risk Advisory",
      description: "Marine, cargo, and corporate insurance with comprehensive risk protection.",
      href: "/services/insurance",
    },
    {
      image: "/service-consultancy.jpg",
      title: "Business Consultancy",
      description: "SME advisory, compliance training, and operational structuring.",
      href: "/services/consultancy",
    },
    {
      image: "/service-wealth-management.jpg",
      title: "Investment & Wealth Management",
      description: "High-net-worth advisory, asset preservation, and investment structuring.",
      href: "/services/wealth-management",
    },
  ]

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "$500M+", label: "Trade Volume" },
    { value: "1000+", label: "Successful Transactions" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/video/g1loop.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Securing High-Value Trade
            <br />
            Across Borders
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            End-to-end protection, movement, and facilitation for high-value assets. From minerals and consignments to
            insurance, security, and finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated to use AnimatedCounter component for animated numbers */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <TrustCredibilitySection />

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
                Your Strategic Partner in Global Trade
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                G1 Group of Companies (G1 Holdings & Security Limited) is a fully integrated trade facilitation and risk
                management partner headquartered in Nairobi, Kenya.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We support high-value transactions across Africa, the Middle East, Asia, Europe, and the Americas
                through a unified service model that combines finance, commodities, logistics, insurance, energy, and
                advisory into one coordinated framework.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/professional-business-handshake-global-partnership.jpg"
                alt="Global Partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - removed bg-muted to eliminate white background */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive solutions for every aspect of cross-border trade and asset management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="btn-hover-lift">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <GlobalReachSection />

      {/* Why G1 Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Why Choose G1 Group</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Unified Cross-Border Trade Partner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Finance, Commodities, Logistics, Insurance and Energy Solutions delivered under one coordinated
                  structure.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">High-Risk & High-Value Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized in SKR consignments, Oil & Gas shipments, Structured Commodity Finance and Armored
                  Movement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">International Network, Local Execution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Active partnerships across UAE, South Africa, China, Turkey, UK, USA, West & Central Africa.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Compliance-Driven & Governance Aligned</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fully aligned with AML, KYC, PSRA, IRA, Mining & Energy Regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <SecurityHighlightsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Ready to Secure Your Next Transaction?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Partner with G1 Group for comprehensive trade facilitation and risk management solutions tailored to your
            needs.
          </p>
          <Button size="lg" variant="secondary" asChild className="btn-hover-lift">
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
