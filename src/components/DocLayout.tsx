'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { SearchProvider } from './SearchProvider'

interface DocLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

const navigation = {
  tutorials: [
    { name: 'Quick Start', href: '/docs/tutorials/quick-start' },
    { name: 'ISO 27001 Walkthrough', href: '/docs/tutorials/iso27001-walkthrough' },
    { name: 'SOC 2 Walkthrough', href: '/docs/tutorials/soc2-walkthrough' },
  ],
  howTo: [
    { name: 'Executive Buy-in', href: '/docs/how-to/executive-buyin' },
    { name: 'Scope Definition', href: '/docs/how-to/scope-definition' },
  ],
  reference: [
    { name: 'ISO 27001 Controls', href: '/docs/reference/iso27001-controls' },
    { name: 'SOC 2 Criteria', href: '/docs/reference/soc2-criteria' },
    { name: 'Glossary', href: '/docs/reference/glossary' },
  ],
  explanation: [
    { name: 'ISO 27001 Overview', href: '/docs/explanation/iso27001-overview' },
  ],
  tools: [
    { name: 'Gap Assessment', href: '/gap-assessment' },
  ],
}

export default function DocLayout({ children, title, description }: DocLayoutProps) {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-background">
        <Header showSearch={true} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <nav className="sticky top-24 space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Tutorials</h3>
                  <ul className="space-y-2">
                    {navigation.tutorials.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">How-to Guides</h3>
                  <ul className="space-y-2">
                    {navigation.howTo.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Reference</h3>
                  <ul className="space-y-2">
                    {navigation.reference.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Explanation</h3>
                  <ul className="space-y-2">
                    {navigation.explanation.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Tools</h3>
                  <ul className="space-y-2">
                    {navigation.tools.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 max-w-4xl">
              <article className="prose prose-gray dark:prose-invert max-w-none">
                {children}
              </article>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </SearchProvider>
  )
}
