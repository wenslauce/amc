import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Droplet, CheckCircle2, Ship, Shield, Globe, TrendingUp } from "@/components/icons"
import Link from "next/link"

export default function OilGasPage() {
  const products = [
    { name: "Crude Oil", description: "Brent, WTI, and regional crude oil grades" },
    { name: "Refined Products", description: "Diesel, gasoline, jet fuel, and other petroleum products" },
    { name: "LNG & Natural Gas", description: "Liquefied natural gas and pipeline gas trading" },
    { name: "Petroleum Products", description: "Lubricants, bitumen, and specialty petroleum products" },
    { name: "Fuel Oil", description: "Heavy fuel oil and marine fuel oil" },
    { name: "LPG", description: "Liquefied petroleum gas for industrial and residential use" },
  ]

  const features = [
    {
      icon: Ship,
      title: "Logistics Expertise",
      description: "Complete coordination of tanker shipping and pipeline transport",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Hedging strategies and insurance coverage for price volatility",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Established relationships with refineries, traders, and end-users worldwide",
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time pricing and supply-demand analysis for optimal trading",
    },
  ]

  const services = [
    "Crude Oil Trading & Brokerage",
    "Refined Products Supply",
    "LNG & Natural Gas Trading",
    "Fuel Supply Contracts",
    "Offtake Agreements",
    "Storage & Blending Services",
    "Quality Testing & Certification",
    "Trade Finance Facilitation",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-sm">
            <Link
              href="/services"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Services
            </Link>
            <span className="text-primary-foreground/60">/</span>
            <Link
              href="/services/commodities-trading"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Commodities Trading
            </Link>
            <span className="text-primary-foreground/60">/</span>
            <span>Oil & Gas Trading</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Droplet size={20} />
                <span className="text-sm font-medium">Energy Trading</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Oil & Gas Trading</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive trading and supply solutions for crude oil, refined products, LNG, and petroleum
                derivatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Energy Markets Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Navigate the complex oil and gas markets with our expert trading and brokerage services. We connect
                producers, refineries, and end-users with secure, efficient transactions backed by comprehensive
                logistics and risk management.
              </p>

              <h3 className="text-2xl font-bold mb-4">Products We Trade</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {products.map((product, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <feature.icon className="text-primary mb-3" size={32} strokeWidth={1.5} />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Trading Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ServiceOnboardingForm
                serviceName="Oil & Gas Trading"
                serviceDescription="Share your oil and gas trading requirements and we'll facilitate secure, efficient transactions."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
