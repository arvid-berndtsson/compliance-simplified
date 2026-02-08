'use client'

import DocsShell from '@/components/DocsShell'
import SOC2OverviewContent from './soc2-overview.mdx'

export default function SOC2OverviewPage() {
  return (
    <DocsShell
      title="SOC 2 Overview"
      description="Learn the SOC 2 model, trust criteria, and how audit readiness maps to operational controls."
    >
      <SOC2OverviewContent />
    </DocsShell>
  )
} 
