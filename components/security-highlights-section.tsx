import { Card, CardContent } from "@/components/ui/card"
import { Lock, Database, Scale, AlertCircle } from "@/components/icons"

export function SecurityHighlightsSection() {
  const features = [
    {
      icon: Lock,
      title: "SKR Tracking Technology",
      description: "Real-time monitoring and verification of high-value consignments with blockchain-backed security",
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Enterprise-grade encryption and secure data handling compliant with international standards",
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "Full adherence to AML, KYC, PSRA, IRA, and international trade regulations",
    },
    {
      icon: AlertCircle,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for every transaction",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Security & Compliance First</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your assets and data are protected by industry-leading security measures and regulatory compliance
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-[#ef393b] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
