export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  controlId: string;
  annex: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const iso27001QuizQuestions: QuizQuestion[] = [
  // Easy Questions
  {
    id: 'easy-1',
    question: 'Which annex covers "Information Security Policies"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Information Security Policies (A.5.1) is part of the Organizational Controls annex, which addresses organizational aspects of information security including policies, roles, and responsibilities.',
    controlId: 'A.5.1',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-2',
    question: 'Where would you find controls related to "Physical Security Perimeters"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.7 - Physical Controls',
    explanation: 'Physical Security Perimeters (A.7.1) is part of the Physical Controls annex, which addresses physical and environmental security measures.',
    controlId: 'A.7.1',
    annex: 'A.7 - Physical Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-3',
    question: 'Which annex includes "User Endpoint Devices" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'User Endpoint Devices (A.8.1) is part of the Technological Controls annex, which addresses technical security measures for devices and systems.',
    controlId: 'A.8.1',
    annex: 'A.8 - Technological Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-4',
    question: 'Where are "Screening" controls located?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.6 - People Controls',
    explanation: 'Screening (A.6.1) is part of the People Controls annex, which addresses human resource security including background checks and employee screening.',
    controlId: 'A.6.1',
    annex: 'A.6 - People Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-5',
    question: 'Which annex covers "Access Control Policy"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Access Control Policy (A.5.18) is part of the Organizational Controls annex, as it defines organizational requirements for access management.',
    controlId: 'A.5.18',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-6',
    question: 'Where would you find "Clear Desk and Clear Screen" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.7 - Physical Controls',
    explanation: 'Clear Desk and Clear Screen (A.7.7) is part of the Physical Controls annex, as it addresses physical security practices in the workplace.',
    controlId: 'A.7.7',
    annex: 'A.7 - Physical Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-7',
    question: 'Which annex addresses "Information Security Awareness, Education and Training"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.6 - People Controls',
    explanation: 'Information Security Awareness, Education and Training (A.6.3) is part of the People Controls annex, as it directly addresses human behavior and knowledge.',
    controlId: 'A.6.3',
    annex: 'A.6 - People Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-8',
    question: 'Where are "Information Backup" controls implemented?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Information Backup (A.8.13) is part of the Technological Controls annex, as it involves technical backup systems and procedures.',
    controlId: 'A.8.13',
    annex: 'A.8 - Technological Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-9',
    question: 'Which annex covers "Physical Entry" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.7 - Physical Controls',
    explanation: 'Physical Entry (A.7.2) is part of the Physical Controls annex, as it addresses physical access control to facilities.',
    controlId: 'A.7.2',
    annex: 'A.7 - Physical Controls',
    difficulty: 'easy'
  },
  {
    id: 'easy-10',
    question: 'Where would you find "Terms and Conditions of Employment" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.6 - People Controls',
    explanation: 'Terms and Conditions of Employment (A.6.2) is part of the People Controls annex, as it addresses human resource security policies.',
    controlId: 'A.6.2',
    annex: 'A.6 - People Controls',
    difficulty: 'easy'
  },

  // Medium Questions
  {
    id: 'medium-1',
    question: 'Where would you implement "Threat Intelligence" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Threat Intelligence (A.5.7) is part of the Organizational Controls annex, as it involves organizational processes for gathering and analyzing security threat information.',
    controlId: 'A.5.7',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-2',
    question: 'Which annex addresses "Information Security in Project Management"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Information Security in Project Management (A.5.8) is part of the Organizational Controls annex, as it involves integrating security into organizational project processes.',
    controlId: 'A.5.8',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-3',
    question: 'Where are "Secure Authentication" controls implemented?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Secure Authentication (A.8.5) is part of the Technological Controls annex, as it involves technical authentication mechanisms and systems.',
    controlId: 'A.8.5',
    annex: 'A.8 - Technological Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-4',
    question: 'Where would you find "Protection from Malware" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Protection from Malware (A.8.7) is part of the Technological Controls annex, as it involves technical anti-malware systems and software.',
    controlId: 'A.8.7',
    annex: 'A.8 - Technological Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-5',
    question: 'Which annex covers "Security Incident Management"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Security Incident Management (A.5.27) is part of the Organizational Controls annex, as it involves organizational processes for handling security incidents.',
    controlId: 'A.5.27',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-6',
    question: 'Where are "Management of Technical Vulnerabilities" controls located?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Management of Technical Vulnerabilities (A.8.8) is part of the Technological Controls annex, as it involves technical vulnerability scanning and patch management.',
    controlId: 'A.8.8',
    annex: 'A.8 - Technological Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-7',
    question: 'Which annex addresses "Information Security in Supplier Relationships"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Information Security in Supplier Relationships (A.5.22) is part of the Organizational Controls annex, as it involves organizational processes for managing third-party relationships.',
    controlId: 'A.5.22',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-8',
    question: 'Where would you find "Disciplinary Process" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.6 - People Controls',
    explanation: 'Disciplinary Process (A.6.4) is part of the People Controls annex, as it addresses human resource security procedures for violations.',
    controlId: 'A.6.4',
    annex: 'A.6 - People Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-9',
    question: 'Which annex covers "Equipment Siting and Protection"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.7 - Physical Controls',
    explanation: 'Equipment Siting and Protection (A.7.8) is part of the Physical Controls annex, as it addresses physical protection of equipment.',
    controlId: 'A.7.8',
    annex: 'A.7 - Physical Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-10',
    question: 'Where are "Capacity Management" controls implemented?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Capacity Management (A.8.6) is part of the Technological Controls annex, as it involves technical capacity planning and monitoring.',
    controlId: 'A.8.6',
    annex: 'A.8 - Technological Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-11',
    question: 'Which annex addresses "Classification of Information"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Classification of Information (A.5.12) is part of the Organizational Controls annex, as it involves organizational processes for categorizing information.',
    controlId: 'A.5.12',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-12',
    question: 'Where would you find "Storage Media" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.7 - Physical Controls',
    explanation: 'Storage Media (A.7.10) is part of the Physical Controls annex, as it addresses physical protection of storage media.',
    controlId: 'A.7.10',
    annex: 'A.7 - Physical Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-13',
    question: 'Which annex covers "Logging" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Logging (A.8.15) is part of the Technological Controls annex, as it involves technical logging systems and procedures.',
    controlId: 'A.8.15',
    annex: 'A.8 - Technological Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-14',
    question: 'Where are "Remote Working" controls located?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.6 - People Controls',
    explanation: 'Remote Working (A.6.7) is part of the People Controls annex, as it addresses human behavior and security practices in remote work environments.',
    controlId: 'A.6.7',
    annex: 'A.6 - People Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-15',
    question: 'Which annex addresses "Business Continuity"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Business Continuity (A.5.31) is part of the Organizational Controls annex, as it involves organizational planning and processes.',
    controlId: 'A.5.31',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'medium'
  },

  // Hard Questions
  {
    id: 'hard-1',
    question: 'Which annex addresses "ICT Supply Chain" security?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'ICT Supply Chain (A.5.24) is part of the Organizational Controls annex, as it involves organizational processes for managing supplier relationships and supply chain risks.',
    controlId: 'A.5.24',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-2',
    question: 'Where are "Data Leakage Prevention" controls located?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Data Leakage Prevention (A.8.12) is part of the Technological Controls annex, as it involves technical DLP systems and monitoring tools.',
    controlId: 'A.8.12',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-3',
    question: 'Where would you implement "Independent Review of Information Security"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Independent Review of Information Security (A.5.37) is part of the Organizational Controls annex, as it involves organizational governance and oversight processes.',
    controlId: 'A.5.37',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-4',
    question: 'Which annex addresses "Configuration Management"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Configuration Management (A.8.9) is part of the Technological Controls annex, as it involves technical processes for managing system configurations and changes.',
    controlId: 'A.8.9',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-5',
    question: 'Where are "Privileged Access Rights" controls implemented?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Privileged Access Rights (A.8.2) is part of the Technological Controls annex, as it involves technical privileged access management systems.',
    controlId: 'A.8.2',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-6',
    question: 'Which annex covers "Information Access Restriction"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Information Access Restriction (A.8.3) is part of the Technological Controls annex, as it involves technical access control mechanisms.',
    controlId: 'A.8.3',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-7',
    question: 'Where would you find "Access to Source Code" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Access to Source Code (A.8.4) is part of the Technological Controls annex, as it involves technical source code management and access controls.',
    controlId: 'A.8.4',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-8',
    question: 'Which annex addresses "Information Deletion"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Information Deletion (A.8.10) is part of the Technological Controls annex, as it involves technical data deletion and sanitization procedures.',
    controlId: 'A.8.10',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-9',
    question: 'Where are "Data Masking" controls located?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Data Masking (A.8.11) is part of the Technological Controls annex, as it involves technical data protection mechanisms.',
    controlId: 'A.8.11',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-10',
    question: 'Which annex covers "Redundancy" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Redundancy (A.8.14) is part of the Technological Controls annex, as it involves technical redundancy and failover systems.',
    controlId: 'A.8.14',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-11',
    question: 'Where would you implement "Monitoring Activities" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Monitoring Activities (A.8.16) is part of the Technological Controls annex, as it involves technical monitoring systems and tools.',
    controlId: 'A.8.16',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-12',
    question: 'Which annex addresses "Clock Synchronization"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Clock Synchronization (A.8.17) is part of the Technological Controls annex, as it involves technical time synchronization systems.',
    controlId: 'A.8.17',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-13',
    question: 'Where are "Use of Privileged Utility Programs" controls located?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Use of Privileged Utility Programs (A.8.18) is part of the Technological Controls annex, as it involves technical utility program management.',
    controlId: 'A.8.18',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-14',
    question: 'Which annex covers "Installation of Software on Operational Systems"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Installation of Software on Operational Systems (A.8.19) is part of the Technological Controls annex, as it involves technical software deployment processes.',
    controlId: 'A.8.19',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-15',
    question: 'Where would you find "Networks Security" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Networks Security (A.8.20) is part of the Technological Controls annex, as it involves technical network security measures.',
    controlId: 'A.8.20',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-16',
    question: 'Which annex addresses "Security of Network Services"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Security of Network Services (A.8.21) is part of the Technological Controls annex, as it involves technical network service security.',
    controlId: 'A.8.21',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-17',
    question: 'Where are "Web Filtering" controls implemented?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Web Filtering (A.8.22) is part of the Technological Controls annex, as it involves technical web filtering systems.',
    controlId: 'A.8.22',
    annex: 'A.8 - Technological Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-18',
    question: 'Which annex covers "Segregation of Duties"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Segregation of Duties (A.5.3) is part of the Organizational Controls annex, as it involves organizational role separation and governance.',
    controlId: 'A.5.3',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-19',
    question: 'Where would you find "Contact with Authorities" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Contact with Authorities (A.5.5) is part of the Organizational Controls annex, as it involves organizational relationships with external authorities.',
    controlId: 'A.5.5',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-20',
    question: 'Which annex addresses "Contact with Special Interest Groups"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Contact with Special Interest Groups (A.5.6) is part of the Organizational Controls annex, as it involves organizational engagement with security communities.',
    controlId: 'A.5.6',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'hard'
  }
];

export const annexDescriptions = {
  'A.5 - Organizational Controls': 'Controls that address organizational aspects of information security including policies, roles, responsibilities, and governance.',
  'A.6 - People Controls': 'Controls that address human resource security, awareness, training, and behavior.',
  'A.7 - Physical Controls': 'Controls that address physical and environmental security measures.',
  'A.8 - Technological Controls': 'Controls that address technical security measures for systems, networks, and applications.'
};

export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard' | 'all'): QuizQuestion[] => {
  if (difficulty === 'all') {
    return iso27001QuizQuestions;
  }
  return iso27001QuizQuestions.filter(q => q.difficulty === difficulty);
};

export const getRandomQuestions = (count: number, difficulty?: 'easy' | 'medium' | 'hard' | 'all'): QuizQuestion[] => {
  const questions = difficulty ? getQuestionsByDifficulty(difficulty) : iso27001QuizQuestions;
  // Shuffle the questions array using Fisher-Yates algorithm
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, questions.length));
};

// Certificate configuration
export const CERTIFICATE_THRESHOLD = 80; // 80% score required for certificate
export const CERTIFICATE_VALIDITY_DAYS = 365; // Certificate valid for 1 year 