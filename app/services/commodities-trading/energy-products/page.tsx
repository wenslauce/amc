import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Zap, CheckCircle2, Battery, TrendingUp, Globe, Shield } from "@/components/icons"
import Link from "next/link"

export default function EnergyProductsPage() {
  const products = [
    { name: "Coal", description: "Thermal and metallurgical coal for power generation and steel production" },
    { name: "Natural Gas", description: "Pipeline gas and spot market trading" },
    { name: "Electricity", description: "Power trading and renewable energy certificates" },
    { name: "Carbon Credits", description: "Carbon offset trading and emissions certificates" },
    { name: "Biomass", description: "Wood pellets and agricultural waste for energy production" },
    { name: "Uranium", description: "Nuclear fuel trading and supply contracts" },
  ]

  const features = [
    {
      icon: Battery,
      title: "Energy Transition",
      description: "Supporting the shift to cleaner energy sources with strategic trading",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Expert insights on energy markets and price forecasting",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trading relationships across major energy markets worldwide",
    },
    {
      icon: Shield,
      title: "Risk Hedging",
      description: "Comprehensive risk management for volatile energy markets",
    },
  ]

  const services = [
    "Coal Trading & Supply",
    "Natural Gas Brokerage",
    "Power Purchase Agreements",
    "Carbon Credit Trading",
    "Renewable Energy Certificates",
    "Energy Derivatives Trading",
    "Supply Contract Negotiation",
    "Market Intelligence & Advisory",
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
            <span>Energy Products</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Zap size={20} />
                <span className="text-sm font-medium">Energy Trading</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Energy Products Trading</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Strategic trading of coal, natural gas, electricity, carbon credits, and renewable energy products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Powering the Energy Transition</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Navigate the evolving energy landscape with our comprehensive trading services. From traditional energy
                sources to renewable certificates and carbon credits, we facilitate transactions that support your
                energy strategy.
              </p>

              <h3 className="text-2xl font-bold mb-4">Energy Products</h3>
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
                serviceName="Energy Products Trading"
                serviceDescription="Tell us about your energy trading needs and we'll connect you with the right markets and solutions."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
