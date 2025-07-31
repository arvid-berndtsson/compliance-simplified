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
    description: 'A written document that explains how your organization protects information and data. This should be approved by senior management and available to all employees.',
    weight: 5
  },
  {
    id: 'leadership-2',
    category: 'Leadership & Commitment',
    question: 'Is there a designated person responsible for information security?',
    description: 'Someone who is officially in charge of information security for your organization. This could be a Chief Information Security Officer (CISO), IT Manager, or similar role.',
    weight: 5
  },
  {
    id: 'leadership-3',
    category: 'Leadership & Commitment',
    question: 'Do senior leaders demonstrate commitment to information security?',
    description: 'Do your company executives, directors, or senior managers actively support security initiatives? This includes providing budget, resources, and publicly supporting security efforts.',
    weight: 4
  },
  {
    id: 'leadership-4',
    category: 'Leadership & Commitment',
    question: 'Is information security integrated into business processes?',
    description: 'Are security considerations included when making business decisions? For example, when starting new projects, purchasing software, or working with vendors.',
    weight: 4
  },
  {
    id: 'leadership-5',
    category: 'Leadership & Commitment',
    question: 'Do you have a security governance framework?',
    description: 'Clear roles and responsibilities for who does what in information security. This includes who makes decisions, who reports to whom, and who is accountable for different security areas.',
    weight: 4
  },

  // Planning
  {
    id: 'planning-1',
    category: 'Planning',
    question: 'Have you identified your information security objectives?',
    description: 'Specific, measurable goals for your security program. Examples might include "reduce security incidents by 50%" or "achieve 100% employee security training completion."',
    weight: 4
  },
  {
    id: 'planning-2',
    category: 'Planning',
    question: 'Do you have a risk assessment process in place?',
    description: 'A systematic way to identify what could go wrong with your information security and how likely it is to happen. This helps you focus on the most important security issues.',
    weight: 5
  },
  {
    id: 'planning-3',
    category: 'Planning',
    question: 'Have you defined the scope of your ISMS?',
    description: 'Clear boundaries of what systems, processes, and information are included in your security program. For example, "all company data and systems" or "customer-facing applications only."',
    weight: 4
  },
  {
    id: 'planning-4',
    category: 'Planning',
    question: 'Do you have risk treatment plans?',
    description: 'Written plans for how you will address the security risks you identified. This includes what actions you will take, who is responsible, and when they will be completed.',
    weight: 4
  },
  {
    id: 'planning-5',
    category: 'Planning',
    question: 'Have you established security requirements for suppliers?',
    description: 'Security standards that your vendors, contractors, and service providers must meet. This ensures that third parties don\'t create security risks for your organization.',
    weight: 3
  },
  {
    id: 'planning-6',
    category: 'Planning',
    question: 'Do you have business continuity and disaster recovery plans?',
    description: 'Plans for how your organization will continue operating during and after a major security incident, system failure, or other disaster. This includes backup systems and recovery procedures.',
    weight: 4
  },

  // Support
  {
    id: 'support-1',
    category: 'Support',
    question: 'Do you have adequate resources for information security?',
    description: 'Sufficient budget, staff, time, and tools to implement and maintain your security program. This includes money for security software, training, and dedicated security personnel.',
    weight: 4
  },
  {
    id: 'support-2',
    category: 'Support',
    question: 'Are staff members trained on information security?',
    description: 'Regular training for all employees on security topics like password security, phishing awareness, data protection, and how to report security incidents.',
    weight: 4
  },
  {
    id: 'support-3',
    category: 'Support',
    question: 'Do you have documented procedures for key security processes?',
    description: 'Written step-by-step instructions for important security tasks like managing user access, responding to security incidents, backing up data, and handling sensitive information.',
    weight: 4
  },
  {
    id: 'support-4',
    category: 'Support',
    question: 'Do you have a security awareness program?',
    description: 'Ongoing education and communication about security threats, best practices, and company security policies. This goes beyond basic training to keep security top of mind.',
    weight: 3
  },
  {
    id: 'support-5',
    category: 'Support',
    question: 'Do you have competent security personnel?',
    description: 'Staff with the right skills, knowledge, and experience to handle security responsibilities. This could be internal staff or external consultants with security expertise.',
    weight: 4
  },
  {
    id: 'support-6',
    category: 'Support',
    question: 'Do you have internal communication processes for security?',
    description: 'Clear ways for employees to report security concerns, ask questions, and get help with security issues. This includes designated contacts and reporting procedures.',
    weight: 3
  },

  // Operation
  {
    id: 'operation-1',
    category: 'Operation',
    question: 'Do you have access control procedures in place?',
    description: 'Processes for giving employees access to systems and data they need, regularly reviewing who has access, and removing access when employees leave or change roles.',
    weight: 5
  },
  {
    id: 'operation-2',
    category: 'Operation',
    question: 'Do you have an incident response plan?',
    description: 'Written procedures for what to do when a security incident occurs (like a data breach, malware infection, or unauthorized access). This includes who to contact and what steps to take.',
    weight: 5
  },
  {
    id: 'operation-3',
    category: 'Operation',
    question: 'Do you regularly backup critical data?',
    description: 'Systematic backup procedures for important data, including how often backups are made, where they are stored, and regular testing to ensure backups can be restored successfully.',
    weight: 4
  },
  {
    id: 'operation-4',
    category: 'Operation',
    question: 'Do you have change management procedures?',
    description: 'Processes for managing changes to your IT systems, software, and infrastructure. This includes testing changes, getting approval, and having rollback plans in case something goes wrong.',
    weight: 4
  },
  {
    id: 'operation-5',
    category: 'Operation',
    question: 'Do you have network security controls?',
    description: 'Security measures to protect your network, such as firewalls, network segmentation, intrusion detection systems, and monitoring tools to detect suspicious activity.',
    weight: 4
  },
  {
    id: 'operation-6',
    category: 'Operation',
    question: 'Do you have endpoint security controls?',
    description: 'Security software and measures on individual devices (computers, laptops, mobile devices) such as antivirus software, encryption, device management, and security updates.',
    weight: 4
  },
  {
    id: 'operation-7',
    category: 'Operation',
    question: 'Do you have secure development practices?',
    description: 'Security considerations built into your software development process, including secure coding practices, security testing, and code reviews to find and fix security vulnerabilities.',
    weight: 3
  },
  {
    id: 'operation-8',
    category: 'Operation',
    question: 'Do you have data protection and privacy controls?',
    description: 'Measures to protect sensitive data and ensure privacy compliance, including data classification, encryption, access controls, and procedures for handling personal information.',
    weight: 4
  },
  {
    id: 'operation-9',
    category: 'Operation',
    question: 'Do you have physical security controls?',
    description: 'Physical measures to protect your facilities and equipment, such as access cards, security cameras, locked doors, and environmental controls (fire suppression, climate control).',
    weight: 3
  },
  {
    id: 'operation-10',
    category: 'Operation',
    question: 'Do you have asset management procedures?',
    description: 'Processes for tracking and managing your information assets (hardware, software, data) throughout their lifecycle, from purchase to disposal, including inventory management.',
    weight: 3
  },

  // Performance Evaluation
  {
    id: 'performance-1',
    category: 'Performance Evaluation',
    question: 'Do you monitor and measure security performance?',
    description: 'Regular collection and analysis of security metrics to understand how well your security program is working. Examples include number of security incidents, time to detect threats, and training completion rates.',
    weight: 4
  },
  {
    id: 'performance-2',
    category: 'Performance Evaluation',
    question: 'Do you conduct internal audits?',
    description: 'Regular internal assessments of your security controls and processes to verify they are working as intended and identify areas for improvement.',
    weight: 4
  },
  {
    id: 'performance-3',
    category: 'Performance Evaluation',
    question: 'Do you review your ISMS regularly?',
    description: 'Management reviews of your information security program to assess its effectiveness, identify issues, and make decisions about improvements and resource allocation.',
    weight: 4
  },
  {
    id: 'performance-4',
    category: 'Performance Evaluation',
    question: 'Do you have security monitoring and logging?',
    description: 'Continuous monitoring of your systems and networks to detect security events, with logs of activities that can be reviewed to investigate incidents and identify patterns.',
    weight: 4
  },
  {
    id: 'performance-5',
    category: 'Performance Evaluation',
    question: 'Do you conduct vulnerability assessments?',
    description: 'Regular testing to find security weaknesses in your systems, networks, and applications. This includes automated scans and manual testing by security professionals.',
    weight: 4
  },
  {
    id: 'performance-6',
    category: 'Performance Evaluation',
    question: 'Do you have compliance monitoring processes?',
    description: 'Ongoing tracking to ensure your organization is following security policies, procedures, and regulatory requirements, with regular checks and reporting.',
    weight: 3
  },

  // Improvement
  {
    id: 'improvement-1',
    category: 'Improvement',
    question: 'Do you have a process for addressing nonconformities?',
    description: 'Procedures for identifying when security requirements are not being met and taking action to fix the problems and prevent them from happening again.',
    weight: 4
  },
  {
    id: 'improvement-2',
    category: 'Improvement',
    question: 'Do you implement corrective actions?',
    description: 'Systematic approach to fixing identified security problems, including investigating root causes, implementing solutions, and verifying that the fixes work.',
    weight: 4
  },
  {
    id: 'improvement-3',
    category: 'Improvement',
    question: 'Do you continuously improve your security program?',
    description: 'Ongoing efforts to enhance the effectiveness of your security controls and processes, including learning from incidents and staying updated on new threats and best practices.',
    weight: 3
  },
  {
    id: 'improvement-4',
    category: 'Improvement',
    question: 'Do you learn from security incidents?',
    description: 'Post-incident analysis to understand what happened, why it happened, and what can be learned to prevent similar incidents in the future.',
    weight: 3
  },
  {
    id: 'improvement-5',
    category: 'Improvement',
    question: 'Do you update security controls based on new threats?',
    description: 'Regular review and updating of security measures to address emerging threats, new attack methods, and changes in your organization\'s risk environment.',
    weight: 3
  }
] 