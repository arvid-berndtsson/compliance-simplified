'use client'

import Link from 'next/link'
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import Header from './Header'
import Footer from './Footer'
import { SearchProvider } from './SearchProvider'
import CollapsibleSidebar from './CollapsibleSidebar'
import { DOC_SECTIONS, findDocNeighbors, findDocPage } from '@/config/navigation'

interface TocItem {
  id: string
  text: string
  level: number
}

interface DocsShellProps {
  children: ReactNode
  title: string
  description?: string
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function DocsShell({ children, title, description }: DocsShellProps) {
  const pathname = usePathname()
  const contentRef = useRef<HTMLElement>(null)
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeHeadingId, setActiveHeadingId] = useState<string>('')

  const currentPage = useMemo(() => findDocPage(pathname), [pathname])
  const { prev, next } = useMemo(() => findDocNeighbors(pathname), [pathname])
  const currentSection = useMemo(
    () => DOC_SECTIONS.find((section) => section.key === currentPage?.sectionKey),
    [currentPage?.sectionKey],
  )
  const isOverviewPage =
    pathname === '/docs/iso27001/overview' ||
    pathname === '/docs/iso27001/overview/' ||
    pathname === '/docs/soc2/overview' ||
    pathname === '/docs/soc2/overview/'

  const frameworkLabel =
    currentPage?.sectionKey === 'iso27001'
      ? 'ISO 27001'
      : currentPage?.sectionKey === 'soc2'
        ? 'SOC 2'
        : 'Shared Docs'

  const buildToc = useCallback(() => {
    const article = contentRef.current
    if (!article) return []

    const headings = Array.from(article.querySelectorAll('h2, h3')) as HTMLHeadingElement[]
    const seen = new Map<string, number>()

    return headings
      .map((heading) => {
        if (heading.id) {
          return {
            id: heading.id,
            text: heading.textContent || '',
            level: heading.tagName === 'H2' ? 2 : 3,
          }
        }

        const base = slugify(heading.textContent || '') || 'section'
        const count = seen.get(base) ?? 0
        seen.set(base, count + 1)

        const id = count === 0 ? base : `${base}-${count + 1}`
        heading.id = id

        return {
          id,
          text: heading.textContent || '',
          level: heading.tagName === 'H2' ? 2 : 3,
        }
      })
      .filter((item) => item.text.trim().length > 0)
  }, [])

