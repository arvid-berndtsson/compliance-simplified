'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AssessmentQuestion, assessmentQuestions } from '../data/assessmentQuestions'
import { ASSESSMENT_VERSION } from '@/config/constants'
import { CERTIFICATE_THRESHOLD } from '@/data/iso27001Quiz'

interface Toast {
  id: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
}

interface ToastProps {
  toast: Toast
  onDismiss: (id: string) => void
}

function Toast({ toast, onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [toast.id, onDismiss])

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800'
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800'
    }
  }

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return '✓'
      case 'warning':
        return '⚠'
      case 'error':
        return '✗'
      default:
        return 'ℹ'
    }
  }

  return (
    <div className={`p-4 border rounded-lg shadow-lg max-w-sm ${getToastStyles()} animate-in slide-in-from-right-2 duration-300`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 text-lg">{getIcon()}</div>
        <div className="flex-1">
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
        <button
          onClick={() => onDismiss(toast.id)}
          className="flex-shrink-0 text-lg hover:opacity-70 transition-opacity"
          aria-label="Dismiss notification"
        >
          ×
        </button>
      </div>
    </div>
  )
}

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
  organizationName: string
}

function ResultsVisualization({ score, categoryScores, organizationName }: ResultsVisualizationProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [selectedView, setSelectedView] = useState<'overview' | 'details' | 'timeline' | 'actions'>('overview')

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

  const getRiskLevel = (percentage: number) => {
    if (percentage >= 80) return { level: 'Low', color: 'text-green-600', bgColor: 'bg-green-100', description: 'Minimal risk' }
    if (percentage >= 60) return { level: 'Medium', color: 'text-blue-600', bgColor: 'bg-blue-100', description: 'Moderate risk' }
    if (percentage >= 40) return { level: 'High', color: 'text-yellow-600', bgColor: 'bg-yellow-100', description: 'High risk' }
    return { level: 'Critical', color: 'text-red-600', bgColor: 'bg-red-100', description: 'Critical risk' }
  }

  const getTimelineEstimate = (percentage: number) => {
    if (percentage >= 80) return { months: '3-6', effort: 'Low', description: 'Minor improvements needed' }
    if (percentage >= 60) return { months: '6-12', effort: 'Medium', description: 'Moderate implementation effort' }
    if (percentage >= 40) return { months: '12-18', effort: 'High', description: 'Significant implementation required' }
    return { months: '18-24', effort: 'Very High', description: 'Major transformation needed' }
  }

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const getPriorityScore = (category: CategoryScore) => {
    // Calculate priority based on score and number of questions
    const scoreWeight = (100 - category.percentage) / 100 // Lower score = higher priority
    const questionWeight = category.questions.length / Math.max(...categoryScores.map(c => c.questions.length))
    return (scoreWeight * 0.7 + questionWeight * 0.3) * 100
  }

  const sortedCategories = [...categoryScores].sort((a, b) => getPriorityScore(b) - getPriorityScore(a))

  return (
    <div className="space-y-8">
      {/* View Toggle */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['overview', 'details', 'timeline', 'actions'] as const).map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedView === view
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview View */}
      {selectedView === 'overview' && (
        <div className="space-y-6">
          {/* Enhanced Score Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Overall Score */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Overall Score</h4>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 120 120">
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
                  <div className={`text-xl font-bold ${getScoreColor(score.percentage)}`}>
                    {score.percentage.toFixed(0)}%
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {score.totalScore}/{score.maxScore} points
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Risk Level</h4>
              {(() => {
                const risk = getRiskLevel(score.percentage)
                return (
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${risk.color} mb-1`}>
                      {risk.level}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {risk.description}
                    </div>
                  </div>
                )
              })()}
            </div>

            {/* Timeline Estimate */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Implementation Timeline</h4>
              {(() => {
                const timeline = getTimelineEstimate(score.percentage)
                return (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {timeline.months} months
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {timeline.description}
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>

          {/* Priority Heat Map */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Priority Heat Map</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedCategories.map((category, index) => {
                const priorityScore = getPriorityScore(category)
                const priorityColor = priorityScore > 70 ? 'bg-red-100 border-red-200' :
                                    priorityScore > 50 ? 'bg-yellow-100 border-yellow-200' :
                                    priorityScore > 30 ? 'bg-blue-100 border-blue-200' :
                                    'bg-green-100 border-green-200'
                const textColor = priorityScore > 70 ? 'text-red-800' :
                                priorityScore > 50 ? 'text-yellow-800' :
                                priorityScore > 30 ? 'text-blue-800' :
                                'text-green-800'
                
                return (
                  <div key={category.category} className={`p-4 rounded-lg border ${priorityColor}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h5 className={`font-medium ${textColor}`}>{category.category}</h5>
                      <span className={`text-xs font-bold ${textColor}`}>
                        {priorityScore.toFixed(0)}%
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {category.percentage.toFixed(0)}% complete
                    </div>
                    <div className="mt-2 w-full bg-white/50 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          category.percentage >= 80 ? 'bg-green-500' :
                          category.percentage >= 60 ? 'bg-blue-500' :
                          category.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Details View */}
      {selectedView === 'details' && (
        <div className="space-y-6">
          {categoryScores.map(category => (
            <div key={category.category} className="bg-card border border-border rounded-lg p-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCategory(category.category)}
              >
                <div className="flex items-center space-x-3">
                  <h4 className="text-lg font-semibold">{category.category}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreBgColor(category.percentage)} ${getScoreColor(category.percentage)}`}>
                    {category.percentage.toFixed(0)}%
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {category.score.toFixed(0)}/{category.maxScore} points
                  </span>
                  <svg 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedCategories.has(category.category) ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="w-full bg-muted rounded-full h-3 mb-4">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                      category.percentage >= 80 ? 'bg-green-500' :
                      category.percentage >= 60 ? 'bg-blue-500' :
                      category.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
                
                {expandedCategories.has(category.category) && (
                  <div className="mt-4 space-y-3">
                    <h5 className="font-medium text-muted-foreground">Questions in this category:</h5>
                    <div className="space-y-2">
                      {category.questions.map(question => {
                        const answer = category.answers.find(a => a.questionId === question.id)
                        const statusColor = answer?.answer === 'yes' ? 'text-green-600' :
                                          answer?.answer === 'partial' ? 'text-yellow-600' :
                                          answer?.answer === 'no' ? 'text-red-600' :
                                          answer?.answer === 'skip' ? 'text-gray-500' : 'text-gray-400'
                        const statusText = answer?.answer === 'yes' ? '✓ Yes' :
                                         answer?.answer === 'partial' ? '○ Partial' :
                                         answer?.answer === 'no' ? '✗ No' :
                                         answer?.answer === 'skip' ? '⏭ Skip' : 'Not answered'
                        
                        return (
                          <div key={question.id} className="flex justify-between items-start p-3 bg-muted/30 rounded-lg">
                            <div className="flex-1">
                              <div className="text-sm font-medium">{question.question}</div>
                              {answer?.notes && (
                                <div className="text-xs text-muted-foreground mt-1">
                                  Note: {answer.notes}
                                </div>
                              )}
                            </div>
                            <div className={`text-xs font-medium ${statusColor} ml-3`}>
                              {statusText}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Timeline View */}
      {selectedView === 'timeline' && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Implementation Roadmap</h4>
            <div className="space-y-6">
              {(() => {
                const timeline = getTimelineEstimate(score.percentage)
                const phases = [
                  { name: 'Phase 1: Foundation', duration: '1-3 months', focus: 'Leadership commitment, basic policies, initial training' },
                  { name: 'Phase 2: Core Implementation', duration: '3-9 months', focus: 'Risk assessment, control implementation, monitoring setup' },
                  { name: 'Phase 3: Optimization', duration: '3-6 months', focus: 'Process refinement, advanced controls, continuous improvement' },
                  { name: 'Phase 4: Certification', duration: '3-6 months', focus: 'Audit preparation, certification process, ongoing compliance' }
                ]
                
                return phases.map((phase, index) => (
                  <div key={phase.name} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium">{phase.name}</h5>
                      <div className="text-sm text-muted-foreground mb-1">{phase.duration}</div>
                      <div className="text-sm">{phase.focus}</div>
                    </div>
                  </div>
                ))
              })()}
            </div>
          </div>

          {/* Resource Requirements */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Resource Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h5 className="font-medium mb-2">Personnel</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Information Security Officer</li>
                  <li>• IT Security Team</li>
                  <li>• Risk Management Specialist</li>
                  <li>• Training Coordinator</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h5 className="font-medium mb-2">Budget Estimate</h5>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <div>• Implementation: $50K - $200K</div>
                  <div>• Annual maintenance: $20K - $80K</div>
                  <div>• Certification: $15K - $50K</div>
                  <div>• Training: $5K - $20K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions View */}
      {selectedView === 'actions' && (
        <div className="space-y-6">
          {/* Immediate Actions */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Immediate Actions (Next 30 Days)</h4>
            <div className="space-y-3">
              {sortedCategories.slice(0, 3).map(category => (
                <div key={category.category} className="p-4 bg-muted/30 rounded-lg">
                  <h5 className="font-medium mb-2">{category.category}</h5>
                  <div className="text-sm text-muted-foreground">
                    Priority: {getPriorityScore(category).toFixed(0)}% - Focus on lowest scoring areas
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Success Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">{CERTIFICATE_THRESHOLD}%+</div>
                <div className="text-sm text-muted-foreground">Target Score</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-muted-foreground">Training Completion</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-sm text-muted-foreground">Security Incidents</div>
              </div>
            </div>
          </div>

          {/* Tools Recommendations */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Recommended Tools</h4>
              <a
                href="/tools"
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                View All Tools →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(() => {
                // Get top 4 categories that need improvement
                const priorityCategories = sortedCategories.slice(0, 4);
                const toolRecommendations = [
                  { category: 'Governance & Policy Management', tool: 'Vanta', description: 'Community favorite - automated compliance platform' },
                  { category: 'Risk Assessment & Management', tool: 'RiskWatch', description: 'ISO 27001 risk assessment and management' },
                  { category: 'Access Control & Identity Management', tool: 'Okta', description: 'Identity and access management platform' },
                  { category: 'Security Monitoring & SIEM', tool: 'AlienVault USM', description: 'Unified security monitoring' },
                  { category: 'Vulnerability Management', tool: 'Qualys', description: 'Vulnerability scanning and management' },
                  { category: 'Incident Response', tool: 'PagerDuty', description: 'Incident management and response' },
                  { category: 'Training & Awareness', tool: 'KnowBe4', description: 'Security awareness training' }
                ];

                return priorityCategories.map(category => {
                  const toolRec = toolRecommendations.find(t => t.category === category.category);
                  return toolRec ? (
                    <div key={category.category} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-sm">{category.category}</h5>
                        <span className="text-xs text-muted-foreground">
                          {category.percentage.toFixed(0)}% complete
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {toolRec.tool} - {toolRec.description}
                      </div>
                      <div className="w-full bg-white/50 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            category.percentage >= 80 ? 'bg-green-500' :
                            category.percentage >= 60 ? 'bg-blue-500' :
                            category.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ) : null;
                });
              })()}
            </div>
            <div className="mt-4 text-center">
              <a
                href="/tools"
                className="inline-block bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Browse All Tools
              </a>
            </div>
          </div>
        </div>
      )}
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
  const [toasts, setToasts] = useState<Toast[]>([])
  
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
      try {
        navigator.vibrate(50) // Short vibration
      } catch (error) {
        console.warn('Haptic feedback not supported or failed to trigger:', error)
      }
    }
  }

  // Toast notification helpers
  const showToast = (message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const id = crypto.randomUUID()
    const newToast: Toast = { id, message, type }
    setToasts(prev => [...prev, newToast])
  }

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  // Load saved progress from localStorage with migration support
  useEffect(() => {
    const savedAnswers = localStorage.getItem('gap-assessment-answers')
    const savedStep = localStorage.getItem('gap-assessment-step')
    const savedOrg = localStorage.getItem('gap-assessment-org')
    const savedIndex = localStorage.getItem('gap-assessment-index')
    const savedVersion = localStorage.getItem('gap-assessment-version')
    
    // Current data version - increment this when making breaking changes
    const CURRENT_VERSION = ASSESSMENT_VERSION
    
          if (savedAnswers) {
        try {
          const parsedAnswers = JSON.parse(savedAnswers)
          
          // Check if migration is needed
          const needsMigration = !savedVersion || savedVersion !== CURRENT_VERSION
          
          if (needsMigration) {
            console.log(`Migrating assessment data from version ${savedVersion || 'unknown'} to ${CURRENT_VERSION}`)
          }
          
          // Migration: Handle old data format that doesn't include 'skip' option
          const migratedAnswers = parsedAnswers.map((answer: any) => {
            // Ensure the answer has the correct structure
            if (typeof answer === 'object' && answer.questionId && answer.answer !== undefined) {
              // Validate that the answer value is one of the allowed options
              const validAnswers = ['yes', 'no', 'partial', 'skip', null]
              if (!validAnswers.includes(answer.answer)) {
                // If it's an invalid answer, set it to null (unanswered)
                console.warn(`Invalid answer value found for question ${answer.questionId}: ${answer.answer}. Setting to null.`)
                return {
                  questionId: answer.questionId,
                  answer: null,
                  notes: answer.notes || ''
                }
              }
              
              // Ensure notes field exists
              return {
                questionId: answer.questionId,
                answer: answer.answer,
                notes: answer.notes || ''
              }
            } else {
              // Invalid answer structure, skip it
              console.warn('Invalid answer structure found:', answer)
              return null
            }
          }).filter(Boolean) // Remove any null entries
          
          setAnswers(migratedAnswers)
          
          // Save the migrated data back to localStorage with version
          localStorage.setItem('gap-assessment-answers', JSON.stringify(migratedAnswers))
          localStorage.setItem('gap-assessment-version', CURRENT_VERSION)
          
        } catch (error) {
          console.error('Error parsing saved answers:', error)
          // If there's an error parsing, clear the corrupted data
          localStorage.removeItem('gap-assessment-answers')
          localStorage.removeItem('gap-assessment-version')
          setAnswers([])
        }
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
    
    showToast('CSV file downloaded successfully!', 'success')
  }

  const exportToJSON = () => {
    const score = calculateScore()
    const scoreLevel = getScoreLevel(score.percentage)
    const categoryScores = getCategoryScores()
    const recommendations = getDetailedRecommendations()
    
    const exportData = {
      organization: organizationName || 'Unknown',
      assessmentDate: new Date().toISOString(),
      score: {
        total: score.totalScore,
        max: score.maxScore,
        percentage: score.percentage,
        level: scoreLevel.level
      },
      categories: categoryScores,
      recommendations: recommendations,
      answers: answers,
      questions: assessmentQuestions
    }
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `iso27001-gap-assessment-${organizationName || 'organization'}-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    window.URL.revokeObjectURL(url)
    
    showToast('JSON file downloaded successfully!', 'success')
  }

  const exportToPDF = () => {
    // This would require a PDF library like jsPDF or react-pdf
    // For now, we'll show a message that this feature is coming soon
    showToast('PDF export feature coming soon! This will generate a professional report with charts and detailed analysis.', 'info')
  }

  const resetAssessment = () => {
    setAnswers([])
    setCurrentStep('intro')
    setCurrentQuestionIndex(0)
    setOrganizationName('')
    setNotes('')
    setToasts([])
    
    // Clear localStorage including version
    localStorage.removeItem('gap-assessment-answers')
    localStorage.removeItem('gap-assessment-step')
    localStorage.removeItem('gap-assessment-org')
    localStorage.removeItem('gap-assessment-index')
    localStorage.removeItem('gap-assessment-version')
    
    showToast('Assessment reset successfully', 'success')
  }

  const continueAssessment = () => {
    setCurrentStep('assessment')
  }

  return (
    <>
      {/* Main Content */}
      {currentStep === 'intro' && (
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
      )}

      {currentStep === 'assessment' && (
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
                <span>Answered: {getAnsweredQuestionsCount()}</span>
                <span>Skipped: {getSkippedQuestionsCount()}</span>
                <span>Remaining: {assessmentQuestions.length - getAnsweredQuestionsCount() - getSkippedQuestionsCount()}</span>
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
                  {assessmentQuestions[currentQuestionIndex].category}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-xl font-semibold mb-4">{assessmentQuestions[currentQuestionIndex].question}</h2>
              {assessmentQuestions[currentQuestionIndex].description && (
                <p className="text-muted-foreground mb-6">{assessmentQuestions[currentQuestionIndex].description}</p>
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
                      checked={getCurrentAnswer() === option}
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
                    {getCurrentAnswer() === option && (
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
                
                {getCurrentAnswer() && (
                  <button
                    onClick={() => answerQuestion(getCurrentAnswer()!, notes)}
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
      )}

      {currentStep === 'results' && (
        <div className="max-w-7xl mx-auto">
          {/* Header with Organization Info */}
          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Assessment Results</h2>
                {organizationName && (
                  <p className="text-lg text-muted-foreground">
                    {organizationName} • {new Date().toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Assessment Complete</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Enhanced Score Summary */}
              <div className={`${getScoreLevel(calculateScore().percentage).bgColor} rounded-lg p-6`} role="region" aria-label="Assessment score summary">
                <div className="text-center">
                  <div className={`text-5xl font-bold ${getScoreLevel(calculateScore().percentage).color} mb-3`}>
                    {calculateScore().percentage.toFixed(1)}%
                  </div>
                  <div className={`text-2xl font-semibold ${getScoreLevel(calculateScore().percentage).color} mb-3`}>
                    {getScoreLevel(calculateScore().percentage).level}
                  </div>
                  <div className="text-muted-foreground mb-3">
                    Score: {calculateScore().totalScore} out of {calculateScore().maxScore} points
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {getScoreLevel(calculateScore().percentage).description}
                  </div>
                  <div className="flex justify-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Excellent (80%+)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Good (60-79%)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Fair (40-59%)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Needs Work (&lt;40%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Assessment Summary */}
              <div className="space-y-4" role="region" aria-label="Assessment statistics">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{getAnsweredQuestionsCount()}</div>
                    <div className="text-sm text-muted-foreground">Answered</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">{getSkippedQuestionsCount()}</div>
                    <div className="text-sm text-muted-foreground">Skipped</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{assessmentQuestions.length - getAnsweredQuestionsCount() - getSkippedQuestionsCount()}</div>
                    <div className="text-sm text-muted-foreground">Remaining</div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Completion Rate</div>
                    <div className="text-xl font-bold">
                      {Math.round(((getAnsweredQuestionsCount() + getSkippedQuestionsCount()) / assessmentQuestions.length) * 100)}%
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Categories Assessed</div>
                    <div className="text-xl font-bold">
                      {getCategoryScores().filter(c => c.percentage > 0).length}/6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Visualization */}
          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold mb-6">Detailed Analysis</h3>
            <ResultsVisualization score={calculateScore()} categoryScores={getCategoryScores()} organizationName={organizationName} />
          </div>

          {/* Enhanced Recommendations */}
          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold mb-6">Strategic Recommendations</h3>
            <div className="space-y-6">
              {getDetailedRecommendations().map((rec, index) => (
                <div key={index} className={`border rounded-lg p-6 ${
                  rec.type === 'priority' ? 'bg-red-50 border-red-200' :
                  rec.type === 'category' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-blue-50 border-blue-200'
                }`}>
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      rec.type === 'priority' ? 'bg-red-100 text-red-600' :
                      rec.type === 'category' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {rec.type === 'priority' ? '⚡' : rec.type === 'category' ? '🎯' : '📋'}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold mb-3 ${
                        rec.type === 'priority' ? 'text-red-800' :
                        rec.type === 'category' ? 'text-yellow-800' :
                        'text-blue-800'
                      }`}>
                        {rec.title}
                      </h4>
                      <ul className={`space-y-2 ${
                        rec.type === 'priority' ? 'text-red-700' :
                        rec.type === 'category' ? 'text-yellow-700' :
                        'text-blue-700'
                      }`}>
                        {rec.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <span className="text-sm mt-1">•</span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button
                onClick={exportToCSV}
                className="flex flex-col items-center p-4 border border-border rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-describedby="export-csv-help"
              >
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-2">
                  📊
                </div>
                <span className="font-medium">Export CSV</span>
                <span className="text-xs text-muted-foreground text-center">Spreadsheet format</span>
              </button>
              <div id="export-csv-help" className="sr-only">
                Download assessment results as a CSV file
              </div>

              <button
                onClick={exportToJSON}
                className="flex flex-col items-center p-4 border border-border rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-describedby="export-json-help"
              >
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mb-2">
                  📄
                </div>
                <span className="font-medium">Export JSON</span>
                <span className="text-xs text-muted-foreground text-center">Data format</span>
              </button>
              <div id="export-json-help" className="sr-only">
                Download assessment results as a JSON file
              </div>

              <button
                onClick={exportToPDF}
                className="flex flex-col items-center p-4 border border-border rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-describedby="export-pdf-help"
              >
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mb-2">
                  📋
                </div>
                <span className="font-medium">Export PDF</span>
                <span className="text-xs text-muted-foreground text-center">Coming soon</span>
              </button>
              <div id="export-pdf-help" className="sr-only">
                Download assessment results as a PDF report
              </div>

              
              {getAnsweredQuestionsCount() + getSkippedQuestionsCount() < assessmentQuestions.length && (
                <button
                  onClick={continueAssessment}
                  className="flex flex-col items-center p-4 border border-border rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-describedby="continue-help"
                >
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2">
                    ➡️
                  </div>
                  <span className="font-medium">Continue</span>
                  <span className="text-xs text-muted-foreground text-center">Complete remaining questions</span>
                </button>
              )}
              <div id="continue-help" className="sr-only">
                Return to complete remaining questions
              </div>
              
              <button
                onClick={resetAssessment}
                className="flex flex-col items-center p-4 border border-border rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-describedby="reset-help"
              >
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center mb-2">
                  🔄
                </div>
                <span className="font-medium">New Assessment</span>
                <span className="text-xs text-muted-foreground text-center">Start fresh assessment</span>
              </button>
              <div id="reset-help" className="sr-only">
                Clear all answers and start a new assessment
              </div>
              

            </div>
          </div>
        </div>
      )}

      {/* Toast Notifications Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast, index) => (
          <Toast key={toast.id} toast={toast} onDismiss={dismissToast} />
        ))}
      </div>
    </>
  )
} 