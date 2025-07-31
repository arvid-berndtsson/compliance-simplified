'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AssessmentQuestion, assessmentQuestions } from '../data/assessmentQuestions'

interface AssessmentAnswer {
  questionId: string
  answer: 'yes' | 'no' | 'partial' | 'skip' | null
  notes?: string
}

interface CategoryScore {
  category: string
  score: number
  maxScore: number
  percentage: number
  questions: AssessmentQuestion[]
  answers: AssessmentAnswer[]
}

interface QuestionNavigationProps {
  currentIndex: number
  answers: AssessmentAnswer[]
  onQuestionSelect: (index: number) => void
}

function QuestionNavigation({ currentIndex, answers, onQuestionSelect }: QuestionNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getQuestionStatus = (questionIndex: number) => {
    const question = assessmentQuestions[questionIndex]
    const answer = answers.find(a => a.questionId === question.id)
    
    if (!answer) return 'unanswered'
    if (answer.answer === 'skip') return 'skipped'
    return 'answered'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'answered': return 'bg-green-500'
      case 'skipped': return 'bg-yellow-500'
      case 'unanswered': return 'bg-gray-300'
      default: return 'bg-gray-300'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onQuestionSelect(index)
    }
  }

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsExpanded(!isExpanded)
          }
        }}
        className="flex items-center justify-between w-full p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-expanded={isExpanded}
        aria-controls="question-navigation-grid"
        aria-label={`Question navigation - ${isExpanded ? 'Hide' : 'Show'} (${answers.filter(a => a.answer && a.answer !== 'skip').length}/${assessmentQuestions.length} answered)`}
      >
        <span className="font-medium">Question Navigation</span>
        <span className="text-sm text-muted-foreground">
          {isExpanded ? 'Hide' : 'Show'} ({answers.filter(a => a.answer && a.answer !== 'skip').length}/{assessmentQuestions.length} answered)
        </span>
      </button>
      
      {isExpanded && (
        <div 
          id="question-navigation-grid"
          className="mt-3 p-4 bg-muted/30 rounded-lg"
          role="region"
          aria-label="Question navigation grid"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {assessmentQuestions.map((question, index) => {
              const status = getQuestionStatus(index)
              const isCurrent = index === currentIndex
              
              return (
                <button
                  key={question.id}
                  onClick={() => onQuestionSelect(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`flex items-center space-x-2 p-2 rounded text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${
                    isCurrent 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                  aria-label={`Question ${index + 1}: ${question.category.split(' ')[0]} - ${status}`}
                  aria-current={isCurrent ? 'true' : undefined}
                >
                  <div 
                    className={`w-2 h-2 rounded-full ${getStatusColor(status)}`}
                    aria-hidden="true"
                  />
                  <span className="truncate">
                    {index + 1}. {question.category.split(' ')[0]}
                  </span>
                </button>
              )
            })}
          </div>
          
          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                <span>Answered</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-yellow-500" aria-hidden="true" />
                <span>Skipped</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-300" aria-hidden="true" />
                <span>Unanswered</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface ResultsVisualizationProps {
  score: { totalScore: number; maxScore: number; percentage: number }
  categoryScores: CategoryScore[]
}

function ResultsVisualization({ score, categoryScores }: ResultsVisualizationProps) {
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-blue-600'
    if (percentage >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBgColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-100'
    if (percentage >= 60) return 'bg-blue-100'
    if (percentage >= 40) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  return (
    <div className="space-y-6">
      {/* Overall Score Circle */}
      <div className="flex justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke={score.percentage >= 80 ? '#10b981' : score.percentage >= 60 ? '#3b82f6' : score.percentage >= 40 ? '#f59e0b' : '#ef4444'}
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 54}`}
              strokeDashoffset={`${2 * Math.PI * 54 * (1 - score.percentage / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(score.percentage)}`}>
                {score.percentage.toFixed(0)}%
              </div>
              <div className="text-xs text-muted-foreground">
                {score.totalScore}/{score.maxScore}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Progress Bars */}
      <div className="space-y-6">
        {categoryScores.map(category => (
          <div key={category.category} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{category.category}</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-semibold ${getScoreColor(category.percentage)}`}>
                  {category.percentage.toFixed(0)}%
                </span>
                <span className="text-xs text-muted-foreground">
                  ({category.score.toFixed(0)}/{category.maxScore})
                </span>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                  category.percentage >= 80 ? 'bg-green-500' :
                  category.percentage >= 60 ? 'bg-blue-500' :
                  category.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${category.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GapAssessmentTool() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'results'>('intro')
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [organizationName, setOrganizationName] = useState('')
  const [notes, setNotes] = useState('')
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  
  // Refs for focus management
  const questionRef = useRef<HTMLDivElement>(null)
  const yesButtonRef = useRef<HTMLInputElement>(null)
  const partialButtonRef = useRef<HTMLInputElement>(null)
  const noButtonRef = useRef<HTMLInputElement>(null)
  const skipButtonRef = useRef<HTMLButtonElement>(null)
  const notesRef = useRef<HTMLTextAreaElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentQuestionIndex < assessmentQuestions.length - 1) {
      // Swipe left - next question
      const currentAnswer = getCurrentAnswer()
      if (currentAnswer) {
        answerQuestion(currentAnswer, notes)
      }
    } else if (isRightSwipe && currentQuestionIndex > 0) {
      // Swipe right - previous question
      goToPreviousQuestion()
    }
  }, [touchStart, touchEnd, currentQuestionIndex, notes])

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (currentStep !== 'assessment') return

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        if (currentQuestionIndex > 0) {
          goToPreviousQuestion()
        }
        break
      case 'ArrowRight':
        e.preventDefault()
        if (currentQuestionIndex < assessmentQuestions.length - 1) {
          const currentAnswer = getCurrentAnswer()
          if (currentAnswer) {
            answerQuestion(currentAnswer, notes)
          }
        }
        break
      case '1':
      case 'y':
      case 'Y':
        e.preventDefault()
        answerQuestion('yes', notes)
        break
      case '2':
      case 'p':
      case 'P':
        e.preventDefault()
        answerQuestion('partial', notes)
        break
      case '3':
      case 'n':
      case 'N':
        e.preventDefault()
        answerQuestion('no', notes)
        break
      case 's':
      case 'S':
        e.preventDefault()
        skipQuestion()
        break
      case 'Tab':
        // Allow normal tab navigation
        break
      default:
        // Ignore other keys
        break
    }
  }, [currentStep, currentQuestionIndex, notes])

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  // Focus management when question changes
  useEffect(() => {
    if (currentStep === 'assessment' && questionRef.current) {
      // Focus the question container for screen readers
      questionRef.current.focus()
    }
  }, [currentQuestionIndex, currentStep])

  // Haptic feedback for mobile devices
  const triggerHapticFeedback = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50) // Short vibration
    }
  }

  // Load saved progress from localStorage
  useEffect(() => {
    const savedAnswers = localStorage.getItem('gap-assessment-answers')
    const savedStep = localStorage.getItem('gap-assessment-step')
    const savedOrg = localStorage.getItem('gap-assessment-org')
    const savedIndex = localStorage.getItem('gap-assessment-index')
    
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers))
    }
    if (savedStep) {
      setCurrentStep(savedStep as 'intro' | 'assessment' | 'results')
    }
    if (savedOrg) {
      setOrganizationName(savedOrg)
    }
    if (savedIndex) {
      setCurrentQuestionIndex(parseInt(savedIndex))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('gap-assessment-answers', JSON.stringify(answers))
    localStorage.setItem('gap-assessment-step', currentStep)
    localStorage.setItem('gap-assessment-org', organizationName)
    localStorage.setItem('gap-assessment-index', currentQuestionIndex.toString())
  }, [answers, currentStep, organizationName, currentQuestionIndex])

  // Update notes when current question changes
  useEffect(() => {
    if (currentStep === 'assessment') {
      const currentNotes = getCurrentNotes()
      setNotes(currentNotes)
    }
  }, [currentQuestionIndex, currentStep, answers])

  const startAssessment = () => {
    setCurrentStep('assessment')
    setCurrentQuestionIndex(0)
    triggerHapticFeedback()
  }

  const answerQuestion = (answer: 'yes' | 'no' | 'partial' | 'skip', notes?: string) => {
    const question = assessmentQuestions[currentQuestionIndex]
    const newAnswers = [...answers]
    const existingIndex = newAnswers.findIndex(a => a.questionId === question.id)
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { questionId: question.id, answer, notes }
    } else {
      newAnswers.push({ questionId: question.id, answer, notes })
    }
    
    setAnswers(newAnswers)
    triggerHapticFeedback()
    
    // Add delay to show the checkmark animation
    setTimeout(() => {
      if (currentQuestionIndex < assessmentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        setCurrentStep('results')
      }
    }, 400) // 0.4 second delay
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      triggerHapticFeedback()
    }
  }

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    triggerHapticFeedback()
  }

  const skipQuestion = () => {
    answerQuestion('skip', notes)
  }

  const getCurrentAnswer = () => {
    const question = assessmentQuestions[currentQuestionIndex]
    return answers.find(a => a.questionId === question.id)?.answer || null
  }

  const getCurrentNotes = () => {
    const question = assessmentQuestions[currentQuestionIndex]
    return answers.find(a => a.questionId === question.id)?.notes || ''
  }

  const getAnsweredQuestionsCount = () => {
    return answers.filter(a => a.answer && a.answer !== 'skip').length
  }

  const getSkippedQuestionsCount = () => {
    return answers.filter(a => a.answer === 'skip').length
  }

  const calculateScore = () => {
    let totalScore = 0
    let maxScore = 0
    
    assessmentQuestions.forEach(question => {
      const answer = answers.find(a => a.questionId === question.id)
      maxScore += question.weight
      
      if (answer) {
        switch (answer.answer) {
          case 'yes':
            totalScore += question.weight
            break
          case 'partial':
            totalScore += question.weight * 0.5
            break
          case 'no':
          case 'skip':
            totalScore += 0
            break
        }
      }
    })
    
    return { totalScore, maxScore, percentage: (totalScore / maxScore) * 100 }
  }

  const getCategoryScores = (): CategoryScore[] => {
    const categories = ['Leadership & Commitment', 'Planning', 'Support', 'Operation', 'Performance Evaluation', 'Improvement']
    
    return categories.map(category => {
      const categoryQuestions = assessmentQuestions.filter(q => q.category === category)
      const categoryAnswers = answers.filter(a => 
        categoryQuestions.some(q => q.id === a.questionId)
      )
      const categoryScore = categoryQuestions.reduce((total, q) => {
        const answer = categoryAnswers.find(a => a.questionId === q.id)
        if (answer?.answer === 'yes') return total + q.weight
        if (answer?.answer === 'partial') return total + (q.weight * 0.5)
        return total
      }, 0)
      const categoryMax = categoryQuestions.reduce((total, q) => total + q.weight, 0)
      const categoryPercentage = categoryMax > 0 ? (categoryScore / categoryMax) * 100 : 0
      
      return {
        category,
        score: categoryScore,
        maxScore: categoryMax,
        percentage: categoryPercentage,
        questions: categoryQuestions,
        answers: categoryAnswers
      }
    })
  }

  const getScoreLevel = (percentage: number) => {
    if (percentage >= 80) return { level: 'Excellent', color: 'text-green-600', bgColor: 'bg-green-100', description: 'Your organization demonstrates strong ISO 27001 readiness.' }
    if (percentage >= 60) return { level: 'Good', color: 'text-blue-600', bgColor: 'bg-blue-100', description: 'Your organization has a solid foundation with room for improvement.' }
    if (percentage >= 40) return { level: 'Fair', color: 'text-yellow-600', bgColor: 'bg-yellow-100', description: 'Your organization needs significant work to achieve ISO 27001 compliance.' }
    return { level: 'Needs Improvement', color: 'text-red-600', bgColor: 'bg-red-100', description: 'Your organization requires substantial effort to meet ISO 27001 requirements.' }
  }

  const getDetailedRecommendations = () => {
    const categoryScores = getCategoryScores()
    const recommendations = []

    // Overall recommendations based on score
    const score = calculateScore()
    const scoreLevel = getScoreLevel(score.percentage)

    if (score.percentage < 80) {
      recommendations.push({
        type: 'priority',
        title: 'Priority Actions',
        items: [
          'Focus on areas with the lowest scores first',
          'Develop action plans for each category',
          'Consider seeking external guidance for complex areas',
          'Establish a formal project timeline for implementation'
        ]
      })
    }

    // Category-specific recommendations
    categoryScores.forEach(category => {
      if (category.percentage < 60) {
        const categoryRecommendations = getCategoryRecommendations(category)
        if (categoryRecommendations.length > 0) {
          recommendations.push({
            type: 'category',
            title: `${category.category} - Needs Attention`,
            items: categoryRecommendations
          })
        }
      }
    })

    // General recommendations
    recommendations.push({
      type: 'general',
      title: 'General Next Steps',
      items: [
        'Establish a cross-functional security team',
        'Develop a comprehensive security awareness program',
        'Implement regular security assessments and audits',
        'Create incident response and business continuity plans',
        'Consider engaging with a certification body for formal assessment'
      ]
    })

    return recommendations
  }

  const getCategoryRecommendations = (category: CategoryScore): string[] => {
    const recommendations: { [key: string]: string[] } = {
      'Leadership & Commitment': [
        'Appoint a dedicated Information Security Officer',
        'Develop and communicate security policies',
        'Secure executive sponsorship and budget allocation',
        'Establish security governance framework'
      ],
      'Planning': [
        'Conduct comprehensive risk assessments',
        'Define clear security objectives and scope',
        'Develop security strategies and roadmaps',
        'Establish risk treatment plans'
      ],
      'Support': [
        'Allocate sufficient resources and budget',
        'Implement security awareness training programs',
        'Develop and document security procedures',
        'Establish communication channels for security matters'
      ],
      'Operation': [
        'Implement access control and identity management',
        'Develop incident response and recovery procedures',
        'Establish change management processes',
        'Implement monitoring and logging solutions'
      ],
      'Performance Evaluation': [
        'Establish security metrics and KPIs',
        'Implement regular internal audits',
        'Conduct management reviews',
        'Monitor and measure security effectiveness'
      ],
      'Improvement': [
        'Establish nonconformity management processes',
        'Implement corrective and preventive actions',
        'Create continuous improvement programs',
        'Regularly review and update security controls'
      ]
    }

    return recommendations[category.category] || []
  }

  const exportToCSV = () => {
    const score = calculateScore()
    const scoreLevel = getScoreLevel(score.percentage)
    const categoryScores = getCategoryScores()
    
    let csv = 'Organization,Score,Level,Percentage\n'
    csv += `"${organizationName || 'Unknown'}","${score.totalScore}/${score.maxScore}","${scoreLevel.level}","${score.percentage.toFixed(1)}%"\n\n`
    
    csv += 'Category,Category Score,Category Max,Category Percentage\n'
    categoryScores.forEach(category => {
      csv += `"${category.category}","${category.score.toFixed(1)}","${category.maxScore}","${category.percentage.toFixed(1)}%"\n`
    })
    
    csv += '\nQuestion Details\n'
    csv += 'Category,Question,Answer,Notes,Weight\n'
    
    assessmentQuestions.forEach(question => {
      const answer = answers.find(a => a.questionId === question.id)
      csv += `"${question.category}","${question.question}","${answer?.answer || 'Not answered'}","${answer?.notes || ''}",${question.weight}\n`
    })
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `iso27001-gap-assessment-${organizationName || 'organization'}-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const resetAssessment = () => {
    setAnswers([])
    setCurrentStep('intro')
    setCurrentQuestionIndex(0)
    setOrganizationName('')
    localStorage.removeItem('gap-assessment-answers')
    localStorage.removeItem('gap-assessment-step')
    localStorage.removeItem('gap-assessment-org')
    localStorage.removeItem('gap-assessment-index')
  }

  const continueAssessment = () => {
    setCurrentStep('assessment')
  }

  if (currentStep === 'intro') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Before You Begin</h2>
          <p className="text-muted-foreground mb-6">
            This assessment will help you evaluate your organization's current state against ISO 27001:2022 requirements. 
            The assessment contains {assessmentQuestions.length} questions across 6 key areas.
          </p>
          
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="org-name" className="block text-sm font-medium mb-2">
                Organization Name (optional)
              </label>
              <input
                type="text"
                id="org-name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                placeholder="Enter your organization name"
                aria-describedby="org-name-help"
              />
              <div id="org-name-help" className="sr-only">
                Enter your organization name for the assessment report
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">What to expect:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {assessmentQuestions.length} questions across 6 categories</li>
              <li>• Progress is automatically saved</li>
              <li>• Detailed results with category breakdown</li>
              <li>• Specific recommendations for improvement</li>
              <li>• Export results to CSV</li>
              <li>• Option to skip questions you're unsure about</li>
              <li>• Question navigation to jump between questions</li>
              <li>• Keyboard shortcuts and touch gestures for navigation</li>
            </ul>
          </div>

          {/* Keyboard shortcuts help */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2 text-blue-800">Keyboard Shortcuts:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-700">
              <div>• <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">←</kbd> <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">→</kbd> Navigate questions</div>
              <div>• <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">Y</kbd> Yes, <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">P</kbd> Partial, <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">N</kbd> No</div>
              <div>• <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">S</kbd> Skip question</div>
              <div>• <kbd className="px-1 py-0.5 bg-blue-100 rounded text-xs">Tab</kbd> Navigate form elements</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={startAssessment}
              className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-describedby="start-assessment-help"
            >
              Start Assessment
            </button>
            <div id="start-assessment-help" className="sr-only">
              Begin the ISO 27001 gap assessment
            </div>
            <button
              onClick={() => window.history.back()}
              className="flex-1 border border-border py-3 px-6 rounded-lg font-semibold hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 'assessment') {
    const question = assessmentQuestions[currentQuestionIndex]
    const currentAnswer = getCurrentAnswer()
    const answeredCount = getAnsweredQuestionsCount()
    const skippedCount = getSkippedQuestionsCount()

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8">
          {/* Skip link for keyboard users */}
          <a 
            href="#question-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50"
          >
            Skip to question content
          </a>

          {/* Question Navigation */}
          <QuestionNavigation
            currentIndex={currentQuestionIndex}
            answers={answers}
            onQuestionSelect={goToQuestion}
          />

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestionIndex + 1} of {assessmentQuestions.length}</span>
              <span>{Math.round(((currentQuestionIndex + 1) / assessmentQuestions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / assessmentQuestions.length) * 100}%` }}
                role="progressbar"
                aria-valuenow={currentQuestionIndex + 1}
                aria-valuemin={1}
                aria-valuemax={assessmentQuestions.length}
                aria-label="Assessment progress"
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Answered: {answeredCount}</span>
              <span>Skipped: {skippedCount}</span>
              <span>Remaining: {assessmentQuestions.length - answeredCount - skippedCount}</span>
            </div>
          </div>

          {/* Question Content */}
          <div 
            id="question-content"
            ref={questionRef}
            tabIndex={-1}
            className="focus:outline-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            role="region"
            aria-label={`Question ${currentQuestionIndex + 1} of ${assessmentQuestions.length}`}
          >
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {question.category}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
            {question.description && (
              <p className="text-muted-foreground mb-6">{question.description}</p>
            )}

            {/* Answer Options */}
            <fieldset className="space-y-3 mb-6">
              <legend className="sr-only">Select your answer</legend>
              {(['yes', 'partial', 'no'] as const).map((option, index) => (
                <label 
                  key={option} 
                  className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-muted/50 transition-colors relative focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                >
                  <input
                    ref={index === 0 ? yesButtonRef : index === 1 ? partialButtonRef : noButtonRef}
                    type="radio"
                    name="answer"
                    value={option}
                    checked={currentAnswer === option}
                    onChange={() => answerQuestion(option, notes)}
                    className="text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-describedby={`answer-${option}-description`}
                  />
                  <div className="flex-1">
                    <span className="font-medium">
                      {option === 'yes' ? 'Yes' : option === 'partial' ? 'Partially' : 'No'}
                    </span>
                    <div id={`answer-${option}-description`} className="text-sm text-muted-foreground">
                      {option === 'yes' ? 'We have this fully implemented' : 
                       option === 'partial' ? 'We have this partially implemented' : 
                       'We do not have this implemented'}
                    </div>
                  </div>
                  {currentAnswer === option && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-in slide-in-from-right-2 duration-300">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </label>
              ))}
            </fieldset>

            {/* Skip Option */}
            <div className="mb-6">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 mb-2">
                  Not sure about this question? You can skip it and return later.
                </p>
                <button
                  ref={skipButtonRef}
                  onClick={skipQuestion}
                  className="text-sm text-yellow-700 hover:text-yellow-900 font-medium bg-yellow-100 hover:bg-yellow-200 px-3 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Skip this question →
                </button>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label htmlFor="notes" className="block text-sm font-medium mb-2">
                Additional Notes (optional)
              </label>
              <textarea
                ref={notesRef}
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                rows={3}
                placeholder="Add any notes or context about your answer..."
                aria-describedby="notes-help"
              />
              <div id="notes-help" className="sr-only">
                Optional field to add additional context or notes about your answer
              </div>
            </div>

            {/* Mobile swipe indicator */}
            <div className="md:hidden mb-4 text-center">
              <div className="text-xs text-muted-foreground">
                <span className="inline-flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Swipe left/right to navigate</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label="Go to previous question"
              >
                ← Previous
              </button>
              
              {currentAnswer && (
                <button
                  onClick={() => answerQuestion(currentAnswer, notes)}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={currentQuestionIndex === assessmentQuestions.length - 1 ? 'Finish assessment' : 'Go to next question'}
                >
                  {currentQuestionIndex === assessmentQuestions.length - 1 ? 'Finish Assessment' : 'Next Question →'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 'results') {
    const score = calculateScore()
    const scoreLevel = getScoreLevel(score.percentage)
    const categoryScores = getCategoryScores()
    const recommendations = getDetailedRecommendations()
    const answeredCount = getAnsweredQuestionsCount()
    const skippedCount = getSkippedQuestionsCount()

    return (
      <div className="max-w-6xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Assessment Results</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Score Summary */}
            <div className={`${scoreLevel.bgColor} rounded-lg p-6`} role="region" aria-label="Assessment score summary">
              <div className="text-center">
                <div className={`text-4xl font-bold ${scoreLevel.color} mb-2`}>
                  {score.percentage.toFixed(1)}%
                </div>
                <div className={`text-xl font-semibold ${scoreLevel.color} mb-2`}>
                  {scoreLevel.level}
                </div>
                <div className="text-muted-foreground mb-2">
                  Score: {score.totalScore} out of {score.maxScore} points
                </div>
                <div className="text-sm text-muted-foreground">
                  {scoreLevel.description}
                </div>
              </div>
            </div>

            {/* Assessment Summary */}
            <div className="grid grid-cols-3 gap-4" role="region" aria-label="Assessment statistics">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">{answeredCount}</div>
                <div className="text-sm text-muted-foreground">Answered</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{skippedCount}</div>
                <div className="text-sm text-muted-foreground">Skipped</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{assessmentQuestions.length - answeredCount - skippedCount}</div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </div>
            </div>
          </div>

          {/* Results Visualization */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Detailed Analysis</h3>
            <ResultsVisualization score={score} categoryScores={categoryScores} />
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className={`border rounded-lg p-4 ${
                  rec.type === 'priority' ? 'bg-red-50 border-red-200' :
                  rec.type === 'category' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-blue-50 border-blue-200'
                }`}>
                  <h4 className={`font-semibold mb-2 ${
                    rec.type === 'priority' ? 'text-red-800' :
                    rec.type === 'category' ? 'text-yellow-800' :
                    'text-blue-800'
                  }`}>
                    {rec.title}
                  </h4>
                  <ul className={`text-sm space-y-1 ${
                    rec.type === 'priority' ? 'text-red-700' :
                    rec.type === 'category' ? 'text-yellow-700' :
                    'text-blue-700'
                  }`}>
                    {rec.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={exportToCSV}
              className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-describedby="export-help"
            >
              Export Results (CSV)
            </button>
            <div id="export-help" className="sr-only">
              Download assessment results as a CSV file
            </div>
            {answeredCount + skippedCount < assessmentQuestions.length && (
              <button
                onClick={continueAssessment}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-describedby="continue-help"
              >
                Continue Assessment
              </button>
            )}
            <div id="continue-help" className="sr-only">
              Return to complete remaining questions
            </div>
            <button
              onClick={resetAssessment}
              className="flex-1 border border-border py-3 px-6 rounded-lg font-semibold hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-describedby="reset-help"
            >
              Start New Assessment
            </button>
            <div id="reset-help" className="sr-only">
              Clear all answers and start a new assessment
            </div>
            <button
              onClick={() => window.history.back()}
              className="flex-1 border border-border py-3 px-6 rounded-lg font-semibold hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-describedby="back-help"
            >
              ← Go Back
            </button>
            <div id="back-help" className="sr-only">
              Return to the previous page
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
} 