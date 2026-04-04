'use client'

import DocsShell from '@/components/DocsShell'
import SBOMContent from './sbom.mdx'

export default function SBOMPage() {
  return (
    <DocsShell
      title="Software Bill of Materials (SBOM)"
      description="Understand what SBOMs are, why they matter for compliance, and how to implement them in your organization."
    >
      <SBOMContent />
    </DocsShell>
  )
}
