"use client";

import { useState } from 'react';
import LandingLayout from "@/components/LandingLayout";
import { CONTACT_EMAIL } from '@/config/constants';
import ISO27001Quiz from '@/components/ISO27001Quiz';

interface Pricing {
  min: number;
  max: number;
  model: 'per user/month' | 'per user/year' | 'per month' | 'per year' | 'per GB/month' | 'free';
  currency?: string;
}

interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  pricing: Pricing;
  website: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
  tags: string[];
}

const tools: Tool[] = [
  // Governance & Policy Management
  {
    id: 'policy-management-1',
    name: 'PolicyHub',
    category: 'Governance & Policy Management',
    description: 'Comprehensive policy management platform for creating, distributing, and tracking security policies.',
    features: [
      'Policy creation and templating',
      'Automated distribution and acknowledgment tracking',
      'Version control and change management',
      'Compliance mapping to ISO 27001',
      'Employee training integration'
    ],
    pricing: {
      min: 5,
      max: 15,
      model: 'per user/month',
      currency: 'USD'
    },
    website: 'https://policyhub.com',
    pros: [
      'Excellent policy templating',
      'Strong compliance mapping',
      'Good user interface',
      'Comprehensive reporting'
    ],
    cons: [
      'Can be expensive for large organizations',
      'Steep learning curve',
      'Limited customization options'
    ],
    bestFor: 'Medium to large organizations needing comprehensive policy management',
    rating: 4.5,
    tags: ['policy', 'governance', 'compliance', 'training']
  },
  {
    id: 'policy-management-2',
    name: 'ComplianceManager',
    category: 'Governance & Policy Management',
    description: 'Streamlined compliance management tool focused on ISO 27001 and other security frameworks.',
    features: [
      'ISO 27001 control mapping',
      'Policy lifecycle management',
      'Risk assessment tools',
      'Audit trail and reporting',
      'Integration with popular tools'
    ],
    pricing: {
      min: 3,
      max: 10,
      model: 'per user/month',
      currency: 'USD'
    },
    website: 'https://compliancemanager.io',
    pros: [
      'Affordable pricing',
      'Easy to use',
      'Good ISO 27001 focus',
      'Quick implementation'
    ],
    cons: [
      'Limited advanced features',
      'Basic reporting',
      'Fewer integrations'
    ],
    bestFor: 'Small to medium organizations starting their compliance journey',
    rating: 4.0,
    tags: ['compliance', 'iso27001', 'policy', 'risk']
  },
  {
    id: 'policy-management-3',
    name: 'Vanta',
    category: 'Governance & Policy Management',
    description: 'A widely used automated compliance platform that helps companies achieve and maintain compliance with ISO 27001, SOC 2, and other frameworks. Designed for enterprise-level automation and support.',
    features: [
      'Automated compliance monitoring',
      'Real-time control testing',
      'Continuous monitoring and alerts',
      'Pre-built compliance frameworks',
      'Integration with 300+ tools',
      'Automated evidence collection',
      'Custom control mapping',
      'Audit-ready reporting'
    ],
    pricing: {
      min: 25000,
      max: 150000,
      model: 'per year',
      currency: 'USD'
    },
    website: 'https://vanta.com',
    pros: [
      'Community favorite and industry leader',
      'Excellent automation capabilities',
      'Wide range of framework support',
      'Strong integration ecosystem',
      'Great customer support',
      'Automated evidence collection'
    ],
    cons: [
      'Expensive for small organizations',
      'Requires technical setup',
      'Can be complex initially'
    ],
    bestFor: 'Enterprise organizations and well-funded startups serious about compliance automation',
    rating: 4.9,
    tags: ['compliance', 'automation', 'community-favorite', 'iso27001', 'soc2', 'enterprise']
  },

  // Risk Assessment & Management
  {
    id: 'risk-management-1',
    name: 'RiskLens',
    category: 'Risk Assessment & Management',
    description: 'Quantitative risk analysis platform using FAIR methodology for cybersecurity risk management.',
    features: [
      'FAIR methodology implementation',
      'Quantitative risk analysis',
      'Scenario modeling',
      'Risk reporting and dashboards',
      'Integration with GRC tools'
    ],
    pricing: {
      min: 25000,
      max: 100000,
      model: 'per year',
      currency: 'USD'
    },
    website: 'https://risklens.com',
    pros: [
      'Industry-leading quantitative analysis',
      'FAIR methodology compliance',
      'Excellent reporting capabilities',
      'Strong enterprise features'
    ],
    cons: [
      'Very expensive',
      'Complex implementation',
      'Requires specialized training'
    ],
    bestFor: 'Large enterprises with mature risk management programs',
    rating: 4.8,
    tags: ['risk', 'fair', 'quantitative', 'enterprise']
  },
  {
    id: 'risk-management-2',
    name: 'RiskWatch',
    category: 'Risk Assessment & Management',
    description: 'Comprehensive risk management platform with built-in ISO 27001 controls and assessments.',
    features: [
      'ISO 27001 control library',
      'Risk assessment templates',
      'Automated risk scoring',
      'Compliance reporting',
      'Third-party risk management'
    ],
    pricing: {
      min: 8,
      max: 20,
      model: 'per user/month',
      currency: 'USD'
    },
    website: 'https://riskwatch.com',
    pros: [
      'Good ISO 27001 integration',
      'Comprehensive risk features',
      'Reasonable pricing',
      'Easy to implement'
    ],
    cons: [
      'Interface could be more modern',
      'Limited advanced analytics',
      'Basic integration options'
    ],
    bestFor: 'Organizations needing comprehensive risk management with ISO 27001 focus',
    rating: 4.2,
    tags: ['risk', 'iso27001', 'assessment', 'compliance']
  },

  // Access Control & Identity Management
  {
    id: 'access-control-1',
    name: 'Okta',
    category: 'Access Control & Identity Management',
    description: 'Leading identity and access management platform with comprehensive security features.',
    features: [
      'Single sign-on (SSO)',
      'Multi-factor authentication (MFA)',
      'User lifecycle management',
      'API access management',
      'Advanced security policies'
    ],
    pricing: {
      min: 2,
      max: 15,
      model: 'per user/month',
      currency: 'USD'
    },
    website: 'https://okta.com',
    pros: [
      'Industry leader in IAM',
      'Excellent security features',
      'Wide range of integrations',
      'Strong enterprise support'
    ],
    cons: [
      'Can be complex to configure',
      'Expensive for small organizations',
      'Requires technical expertise'
    ],
    bestFor: 'Organizations of all sizes needing robust identity management',
    rating: 4.7,
    tags: ['iam', 'sso', 'mfa', 'identity', 'access']
  },
  {
    id: 'access-control-2',
    name: 'Auth0',
    category: 'Access Control & Identity Management',
    description: 'Developer-friendly identity platform with flexible authentication and authorization.',
    features: [
      'Custom authentication flows',
      'Social login integration',
      'API security',
      'User management',
      'Advanced security features'
    ],
    pricing: {
      min: 30,
      max: 750,
      model: 'per month',
      currency: 'USD'
    },
    website: 'https://auth0.com',
    pros: [
      'Developer-friendly',
      'Flexible authentication options',
      'Good documentation',
      'Reasonable pricing'
    ],
    cons: [
      'Requires development resources',
      'Less enterprise-focused',
      'Limited out-of-the-box features'
    ],
    bestFor: 'Organizations with development teams and custom authentication needs',
    rating: 4.4,
    tags: ['authentication', 'developer', 'api', 'identity']
  },

  // Security Monitoring & SIEM
  {
    id: 'siem-1',
    name: 'Splunk Enterprise Security',
    category: 'Security Monitoring & SIEM',
    description: 'Enterprise-grade SIEM platform with advanced threat detection and response capabilities.',
    features: [
      'Real-time threat detection',
      'Advanced analytics and ML',
      'Incident response automation',
      'Compliance reporting',
      'Threat intelligence integration'
    ],
    pricing: {
      min: 2000,
      max: 4500,
      model: 'per GB/month',
      currency: 'USD'
    },
    website: 'https://splunk.com',
    pros: [
      'Industry-leading SIEM',
      'Advanced analytics capabilities',
      'Excellent threat detection',
      'Comprehensive compliance features'
    ],
    cons: [
      'Very expensive',
      'Complex to implement and manage',
      'Requires significant resources'
    ],
    bestFor: 'Large enterprises with mature security operations',
    rating: 4.8,
    tags: ['siem', 'security', 'monitoring', 'threat', 'enterprise']
  },
  {
    id: 'siem-2',
    name: 'AlienVault USM',
    category: 'Security Monitoring & SIEM',
    description: 'Unified security management platform with built-in threat intelligence and compliance reporting.',
    features: [
      'Unified security monitoring',
      'Built-in threat intelligence',
      'Compliance reporting',
      'Asset discovery',
      'Vulnerability assessment'
    ],
    pricing: {
      min: 1075,
      max: 2995,
      model: 'per month',
      currency: 'USD'
    },
    website: 'https://alienvault.com',
    pros: [
      'All-in-one security platform',
      'Good threat intelligence',
      'Reasonable pricing',
      'Easy to deploy'
    ],
    cons: [
      'Limited advanced features',
      'Basic analytics',
      'Less scalable than enterprise solutions'
    ],
    bestFor: 'Small to medium organizations needing comprehensive security monitoring',
    rating: 4.3,
    tags: ['siem', 'security', 'monitoring', 'threat', 'compliance']
  },

  // Vulnerability Management
  {
    id: 'vulnerability-1',
    name: 'Qualys Vulnerability Management',
    category: 'Vulnerability Management',
    description: 'Cloud-based vulnerability management platform with comprehensive scanning and reporting.',
    features: [
      'Automated vulnerability scanning',
      'Asset discovery and inventory',
      'Risk scoring and prioritization',
      'Compliance reporting',
      'Integration with security tools'
    ],
    pricing: {
      min: 4500,
      max: 25000,
      model: 'per year',
      currency: 'USD'
    },
    website: 'https://qualys.com',
    pros: [
      'Comprehensive vulnerability coverage',
      'Excellent reporting',
      'Cloud-based deployment',
      'Strong compliance features'
    ],
    cons: [
      'Expensive for small organizations',
      'Complex pricing model',
      'Requires security expertise'
    ],
    bestFor: 'Organizations needing comprehensive vulnerability management',
    rating: 4.6,
    tags: ['vulnerability', 'scanning', 'assessment', 'compliance']
  },
  {
    id: 'vulnerability-2',
    name: 'OpenVAS',
    category: 'Vulnerability Management',
    description: 'Open-source vulnerability scanner with comprehensive security testing capabilities.',
    features: [
      'Free vulnerability scanning',
      'Regular security updates',
      'Custom scan configurations',
      'Detailed reporting',
      'Community support'
    ],
    pricing: {
      min: 0,
      max: 0,
      model: 'free',
      currency: 'USD'
    },
    website: 'https://openvas.org',
    pros: [
      'Completely free',
      'Regular updates',
      'Comprehensive scanning',
      'Open source flexibility'
    ],
    cons: [
      'Requires technical expertise',
      'Limited support',
      'Basic reporting',
      'Manual configuration needed'
    ],
    bestFor: 'Organizations with technical expertise and budget constraints',
    rating: 4.0,
    tags: ['vulnerability', 'open-source', 'free', 'scanning']
  },

  // Incident Response
  {
    id: 'incident-response-1',
    name: 'PagerDuty',
    category: 'Incident Response',
    description: 'Incident management platform with automated response and escalation capabilities.',
    features: [
      'Real-time incident detection',
      'Automated escalation',
      'On-call scheduling',
      'Incident response automation',
      'Integration with monitoring tools'
    ],
    pricing: {
      min: 15,
      max: 75,
      model: 'per user/month',
      currency: 'USD'
    },
    website: 'https://pagerduty.com',
    pros: [
      'Excellent incident management',
      'Wide range of integrations',
      'Good automation features',
      'Reliable and scalable'
    ],
    cons: [
      'Can be expensive for large teams',
      'Complex setup',
      'Requires process definition'
    ],
    bestFor: 'Organizations needing reliable incident response and on-call management',
    rating: 4.5,
    tags: ['incident', 'response', 'on-call', 'automation']
  },
  {
    id: 'incident-response-2',
    name: 'ServiceNow Security Operations',
    category: 'Incident Response',
    description: 'Comprehensive security operations platform with incident response and threat intelligence.',
    features: [
      'Security incident management',
      'Threat intelligence integration',
      'Automated response workflows',
      'Compliance reporting',
      'Integration with security tools'
    ],
    pricing: {
      min: 75,
      max: 300,
      model: 'per user/month',
      currency: 'USD'
    },
    website: 'https://servicenow.com',
    pros: [
      'Comprehensive security operations',
      'Excellent workflow automation',
      'Strong enterprise features',
      'Good integration capabilities'
    ],
    cons: [
      'Very expensive',
      'Complex implementation',
      'Requires significant customization'
    ],
    bestFor: 'Large enterprises with mature security operations',
    rating: 4.7,
    tags: ['incident', 'security', 'operations', 'enterprise']
  },

  // Training & Awareness
  {
    id: 'training-1',
    name: 'KnowBe4',
    category: 'Training & Awareness',
    description: 'Security awareness training platform with phishing simulation and compliance training.',
    features: [
      'Security awareness training',
      'Phishing simulation',
      'Compliance training modules',
      'Progress tracking',
      'Automated training campaigns'
    ],
    pricing: {
      min: 4,
      max: 12,
      model: 'per user/month',
      currency: 'USD'
    },
    website: 'https://knowbe4.com',
    pros: [
      'Comprehensive training content',
      'Excellent phishing simulation',
      'Good compliance focus',
      'Easy to implement'
    ],
    cons: [
      'Can be repetitive',
      'Limited customization',
      'Basic reporting'
    ],
    bestFor: 'Organizations needing comprehensive security awareness training',
    rating: 4.4,
    tags: ['training', 'awareness', 'phishing', 'compliance']
  },
  {
    id: 'training-2',
    name: 'SANS Security Awareness',
    category: 'Training & Awareness',
    description: 'Professional security awareness training with industry-leading content and expertise.',
    features: [
      'Professional training content',
      'Customizable training programs',
      'Compliance reporting',
      'Expert-led training',
      'Ongoing content updates'
    ],
    pricing: {
      min: 7,
      max: 20,
      model: 'per user/month',
      currency: 'USD'
    },
    website: 'https://sans.org',
    pros: [
      'Industry-leading content',
      'Expert-led training',
      'Comprehensive coverage',
      'Professional quality'
    ],
    cons: [
      'More expensive than alternatives',
      'Less automated',
      'Requires more management'
    ],
    bestFor: 'Organizations prioritizing high-quality, professional training',
    rating: 4.6,
    tags: ['training', 'awareness', 'professional', 'expert']
  }
];

