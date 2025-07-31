'use client'

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { SearchProvider } from './SearchProvider'
import CollapsibleSidebar from './CollapsibleSidebar'

interface DocsLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

const sidebarSections = [
  {
    key: 'iso27001',
    title: 'ISO 27001',
    items: [
      { name: 'Overview', href: '/docs/iso27001/overview' },
      { name: 'Quick Start', href: '/docs/iso27001/quick-start' },
      { name: 'Implementation Guide', href: '/docs/iso27001/implementation' },
      { name: 'Controls Reference', href: '/docs/iso27001/controls' },
      { name: 'Gap Assessment', href: '/gap-assessment' },
    ],
  },
  {
    key: 'soc2',
    title: 'SOC 2',
    items: [
      { name: 'Overview', href: '/docs/soc2/overview' },
      { name: 'Quick Start', href: '/docs/soc2/quick-start' },
      { name: 'Implementation Guide', href: '/docs/soc2/implementation' },
      { name: 'Trust Services Criteria', href: '/docs/soc2/criteria' },
    ],
  },
  {
    key: 'howTo',
    title: 'How-to Guides',
    items: [
      { name: 'Executive Buy-in', href: '/docs/how-to/executive-buyin' },
      { name: 'Scope Definition', href: '/docs/how-to/scope-definition' },
    ],
  },
  {
    key: 'reference',
    title: 'Reference',
    items: [
      { name: 'Glossary', href: '/docs/reference/glossary' },
      { name: 'Tools', href: '/docs/reference/tools' },
    ],
  },
]

export default function DocsLayout({ children, title, description }: DocsLayoutProps) {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-background">
        <Header showSearch={true} variant="docs" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <CollapsibleSidebar sections={sidebarSections} />
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