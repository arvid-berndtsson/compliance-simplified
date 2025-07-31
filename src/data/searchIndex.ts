export interface SearchResult {
  id: string
  title: string
  content: string
  url: string
  category: string
  excerpt: string
  score: number
}

// Search index - this would typically be generated at build time
export const searchIndex: SearchResult[] = [
  {
    id: 'iso27001-overview',
    title: 'ISO 27001: Information Security Management System',
    content: 'ISO 27001 is the international standard for information security management systems (ISMS).',
    url: '/docs/iso27001/overview',
    category: 'ISO 27001',
    excerpt: 'ISO 27001 is the international standard for information security management systems (ISMS). It provides a framework for establishing, implementing, maintaining, and continually improving information security within an organization.',
    score: 0
  },
  {
    id: 'soc2-overview',
    title: 'SOC 2: Trust Services Criteria',
    content: 'SOC 2 is a framework for evaluating and reporting on controls at service organizations.',
    url: '/docs/soc2/overview',
    category: 'SOC 2',
    excerpt: 'SOC 2 (System and Organization Controls 2) is a framework developed by the AICPA for evaluating and reporting on the controls at service organizations that are relevant to security, availability, processing integrity, confidentiality, and privacy.',
    score: 0
  },
  {
    id: 'executive-buyin',
    title: 'Executive Buy-in Strategies',
    content: 'Strategies for gaining executive support and securing necessary resources.',
    url: '/docs/how-to/executive-buyin',
    category: 'How-to Guides',
    excerpt: 'Learn how to effectively communicate the value of compliance to executives and secure the resources you need for successful implementation.',
    score: 0
  },
  {
    id: 'scope-definition',
    title: 'Scope Definition',
    content: 'Define your compliance boundaries and scope.',
    url: '/docs/how-to/scope-definition',
    category: 'How-to Guides',
    excerpt: 'Properly defining your compliance scope is crucial for success. Learn how to identify what\'s in and out of scope for your compliance program.',
    score: 0
  },
  {
    id: 'glossary',
    title: 'Compliance Glossary',
    content: 'Definitions of key compliance and security terms.',
    url: '/docs/reference/glossary',
    category: 'Reference',
    excerpt: 'Comprehensive glossary of compliance and information security terms to help you understand the language of compliance.',
    score: 0
  }
] 