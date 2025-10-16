import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Wheat, CheckCircle2, Globe, Shield, TrendingUp, Users } from "@/components/icons"
import Link from "next/link"

export default function AgriculturalCommoditiesPage() {
  const commodities = [
    { name: "Tea", description: "Premium black, green, and specialty teas from East Africa" },
    { name: "Coffee", description: "Arabica and Robusta beans from leading coffee-producing regions" },
    { name: "Grains", description: "Wheat, maize, rice, and other staple grains" },
    { name: "Cocoa", description: "High-quality cocoa beans from West and Central Africa" },
    { name: "Sugar", description: "Raw and refined sugar from regional producers" },
    { name: "Spices", description: "Vanilla, cloves, cardamom, and other premium spices" },
  ]

  const features = [
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Direct relationships with producers across Africa, Asia, and Latin America",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous inspection and certification processes for all commodities",
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time pricing and market analysis to optimize your trades",
    },
    {
      icon: Users,
      title: "Trade Facilitation",
      description: "Complete support from sourcing to delivery with financing options",
    },
  ]

  const services = [
    "Direct Sourcing from Origin",
    "Quality Inspection & Certification",
    "Offtake Agreements & Contracts",
    "Price Risk Management",
    "Export Documentation",
    "Logistics & Shipping Coordination",
    "Trade Finance Facilitation",
    "Market Analysis & Advisory",
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
            <span>Agricultural Commodities</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Wheat size={20} />
                <span className="text-sm font-medium">Agricultural Trading</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Agricultural Commodities Trading</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Expert brokerage and trading services for tea, coffee, grains, cocoa, sugar, and specialty agricultural
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Agricultural Products</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Connect with global markets for high-quality agricultural commodities. We facilitate trades between
                producers and buyers with complete transparency, quality assurance, and logistics support.
              </p>

              <h3 className="text-2xl font-bold mb-4">Commodities We Trade</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {commodities.map((commodity, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{commodity.name}</h4>
                      <p className="text-sm text-muted-foreground">{commodity.description}</p>
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
                serviceName="Agricultural Commodities Trading"
                serviceDescription="Share your agricultural commodity needs - whether buying or selling - and we'll connect you with the right markets."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
