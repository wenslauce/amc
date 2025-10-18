import { Shield, Lock, Eye, FileText, Database, UserCheck } from "@/components/icons"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
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
                G1 Holdings & Security Limited ("G1 Group," "we," "us," or "our") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number, and business contact details</li>
                  <li>Company name, position, and business information</li>
                  <li>Financial information for trade finance and transaction processing</li>
                  <li>Identification documents for compliance and verification purposes</li>
                  <li>Communication preferences and inquiry details</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages visited, time spent on pages, and navigation patterns</li>
                  <li>Referring website addresses and search terms used</li>
                  <li>Cookies and similar tracking technologies data</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our trade facilitation and brokerage services</li>
                  <li>Process transactions and manage client relationships</li>
                  <li>Communicate with you about services, updates, and business opportunities</li>
                  <li>Comply with legal obligations, including KYC and AML requirements</li>
                  <li>Improve our website, services, and customer experience</li>
                  <li>Detect, prevent, and address fraud, security issues, and technical problems</li>
                  <li>Conduct market research and business analytics</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">3. Information Sharing and Disclosure</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party logistics, insurance, and financial service
                    providers who assist in delivering our services
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Authorized partners and subsidiaries within the G1 Group network
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> Government agencies, regulators, and law enforcement when
                    required by law
                  </li>
                  <li>
                    <strong>Professional Advisors:</strong> Lawyers, auditors, and consultants bound by confidentiality
                    obligations
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                  </li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure access controls and authentication protocols</li>
                  <li>Regular security assessments and audits</li>
                  <li>Employee training on data protection and confidentiality</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we
                  strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">5. Your Privacy Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access:</strong> Request access to the personal information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information, subject to legal
                    obligations
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of processing in certain circumstances
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service provider
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your personal information for certain purposes
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at privacy@g1group.com. We will respond to your request
                  within 30 days.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. International Data Transfers</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a global trade facilitation company, we may transfer your information to countries outside your
                  jurisdiction. We ensure appropriate safeguards are in place, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard contractual clauses approved by relevant authorities</li>
                  <li>Adequacy decisions recognizing equivalent data protection standards</li>
                  <li>Binding corporate rules within the G1 Group network</li>
                </ul>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods
                  vary based on:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The nature of the information and purpose of processing</li>
                  <li>Legal, regulatory, and compliance requirements</li>
                  <li>Contractual obligations and business needs</li>
                  <li>Dispute resolution and legal proceedings</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can
                  control cookie preferences through your browser settings. For more information, please see our Cookie
                  Policy.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                  information from children. If you believe we have collected information from a child, please contact
                  us immediately.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new policy on this page and updating the "Last Updated" date. Your continued use of our
                  services after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact:
                </p>
                <div className="bg-muted p-6 rounded-lg mt-4">
                  <p className="font-semibold text-foreground">G1 Holdings & Security Limited</p>
                  <p>Data Protection Officer</p>
                  <p>Email: info@g1groupofcompanies.com</p>
                  <p>Phone: +254 XXX XXX XXX</p>
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
