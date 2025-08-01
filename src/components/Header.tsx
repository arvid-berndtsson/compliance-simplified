'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useSearch } from './SearchProvider'
import SearchResults from './SearchResults'

interface HeaderProps {
  showSearch?: boolean
  variant?: 'landing' | 'docs'
}

export default function Header({ showSearch = false, variant = 'landing' }: HeaderProps) {
  const { searchQuery, setSearchQuery } = useSearch()
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/img/logo.svg" alt="Compliance Simplified Logo" width={32} height={32} className="h-8 w-8" />
              <span className="font-semibold text-lg">Compliance Simplified</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
            
            <nav className="hidden md:flex items-center space-x-6">
              {variant === 'landing' ? (
                <>
                  <Link
                    href="/docs/iso27001/overview"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ISO 27001
                  </Link>
                  <Link
                    href="/docs/soc2/overview"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    SOC 2
                  </Link>
                  <Link
                    href="/gap-assessment"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Gap Assessment
                  </Link>
                  <Link
                    href="/tools"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Tools
                  </Link>
                  <Link
                    href="/quiz"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Quiz
                  </Link>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/docs/iso27001/overview"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ISO 27001
                  </Link>
                  <Link
                    href="/docs/soc2/overview"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    SOC 2
                  </Link>
                  <Link
                    href="/gap-assessment"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Gap Assessment
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
} 