import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Truck, Shield, MapPin, Package, ArrowRight } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

export default function LogisticsPage() {
  const subServices = [
    {
      title: "Freight & Customs Coordination",
      description: "Expert customs brokerage and freight forwarding across all borders",
      href: "/services/logistics/freight-customs",
      image: "/logistics-freight.jpg",
    },
    {
      title: "Cross-Border Distribution",
      description: "Regional distribution networks connecting markets across continents",
      href: "/services/logistics/cross-border",
      image: "/logistics-distribution.jpg",
    },
    {
      title: "Armored Transport Services",
      description: "Maximum security for high-value assets with armed escorts",
      href: "/services/logistics/armored-transport",
      image: "/logistics-armored.jpg",
    },
    {
      title: "Warehousing & Storage",
      description: "Secure, climate-controlled storage with inventory management",
      href: "/services/logistics/warehousing",
      image: "/logistics-warehouse.jpg",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Armored vehicles and security protocols for high-value shipments",
    },
    {
      icon: MapPin,
      title: "Global Network",
      description: "Established routes across Africa, Middle East, Asia, and beyond",
    },
    {
      icon: Package,
      title: "End-to-End Service",
      description: "From pickup to delivery with full customs clearance support",
    },
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
            <span>Logistics & Supply Chain Support</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Truck size={20} />
                <span className="text-sm font-medium">Logistics Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Logistics & Supply Chain Support</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                End-to-end logistics coordination ensuring secure, efficient movement of high-value goods across
                borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Our Logistics Services</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Comprehensive logistics solutions designed for high-value commodities and assets moving across international
            borders.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {subServices.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="card-hover h-full group overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <ArrowRight
                        className="text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose G1 Logistics</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our logistics services are designed for businesses moving high-value commodities and assets across
                international borders, with specialized security and tracking capabilities.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
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
            </div>

            <div>
              <ServiceOnboardingForm
                serviceName="Logistics & Supply Chain Support"
                serviceDescription="Tell us about your logistics needs and we'll design a secure, efficient solution for your shipments."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
