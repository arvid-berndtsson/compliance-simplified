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
  },
  {
    id: 'gdpr-overview',
    title: 'GDPR: General Data Protection Regulation',
    content: 'GDPR is the European Union comprehensive data privacy law for protecting personal data of individuals in the EU/EEA.',
    url: '/docs/gdpr/overview',
    category: 'GDPR',
    excerpt: 'The General Data Protection Regulation (GDPR) is the EU comprehensive data privacy law. It sets strict rules for how organizations collect, store, process, and share personal data.',
    score: 0
  },
  {
    id: 'gdpr-quick-start',
    title: 'GDPR Quick Start Guide',
    content: 'Get started with GDPR compliance in 30 days with this action plan covering data mapping, documentation, and processes.',
    url: '/docs/gdpr/quick-start',
    category: 'GDPR',
    excerpt: 'A 30-day action plan to establish GDPR fundamentals, covering data inventory, legal basis review, privacy policies, data subject rights, and security measures.',
    score: 0
  },
  {
    id: 'gdpr-implementation',
    title: 'GDPR Implementation Guide',
    content: 'Complete step-by-step guide to building and maintaining GDPR compliance across your organization.',
    url: '/docs/gdpr/implementation',
    category: 'GDPR',
    excerpt: 'Comprehensive GDPR implementation covering governance, data mapping, documentation, technical measures, training, breach response, and ongoing compliance.',
    score: 0
  },
  {
    id: 'gdpr-articles',
    title: 'GDPR Key Articles Reference',
    content: 'Detailed reference for the most important GDPR articles organized by theme.',
    url: '/docs/gdpr/articles',
    category: 'GDPR',
    excerpt: 'Reference guide covering GDPR scope, principles, data subject rights, controller and processor obligations, security, breach notification, international transfers, and enforcement.',
    score: 0
  },
  {
    id: 'sbom',
    title: 'Software Bill of Materials (SBOM)',
    content: 'A Software Bill of Materials is a formal inventory of all components, libraries, and dependencies in a software product.',
    url: '/docs/explanation/sbom',
    category: 'Concepts',
    excerpt: 'Learn what SBOMs are, why they matter for compliance and supply chain security, the main formats (SPDX, CycloneDX), how to generate them, and how they support ISO 27001, SOC 2, and GDPR.',
    score: 0
  }
] 