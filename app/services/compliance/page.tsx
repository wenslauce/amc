import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Scale, FileCheck, Shield, AlertTriangle, CheckCircle2, BookOpen } from "lucide-react"
import Link from "next/link"

export default function CompliancePage() {
  const services = [
    "Mining Law & Regulations Compliance",
    "International Trade Law Guidance",
    "Environmental Compliance Consulting",
    "Licensing & Permitting Support",
    "Legal Risk Assessment",
    "Regulatory Filing Assistance",
    "AML/KYC Compliance Programs",
    "Cross-border Trade Compliance",
  ]

  const expertise = [
    {
      icon: Scale,
      title: "Legal Expertise",
      description: "Deep knowledge of mining and international trade regulations",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Proactive compliance strategies to minimize legal exposure",
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Comprehensive regulatory documentation and filing support",
    },
  ]

  const complianceAreas = [
    {
      title: "Mining Regulations",
      items: ["Mining licenses", "Environmental permits", "Safety compliance", "Land use rights"]
    },
    {
      title: "Trade Compliance", 
      items: ["Export/import regulations", "Customs compliance", "Sanctions screening", "Trade documentation"]
    },
    {
      title: "Financial Compliance",
      items: ["AML/KYC procedures", "Transaction monitoring", "Suspicious activity reporting", "Record keeping"]
    },
    {
      title: "Environmental Law",
      items: ["Environmental impact assessments", "Waste management compliance", "Water usage permits", "Rehabilitation bonds"]
    }
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
            <span>Regulatory Compliance & Legal Advisory</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Scale size={20} />
                <span className="text-sm font-medium">Legal Advisory</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
                Regulatory Compliance & Legal Advisory
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Expert guidance on mining regulations, trade compliance, and comprehensive legal advisory for mineral sector operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Navigate Complex Regulations</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our compliance and legal advisory services help mineral sector companies navigate complex regulatory 
                landscapes, ensuring full compliance while minimizing legal risks and operational disruptions.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {expertise.map((item, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <item.icon className="text-[#ef393b] mb-3" size={32} strokeWidth={1.5} />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Compliance Services</h3>
              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#ef393b] flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ServiceOnboardingForm
                serviceName="Regulatory Compliance & Legal Advisory"
                serviceDescription="Schedule a consultation to discuss your compliance needs and regulatory requirements."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance Expertise Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage across all critical regulatory domains for mineral sector operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {complianceAreas.map((area, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-[#ef393b]" size={24} />
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#ef393b] flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Compliance is Critical</h3>
                  <p className="text-amber-800 leading-relaxed">
                    Non-compliance with mining and trade regulations can result in severe penalties, license revocation, 
                    and operational shutdowns. Our proactive compliance approach helps you stay ahead of regulatory 
                    changes and maintain continuous operations while meeting all legal requirements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}