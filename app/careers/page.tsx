import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, Users, TrendingUp, Globe2, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const values = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals across multiple disciplines and geographies.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear paths for professional advancement.",
    },
    {
      icon: Globe2,
      title: "Global Exposure",
      description: "Engage with international clients and partners across five continents.",
    },
    {
      icon: Briefcase,
      title: "Impactful Work",
      description: "Contribute to high-value transactions that drive economic growth and development.",
    },
  ]

  const openPositions = [
    {
      title: "Trade Finance Manager",
      department: "Trade Finance",
      location: "Entebbe, Uganda",
      type: "Full-time",
      description:
        "Lead structured trade finance deals, manage client relationships, and coordinate with international banking partners.",
    },
    {
      title: "Commodities Trader",
      department: "Commodities Trading",
      location: "Entebbe, Uganda",
      type: "Full-time",
      description:
        "Execute commodity trades, manage supplier and buyer relationships, and analyze market trends for agricultural products and metals.",
    },
    {
      title: "Logistics Coordinator",
      department: "Logistics & Security",
      location: "Entebbe, Uganda",
      type: "Full-time",
      description:
        "Coordinate cross-border shipments, manage customs clearance, and oversee SKR-secured logistics operations.",
    },
    {
      title: "Risk Analyst",
      department: "Risk Advisory",
      location: "Entebbe, Uganda",
      type: "Full-time",
      description:
        "Conduct due diligence, assess transaction risks, and develop risk mitigation strategies for high-value deals.",
    },
    {
      title: "Business Development Manager",
      department: "Business Development",
      location: "Entebbe, Uganda / Dubai, UAE",
      type: "Full-time",
      description:
        "Identify new business opportunities, develop strategic partnerships, and expand G1 Group's market presence.",
    },
    {
      title: "Solar Project Engineer",
      department: "Energy Solutions",
      location: "Entebbe, Uganda",
      type: "Full-time",
      description:
        "Design and oversee commercial solar installations, manage EPC projects, and ensure quality delivery.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Careers at G1 Group</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join a dynamic team facilitating high-value trade across borders and making a real impact on global
              commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a team that's redefining cross-border trade facilitation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <value.icon className="text-primary mx-auto mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">Join our team and help shape the future of global trade</p>
          </div>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{position.description}</p>
                    </div>
                    <Button asChild className="md:flex-shrink-0">
                      <Link href="/contact">
                        Apply Now <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Benefits & Perks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Market-leading salaries with performance-based bonuses and incentives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Training programs, certifications, and opportunities for continuous learning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comprehensive health insurance and wellness programs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>International Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Opportunities to work with international clients and travel globally.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Flexible working arrangements and generous leave policies.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Team Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaborative environment with regular team building and social events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            We're always looking for talented individuals. Send us your CV and let us know how you can contribute to G1
            Group.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
