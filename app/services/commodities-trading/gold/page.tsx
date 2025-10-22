import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Award, CheckCircle2, Shield, Globe, TrendingUp, Lock, Star, Zap } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

export default function GoldTradingPage() {
  const goldProducts = [
    { 
      name: "Refined Gold Bars", 
      description: "London Good Delivery standard bars (400oz) and smaller denominations",
      purity: "99.5% - 99.99%"
    },
    { 
      name: "Gold Doré", 
      description: "Unrefined gold-silver alloy from mining operations",
      purity: "80% - 95%"
    },
    { 
      name: "Gold Concentrate", 
      description: "High-grade gold concentrate from processing plants",
      purity: "Variable"
    },
    { 
      name: "Gold Coins & Bullion", 
      description: "Investment-grade coins and small denomination bars",
      purity: "99.9% - 99.99%"
    },
  ]

  const features = [
    {
      icon: Award,
      title: "Gold Trading Specialists",
      description: "We are the best in Gold trading with 15+ years of expertise in precious metals markets",
    },
    {
      icon: Shield,
      title: "SKR-Secured Transactions",
      description: "All gold transactions backed by Safe Keeping Receipts with full insurance coverage",
    },
    {
      icon: Lock,
      title: "Compliance Excellence",
      description: "Full adherence to LBMA standards, international regulations, and anti-money laundering protocols",
    },
    {
      icon: Globe,
      title: "Global Gold Network",
      description: "Direct access to London, Dubai, Hong Kong, and New York gold markets",
    },
    {
      icon: TrendingUp,
      title: "Price Optimization",
      description: "Real-time market intelligence and hedging strategies for optimal gold pricing",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Independent assaying and certification from recognized international laboratories",
    },
  ]

  const services = [
    "Gold Bar Trading (London Good Delivery Standard)",
    "Gold Doré Sourcing & Refining Coordination",
    "Gold Concentrate Trading & Processing",
    "Investment Gold (Coins & Bullion)",
    "Gold Price Risk Management & Hedging",
    "Gold Storage & Custody Services",
    "Gold Export/Import Documentation",
    "Gold Market Intelligence & Analysis",
    "Gold Refinery Coordination",
    "Gold Transport & Security Services",
  ]

  const marketAdvantages = [
    {
      title: "Direct Market Access",
      description: "Direct relationships with major gold refineries, bullion dealers, and institutional buyers"
    },
    {
      title: "Competitive Pricing",
      description: "Access to wholesale gold prices with minimal spreads and transparent fee structure"
    },
    {
      title: "Quality Guarantee",
      description: "All gold products certified by LBMA-accredited refineries and independent assayers"
    },
    {
      title: "Secure Logistics",
      description: "Armored transport and secure storage facilities for high-value gold shipments"
    }
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
              href="/services/commodities-trading"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Commodities Trading
            </Link>
            <span className="text-primary-foreground/60">/</span>
            <span>Gold Trading</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Gold Trading Specialists</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
                Gold Trading & Brokerage
                <span className="block text-accent">We Are The Best In Gold</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Premier gold trading services with unmatched expertise, secure transactions, and global market access. 
                Your trusted partner for all gold trading needs.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/commodity-metals.jpg"
                alt="Gold Trading"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We're The Best In Gold */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Why We Are The Best In Gold</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our gold trading expertise, market access, and service excellence set us apart in the precious metals industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <feature.icon className="text-primary mb-4 w-10 h-10" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Gold Products We Trade</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From refined gold bars to raw doré, we facilitate trading across the entire gold value chain 
                with the highest standards of quality and security.
              </p>

              <div className="space-y-4 mb-8">
                {goldProducts.map((product, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {product.purity}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Market Advantages</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {marketAdvantages.map((advantage, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Gold Trading Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1 w-5 h-5" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ServiceOnboardingForm
                serviceName="Gold Trading & Brokerage"
                serviceDescription="Connect with our gold trading specialists to discuss your gold trading, sourcing, or investment needs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gold Market Intelligence */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Gold Market Intelligence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of gold market trends with our comprehensive market analysis and trading insights
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="text-primary mx-auto mb-4 w-10 h-10" />
                <h3 className="text-xl font-semibold mb-2">Real-Time Pricing</h3>
                <p className="text-muted-foreground text-sm">
                  Live gold prices from major exchanges with instant market updates
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="text-primary mx-auto mb-4 w-10 h-10" />
                <h3 className="text-xl font-semibold mb-2">Global Market Access</h3>
                <p className="text-muted-foreground text-sm">
                  Direct access to London, Dubai, Hong Kong, and New York gold markets
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="text-primary mx-auto mb-4 w-10 h-10" />
                <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive hedging strategies and price risk mitigation solutions
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="text-primary mx-auto mb-4 w-10 h-10" />
                <h3 className="text-xl font-semibold mb-2">Fast Execution</h3>
                <p className="text-muted-foreground text-sm">
                  Rapid trade execution with minimal slippage and transparent pricing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Trade Gold?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Experience the best in gold trading with G1 Group. Our specialists are ready to facilitate your gold transactions 
            with unmatched expertise and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact-form" className="inline-block">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors btn-hover-lift">
                Get Gold Quote
              </button>
            </Link>
            <Link href="/contact" className="inline-block">
              <button className="px-8 py-3 border border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
                Contact Gold Specialists
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
