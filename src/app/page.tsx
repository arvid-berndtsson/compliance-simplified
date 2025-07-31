import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="/img/logo.svg" alt="Compliance Simplified Logo" className="h-8 w-8" />
                <span className="font-semibold text-lg">Compliance Simplified</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/docs/intro" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/docs/tutorials/quick-start" className="text-muted-foreground hover:text-foreground transition-colors">
                Quick Start
              </Link>
              <Link href="/docs/reference/glossary" className="text-muted-foreground hover:text-foreground transition-colors">
                Reference
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              ISO 27001 & SOC 2
              <span className="block text-primary">Compliance Made Simple</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guidance for implementing and maintaining ISO 27001 and SOC 2 compliance. 
              Clear, actionable steps for organizations of all sizes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/docs/tutorials/quick-start"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/docs/intro"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background gradient */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need for compliance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From initial assessment to ongoing maintenance, we've got you covered.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* ISO 27001 */}
              <div className="group relative rounded-2xl border border-border/50 bg-card p-8 hover:border-border transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">ISO 27001</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Complete implementation guide for ISO 27001 Information Security Management System.
                </p>
                <Link href="/docs/tutorials/iso27001-walkthrough" className="text-primary hover:text-primary/80 font-medium">
                  Learn more →
                </Link>
              </div>

              {/* SOC 2 */}
              <div className="group relative rounded-2xl border border-border/50 bg-card p-8 hover:border-border transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">SOC 2</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Step-by-step SOC 2 Type II compliance framework and controls implementation.
                </p>
                <Link href="/docs/tutorials/soc2-walkthrough" className="text-primary hover:text-primary/80 font-medium">
                  Learn more →
                </Link>
              </div>

              {/* Executive Buy-in */}
              <div className="group relative rounded-2xl border border-border/50 bg-card p-8 hover:border-border transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Executive Buy-in</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Strategies for gaining executive support and securing necessary resources.
                </p>
                <Link href="/docs/how-to/executive-buyin" className="text-primary hover:text-primary/80 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              This is a community-driven project dedicated to making compliance accessible to everyone. 
              We believe that security knowledge should be open, transparent, and available to all organizations, 
              regardless of their size or budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/arvid-berndtsson/compliance-simplified"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm hover:bg-foreground/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Learn About Our Mission →
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              We welcome all feedback, contributions, and suggestions. Help us make compliance better for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Begin your compliance journey with our comprehensive documentation.
            </p>
            <div className="mt-8">
              <Link
                href="/docs/tutorials/quick-start"
                className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/img/logo.svg" alt="Compliance Simplified Logo" className="h-8 w-8" />
                <span className="font-semibold text-lg">Compliance Simplified</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making ISO 27001 and SOC 2 compliance accessible to everyone.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs/tutorials/quick-start" className="text-muted-foreground hover:text-foreground transition-colors">Quick Start</Link></li>
                <li><Link href="/docs/intro" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="/docs/reference/glossary" className="text-muted-foreground hover:text-foreground transition-colors">Glossary</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/arvid-berndtsson/compliance-simplified" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub Repository</a></li>
                <li><a href="https://github.com/arvid-berndtsson/compliance-simplified/issues" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Report Issues</a></li>
                <li><a href="mailto:arvid@arvid.tech" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">AGPL-3.0 License</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Compliance Simplified. Licensed under AGPL-3.0.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 