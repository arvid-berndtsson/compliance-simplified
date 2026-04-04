'use client'

import DocsShell from '@/components/DocsShell'
import ImplementationMDX from './implementation.mdx'

export default function GDPRImplementationPage() {
  return (
    <DocsShell
      title="GDPR Implementation Guide"
      description="Complete step-by-step guide to building and maintaining GDPR compliance"
    >
      <ImplementationMDX />
    </DocsShell>
  )
}
