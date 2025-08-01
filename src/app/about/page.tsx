"use client";

import Link from "next/link";
import LandingLayout from "@/components/LandingLayout";
import { CONTACT_EMAIL } from '@/config/constants';

export default function AboutPage() {
  return (
    <LandingLayout>

      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              About
              <span className="block text-primary">Compliance Simplified</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              A community-driven project dedicated to democratizing compliance
              knowledge and making security accessible to all organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that compliance knowledge should be open,
                transparent, and accessible to everyone. Our mission is to break
                down the barriers that prevent organizations from implementing
                proper security practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Democratize Knowledge
                </h3>
                <p className="text-muted-foreground">
                  Make compliance guidance available to organizations of all
                  sizes, not just those who can afford expensive consultants.
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Build Trust
                </h3>
                <p className="text-muted-foreground">
                  Help organizations build trust with their customers through
                  demonstrable security practices and compliance.
                </p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Foster Community
                </h3>
                <p className="text-muted-foreground">
                  Create a collaborative environment where security
                  professionals can share knowledge and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Why AGPL-3.0?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We chose the GNU Affero General Public License v3.0 (AGPL-3.0)
                to ensure that our work remains free and open, and that
                improvements benefit the entire community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What AGPL-3.0 Means
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      You can use, share, and modify this software for any
                      purpose
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>You can use it commercially (even for profit)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>You can distribute modified versions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      If you modify and run it on a server, you must share the
                      source code
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Why This Matters
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Transparency
                    </h4>
                    <p>
                      Ensures that compliance knowledge remains transparent and
                      accessible to all organizations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Community Benefit
                    </h4>
                    <p>
                      Any improvements made by the community must be shared
                      back, benefiting everyone.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Prevents Lock-in
                    </h4>
                    <p>
                      Prevents any single organization from creating proprietary
                      versions that lock others out.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Network Effect
                    </h4>
                    <p>
                      The "network use" clause ensures that web-based versions
                      remain open source.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                Read the full AGPL-3.0 license →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Contributors
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This project is made possible by the contributions of security
                professionals, compliance experts, and organizations committed
                to making security accessible to all.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">AB</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  <a
                    href="https://arvid.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Arvid Berndtsson
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Project Founder & Lead
                </p>
                <p className="text-sm text-muted-foreground">
                  Security professional passionate about democratizing
                  compliance knowledge and making security accessible to all
                  organizations.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Community Contributors
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Security Professionals
                </p>
                <p className="text-sm text-muted-foreground">
                  Security experts, compliance professionals, and organizations
                  who contribute their knowledge and experience.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Open Source Community
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Developers & Maintainers
                </p>
                <p className="text-sm text-muted-foreground">
                  The broader open source community that builds and maintains
                  the tools and frameworks we use.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/arvid-berndtsson/compliance-simplified"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Get Involved
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We welcome contributions from security professionals, compliance
              experts, and anyone passionate about making security accessible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/arvid-berndtsson/compliance-simplified/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm hover:bg-foreground/90 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Report Issues
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>


    </LandingLayout>
  );
}
