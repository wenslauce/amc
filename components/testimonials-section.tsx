import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@/components/icons"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "G1 Group transformed our trade operations with their integrated approach. Their expertise in high-value transactions is unmatched.",
      author: "Ahmed Hassan",
      company: "Global Commodities Ltd",
      role: "CEO",
    },
    {
      quote:
        "The security and compliance standards they maintain give us complete peace of mind. Highly professional and reliable partners.",
      author: "Maria Santos",
      company: "International Trade Finance",
      role: "Director of Operations",
    },
    {
      quote:
        "Their 24/7 support and real-time tracking capabilities have significantly improved our transaction efficiency across borders.",
      author: "David Chen",
      company: "Asia Pacific Logistics",
      role: "Managing Director",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trusted by leading companies worldwide for secure and efficient trade facilitation
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
