'use client'

import { useState, useEffect } from 'react'
import { AssessmentQuestion, assessmentQuestions } from '../data/assessmentQuestions'


interface AssessmentAnswer {
  questionId: string
  answer: 'yes' | 'no' | 'partial' | null
  notes?: string
}


export default function GapAssessmentTool() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'results'>('intro')
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [organizationName, setOrganizationName] = useState('')
  const [notes, setNotes] = useState('')


  // Load saved progress from localStorage
  useEffect(() => {
    const savedAnswers = localStorage.getItem('gap-assessment-answers')
    const savedStep = localStorage.getItem('gap-assessment-step')
    const savedOrg = localStorage.getItem('gap-assessment-org')
    
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers))
    }
    if (savedStep) {
      setCurrentStep(savedStep as 'intro' | 'assessment' | 'results')
    }
    if (savedOrg) {
      setOrganizationName(savedOrg)
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('gap-assessment-answers', JSON.stringify(answers))
    localStorage.setItem('gap-assessment-step', currentStep)
    localStorage.setItem('gap-assessment-org', organizationName)
  }, [answers, currentStep, organizationName])

  // Update notes when current question changes
  useEffect(() => {
    if (currentStep === 'assessment') {
      const currentNotes = getCurrentNotes()
      setNotes(currentNotes)
    }
  }, [currentQuestionIndex, currentStep])


  const startAssessment = () => {
    setCurrentStep('assessment')
    setCurrentQuestionIndex(0)
  }

  const answerQuestion = (answer: 'yes' | 'no' | 'partial', notes?: string) => {
    const question = assessmentQuestions[currentQuestionIndex]
    const newAnswers = [...answers]
    const existingIndex = newAnswers.findIndex(a => a.questionId === question.id)
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { questionId: question.id, answer, notes }
    } else {
      newAnswers.push({ questionId: question.id, answer, notes })
    }
    
    setAnswers(newAnswers)
    
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setCurrentStep('results')
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const getCurrentAnswer = () => {
    const question = assessmentQuestions[currentQuestionIndex]
    return answers.find(a => a.questionId === question.id)?.answer || null
  }

  const getCurrentNotes = () => {
    const question = assessmentQuestions[currentQuestionIndex]
    return answers.find(a => a.questionId === question.id)?.notes || ''
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
            totalScore += 0
            break
        }
      }
    })
    
    return { totalScore, maxScore, percentage: (totalScore / maxScore) * 100 }
  }

  const getScoreLevel = (percentage: number) => {
    if (percentage >= 80) return { level: 'Excellent', color: 'text-green-600', bgColor: 'bg-green-100' }
    if (percentage >= 60) return { level: 'Good', color: 'text-blue-600', bgColor: 'bg-blue-100' }
    if (percentage >= 40) return { level: 'Fair', color: 'text-yellow-600', bgColor: 'bg-yellow-100' }
    return { level: 'Needs Improvement', color: 'text-red-600', bgColor: 'bg-red-100' }
  }

  const exportToCSV = () => {
    const score = calculateScore()
    const scoreLevel = getScoreLevel(score.percentage)
    
    let csv = 'Organization,Score,Level,Percentage\n'
    csv += `${organizationName || 'Unknown'},${score.totalScore}/${score.maxScore},${scoreLevel.level},${score.percentage.toFixed(1)}%\n\n`
    csv += 'Category,Question,Answer,Notes,Weight\n'
    
    assessmentQuestions.forEach(question => {
      const answer = answers.find(a => a.questionId === question.id)
      csv += `"${question.category}","${question.question}","${answer?.answer || 'Not answered'}","${answer?.notes || ''}",${question.weight}\n`
    })
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `iso27001-gap-assessment-${new Date().toISOString().split('T')[0]}.csv`
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
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
                placeholder="Enter your organization name"
              />
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">What to expect:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {assessmentQuestions.length} questions across 6 categories</li>
              <li>• Progress is automatically saved</li>
              <li>• Detailed results with recommendations</li>
              <li>• Export results to CSV</li>
            </ul>
          </div>

          <button
            onClick={startAssessment}
            className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Assessment
          </button>
        </div>
      </div>
    )
  }

  if (currentStep === 'assessment') {
    const question = assessmentQuestions[currentQuestionIndex]
    const currentAnswer = getCurrentAnswer()

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestionIndex + 1} of {assessmentQuestions.length}</span>
              <span>{Math.round(((currentQuestionIndex + 1) / assessmentQuestions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / assessmentQuestions.length) * 100}%` }}
              />
            </div>
          </div>

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
          <div className="space-y-3 mb-6">
            {(['yes', 'partial', 'no'] as const).map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={currentAnswer === option}
                  onChange={() => answerQuestion(option, notes)}
                  className="text-primary"
                />
                <span className="font-medium">
                  {option === 'yes' ? 'Yes' : option === 'partial' ? 'Partially' : 'No'}
                </span>
              </label>
            ))}
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label htmlFor="notes" className="block text-sm font-medium mb-2">
              Additional Notes (optional)
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background resize-none"
              rows={3}
              placeholder="Add any notes or context about your answer..."
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            
            {currentAnswer && (
              <button
                onClick={() => answerQuestion(currentAnswer, notes)}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {currentQuestionIndex === assessmentQuestions.length - 1 ? 'Finish Assessment' : 'Next Question →'}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 'results') {
    const score = calculateScore()
    const scoreLevel = getScoreLevel(score.percentage)

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Assessment Results</h2>
          
          {/* Score Summary */}
          <div className={`${scoreLevel.bgColor} rounded-lg p-6 mb-8`}>
            <div className="text-center">
              <div className={`text-4xl font-bold ${scoreLevel.color} mb-2`}>
                {score.percentage.toFixed(1)}%
              </div>
              <div className={`text-xl font-semibold ${scoreLevel.color} mb-2`}>
                {scoreLevel.level}
              </div>
              <div className="text-muted-foreground">
                Score: {score.totalScore} out of {score.maxScore} points
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Leadership & Commitment', 'Planning', 'Support', 'Operation', 'Performance Evaluation', 'Improvement'].map(category => {
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
                const categoryPercentage = (categoryScore / categoryMax) * 100
                
                return (
                  <div key={category} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{category}</span>
                      <span className="text-sm text-muted-foreground">
                        {categoryScore.toFixed(1)}/{categoryMax}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${categoryPercentage}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {categoryPercentage.toFixed(1)}%
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
            <div className="space-y-3">
              {score.percentage < 80 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Priority Actions</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Focus on areas with the lowest scores first</li>
                    <li>• Develop action plans for each category</li>
                    <li>• Consider seeking external guidance for complex areas</li>
                  </ul>
                </div>
              )}
              
              {score.percentage >= 80 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Next Steps</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Consider formal ISO 27001 certification</li>
                    <li>• Focus on continuous improvement</li>
                    <li>• Maintain and enhance existing controls</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={exportToCSV}
              className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Export Results (CSV)
            </button>
            <button
              onClick={resetAssessment}
              className="flex-1 border border-border py-3 px-6 rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Start New Assessment
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
} 