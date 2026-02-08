export interface NavItem {
  label: string
  href: string
  cta?: boolean
}

export interface NavGroup {
  key: string
  title: string
  items: NavItem[]
}

export interface DocSection {
  key: string
  title: string
  items: NavItem[]
}

export const DOC_SECTIONS: DocSection[] = [
  {
    key: 'iso27001',
    title: 'ISO 27001',
    items: [
      { label: 'Overview', href: '/docs/iso27001/overview' },
      { label: 'Quick Start', href: '/docs/iso27001/quick-start' },
      { label: 'Implementation Guide', href: '/docs/iso27001/implementation' },
      { label: 'Controls Reference', href: '/docs/iso27001/controls' },
    ],
  },
  {
    key: 'soc2',
    title: 'SOC 2',
    items: [
      { label: 'Overview', href: '/docs/soc2/overview' },
      { label: 'Quick Start', href: '/docs/soc2/quick-start' },
      { label: 'Implementation Guide', href: '/docs/soc2/implementation' },
      { label: 'Trust Services Criteria', href: '/docs/soc2/criteria' },
    ],
  },
  {
    key: 'how-to',
    title: 'How-to Guides',
    items: [
      { label: 'Executive Buy-in', href: '/docs/how-to/executive-buyin' },
      { label: 'Scope Definition', href: '/docs/how-to/scope-definition' },
    ],
  },
  {
    key: 'tutorials',
    title: 'Tutorials',
    items: [
      { label: 'Quick Start', href: '/docs/tutorials/quick-start' },
      { label: 'ISO 27001 Walkthrough', href: '/docs/tutorials/iso27001-walkthrough' },
      { label: 'SOC 2 Walkthrough', href: '/docs/tutorials/soc2-walkthrough' },
    ],
  },
  {
    key: 'reference',
    title: 'Reference',
    items: [{ label: 'Glossary', href: '/docs/reference/glossary' }],
  },
]

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Docs', href: '/docs/iso27001/overview' },
  { label: 'Gap Assessment', href: '/gap-assessment', cta: true },
  { label: 'Tools', href: '/tools' },
  { label: 'Quiz', href: '/quiz' },
  { label: 'About', href: '/about' },
]

export const FOOTER_GROUPS: NavGroup[] = [
  {
    key: 'docs',
    title: 'Documentation',
    items: [
      { label: 'ISO 27001 Overview', href: '/docs/iso27001/overview' },
      { label: 'SOC 2 Overview', href: '/docs/soc2/overview' },
      { label: 'Quick Start Tutorial', href: '/docs/tutorials/quick-start' },
      { label: 'Glossary', href: '/docs/reference/glossary' },
    ],
  },
  {
    key: 'product',
    title: 'Product',
    items: [
      { label: 'Gap Assessment', href: '/gap-assessment' },
      { label: 'Tools', href: '/tools' },
      { label: 'Quiz', href: '/quiz' },
      { label: 'About', href: '/about' },
    ],
  },
]

export const DOC_PAGES = DOC_SECTIONS.flatMap((section) =>
  section.items.map((item) => ({ ...item, sectionKey: section.key, sectionTitle: section.title })),
)

export function findDocPage(pathname: string) {
  return DOC_PAGES.find((page) => pathname === page.href || pathname.startsWith(`${page.href}/`))
}

export function findDocNeighbors(pathname: string) {
  const activeIndex = DOC_PAGES.findIndex(
    (page) => pathname === page.href || pathname.startsWith(`${page.href}/`),
  )

  if (activeIndex < 0) {
    return { prev: null, next: null }
  }

  return {
    prev: activeIndex > 0 ? DOC_PAGES[activeIndex - 1] : null,
    next: activeIndex < DOC_PAGES.length - 1 ? DOC_PAGES[activeIndex + 1] : null,
  }
}
