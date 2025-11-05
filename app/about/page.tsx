import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, Eye, Award, Globe2 } from "@/components/icons"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Precision & Expertise",
      description: "Every mineral assessment and consultancy engagement handled with meticulous attention to detail and expert knowledge.",
    },
    {
      icon: Eye,
      title: "Transparency & Integrity",
      description: "Building lasting relationships through honest communication, ethical practices, and reliable service delivery.",
    },
    {
      icon: Award,
      title: "Excellence & Innovation",
      description: "Continuously advancing our mineral sector expertise to meet evolving market demands and client needs.",
    },
    {
      icon: Globe2,
      title: "Global Markets, Local Knowledge",
      description: "International mineral market access combined with deep understanding of regional mining regulations and practices.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">About Adams Minerals and Consultancy</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Your specialized partner in minerals trading and strategic consultancy services, delivering excellence 
              across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Adams Minerals and Consultancy Limited is a specialized minerals trading and strategic consultancy 
                  firm headquartered in Entebbe, Uganda.
                </p>
                <p>
                  We provide expert minerals trading and strategic consultancy services across Africa, the Middle East, 
                  Asia, Europe, and the Americas through our deep expertise in mineral resources, market analysis, 
                  and comprehensive business advisory services.
                </p>
                <p>
                  Our mandate is to deliver excellence in minerals trading, resource assessment, and strategic business 
                  consultancy. From mineral market analysis and trade facilitation to resource evaluation, business 
                  advisory, strategic planning, and operational optimization for companies in the mineral sector.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/modern-office-building-corporate-headquarters.jpg"
                alt="Adams Minerals and Consultancy Headquarters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlike traditional service providers, Adams Minerals and Consultancy operates as a strategic partner 
              with deep mineral sector expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Specialized Minerals Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep knowledge in mineral markets, resource evaluation, and trading strategies, providing clients 
                  with expert guidance and comprehensive consultancy services in the mineral sector.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Consultancy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete strategic advisory services from market analysis to business planning, ensuring optimal 
                  decision-making across all phases of mineral sector operations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Market Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced market analysis, price forecasting, and trend identification for precious metals, industrial 
                  minerals, and rare earth elements across global markets.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Regulatory Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full compliance with mining regulations, trade standards, and international mineral trading requirements. 
                  Every engagement handled with strict professional standards and verified documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="text-[#ef393b] mx-auto mb-4" size={48} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Global Presence</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Active partnerships and operations across multiple continents
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Africa</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Kenya (HQ), East & Central Africa, COMESA, EAC, South Africa, West Africa
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Middle East</h3>
                <p className="text-primary-foreground/80 text-sm">UAE, Saudi Arabia, Qatar, Turkey</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Asia-Pacific</h3>
                <p className="text-primary-foreground/80 text-sm">China, India, Southeast Asia</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Europe</h3>
                <p className="text-primary-foreground/80 text-sm">United Kingdom, European Union</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Americas</h3>
                <p className="text-primary-foreground/80 text-sm">United States, Brazil, Latin America</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Discover how Adams Minerals and Consultancy can support your mineral sector operations with our specialized 
            expertise and comprehensive consultancy services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#ef393b] text-white hover:bg-[#d73035]">
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-[#ef393b] text-[#ef393b] hover:bg-[#ef393b] hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
