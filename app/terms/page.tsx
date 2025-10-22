import { FileText, Scale, AlertCircle, CheckCircle } from "@/components/icons"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-lg text-primary-foreground/80">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                These Terms of Service ("Terms") govern your access to and use of the services provided by G1 Holdings &
                Security Limited ("G1 Group," "we," "us," or "our"). By accessing or using our services, you agree to be
                bound by these Terms.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing our website, engaging our services, or entering into any agreement with G1 Group, you
                  acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy
                  Policy. If you do not agree to these Terms, you must not use our services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and G1 Holdings & Security Limited. We
                  reserve the right to modify these Terms at any time, and such modifications will be effective
                  immediately upon posting.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">2. Services Description</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>G1 Group provides the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Trade finance and capital solutions facilitation</li>
                  <li>Commodities trading and brokerage services</li>
                  <li>Logistics and supply chain coordination</li>
                  <li>Insurance and risk advisory services</li>
                  <li>Business consultancy and capacity building</li>
                  <li>Investment and wealth management advisory</li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-900">Important Notice</p>
                      <p className="text-amber-800 text-sm mt-1">
                        G1 Group operates as a trade facilitation and brokerage firm. We do not directly own or operate
                        transportation, storage, insurance, or financial institutions. All services are provided through
                        licensed third-party operators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Eligibility</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To use our services, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Represent a legitimate business entity with proper registration</li>
                  <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                  <li>Provide accurate, complete, and current information</li>
                  <li>Pass our Know Your Customer (KYC) and due diligence requirements</li>
                </ul>
              </div>
            </div>

            {/* User Obligations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Obligations</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and truthful information in all communications and documentation</li>
                  <li>Maintain the confidentiality of your account credentials and information</li>
                  <li>Comply with all applicable laws, including trade, export, and sanctions regulations</li>
                  <li>Not engage in fraudulent, illegal, or unethical activities</li>
                  <li>Not use our services for money laundering, terrorist financing, or other illicit purposes</li>
                  <li>Promptly notify us of any unauthorized access or security breaches</li>
                  <li>Pay all fees and charges in accordance with agreed terms</li>
                  <li>Cooperate with our compliance and verification procedures</li>
                </ul>
              </div>
            </div>

            {/* Fees and Payment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Fees and Payment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fees for our services are determined on a case-by-case basis and will be clearly communicated before
                  engagement. Payment terms include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Brokerage commissions based on transaction value</li>
                  <li>Service fees for advisory and consultancy services</li>
                  <li>Arrangement fees for trade finance facilitation</li>
                  <li>Retainer fees for ongoing services</li>
                </ul>
                <p className="mt-4">
                  All fees are non-refundable unless otherwise specified in writing. Late payments may incur additional
                  charges and interest as permitted by law.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  G1 Group acts solely as an intermediary and facilitator. We are not liable for the actions, omissions,
                  or performance of third-party service providers, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transportation and logistics operators</li>
                  <li>Insurance providers and underwriters</li>
                  <li>Financial institutions and lenders</li>
                  <li>Commodities suppliers and buyers</li>
                  <li>Security and storage service providers</li>
                </ul>
                <p className="mt-4">
                  To the maximum extent permitted by law, G1 Group shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including loss of profits, revenue, data, or business
                  opportunities.
                </p>
                <p>
                  Our total liability for any claims arising from our services shall not exceed the fees paid by you to
                  G1 Group in the 12 months preceding the claim.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Indemnification</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You agree to indemnify, defend, and hold harmless G1 Group, its affiliates, officers, directors,
                  employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including
                  reasonable attorneys' fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of our services or violation of these Terms</li>
                  <li>Your breach of any applicable laws or regulations</li>
                  <li>Infringement of any third-party rights</li>
                  <li>Inaccurate or misleading information provided by you</li>
                  <li>Your business operations and transactions</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content, trademarks, logos, and intellectual property on our website and in our materials are
                  owned by or licensed to G1 Group. You may not use, reproduce, modify, or distribute any content
                  without our prior written consent.
                </p>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Confidentiality</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Both parties agree to maintain the confidentiality of all proprietary and sensitive information
                  exchanged during the course of our business relationship. This obligation survives the termination of
                  our services.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Either party may terminate services with written notice as specified in the service agreement. G1
                  Group reserves the right to immediately suspend or terminate services if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You breach these Terms or any service agreement</li>
                  <li>We suspect fraudulent, illegal, or unethical activity</li>
                  <li>Required by law or regulatory authorities</li>
                  <li>You fail to pay fees or charges when due</li>
                </ul>
                <p className="mt-4">
                  Upon termination, you remain liable for all outstanding fees and obligations incurred prior to
                  termination.
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Dispute Resolution</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Any disputes arising from these Terms or our services shall be resolved through good faith
                  negotiations. If negotiations fail, disputes shall be resolved through arbitration in accordance with
                  the rules of the Nairobi Centre for International Arbitration (NCIA).
                </p>
                <p>The arbitration shall be conducted in English in Nairobi, Kenya.</p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya,
                  without regard to its conflict of law provisions.
                </p>
              </div>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Severability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
                  shall continue in full force and effect.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>For questions about these Terms of Service, please contact:</p>
                <div className="bg-muted p-6 rounded-lg mt-4">
                  <p className="font-semibold text-foreground">G1 Holdings & Security Limited</p>
                  <p>Legal Department</p>
                  <p>Email: info@g1groupofcompanies.com</p>
                  <p>Phone: +254 789 764 967</p>
                  <p>Address: Villa 46, No 25, Mwananchi Road, Syokimau, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
