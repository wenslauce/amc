import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Handshake, CheckCircle } from "@/components/icons"

export function TrustCredibilitySection() {
  const credentials = [
    {
      icon: Award,
      title: "ISO Certified",
      description: "International standards compliance for quality and security operations",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Full AML, KYC, PSRA, and IRA regulatory alignment",
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Trusted by leading financial institutions and trade organizations",
    },
    {
      icon: CheckCircle,
      title: "Industry Recognition",
      description: "Award-winning expertise in high-value trade facilitation",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Trusted by Global Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Certified, compliant, and recognized for excellence in international trade
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon
            return (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{credential.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{credential.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
