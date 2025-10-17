import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Package, CheckCircle2, Shield, Clock, Lock } from "@/components/icons"
import Link from "next/link"

export default function WarehousingPage() {
  const features = [
    {
      icon: Shield,
      title: "Secure Facilities",
      description: "24/7 security monitoring with controlled access and surveillance systems",
    },
    {
      icon: Shield,
      title: "Climate Control",
      description: "Temperature and humidity-controlled storage for sensitive commodities",
    },
    {
      icon: Lock,
      title: "Bonded Warehousing",
      description: "Customs-bonded facilities for duty-deferred storage",
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Short-term and long-term storage solutions tailored to your needs",
    },
  ]

  const services = [
    "General Cargo Warehousing",
    "Temperature-Controlled Storage",
    "Bonded Warehouse Services",
    "Inventory Management",
    "Order Fulfillment & Picking",
    "Cross-Docking Services",
    "Container Storage & Handling",
    "Hazardous Materials Storage",
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
              href="/services/logistics"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Logistics
            </Link>
            <span className="text-primary-foreground/60">/</span>
            <span>Warehousing & Storage</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Package size={20} />
                <span className="text-sm font-medium">Storage Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Warehousing & Storage</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Secure, flexible warehousing solutions with advanced inventory management and climate control
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Storage Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our strategically located warehouses provide secure storage with comprehensive inventory management.
                Whether you need short-term staging or long-term storage, we offer flexible solutions with full
                visibility and control.
              </p>

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

              <h3 className="text-2xl font-bold mb-4">Storage Services</h3>
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
                serviceName="Warehousing & Storage"
                serviceDescription="Tell us about your storage requirements and we'll provide a tailored warehousing solution."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
