"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/img/logo.svg"
                  alt="Compliance Simplified Logo"
                  className="h-8 w-8"
                />
                <span className="font-semibold text-lg">
                  Compliance Simplified
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/docs/intro"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/docs/tutorials/quick-start"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Quick Start
              </Link>
              <Link
                href="/docs/reference/glossary"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Reference
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> July 2025
              <br />
              <strong>Effective date:</strong> July 31, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p>
                Compliance Simplified ("we," "our," or "us") is committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>
              <p>
                This policy complies with applicable data protection laws and
                frameworks including SOC 2 Trust Services Criteria and ISO 27001
                Information Security Management System requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Contact Information:</strong> Name, email address, and
                  organization when you contact us or subscribe to updates
                </li>
                <li>
                  <strong>Feedback and Contributions:</strong> Comments,
                  suggestions, and contributions to our documentation
                </li>
                <li>
                  <strong>Communication:</strong> Messages you send to us
                  through contact forms or email
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on
                  site, and navigation patterns
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser
                  type, device information, and operating system
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> Essential
                  cookies for site functionality
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Service Provision:</strong> To provide and maintain
                  our compliance documentation and resources
                </li>
                <li>
                  <strong>Communication:</strong> To respond to your inquiries
                  and provide support
                </li>
                <li>
                  <strong>Improvement:</strong> To analyze usage patterns and
                  improve our content and services
                </li>
                <li>
                  <strong>Security:</strong> To protect against fraud, abuse,
                  and security threats
                </li>
                <li>
                  <strong>Compliance:</strong> To meet legal and regulatory
                  obligations
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  court order, or government request
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  service providers who assist in operating our website (under
                  strict confidentiality agreements)
                </li>
                <li>
                  <strong>Security:</strong> To protect our rights, property, or
                  safety, or that of our users
                </li>
                <li>
                  <strong>Consent:</strong> With your explicit consent for
                  specific purposes
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Encryption:</strong> Data transmission is encrypted
                  using industry-standard protocols (HTTPS/TLS)
                </li>
                <li>
                  <strong>Access Controls:</strong> Strict access controls and
                  authentication mechanisms
                </li>
                <li>
                  <strong>Regular Audits:</strong> Periodic security assessments
                  and vulnerability testing
                </li>
                <li>
                  <strong>Employee Training:</strong> Regular security awareness
                  training for personnel
                </li>
                <li>
                  <strong>Incident Response:</strong> Established procedures for
                  responding to security incidents
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Active Users:</strong> Information is retained while
                  you actively use our services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Longer retention periods
                  may apply to comply with legal obligations
                </li>
                <li>
                  <strong>Security:</strong> Log data may be retained for
                  security and audit purposes
                </li>
                <li>
                  <strong>Deletion:</strong> You may request deletion of your
                  personal information (see Section 8)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Your Rights and Choices
              </h2>
              <p>
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  portable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your
                  personal information
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent where processing
                  is based on consent
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p>
                We use essential cookies to ensure proper website functionality:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic site
                  functionality and security
                </li>
                <li>
                  <strong>Analytics:</strong> Anonymous usage analytics to
                  improve our services
                </li>
                <li>
                  <strong>No Third-Party Tracking:</strong> We do not use
                  third-party advertising or tracking cookies
                </li>
              </ul>
              <p>
                You can control cookie settings through your browser
                preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. International Data Transfers
              </h2>
              <p>
                Our services are hosted in secure data centers. If you are
                located outside our hosting region, your information may be
                transferred to and processed in countries with different data
                protection laws. We ensure appropriate safeguards are in place
                for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Children's Privacy
              </h2>
              <p>
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you believe we have collected such
                information, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Posting the updated policy on our website</li>
                <li>
                  Updating the "Last updated" date at the top of this policy
                </li>
                <li>Sending email notifications for significant changes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Contact Information
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:arvid@arvid.tech"
                    className="text-primary hover:text-primary/80"
                  >
                    arvid@arvid.tech
                  </a>
                </p>
                <p>
                  <strong>GitHub Issues:</strong>{" "}
                  <a
                    href="https://github.com/arvid-berndtsson/compliance-simplified/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    Report Privacy Concerns
                  </a>
                </p>
                <p>
                  <strong>Data Protection Officer:</strong> Arvid Berndtsson
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                13. Compliance Framework Alignment
              </h2>
              <p>This Privacy Policy is designed to align with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>SOC 2 Trust Services Criteria:</strong> Security,
                  Availability, Processing Integrity, Confidentiality, and
                  Privacy
                </li>
                <li>
                  <strong>ISO 27001:</strong> Information Security Management
                  System requirements
                </li>
                <li>
                  <strong>GDPR:</strong> General Data Protection Regulation (for
                  EU users)
                </li>
                <li>
                  <strong>CCPA:</strong> California Consumer Privacy Act (for
                  California residents)
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/img/logo.svg"
                  alt="Compliance Simplified Logo"
                  className="h-8 w-8"
                />
                <span className="font-semibold text-lg">
                  Compliance Simplified
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making ISO 27001 and SOC 2 compliance accessible to everyone.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/docs/tutorials/quick-start"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Quick Start
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/intro"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/reference/glossary"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/arvid-berndtsson/compliance-simplified"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/arvid-berndtsson/compliance-simplified/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Report Issues
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:arvid@arvid.tech"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-foreground font-medium">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.gnu.org/licenses/agpl-3.0.en.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    AGPL-3.0 License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Compliance Simplified. Licensed under AGPL-3.0.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
