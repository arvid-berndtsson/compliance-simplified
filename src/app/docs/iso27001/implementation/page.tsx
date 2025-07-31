'use client'

import DocsLayout from "@/components/DocsLayout"
import ImplementationMDX from "./implementation.mdx"

export default function ISO27001ImplementationPage() {
  return (
    <DocsLayout
      title="ISO 27001 Implementation Guide"
      description="Comprehensive guide to implementing ISO 27001 Information Security Management System"
    >
      <ImplementationMDX />
    </DocsLayout>
  )
}
