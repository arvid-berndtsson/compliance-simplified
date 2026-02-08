"use client";

import Link from "next/link";
import { CONTACT_EMAIL } from '@/config/constants';

export default function TermsPage() {
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
                href="/docs/iso27001/overview"
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
            Terms of Service
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> July 2025
              <br />
              <strong>Effective date:</strong> July 31, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Compliance Simplified ("the Service"),
                you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
              <p>
                These Terms of Service ("Terms") govern your use of our website
                and services. By using our services, you agree to these Terms
                and our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Description of Service
              </h2>
              <p>Compliance Simplified provides:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Educational Content:</strong> Documentation, guides,
                  and resources for ISO 27001 and SOC 2 compliance
                </li>
                <li>
                  <strong>Open Source Software:</strong> Code and tools
                  available under AGPL-3.0 license
                </li>
                <li>
                  <strong>Community Platform:</strong> Forums and collaboration
                  spaces for compliance professionals
                </li>
                <li>
                  <strong>Support Services:</strong> Technical assistance and
                  guidance
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. User Accounts and Responsibilities
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.1 Account Creation
              </h3>
              <p>
                When creating an account or using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.2 Acceptable Use
              </h3>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the Service</li>
                <li>
                  Use the Service for commercial purposes without permission
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Intellectual Property Rights
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                4.1 Our Rights
              </h3>
              <p>
                The Service and its original content, features, and
                functionality are owned by Compliance Simplified and are
                protected by international copyright, trademark, patent, trade
                secret, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                4.2 Open Source License
              </h3>
              <p>
                Our software is licensed under the GNU Affero General Public
                License v3.0 (AGPL-3.0). This means:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You can use, modify, and distribute our software</li>
                <li>
                  You must share your modifications under the same license
                </li>
                <li>
                  If you run the software on a server, you must provide source
                  code access
                </li>
                <li>
                  You must preserve copyright notices and license information
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                4.3 User Contributions
              </h3>
              <p>By contributing content to our platform, you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Grant us a non-exclusive, worldwide license to use your
                  contributions
                </li>
                <li>Warrant that you have the right to grant this license</li>
                <li>Agree that contributions may be shared under AGPL-3.0</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Privacy and Data Protection
              </h2>
              <p>
                Your privacy is important to us. Our collection and use of
                personal information is governed by our Privacy Policy, which is
                incorporated into these Terms by reference.
              </p>
              <p>We are committed to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Protecting your personal information in accordance with
                  applicable laws
                </li>
                <li>Implementing appropriate security measures</li>
                <li>Providing transparency about our data practices</li>
                <li>Respecting your privacy rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Disclaimers and Limitations
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                6.1 Service Availability
              </h3>
              <p>
                We strive to maintain high availability but cannot guarantee
                uninterrupted access. The Service is provided "as is" without
                warranties of any kind.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                6.2 Compliance Guidance
              </h3>
              <p>
                Our content is for educational purposes only and does not
                constitute:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Legal advice or professional consultation</li>
                <li>Guarantee of compliance with any standard or regulation</li>
                <li>Substitute for professional compliance services</li>
                <li>Assurance of audit success or certification</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                6.3 Limitation of Liability
              </h3>
              <p>
                To the maximum extent permitted by law, Compliance Simplified
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of
                the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Security and Compliance
              </h2>
              <p>
                We implement security measures aligned with industry standards:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Data Protection:</strong> Encryption, access controls,
                  and security monitoring
                </li>
                <li>
                  <strong>Regular Audits:</strong> Security assessments and
                  vulnerability testing
                </li>
                <li>
                  <strong>Incident Response:</strong> Procedures for handling
                  security incidents
                </li>
                <li>
                  <strong>Compliance Monitoring:</strong> Ongoing review of
                  security practices
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Termination
              </h2>
              <p>
                We may terminate or suspend your access to the Service
                immediately, without prior notice, for any reason, including
                breach of these Terms.
              </p>
              <p>Upon termination:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your right to use the Service will cease immediately</li>
                <li>We may delete your account and data</li>
                <li>
                  Provisions of these Terms that should survive termination will
                  remain in effect
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction where Compliance Simplified
                operates, without regard to conflict of law principles.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the Service
                shall be resolved through:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Good faith negotiations between parties</li>
                <li>Mediation if direct resolution is not possible</li>
                <li>Legal proceedings as a last resort</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify users of material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Posting updated Terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Updating the "Last updated" date</li>
              </ul>
              <p>
                Continued use of the Service after changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Contact Information
              </h2>
              <p>
                If you have questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:text-primary/80"
                  >
                    {CONTACT_EMAIL}
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
                    Report Issues
                  </a>
                </p>
                <p>
                  <strong>Legal Inquiries:</strong> For legal matters, please
                  include "Legal" in the subject line
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Compliance Framework Alignment
              </h2>
              <p>
                These Terms of Service are designed to support compliance with:
              </p>
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
                  <strong>GDPR:</strong> General Data Protection Regulation
                  compliance
                </li>
                <li>
                  <strong>Industry Standards:</strong> Best practices for online
                  services
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
                    href="/docs/iso27001/overview"
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
                    href={`mailto:${CONTACT_EMAIL}`}
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
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-foreground font-medium">
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
