'use client'

import DocsShell from '@/components/DocsShell'
import ISO27001OverviewContent from './iso27001-overview.mdx'

export default function ISO27001OverviewPage() {
  return (
    <DocsShell
      title="ISO 27001 Overview"
      description="Understand ISO 27001 fundamentals, certification scope, and what implementation requires."
    >
      <ISO27001OverviewContent />
    </DocsShell>
  )
} 
