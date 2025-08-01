"use client";

import { useState, useEffect } from 'react';
import { 
  QuizQuestion, 
  iso27001QuizQuestions, 
  annexDescriptions, 
  getRandomQuestions
} from '@/data/iso27001Quiz';


interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  score: number;
  totalQuestions: number;
  showResults: boolean;
  timeRemaining: number;
}

export interface QuizResults {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  timeTaken: number;
  difficulty: string;
  questions: QuizQuestion[];
  userAnswers: string[];
}

export default function ISO27001Quiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
    score: 0,
    totalQuestions: 0,
    showResults: false,
    timeRemaining: 0
  });

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'all'>('all');
  const [quizStarted, setQuizStarted] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);

  const startQuiz = (selectedDifficulty: 'easy' | 'medium' | 'hard' | 'all') => {
    const quizQuestions = getRandomQuestions(10, selectedDifficulty);
    setQuestions(quizQuestions);
    setDifficulty(selectedDifficulty);
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      isAnswered: false,
      isCorrect: null,
      score: 0,
      totalQuestions: quizQuestions.length,
      showResults: false,
      timeRemaining: 30 // 30 seconds per question
    });
    setUserAnswers([]);
    setQuizStarted(true);
    setStartTime(Date.now());
  };

  const handleAnswerSelect = (answer: string) => {
    if (quizState.isAnswered) return;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answer,
      isAnswered: true,
      isCorrect: answer === questions[quizState.currentQuestionIndex].correctAnswer
    }));
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = quizState.selectedAnswer === currentQuestion.correctAnswer;
    
    const newUserAnswers = [...userAnswers];
    newUserAnswers[quizState.currentQuestionIndex] = quizState.selectedAnswer || '';
    setUserAnswers(newUserAnswers);

    if (quizState.currentQuestionIndex === questions.length - 1) {
      // Quiz completed
      const finalScore = isCorrect ? quizState.score + 1 : quizState.score;
      const timeTaken = Math.round((Date.now() - startTime) / 1000);
      
      const results: QuizResults = {
        totalQuestions: questions.length,
        correctAnswers: finalScore,
        score: finalScore,
        timeTaken,
        difficulty: difficulty === 'all' ? 'Mixed' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
        questions,
        userAnswers: newUserAnswers
      };
      
      setQuizResults(results);
      setQuizState(prev => ({
        ...prev,
        score: finalScore,
        showResults: true
      }));
    } else {
      // Move to next question
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        isAnswered: false,
        isCorrect: null,
        score: isCorrect ? prev.score + 1 : prev.score,
        timeRemaining: 30
      }));
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuestions([]);
    setUserAnswers([]);
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      isAnswered: false,
      isCorrect: null,
      score: 0,
      totalQuestions: 0,
      showResults: false,
      timeRemaining: 0
    });
    setQuizResults(null);
  };

  // Timer effect
  useEffect(() => {
    if (!quizStarted || quizState.showResults || quizState.isAnswered) return;

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (prev.timeRemaining <= 1) {
          // Time's up - auto-answer as incorrect
          return {
            ...prev,
            isAnswered: true,
            isCorrect: false,
            selectedAnswer: null,
            timeRemaining: 0
          };
        }
        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizState.showResults, quizState.isAnswered]);



  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return 'Excellent! You really know your ISO 27001 controls!';
    if (percentage >= 80) return 'Great job! You have a solid understanding of ISO 27001.';
    if (percentage >= 60) return 'Good work! Keep studying to improve your knowledge.';
    return 'Keep practicing! Review the controls and try again.';
  };



  if (!quizStarted) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">ISO 27001:2022 Control Quiz</h2>
          <p className="text-muted-foreground">
            Test your knowledge of ISO 27001:2022 controls and their corresponding annexes. 
            Match control points to the right annex categories!
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Quiz Features:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>50+ questions with full randomization</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>30 seconds per question</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Detailed explanations for each answer</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Multiple difficulty levels</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Choose Difficulty:</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => startQuiz('easy')}
              className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-left"
            >
              <div className="font-semibold text-green-600">Easy</div>
              <div className="text-sm text-muted-foreground">Basic control knowledge</div>
            </button>
            <button
              onClick={() => startQuiz('medium')}
              className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-left"
            >
              <div className="font-semibold text-yellow-600">Medium</div>
              <div className="text-sm text-muted-foreground">Intermediate understanding</div>
            </button>
            <button
              onClick={() => startQuiz('hard')}
              className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-left"
            >
              <div className="font-semibold text-red-600">Hard</div>
              <div className="text-sm text-muted-foreground">Advanced knowledge</div>
            </button>
            <button
              onClick={() => startQuiz('all')}
              className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-left"
            >
              <div className="font-semibold text-blue-600">Mixed</div>
              <div className="text-sm text-muted-foreground">All difficulty levels</div>
            </button>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">About ISO 27001:2022 Annexes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {Object.entries(annexDescriptions).map(([annex, description]) => (
              <div key={annex} className="p-3 bg-background rounded border">
                <div className="font-medium text-primary">{annex}</div>
                <div className="text-muted-foreground">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (quizState.showResults && quizResults) {

    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Quiz Results</h2>
          <div className={`text-3xl font-bold mb-2 ${getScoreColor(quizResults.score, quizResults.totalQuestions)}`}>
            {quizResults.score}/{quizResults.totalQuestions}
          </div>
          <p className="text-muted-foreground mb-4">
            {getScoreMessage(quizResults.score, quizResults.totalQuestions)}
          </p>
          <div className="text-sm text-muted-foreground">
            Time taken: {quizResults.timeTaken} seconds | Difficulty: {quizResults.difficulty}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Question Review:</h3>
          <div className="space-y-4">
            {quizResults.questions.map((question, index) => {
              const userAnswer = quizResults.userAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Question {index + 1}
                    </span>
                    <span className={`text-sm font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  </div>
                  <p className="font-medium mb-3">{question.question}</p>
                  <div className="space-y-2 mb-3">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-2 rounded text-sm ${
                          option === question.correctAnswer
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : option === userAnswer && !isCorrect
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {option}
                        {option === question.correctAnswer && ' (Correct)'}
                        {option === userAnswer && !isCorrect && ' (Your Answer)'}
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="text-sm text-blue-800">{question.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>



        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={resetQuiz}
            className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Take Another Quiz
          </button>
          <a
            href="/docs/iso27001/controls"
            className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg font-medium hover:bg-secondary/90 transition-colors text-center"
          >
            Review Controls
          </a>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[quizState.currentQuestionIndex];

  return (
    <>
      <div className="bg-card border border-border rounded-lg p-6">
        {/* Progress and Timer */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-muted-foreground">
            Question {quizState.currentQuestionIndex + 1} of {questions.length}
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              Score: {quizState.score}
            </div>
            <div className={`text-sm font-medium ${
              quizState.timeRemaining <= 10 ? 'text-red-600' : 'text-muted-foreground'
            }`}>
              Time: {quizState.timeRemaining}s
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-6">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((quizState.currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={quizState.isAnswered}
                className={`w-full p-4 text-left rounded-lg border transition-all ${
                  quizState.selectedAnswer === option
                    ? quizState.isCorrect
                      ? 'bg-green-100 border-green-300 text-green-800'
                      : 'bg-red-100 border-red-300 text-red-800'
                    : quizState.isAnswered && option === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-300 text-green-800'
                    : 'bg-background border-border hover:bg-muted'
                } ${quizState.isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Explanation */}
        {quizState.isAnswered && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
            <p className="text-blue-800 text-sm">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Next Button */}
        {quizState.isAnswered && (
          <div className="flex justify-between items-center">
            <button
              onClick={resetQuiz}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Exit Quiz
            </button>
            <button
              onClick={handleNextQuestion}
              className="bg-primary text-primary-foreground py-2 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {quizState.currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>

    </>
  );
} 