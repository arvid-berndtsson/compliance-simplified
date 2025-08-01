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
    question: 'Which annex covers "Information Security Awareness, Education and Training"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.6 - People Controls',
    explanation: 'Information Security Awareness, Education and Training (A.6.3) is part of the People Controls annex, as it directly addresses human behavior and knowledge.',
    controlId: 'A.6.3',
    annex: 'A.6 - People Controls',
    difficulty: 'medium'
  },
  {
    id: 'medium-5',
    question: 'Where would you find "Protection from Malware" controls?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Protection from Malware (A.8.7) is part of the Technological Controls annex, as it involves technical anti-malware systems and software.',
    controlId: 'A.8.7',
    annex: 'A.8 - Technological Controls',
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
    question: 'Which annex covers "Remote Working" security?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.6 - People Controls',
    explanation: 'Remote Working (A.6.7) is part of the People Controls annex, as it addresses human behavior and security practices in remote work environments.',
    controlId: 'A.6.7',
    annex: 'A.6 - People Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-4',
    question: 'Where would you implement "Independent Review of Information Security"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.5 - Organizational Controls',
    explanation: 'Independent Review of Information Security (A.5.37) is part of the Organizational Controls annex, as it involves organizational governance and oversight processes.',
    controlId: 'A.5.37',
    annex: 'A.5 - Organizational Controls',
    difficulty: 'hard'
  },
  {
    id: 'hard-5',
    question: 'Which annex addresses "Configuration Management"?',
    options: ['A.5 - Organizational Controls', 'A.6 - People Controls', 'A.7 - Physical Controls', 'A.8 - Technological Controls'],
    correctAnswer: 'A.8 - Technological Controls',
    explanation: 'Configuration Management (A.8.9) is part of the Technological Controls annex, as it involves technical processes for managing system configurations and changes.',
    controlId: 'A.8.9',
    annex: 'A.8 - Technological Controls',
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
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, questions.length));
}; 