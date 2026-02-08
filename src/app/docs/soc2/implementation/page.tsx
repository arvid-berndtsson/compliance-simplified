'use client'

import DocsShell from "@/components/DocsShell"
import ImplementationMDX from "./implementation.mdx"

export default function SOC2ImplementationPage() {
  return (
    <DocsShell
      title="SOC 2 Implementation Guide"
      description="Comprehensive guide to implementing SOC 2 Trust Services Criteria"
    >
      <ImplementationMDX />
    </DocsShell>
  )
} 