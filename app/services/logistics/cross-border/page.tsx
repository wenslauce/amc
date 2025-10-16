import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Globe, CheckCircle2, MapPin, Truck, Shield, Clock } from "@/components/icons"
import Link from "next/link"

export default function CrossBorderPage() {
  const features = [
    {
      icon: MapPin,
      title: "Regional Expertise",
      description: "Established networks across COMESA, EAC, SADC, and international corridors",
    },
    {
      icon: Shield,
      title: "Secure Transit",
      description: "Protected movement with insurance coverage and security protocols",
    },
    {
      icon: Clock,
      title: "Time-Definite Delivery",
      description: "Reliable scheduling with real-time tracking and updates",
    },
    {
      icon: Truck,
      title: "Multi-Modal Options",
      description: "Road, rail, air, and sea freight solutions tailored to your needs",
    },
  ]

  const services = [
    "Cross-Border Trucking Services",
    "Regional Distribution Networks",
    "Border Crossing Coordination",
    "Transit Documentation Management",
    "Bonded Warehouse Solutions",
    "Temperature-Controlled Transport",
    "Hazardous Materials Handling",
    "Consolidation & Deconsolidation",
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
            <span>Cross-Border Distribution</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Globe size={20} />
                <span className="text-sm font-medium">Distribution Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Cross-Border Distribution</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Reliable cross-border logistics connecting markets across Africa, Middle East, Asia, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seamless Regional Distribution</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Move goods efficiently across borders with our established distribution networks. We handle the
                complexity of multi-country logistics, allowing you to focus on your business growth.
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

              <h3 className="text-2xl font-bold mb-4">Distribution Services</h3>
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
                serviceName="Cross-Border Distribution"
                serviceDescription="Share your distribution requirements and we'll design an efficient cross-border logistics solution."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
