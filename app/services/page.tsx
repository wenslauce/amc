import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp, Globe, Shield, DollarSign, Truck, Briefcase, Sun, ArrowRight } from "@/components/icons"

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Trade Finance & Capital Solutions",
      description:
        "Comprehensive financing solutions for high-value cross-border transactions, enabling smooth capital flow and risk mitigation.",
      features: [
        "Corporate Loans",
        "Structured Trade Finance",
        "Working Capital Solutions",
        "Letter of Credit Facilities",
        "Export/Import Financing",
      ],
    },
    {
      icon: Globe,
      title: "Commodities Trading & Brokerage",
      description:
        "Expert brokerage services with Gold trading specialization. We are the best in Gold, plus agricultural commodities, metals, energy products, and oil & gas.",
      features: [
        "Gold Trading (Our Specialty) - We are the best in Gold",
        "Agricultural Commodities (Tea, Coffee, Grains)",
        "Metals & Minerals Trading",
        "Energy Products",
        "Oil & Gas Trading and Supply",
        "International Sourcing & Offtake Agreements",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain Support",
      description:
        "End-to-end logistics coordination ensuring secure, efficient movement of high-value goods across borders.",
      features: [
        "Freight & Customs Coordination",
        "Cross-Border Distribution",
        "Shipment Risk Management",
        "SKR-Secured Logistics",
        "Armored Transport Services",
      ],
    },
    {
      icon: Shield,
      title: "Insurance & Risk Advisory",
      description:
        "Comprehensive insurance solutions and risk assessment services to protect your assets and transactions.",
      features: [
        "Marine & Cargo Insurance",
        "Corporate & Asset Insurance",
        "Trade Risk Protection",
        "Due Diligence Services",
        "Risk Assessment & Mitigation",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Consultancy & Capacity Building",
      description:
        "Strategic advisory services to enhance operational efficiency, compliance, and business performance.",
      features: [
        "SME & Corporate Advisory",
        "Compliance & Governance Training",
        "Performance & Operational Structuring",
        "Market Entry Strategy",
        "Business Process Optimization",
      ],
    },
    {
      icon: DollarSign,
      title: "Investment & Wealth Management",
      description:
        "Tailored investment strategies and wealth preservation solutions for high-net-worth individuals and institutions.",
      features: [
        "High-Net-Worth Advisory",
        "Asset Preservation Strategies",
        "Offshore & Investment Structuring",
        "Portfolio Management",
        "Estate Planning",
      ],
    },
    {
      icon: Sun,
      title: "Renewable Energy & Solar Solutions",
      description:
        "Sustainable energy solutions including solar EPC services and transition advisory for forward-thinking organizations.",
      features: [
        "Commercial & Industrial Solar EPC",
        "Oil-to-Renewable Transition Advisory",
        "Energy Financing Solutions",
        "Power Purchase Structuring",
        "Energy Efficiency Consulting",
      ],
    },
  ]

  const operationalFlow = [
    {
      step: "01",
      title: "Client Onboarding",
      description: "Initial Inquiry → KYC / Due Diligence → Risk Rating → Engagement Contract",
    },
    {
      step: "02",
      title: "Service Deployment",
      description: "Customized solution design and implementation based on your specific requirements",
    },
    {
      step: "03",
      title: "Execution & Monitoring",
      description: "Real-time tracking, secure handling, and continuous oversight throughout the process",
    },
    {
      step: "04",
      title: "Documentation & Settlement",
      description: "Complete documentation delivery with invoices, receipts, and compliance records",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Comprehensive Trade Solutions</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Seven integrated service lines delivering complete support for high-value cross-border transactions and
              asset management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted">
                  <div className="flex items-start gap-4">
                    <service.icon className="text-primary flex-shrink-0" size={40} strokeWidth={1.5} />
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Key Services:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures efficient service delivery from initial contact to final settlement
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
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>Commodity Traders & Brokers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>Exporters & Importers (Metals, Agriculture, Oil & Gas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>SMEs with Capital Needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>High-Net-Worth Individuals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secondary Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>Logistics Providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>Insurance Underwriters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>Financial Institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>Solar & Infrastructure Developers</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Discuss Your Requirements</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contact us today to learn how our integrated services can support your next transaction.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
