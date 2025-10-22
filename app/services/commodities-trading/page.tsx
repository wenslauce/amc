import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Globe, CheckCircle2, Wheat, Zap, Droplet, ArrowRight } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

export default function CommoditiesTradingPage() {
  const subServices = [
    {
      title: "Gold Trading",
      description: "We are the best in Gold - Premier gold trading with unmatched expertise and global market access",
      href: "/services/commodities-trading/gold",
      icon: Zap,
      image: "/commodity-metals.jpg",
      featured: true,
    },
    {
      title: "Agricultural Commodities",
      description: "Tea, coffee, grains, cocoa, sugar, and specialty agricultural products",
      href: "/services/commodities-trading/agricultural",
      icon: Wheat,
      image: "/commodity-agricultural.jpg",
    },
    {
      title: "Metals & Minerals",
      description: "Copper, aluminum, cobalt, lithium, and rare earth elements",
      href: "/services/commodities-trading/metals",
      icon: Zap,
      image: "/commodity-metals.jpg",
    },
    {
      title: "Oil & Gas Trading",
      description: "Crude oil, refined products, LNG, and petroleum derivatives",
      href: "/services/commodities-trading/oil-gas",
      icon: Droplet,
      image: "/commodity-oil-gas.jpg",
    },
    {
      title: "Energy Products",
      description: "Coal, natural gas, electricity, and carbon credits",
      href: "/services/commodities-trading/energy-products",
      icon: Zap,
      image: "/commodity-energy.jpg",
    },
  ]

  const services = [
    "International Sourcing & Procurement",
    "Offtake Agreements & Long-term Contracts",
    "Spot Trading & Market Making",
    "Quality Assurance & Inspection",
    "Price Risk Management",
    "Logistics Coordination",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/services"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Services
            </Link>
            <span className="text-primary-foreground/60">/</span>
            <span>Commodities Trading & Brokerage</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Globe size={20} />
                <span className="text-sm font-medium">Trading Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Commodities Trading & Brokerage</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Expert brokerage services across agricultural commodities, metals, energy products, and oil & gas with
                global reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Commodities We Trade</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            We facilitate the trading and brokerage of a wide range of commodities, connecting buyers and sellers across
            global markets with secure, efficient transactions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {subServices.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className={`card-hover h-full group overflow-hidden ${service.featured ? 'ring-2 ring-accent bg-accent/5' : ''}`}>
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Our Specialty
                      </span>
                    </div>
                  )}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <service.icon className="text-primary flex-shrink-0" size={32} strokeWidth={1.5} />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <ArrowRight
                            className="text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform"
                            size={20}
                          />
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose G1 for Commodities Trading</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our deep market knowledge, global network, and comprehensive support services make us the ideal partner
                for your commodities trading needs.
              </p>

              <h3 className="text-2xl font-bold mb-4">Our Services</h3>
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
                serviceName="Commodities Trading & Brokerage"
                serviceDescription="Connect with our commodities trading experts to discuss your sourcing, selling, or brokerage needs."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
