import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Shield, CheckCircle2, Lock, Users, MapPin } from "@/components/icons"
import Link from "next/link"

export default function ArmoredTransportPage() {
  const features = [
    {
      icon: Shield,
      title: "Armored Vehicles",
      description: "Purpose-built secure transport vehicles with advanced protection systems",
    },
    {
      icon: Users,
      title: "Trained Security Personnel",
      description: "Professional security escorts with specialized training in high-value transport",
    },
    {
      icon: Lock,
      title: "GPS Tracking",
      description: "Real-time monitoring and tracking throughout the entire journey",
    },
    {
      icon: MapPin,
      title: "Route Planning",
      description: "Strategic route selection with risk assessment and contingency planning",
    },
  ]

  const services = [
    "High-Value Commodity Transport",
    "Precious Metals & Minerals Movement",
    "Cash-in-Transit Services",
    "Secure Document Delivery",
    "Art & Valuables Transport",
    "24/7 Security Monitoring",
    "Armed Escort Services",
    "Insurance-Backed Protection",
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
            <span>Armored Transport</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Shield size={20} />
                <span className="text-sm font-medium">Secure Transport</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Armored Transport Services</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Maximum security for high-value assets with armored vehicles, trained personnel, and comprehensive
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Uncompromising Security</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When your assets demand the highest level of protection, our armored transport services provide
                military-grade security with professional execution. Every movement is planned, monitored, and protected
                from origin to destination.
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

              <h3 className="text-2xl font-bold mb-4">Security Services</h3>
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
                serviceName="Armored Transport Services"
                serviceDescription="Describe your high-value transport needs and we'll design a comprehensive security solution."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
