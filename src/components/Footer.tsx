'use client'

import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/img/logo.svg"
                alt="Compliance Simplified Logo"
                width={32}
                height={32}
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
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
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
                  href="mailto:compliance@arvid.tech"
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
  )
} 