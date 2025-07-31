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
  }
] 