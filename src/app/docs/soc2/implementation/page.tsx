import DocsLayout from "@/components/DocsLayout"
import ImplementationMDX from "./implementation.mdx"

export default function SOC2ImplementationPage() {
  return (
    <DocsLayout
      title="SOC 2 Implementation Guide"
      description="Comprehensive guide to implementing SOC 2 Trust Services Criteria"
    >
      <ImplementationMDX />
    </DocsLayout>
  )
} 