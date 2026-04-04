'use client'

import DocsShell from '@/components/DocsShell'
import ArticlesMDX from './articles.mdx'

export default function GDPRArticlesPage() {
  return (
    <DocsShell
      title="GDPR Key Articles Reference"
      description="Detailed reference for the most important GDPR articles, organized by theme."
    >
      <ArticlesMDX />
    </DocsShell>
  )
}
