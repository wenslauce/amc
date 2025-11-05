import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function NewsPage() {
  const newsArticles = [
    {
      title: "Adams Minerals and Consultancy Expands Operations to West Africa",
      date: "October 10, 2025",
      category: "Expansion",
      excerpt:
        "Adams Minerals and Consultancy announces strategic expansion into West African markets, establishing new partnerships in Nigeria, Ghana, and Senegal to support growing demand for minerals trading and consultancy services.",
      image: "/news-expansion-west-africa.jpg",
    },
    {
      title: "New Partnership with Leading Mineral Processing Facility",
      date: "September 28, 2025",
      category: "Partnerships",
      excerpt:
        "Adams Minerals and Consultancy signs major partnership agreement with prominent mineral processing facility, enhancing precious metals trading capabilities and supply chain reliability for African markets.",
      image: "/news-mineral-partnership.jpg",
    },
    {
      title: "Record Quarter for Minerals Trading Division",
      date: "September 15, 2025",
      category: "Performance",
      excerpt:
        "Adams Minerals and Consultancy reports record-breaking quarter with $50M+ in facilitated mineral transactions, demonstrating strong demand for specialized minerals trading and consultancy services across Africa.",
      image: "/news-minerals-growth.jpg",
    },
    {
      title: "Adams Minerals and Consultancy Launches Enhanced Tracking Platform",
      date: "August 30, 2025",
      category: "Technology",
      excerpt:
        "New digital platform provides real-time tracking and enhanced security features for mineral shipments, setting new industry standards for minerals trading transparency and security.",
      image: "/news-tracking-platform-launch.jpg",
    },
    {
      title: "Sustainable Mining Initiative Reaches Major Milestone",
      date: "August 12, 2025",
      category: "Sustainability",
      excerpt:
        "Adams Minerals and Consultancy reaches milestone with sustainable mining consultancy projects across East Africa, contributing to responsible mineral extraction practices.",
      image: "/news-sustainability-milestone.jpg",
    },
    {
      title: "Adams Minerals and Consultancy Receives Industry Excellence Award",
      date: "July 25, 2025",
      category: "Awards",
      excerpt:
        "Recognized for outstanding contribution to minerals trading and strategic consultancy at the African Mining Excellence Awards 2025.",
      image: "/news-industry-award.jpg",
    },
  ]

  const insights = [
    {
      title: "The Future of Minerals Trading in Africa",
      date: "October 5, 2025",
      category: "Industry Insights",
      excerpt:
        "Exploring emerging trends in African minerals trading, including digital transformation, regulatory harmonization, and the role of specialized consultancy services.",
    },
    {
      title: "Managing Risk in Precious Metals Trading",
      date: "September 20, 2025",
      category: "Risk Management",
      excerpt:
        "Best practices for mitigating risk in precious metals trading, from due diligence and market analysis to secure logistics and compliance management.",
    },
    {
      title: "Strategic Consultancy for Mining Operations in East Africa",
      date: "September 5, 2025",
      category: "Consultancy",
      excerpt:
        "Analysis of the growing mining sector in East Africa and opportunities for strategic business advisory and operational optimization.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">News & Insights</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Stay updated with the latest developments, partnerships, and industry insights from Adams Minerals and Consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Industry Insights</h2>
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{insight.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={14} />
                          <span>{insight.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{insight.excerpt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Subscribe to our newsletter for the latest updates on minerals trading, market insights, and Adams Minerals and Consultancy
                news.
              </p>
              <p className="text-sm text-primary-foreground/80">
                Contact us at info@adamsmineralsconsultancy.com to subscribe to our newsletter.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
