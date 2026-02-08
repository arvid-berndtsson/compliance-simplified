'use client'

import DocsShell from "@/components/DocsShell"
import CriteriaMDX from "./criteria.mdx"

export default function SOC2CriteriaPage() {
  return (
    <DocsShell
      title="SOC 2 Trust Services Criteria"
      description="Comprehensive reference for all SOC 2 Trust Services Criteria"
    >
      <CriteriaMDX />
    </DocsShell>
  )
} 