const categories = [
  'Governance & Policy Management',
  'Risk Assessment & Management',
  'Access Control & Identity Management',
  'Security Monitoring & SIEM',
  'Vulnerability Management',
  'Incident Response',
  'Training & Awareness'
];

// Utility functions for pricing operations
const normalizePrice = (pricing: Pricing): number => {
  if (pricing.model === 'free') return 0;
  const monthlyFactor = pricing.model.includes('year') ? 1 / 12 : 1;
  return pricing.min * monthlyFactor;
};

const formatPricing = (pricing: Pricing): string => {
  if (pricing.model === 'free') {
    return 'Free';
  }
  
  const currency = pricing.currency || 'USD';
  const symbol = currency === 'USD' ? '$' : currency;
  
  if (pricing.min === pricing.max) {
    return `${symbol}${pricing.min.toLocaleString()}/${pricing.model}`;
  }
  
  return `${symbol}${pricing.min.toLocaleString()}-${pricing.max.toLocaleString()}/${pricing.model}`;
};

const getPriceColor = (pricing: Pricing) => {
  if (pricing.model === 'free') return 'text-green-600';
  if (pricing.min < 10) return 'text-blue-600';
  if (pricing.min < 50) return 'text-yellow-600';
  return 'text-red-600';
};

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'name'>('rating');
  const [activeTab, setActiveTab] = useState<'tools' | 'quiz'>('tools');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        // Use the normalized price for accurate sorting
        const aPrice = normalizePrice(a.pricing);
        const bPrice = normalizePrice(b.pricing);
        return aPrice - bPrice;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <LandingLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              ISO 27001 Tools & Learning
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the best tools and solutions to help you implement and maintain ISO 27001 compliance, 
              plus interactive learning resources to test your knowledge.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'tools'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Tools & Solutions
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'quiz'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Interactive Quiz
              </button>
            </div>
          </div>

          {/* Quiz Tab Content */}
          {activeTab === 'quiz' && (
            <div className="mb-8">
              <ISO27001Quiz />
            </div>
          )}

          {/* Tools Tab Content */}
          {activeTab === 'tools' && (
            <>
              {/* Filters */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'rating' | 'price' | 'name')}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedTools.length} of {tools.length} tools
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedTools.map(tool => (
              <div key={tool.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                 {/* Header */}
                 <div className="flex justify-between items-start mb-4">
                   <div className="flex-1">
                     <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                     <div className="flex flex-wrap items-center gap-2">
                       <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                         {tool.category}
                       </span>
                       {tool.tags.includes('community-favorite') && (
                         <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                           ⭐ Community Choice
                         </span>
                       )}
                     </div>
                   </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">{tool.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{tool.description}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <span className={`font-semibold ${getPriceColor(tool.pricing)}`}>
                    {formatPricing(tool.pricing)}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {tool.features.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{tool.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-medium text-green-600 mb-1">Pros</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {tool.pros.slice(0, 2).map((pro, index) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-600 mb-1">Cons</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {tool.cons.slice(0, 2).map((con, index) => (
                        <li key={index}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-4">
                  <h5 className="font-medium mb-1">Best For:</h5>
                  <p className="text-sm text-muted-foreground">{tool.bestFor}</p>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>

          {/* No Results */}
          {sortedTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="mt-12 space-y-8">
            {/* Gap Assessment Section */}
            <div className="text-center">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Need Help Choosing?</h3>
                <p className="text-muted-foreground mb-4">
                  Take our gap assessment to get personalized tool recommendations based on your organization's needs.
                </p>
                <a
                  href="/gap-assessment"
                  className="inline-block bg-primary text-primary-foreground py-2 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Start Gap Assessment
                </a>
              </div>
            </div>

            {/* Tool Submission Section */}
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Want Your Tool Featured?</h3>
                <p className="text-muted-foreground mb-4">
                  Are you a tool vendor or organization with a compliance solution? We're always looking to add valuable tools to our directory.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    To have your tool assessed and potentially featured, please reach out to:
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-block bg-secondary text-secondary-foreground py-2 px-6 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    We'll review your tool for relevance, quality, and value to the ISO 27001 compliance community.
                  </p>
                </div>
              </div>
            </div>
          </div>
            </>
          )}
        </div>
      </div>
    </LandingLayout>
  );
} 