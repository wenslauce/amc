import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "@/components/icons"

export function GlobalReachSection() {
  const regions = [
    {
      name: "Africa",
      description: "Kenya, South Africa, Nigeria, Ghana, Tanzania",
      markets: "15+ active markets",
    },
    {
      name: "Middle East",
      description: "UAE, Saudi Arabia, Qatar, Kuwait, Bahrain",
      markets: "8+ key hubs",
    },
    {
      name: "Asia",
      description: "China, India, Singapore, Hong Kong, Malaysia",
      markets: "12+ trading centers",
    },
    {
      name: "Europe",
      description: "UK, Germany, Netherlands, Switzerland, Belgium",
      markets: "10+ financial centers",
    },
    {
      name: "Americas",
      description: "USA, Canada, Brazil, Mexico, Colombia",
      markets: "9+ major ports",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Global Presence, Local Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Operating across five continents with strategic partnerships and local market knowledge
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((region, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">{region.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{region.description}</p>
                <div className="text-xs font-medium text-primary">{region.markets}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
