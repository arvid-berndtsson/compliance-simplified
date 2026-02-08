'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useSearch } from './SearchProvider'
import SearchResults from './SearchResults'
import { DOC_SECTIONS, PRIMARY_NAV } from '@/config/navigation'

interface HeaderProps {
  showSearch?: boolean
}

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Header({ showSearch = false }: HeaderProps) {
  const pathname = usePathname()
  const { searchQuery, setSearchQuery } = useSearch()
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedDocGroups, setExpandedDocGroups] = useState<Set<string>>(new Set(['iso27001']))

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const activeDocGroup = DOC_SECTIONS.find((section) =>
      section.items.some((item) => isActivePath(pathname, item.href)),
    )

    if (!activeDocGroup) return

    setExpandedDocGroups((prev) => {
      const next = new Set(prev)
      next.add(activeDocGroup.key)
      return next
    })
  }, [pathname])

  const toggleDocGroup = (key: string) => {
    setExpandedDocGroups((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/img/logo.svg" alt="Compliance Simplified Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-lg font-semibold">Compliance Simplified</span>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg
                  className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <SearchResults />
              </div>
            )}

            <nav className="flex items-center gap-4">
              {PRIMARY_NAV.map((item) => {
                const active = isActivePath(pathname, item.href)

                if (item.cta) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                        active
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/90 text-primary-foreground hover:bg-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm transition-colors ${
                      active ? 'font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-md border border-border p-2 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/30"
            aria-label="Close navigation overlay"
          />
          <div className="relative ml-auto h-full w-[min(22rem,88vw)] overflow-y-auto border-l border-border/60 bg-background p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Navigation</p>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-border px-2 py-1 text-sm text-muted-foreground"
              >
                Close
              </button>
            </div>
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg
                  className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <SearchResults />
              </div>
            )}

            <nav className="mt-4 space-y-2">
              {PRIMARY_NAV.map((item) => {
                const active = isActivePath(pathname, item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm ${
                      item.cta
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : active
                          ? 'bg-muted font-semibold text-foreground'
                          : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-4 rounded-lg border border-border/60">
              <p className="border-b border-border/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Docs Sections
              </p>
              {DOC_SECTIONS.map((section) => {
                const expanded = expandedDocGroups.has(section.key)
                return (
                  <div key={section.key} className="border-b border-border/40 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => toggleDocGroup(section.key)}
                      className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-foreground"
                    >
                      <span>{section.title}</span>
                      <span>{expanded ? '-' : '+'}</span>
                    </button>
                    {expanded && (
                      <ul className="space-y-1 px-3 pb-3">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block rounded px-2 py-1.5 text-sm ${
                                isActivePath(pathname, item.href)
                                  ? 'bg-primary/10 font-medium text-primary'
                                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
