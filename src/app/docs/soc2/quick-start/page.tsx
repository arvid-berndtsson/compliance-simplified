import DocsLayout from "@/components/DocsLayout"
import QuickStartMDX from "./quick-start.mdx"

export default function SOC2QuickStartPage() {
  return (
    <DocsLayout
      title="SOC 2 Quick Start Guide"
      description="Get started with SOC 2 compliance in 30 days"
    >
      <QuickStartMDX />
    </DocsLayout>
  )
} 