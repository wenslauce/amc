import { Card, CardContent } from "@/components/ui/card"
import { FileText, CheckCircle, Zap, TrendingUp } from "@/components/icons"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Consultation & Assessment",
      description: "We analyze your trade requirements and structure the optimal solution",
    },
    {
      number: "02",
      icon: CheckCircle,
      title: "Documentation & Compliance",
      description: "Complete KYC, AML, and regulatory documentation preparation",
    },
    {
      number: "03",
      icon: Zap,
      title: "Execution & Facilitation",
      description: "Seamless transaction execution with real-time tracking and monitoring",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Completion & Support",
      description: "Transaction closure with ongoing advisory and relationship management",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A streamlined process designed for efficiency, compliance, and success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="card-hover h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
