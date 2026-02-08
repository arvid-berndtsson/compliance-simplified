'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface SidebarItem {
  label: string
  href: string
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
  key: string
}

interface CollapsibleSidebarProps {
  sections: SidebarSection[]
}

export default function CollapsibleSidebar({ sections }: CollapsibleSidebarProps) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  // Determine which section should be expanded based on current path
  useEffect(() => {
    const currentSection = sections.find(section =>
      section.items.some(item => pathname.startsWith(item.href))
    )
    
    if (currentSection) {
      setExpandedSections(new Set([currentSection.key]))
    }
  }, [pathname, sections])

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sectionKey)) {
        newSet.delete(sectionKey)
      } else {
        newSet.add(sectionKey)
      }
      return newSet
    })
  }

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav className="sticky top-24 space-y-4">
      {sections.map((section) => {
        const isExpanded = expandedSections.has(section.key)
        const hasActiveItem = section.items.some(item => isActive(item.href))
        
        return (
          <div key={section.key} className="border border-border/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.key)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                hasActiveItem 
                  ? 'bg-primary/10 text-primary font-semibold' 
                  : 'bg-muted/30 hover:bg-muted/50 text-foreground'
              }`}
            >
              <span className="font-semibold">{section.title}</span>
              <svg
                className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isExpanded && (
              <div className="border-t border-border/50">
                <ul className="py-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(item.href)
                            ? 'text-primary bg-primary/5 font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
} 
