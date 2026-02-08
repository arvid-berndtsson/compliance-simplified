'use client'

import DocsShell from "@/components/DocsShell"
import QuickStartMDX from "./quick-start.mdx"

export default function ISO27001QuickStartPage() {
  return (
    <DocsShell
      title="ISO 27001 Quick Start Guide"
      description="Get started with ISO 27001 implementation in 30 days"
    >
      <QuickStartMDX />
    </DocsShell>
  )
} 