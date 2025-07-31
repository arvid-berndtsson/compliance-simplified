'use client'

import DocsLayout from "@/components/DocsLayout"
import CriteriaMDX from "./criteria.mdx"

export default function SOC2CriteriaPage() {
  return (
    <DocsLayout
      title="SOC 2 Trust Services Criteria"
      description="Comprehensive reference for all SOC 2 Trust Services Criteria"
    >
      <CriteriaMDX />
    </DocsLayout>
  )
} 