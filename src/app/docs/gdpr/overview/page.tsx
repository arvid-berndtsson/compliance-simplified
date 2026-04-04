'use client'

import DocsShell from '@/components/DocsShell'
import GDPROverviewContent from './gdpr-overview.mdx'

export default function GDPROverviewPage() {
  return (
    <DocsShell
      title="GDPR Overview"
      description="Understand GDPR fundamentals, core principles, data subject rights, and what compliance requires."
    >
      <GDPROverviewContent />
    </DocsShell>
  )
}
