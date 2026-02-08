'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CONTACT_EMAIL, GITHUB_URL } from '@/config/constants'
import { FOOTER_GROUPS } from '@/config/navigation'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/img/logo.svg"
                alt="Compliance Simplified Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold">Compliance Simplified</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making ISO 27001 and SOC 2 compliance accessible to everyone.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.key}>
              <h3 className="mb-3 font-semibold text-foreground">{group.title}</h3>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3 font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Compliance Simplified. Licensed under AGPL-3.0.</p>
        </div>
      </div>
    </footer>
  )
}
