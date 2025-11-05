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
      image: "/service-commodities-trading.jpg",
      title: "Minerals Trading",
      description: "Expert trading in precious metals, industrial minerals, and rare earth elements with global market access.",
      href: "/services/commodities-trading",
    },
    {
      image: "/service-consultancy.jpg",
      title: "Strategic Consultancy",
      description: "Comprehensive business advisory services, market analysis, and strategic planning for mineral sector operations.",
      href: "/services/consultancy",
    },
    {
      image: "/service-trade-finance.jpg",
      title: "Trade Facilitation & Finance",
      description: "End-to-end support for mineral trade transactions, documentation, and financial solutions.",
      href: "/services/trade-finance",
    },
    {
      image: "/service-logistics.jpg",
      title: "Logistics & Supply Chain",
      description: "Secure transportation and supply chain management for mineral commodities and high-value assets.",
      href: "/services/logistics",
    },
    {
      image: "/service-insurance.jpg",
      title: "Risk Management & Insurance",
      description: "Comprehensive risk assessment and insurance solutions for mineral trading and operations.",
      href: "/services/insurance",
    },
    {
      image: "/service-wealth-management.jpg",
      title: "Investment Advisory",
      description: "Strategic investment guidance and wealth management services for mineral sector investments.",
      href: "/services/wealth-management",
    },
    {
      image: "/service-crypto-desk.jpg",
      title: "Crypto Desk & Digital Payments",
      description: "Secure cryptocurrency transactions and digital payment solutions for international mineral trading operations.",
      href: "/services/crypto-desk",
    },
    {
      image: "/service-compliance.jpg",
      title: "Regulatory Compliance & Legal Advisory",
      description: "Expert guidance on mining regulations, trade compliance, and legal advisory for mineral sector operations.",
      href: "/services/compliance",
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
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="/global-trade-shipping-containers-port-aerial-view.jpg"
        >
          <source src="/video/amcloop.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Excellence in Minerals
            <br />
            and Strategic Consultancy
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive minerals trading and strategic consultancy services. Expert guidance in mineral resources, 
            trade facilitation, and business consultancy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#ef393b] text-white hover:bg-[#d73035]">
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
                Adams Minerals and Consultancy is a specialized minerals trading and strategic consultancy firm 
                headquartered in Entebbe, Uganda.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We provide expert minerals trading and strategic consultancy services across Africa, the Middle East, 
                Asia, Europe, and the Americas through our specialized knowledge in mineral resources, market analysis, 
                and comprehensive business advisory services.
              </p>
              <Button asChild className="bg-[#ef393b] text-white hover:bg-[#d73035]">
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
                    <div className="flex items-center text-[#ef393b] font-medium">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="btn-hover-lift bg-[#ef393b] text-white hover:bg-[#d73035]">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Why Choose Adams Minerals and Consultancy</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Specialized Minerals Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep knowledge in mineral markets, trading strategies, and resource evaluation delivered through 
                  comprehensive consultancy services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Strategic Business Advisory</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expert guidance in business strategy, market analysis, and operational optimization for mineral 
                  sector companies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Global Market Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  International network and partnerships across key mineral markets in Africa, Middle East, Asia, 
                  Europe, and the Americas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Regulatory Compliance Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full compliance with mining regulations, trade standards, and international mineral trading 
                  requirements.
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
            Partner with Adams Minerals and Consultancy for expert minerals trading and strategic consultancy services 
            tailored to your needs.
          </p>
          <Button size="lg" asChild className="btn-hover-lift bg-[#ef393b] text-white hover:bg-[#d73035]">
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
