import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Bitcoin, Shield, Zap, Globe, CheckCircle2, Wallet } from "lucide-react"
import Link from "next/link"

export default function CryptoDeskPage() {
  const services = [
    "Cryptocurrency Transaction Processing",
    "Digital Payment Solutions",
    "Blockchain-based Settlement Systems",
    "Crypto Custody & Security Services",
    "Digital Asset Management",
    "Cross-border Crypto Payments",
    "Multi-currency Crypto Support",
    "Real-time Exchange Rate Management",
  ]

  const expertise = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security protocols for all cryptocurrency operations",
    },
    {
      icon: Zap,
      title: "Fast Settlement",
      description: "Near-instantaneous transaction processing and confirmation",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Seamless international payments without traditional banking delays",
    },
  ]

  const supportedCryptos = [
    "Bitcoin (BTC)",
    "Ethereum (ETH)", 
    "Tether (USDT)",
    "USD Coin (USDC)",
    "Binance Coin (BNB)",
    "Cardano (ADA)",
    "Solana (SOL)",
    "Polygon (MATIC)",
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
            <span>Crypto Desk & Digital Payments</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Bitcoin size={20} />
                <span className="text-sm font-medium">Digital Payments</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
                Crypto Desk & Digital Payments
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Secure cryptocurrency transactions and digital payment solutions for seamless international mineral trading operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Modern Payment Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our crypto desk provides cutting-edge digital payment infrastructure for mineral trading, enabling faster, 
                more secure, and cost-effective international transactions without traditional banking limitations.
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

              <h3 className="text-2xl font-bold mb-4">Our Crypto Services</h3>
              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#ef393b] flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Supported Cryptocurrencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {supportedCryptos.map((crypto, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Wallet className="text-[#ef393b] flex-shrink-0" size={16} />
                    <span className="text-sm font-medium">{crypto}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ServiceOnboardingForm
                serviceName="Crypto Desk & Digital Payments"
                serviceDescription="Get started with secure cryptocurrency payments for your mineral trading operations."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Crypto Desk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced cryptocurrency infrastructure designed specifically for mineral trading professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="text-[#ef393b] mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Bank-Grade Security</h3>
                <p className="text-sm text-muted-foreground">Multi-signature wallets and cold storage protection</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="text-[#ef393b] mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Instant Settlement</h3>
                <p className="text-sm text-muted-foreground">24/7 processing with near-instant confirmations</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="text-[#ef393b] mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Global Access</h3>
                <p className="text-sm text-muted-foreground">Borderless payments to any country worldwide</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Bitcoin className="text-[#ef393b] mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Multi-Currency</h3>
                <p className="text-sm text-muted-foreground">Support for major cryptocurrencies and stablecoins</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}