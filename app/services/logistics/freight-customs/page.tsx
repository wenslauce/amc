import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Truck, CheckCircle2, FileCheck, Globe, Shield, Clock } from "@/components/icons"
import Link from "next/link"

export default function FreightCustomsPage() {
  const features = [
    {
      icon: FileCheck,
      title: "Documentation Management",
      description: "Complete handling of customs paperwork, permits, and compliance documents",
    },
    {
      icon: Globe,
      title: "Multi-Country Expertise",
      description: "Deep knowledge of customs regulations across Africa, Middle East, Asia, and beyond",
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description: "Full adherence to international trade regulations and customs requirements",
    },
    {
      icon: Clock,
      title: "Fast Clearance",
      description: "Expedited processing to minimize delays and storage costs",
    },
  ]

  const services = [
    "Import & Export Documentation",
    "Customs Clearance & Brokerage",
    "Duty & Tax Calculation",
    "Tariff Classification",
    "Certificate of Origin Processing",
    "Regulatory Compliance Verification",
    "Freight Forwarding Coordination",
    "Multi-Modal Transport Arrangement",
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
            <span>Freight & Customs</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Truck size={20} />
                <span className="text-sm font-medium">Customs Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Freight & Customs Coordination</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Expert customs brokerage and freight coordination ensuring smooth cross-border movement of your goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seamless Customs Clearance</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Navigate complex customs regulations with confidence. Our experienced team handles all documentation,
                compliance, and coordination to ensure your shipments clear customs efficiently across multiple
                jurisdictions.
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

              <h3 className="text-2xl font-bold mb-4">What We Handle</h3>
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
                serviceName="Freight & Customs Coordination"
                serviceDescription="Tell us about your freight and customs needs. We'll handle all the complexity of cross-border shipping."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