  useEffect(() => {
    let frameId = 0
    const article = contentRef.current
    if (!article) return

    const refreshToc = () => {
      setTocItems(buildToc())
    }

    frameId = window.requestAnimationFrame(refreshToc)

    const observer = new MutationObserver(() => {
      refreshToc()
    })

    observer.observe(article, { childList: true, subtree: true })
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frameId)
    }
  }, [buildToc, children, pathname])

  useEffect(() => {
    if (tocItems.length === 0) {
      setActiveHeadingId('')
      return
    }

    const article = contentRef.current
    if (!article) return

    const headingElements = tocItems
      .map((item) => article.querySelector(`#${CSS.escape(item.id)}`) as HTMLElement | null)
      .filter((element): element is HTMLElement => element !== null)

    if (headingElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]?.target?.id) {
          setActiveHeadingId(visible[0].target.id)
          return
        }

        const firstPastTop = headingElements.find((element) => element.getBoundingClientRect().top >= 120)
        setActiveHeadingId(firstPastTop?.id ?? headingElements[headingElements.length - 1].id)
      },
      {
        rootMargin: '-96px 0px -70% 0px',
        threshold: [0, 1],
      },
    )

    headingElements.forEach((element) => observer.observe(element))
    setActiveHeadingId(headingElements[0].id)

    return () => observer.disconnect()
  }, [tocItems])

  return (
    <SearchProvider>
      <div className="min-h-screen bg-background">
        <Header showSearch={true} />

        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
              {frameworkLabel}
            </span>
            <Link href="/docs/iso27001/overview" className="hover:text-foreground">
              Docs
            </Link>
            <span aria-hidden="true">/</span>
            <span>{currentPage?.sectionTitle ?? 'Framework'}</span>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{currentPage?.label ?? title}</span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[16rem_minmax(0,1fr)_15rem]">
            <aside className="hidden lg:block">
              <CollapsibleSidebar sections={DOC_SECTIONS} />
            </aside>

            <main>
              <header className="mb-8 border-b border-border/60 pb-6">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
                {description && (
                  <p className="mt-3 max-w-3xl text-lg text-muted-foreground">{description}</p>
                )}
                {currentSection && (
                  <nav className="mt-5 flex flex-wrap gap-2">
                    {currentSection.items.map((item) => {
                      const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                            active
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground hover:bg-muted/70'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </nav>
                )}
                <div className="mt-5 grid gap-2 rounded-xl border border-border/60 bg-muted/20 p-4 sm:grid-cols-3">
                  <Link href="/gap-assessment" className="rounded-lg bg-background px-3 py-2 text-sm hover:bg-muted">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Quick Check</p>
                    <p className="font-medium text-foreground">Run Gap Assessment</p>
                  </Link>
                  <Link href="/tools" className="rounded-lg bg-background px-3 py-2 text-sm hover:bg-muted">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Templates</p>
                    <p className="font-medium text-foreground">Open Tools</p>
                  </Link>
                  <Link href="/quiz" className="rounded-lg bg-background px-3 py-2 text-sm hover:bg-muted">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Learning</p>
                    <p className="font-medium text-foreground">Take Quiz</p>
                  </Link>
                </div>
                {isOverviewPage && (
                  <div className="mt-4 rounded-xl border border-border/60 bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Start Here</p>
                    {frameworkLabel === 'ISO 27001' ? (
                      <ol className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>1. Skim this overview for scope and control model.</li>
                        <li>2. Run the gap assessment to identify priority gaps.</li>
                        <li>3. Use quick start to sequence your first 30 days.</li>
                      </ol>
                    ) : (
                      <ol className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>1. Skim this overview for criteria and report type.</li>
                        <li>2. Review trust services criteria for your scope.</li>
                        <li>3. Use implementation guide to collect evidence fast.</li>
                      </ol>
                    )}
                  </div>
                )}
              </header>

              <details className="mb-6 rounded-lg border border-border/60 bg-muted/20 lg:hidden" open>
                <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-foreground">
                  On this page ({tocItems.length})
                </summary>
                <nav className="border-t border-border/60 px-4 py-3">
                  {tocItems.length === 0 && (
                    <p className="text-sm text-muted-foreground">No section headings available.</p>
                  )}
                  <ul className="space-y-2">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`block text-sm hover:text-foreground ${
                            activeHeadingId === item.id
                              ? 'font-medium text-primary'
                              : 'text-muted-foreground'
                          } ${
                            item.level === 3 ? 'pl-4' : ''
                          }`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </details>

              <article ref={contentRef} className="prose prose-gray max-w-none dark:prose-invert">
                {children}
              </article>

              <nav className="mt-12 grid gap-3 border-t border-border/60 pt-6 sm:grid-cols-2">
                {prev ? (
                  <Link
                    href={prev.href}
                    className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3 hover:bg-muted/40"
                  >
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Previous</p>
                    <p className="mt-1 font-medium text-foreground">{prev.label}</p>
                  </Link>
                ) : (
                  <div />
                )}

                {next ? (
                  <Link
                    href={next.href}
                    className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3 text-left hover:bg-muted/40"
                  >
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Next</p>
                    <p className="mt-1 font-medium text-foreground">{next.label}</p>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
              <div className="mt-6 rounded-xl border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Need a quick check instead of more reading?
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    href="/gap-assessment"
                    className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                  >
                    Run Gap Assessment
                  </Link>
                  <Link
                    href="/tools"
                    className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    Open Tools
                  </Link>
                </div>
              </div>
            </main>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-lg border border-border/60 bg-muted/20 p-4">
                <div className="mb-4 rounded-lg border border-border/60 bg-background p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Quick Checks</p>
                  <div className="mt-2 space-y-2">
                    <Link href="/gap-assessment" className="block text-sm font-medium text-foreground hover:text-primary">
                      Run Gap Assessment
                    </Link>
                    <Link href="/tools" className="block text-sm font-medium text-foreground hover:text-primary">
                      Open Tools
                    </Link>
                    <Link href="/quiz" className="block text-sm font-medium text-foreground hover:text-primary">
                      Take Quiz
                    </Link>
                  </div>
                </div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  On this page
                </p>
                {tocItems.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No section headings available.</p>
                ) : (
                  <ul className="space-y-2">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`block text-sm hover:text-foreground ${
                            activeHeadingId === item.id
                              ? 'font-medium text-primary'
                              : 'text-muted-foreground'
                          } ${
                            item.level === 3 ? 'pl-4' : ''
                          }`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </div>
    </SearchProvider>
  )
}
