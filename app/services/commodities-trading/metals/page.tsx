import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Zap, CheckCircle2, Shield, Globe, TrendingUp, Lock } from "@/components/icons"
import Link from "next/link"

export default function MetalsPage() {
  const metals = [
    { name: "Gold", description: "Refined gold bars, doré, and gold concentrate trading" },
    { name: "Copper", description: "Copper cathodes, concentrate, and refined copper products" },
    { name: "Aluminum", description: "Primary aluminum ingots and aluminum products" },
    { name: "Cobalt", description: "Cobalt hydroxide and refined cobalt for battery production" },
    { name: "Lithium", description: "Lithium carbonate and lithium hydroxide for EV batteries" },
    { name: "Rare Earth Minerals", description: "Strategic minerals for technology and manufacturing" },
  ]

  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "SKR-backed trades with escrow and verification protocols",
    },
    {
      icon: Lock,
      title: "Compliance Assured",
      description: "Full adherence to international mining and export regulations",
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access to buyers and sellers across all major trading hubs",
    },
    {
      icon: TrendingUp,
      title: "Price Optimization",
      description: "Market intelligence and hedging strategies for best pricing",
    },
  ]

  const services = [
    "Precious Metals Trading (Gold, Silver, Platinum)",
    "Base Metals Brokerage (Copper, Aluminum, Zinc)",
    "Battery Metals (Cobalt, Lithium, Nickel)",
    "Rare Earth Elements Trading",
    "Mineral Concentrate Sourcing",
    "Refinery Coordination",
    "Export Documentation & Compliance",
    "Secure Transport & Insurance",
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
            <span>Metals Trading</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Zap size={20} />
                <span className="text-sm font-medium">Metals Trading</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Metals & Minerals Trading</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Secure trading and brokerage for precious metals, base metals, battery minerals, and rare earth
                elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Metals Trading</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Navigate the complex world of metals trading with confidence. We facilitate secure transactions for
                precious metals, industrial metals, and strategic minerals with full compliance and transparency.
              </p>

              <h3 className="text-2xl font-bold mb-4">Metals We Trade</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {metals.map((metal, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{metal.name}</h4>
                      <p className="text-sm text-muted-foreground">{metal.description}</p>
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
                serviceName="Metals & Minerals Trading"
                serviceDescription="Tell us about your metals trading requirements and we'll facilitate secure, compliant transactions."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
