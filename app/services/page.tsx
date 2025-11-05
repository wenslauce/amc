import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp, Globe, Shield, DollarSign, Truck, Briefcase, Zap, Scale, ArrowRight } from "@/components/icons"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Minerals Trading",
      description:
        "Expert trading in precious metals, industrial minerals, and rare earth elements with global market access and deep sector expertise.",
      features: [
        "Precious Metals Trading (Gold, Silver, Platinum)",
        "Industrial Minerals & Rare Earth Elements",
        "Global Market Access & Price Intelligence",
        "Quality Assessment & Certification",
        "Supply Chain Optimization",
        "Market Analysis & Forecasting",
      ],
      href: "/services/commodities-trading",
    },
    {
      icon: Briefcase,
      title: "Strategic Consultancy",
      description:
        "Comprehensive business advisory services, market analysis, and strategic planning for mineral sector operations and business growth.",
      features: [
        "Market Analysis & Intelligence",
        "Strategic Business Planning",
        "Operational Optimization",
        "Investment Advisory Services",
        "Risk Assessment & Management",
        "Performance Enhancement",
      ],
      href: "/services/consultancy",
    },
    {
      icon: DollarSign,
      title: "Trade Facilitation & Finance",
      description:
        "End-to-end support for mineral trade transactions, documentation, and comprehensive financial solutions for international trading.",
      features: [
        "Trade Documentation & Compliance",
        "Letter of Credit Facilities",
        "Export/Import Financing",
        "Transaction Structuring",
        "Payment Solutions",
        "Cross-Border Trade Support",
      ],
      href: "/services/trade-finance",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description:
        "Secure transportation and supply chain management for mineral commodities and high-value assets with end-to-end coordination.",
      features: [
        "Secure Transportation Services",
        "Supply Chain Management",
        "Customs & Documentation",
        "Warehousing & Storage",
        "Risk Management & Insurance",
        "Real-time Tracking & Monitoring",
      ],
      href: "/services/logistics",
    },
    {
      icon: Shield,
      title: "Risk Management & Insurance",
      description:
        "Comprehensive risk assessment and insurance solutions for mineral trading operations, asset protection, and transaction security.",
      features: [
        "Trade Risk Assessment",
        "Marine & Cargo Insurance",
        "Political Risk Coverage",
        "Asset Protection Services",
        "Due Diligence & Compliance",
        "Crisis Management Support",
      ],
      href: "/services/insurance",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description:
        "Strategic investment guidance and wealth management services specifically tailored for mineral sector investments and portfolio optimization.",
      features: [
        "Mineral Sector Investment Analysis",
        "Portfolio Diversification Strategies",
        "Market Entry Advisory",
        "Asset Valuation Services",
        "Investment Risk Management",
        "Wealth Preservation Planning",
      ],
      href: "/services/wealth-management",
    },
    {
      icon: Zap,
      title: "Crypto Desk & Digital Payments",
      description:
        "Secure cryptocurrency transactions and digital payment solutions for international mineral trading operations and cross-border settlements.",
      features: [
        "Cryptocurrency Trading & Exchange",
        "Digital Payment Processing",
        "Blockchain Transaction Security",
        "Cross-Border Digital Settlements",
        "Crypto Asset Management",
        "Digital Wallet Solutions",
      ],
      href: "/services/crypto-desk",
    },
    {
      icon: Scale,
      title: "Regulatory Compliance & Legal Advisory",
      description:
        "Expert guidance on mining regulations, trade compliance, and comprehensive legal advisory services for mineral sector operations.",
      features: [
        "Mining Regulations & Compliance",
        "International Trade Law",
        "Contract Negotiation & Review",
        "Regulatory Risk Assessment",
        "Legal Documentation Services",
        "Dispute Resolution Support",
      ],
      href: "/services/compliance",
    },
  ]

  const operationalFlow = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive needs assessment → Market analysis → Strategic planning → Service customization",
    },
    {
      step: "02",
      title: "Due Diligence & Compliance",
      description: "KYC verification → Risk assessment → Regulatory compliance → Documentation review",
    },
    {
      step: "03",
      title: "Service Implementation",
      description: "Solution deployment → Real-time monitoring → Quality assurance → Progress tracking",
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final delivery → Documentation → Post-service support → Relationship management",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Comprehensive Minerals & Consultancy Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Eight specialized service lines delivering excellence in minerals trading, strategic consultancy, and comprehensive business solutions across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted">
                  <div className="flex items-start gap-4">
                    <service.icon className="text-[#ef393b] flex-shrink-0" width={40} height={40} strokeWidth={1.5} />
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-3">Key Services:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:ml-6">
                      <Button asChild className="bg-[#ef393b] text-white hover:bg-[#d73035]">
                        <Link href={service.href}>
                          Learn More <ArrowRight className="ml-2" width={16} height={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Flow */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring excellence in minerals trading and consultancy service delivery from consultation to completion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalFlow.map((phase, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving diverse clients across the minerals and business sectors with specialized expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Mining & Minerals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Mining Companies & Operators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Mineral Traders & Brokers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Precious Metals Dealers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Industrial Mineral Suppliers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Business & Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>SMEs & Corporations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>High-Net-Worth Individuals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Investment Firms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Financial Institutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>International Trade</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Exporters & Importers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Logistics Companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Government Agencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>International Organizations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Discover how Adams Minerals and Consultancy can support your mineral sector operations with our specialized expertise and comprehensive consultancy services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2" width={20} height={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
