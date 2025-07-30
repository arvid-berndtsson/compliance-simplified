'use client'

import DocLayout from '@/components/DocLayout'
import GlossaryContent from './glossary.mdx'

export default function GlossaryPage() {
  return (
    <DocLayout title="Compliance Glossary">
      <GlossaryContent />
    </DocLayout>
  )
} 