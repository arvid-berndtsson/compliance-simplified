export interface AssessmentQuestion {
  id: string
  category: string
  question: string
  description?: string
  weight: number
}

export const assessmentQuestions: AssessmentQuestion[] = [
  // Leadership and Commitment
  {
    id: 'leadership-1',
    category: 'Leadership & Commitment',
    question: 'Does your organization have a formal information security policy?',
    description: 'A documented policy that outlines the organization\'s approach to information security',
    weight: 5
  },
  {
    id: 'leadership-2',
    category: 'Leadership & Commitment',
    question: 'Is there a designated person responsible for information security?',
    description: 'Someone with clear accountability for information security management',
    weight: 5
  },
  {
    id: 'leadership-3',
    category: 'Leadership & Commitment',
    question: 'Do senior leaders demonstrate commitment to information security?',
    description: 'Visible support and resources allocated to security initiatives',
    weight: 4
  },
  {
    id: 'leadership-4',
    category: 'Leadership & Commitment',
    question: 'Is information security integrated into business processes?',
    description: 'Security considerations are part of decision-making processes',
    weight: 4
  },
  {
    id: 'leadership-5',
    category: 'Leadership & Commitment',
    question: 'Do you have a security governance framework?',
    description: 'Clear roles, responsibilities, and reporting structures for security',
    weight: 4
  },

  // Planning
  {
    id: 'planning-1',
    category: 'Planning',
    question: 'Have you identified your information security objectives?',
    description: 'Clear, measurable goals for your information security program',
    weight: 4
  },
  {
    id: 'planning-2',
    category: 'Planning',
    question: 'Do you have a risk assessment process in place?',
    description: 'Systematic approach to identifying and evaluating security risks',
    weight: 5
  },
  {
    id: 'planning-3',
    category: 'Planning',
    question: 'Have you defined the scope of your ISMS?',
    description: 'Clear boundaries of what systems and processes are included',
    weight: 4
  },
  {
    id: 'planning-4',
    category: 'Planning',
    question: 'Do you have risk treatment plans?',
    description: 'Documented plans for addressing identified security risks',
    weight: 4
  },
  {
    id: 'planning-5',
    category: 'Planning',
    question: 'Have you established security requirements for suppliers?',
    description: 'Security criteria for third-party vendors and service providers',
    weight: 3
  },
  {
    id: 'planning-6',
    category: 'Planning',
    question: 'Do you have business continuity and disaster recovery plans?',
    description: 'Plans to maintain operations during and after security incidents',
    weight: 4
  },

  // Support
  {
    id: 'support-1',
    category: 'Support',
    question: 'Do you have adequate resources for information security?',
    description: 'Sufficient budget, personnel, and tools for security activities',
    weight: 4
  },
  {
    id: 'support-2',
    category: 'Support',
    question: 'Are staff members trained on information security?',
    description: 'Regular security awareness training for all employees',
    weight: 4
  },
  {
    id: 'support-3',
    category: 'Support',
    question: 'Do you have documented procedures for key security processes?',
    description: 'Written procedures for access control, incident response, etc.',
    weight: 4
  },
  {
    id: 'support-4',
    category: 'Support',
    question: 'Do you have a security awareness program?',
    description: 'Ongoing education and communication about security threats',
    weight: 3
  },
  {
    id: 'support-5',
    category: 'Support',
    question: 'Do you have competent security personnel?',
    description: 'Staff with appropriate skills and qualifications for security roles',
    weight: 4
  },
  {
    id: 'support-6',
    category: 'Support',
    question: 'Do you have internal communication processes for security?',
    description: 'Channels for reporting security issues and concerns',
    weight: 3
  },

  // Operation
  {
    id: 'operation-1',
    category: 'Operation',
    question: 'Do you have access control procedures in place?',
    description: 'Processes for granting, reviewing, and revoking access',
    weight: 5
  },
  {
    id: 'operation-2',
    category: 'Operation',
    question: 'Do you have an incident response plan?',
    description: 'Documented procedures for handling security incidents',
    weight: 5
  },
  {
    id: 'operation-3',
    category: 'Operation',
    question: 'Do you regularly backup critical data?',
    description: 'Systematic backup procedures with testing and recovery',
    weight: 4
  },
  {
    id: 'operation-4',
    category: 'Operation',
    question: 'Do you have change management procedures?',
    description: 'Processes for managing changes to systems and infrastructure',
    weight: 4
  },
  {
    id: 'operation-5',
    category: 'Operation',
    question: 'Do you have network security controls?',
    description: 'Firewalls, segmentation, and network monitoring',
    weight: 4
  },
  {
    id: 'operation-6',
    category: 'Operation',
    question: 'Do you have endpoint security controls?',
    description: 'Antivirus, encryption, and device management',
    weight: 4
  },
  {
    id: 'operation-7',
    category: 'Operation',
    question: 'Do you have secure development practices?',
    description: 'Security considerations in software development lifecycle',
    weight: 3
  },
  {
    id: 'operation-8',
    category: 'Operation',
    question: 'Do you have data protection and privacy controls?',
    description: 'Measures to protect sensitive data and ensure privacy',
    weight: 4
  },
  {
    id: 'operation-9',
    category: 'Operation',
    question: 'Do you have physical security controls?',
    description: 'Physical access controls and environmental security',
    weight: 3
  },
  {
    id: 'operation-10',
    category: 'Operation',
    question: 'Do you have asset management procedures?',
    description: 'Inventory and lifecycle management of information assets',
    weight: 3
  },

  // Performance Evaluation
  {
    id: 'performance-1',
    category: 'Performance Evaluation',
    question: 'Do you monitor and measure security performance?',
    description: 'Regular collection and analysis of security metrics',
    weight: 4
  },
  {
    id: 'performance-2',
    category: 'Performance Evaluation',
    question: 'Do you conduct internal audits?',
    description: 'Regular internal assessments of security controls',
    weight: 4
  },
  {
    id: 'performance-3',
    category: 'Performance Evaluation',
    question: 'Do you review your ISMS regularly?',
    description: 'Management reviews of the information security program',
    weight: 4
  },
  {
    id: 'performance-4',
    category: 'Performance Evaluation',
    question: 'Do you have security monitoring and logging?',
    description: 'Continuous monitoring of systems and security events',
    weight: 4
  },
  {
    id: 'performance-5',
    category: 'Performance Evaluation',
    question: 'Do you conduct vulnerability assessments?',
    description: 'Regular testing for security vulnerabilities',
    weight: 4
  },
  {
    id: 'performance-6',
    category: 'Performance Evaluation',
    question: 'Do you have compliance monitoring processes?',
    description: 'Tracking compliance with policies and regulations',
    weight: 3
  },

  // Improvement
  {
    id: 'improvement-1',
    category: 'Improvement',
    question: 'Do you have a process for addressing nonconformities?',
    description: 'Procedures for identifying and correcting security issues',
    weight: 4
  },
  {
    id: 'improvement-2',
    category: 'Improvement',
    question: 'Do you implement corrective actions?',
    description: 'Systematic approach to fixing identified problems',
    weight: 4
  },
  {
    id: 'improvement-3',
    category: 'Improvement',
    question: 'Do you continuously improve your security program?',
    description: 'Ongoing efforts to enhance security effectiveness',
    weight: 3
  },
  {
    id: 'improvement-4',
    category: 'Improvement',
    question: 'Do you learn from security incidents?',
    description: 'Post-incident analysis and lessons learned processes',
    weight: 3
  },
  {
    id: 'improvement-5',
    category: 'Improvement',
    question: 'Do you update security controls based on new threats?',
    description: 'Adapting security measures to evolving threats',
    weight: 3
  }
] 