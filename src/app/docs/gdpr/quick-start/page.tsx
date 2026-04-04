'use client'

import DocsShell from '@/components/DocsShell'
import QuickStartMDX from './quick-start.mdx'

export default function GDPRQuickStartPage() {
  return (
    <DocsShell
      title="GDPR Quick Start Guide"
      description="Get started with GDPR compliance in 30 days"
    >
      <QuickStartMDX />
    </DocsShell>
  )
}
