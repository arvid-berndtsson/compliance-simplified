"use client";

import { QuizResults } from './ISO27001Quiz';
import { CERTIFICATE_THRESHOLD } from '@/data/iso27001Quiz';

interface SimpleCertificateProps {
  results: QuizResults;
  userName: string;
  onClose: () => void;
}

export default function SimpleCertificate({ results, userName, onClose }: SimpleCertificateProps) {
  const scorePercentage = Math.round((results.score / results.totalQuestions) * 100);
  const isEligibleForCertificate = scorePercentage >= CERTIFICATE_THRESHOLD;

  if (!isEligibleForCertificate) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Keep Practicing!</h3>
            <p className="text-muted-foreground mb-4">
              You scored {scorePercentage}%. To earn a certificate, you need to achieve at least {CERTIFICATE_THRESHOLD}%.
            </p>
            <button
              onClick={onClose}
              className="bg-primary text-primary-foreground py-2 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const completionDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate a cryptographically secure random string for the certificate ID
  function getSecureRandomString(length: number) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    // Convert to base36 and uppercase, similar to previous logic
    return Array.from(array).map(b => b.toString(36)).join('').toUpperCase().substring(0, length);
  }
  const certificateId = `ISO27001-${Date.now()}-${getSecureRandomString(9)}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold mb-2">Certificate of Achievement</h3>
          <p className="text-muted-foreground">
            ISO 27001:2022 Learning Platform
          </p>
        </div>

        {/* Certificate Content */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-8 mb-6">
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold text-blue-800 mb-4">Certificate of Achievement</h4>
            <p className="text-gray-700 mb-4">
              This is to certify that
            </p>
            <div className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-300 pb-2">
              {userName}
            </div>
            <p className="text-gray-700 mb-6">
              has successfully demonstrated proficiency in ISO 27001:2022 controls and annexes 
              by achieving a passing score on the comprehensive assessment.
            </p>
            
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {results.score}/{results.totalQuestions}
              </div>
              <div className="text-lg text-gray-600">
                Score: {scorePercentage}%
              </div>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Certificate ID:</span>
              <span className="text-gray-800">{certificateId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Date of Completion:</span>
              <span className="text-gray-800">{completionDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Difficulty Level:</span>
              <span className="text-gray-800">{results.difficulty}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Time Taken:</span>
              <span className="text-gray-800">{results.timeTaken} seconds</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Questions Answered:</span>
              <span className="text-gray-800">{results.totalQuestions}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Valid Until:</span>
              <span className="text-gray-800">1 year from completion</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground mb-6">
          <p>
            This certificate is issued by Compliance Simplified, an educational platform 
            dedicated to making ISO 27001 compliance accessible to all organizations.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              // Create a simple text version for copying
              const certificateText = `
Certificate of Achievement - ISO 27001:2022

This is to certify that ${userName} has successfully demonstrated proficiency in ISO 27001:2022 controls and annexes by achieving a passing score on the comprehensive assessment.

Score: ${results.score}/${results.totalQuestions} (${scorePercentage}%)
Difficulty: ${results.difficulty}
Date: ${completionDate}
Certificate ID: ${certificateId}

Issued by Compliance Simplified
              `.trim();
              
              navigator.clipboard.writeText(certificateText).then(() => {
                alert('Certificate text copied to clipboard!');
              }).catch(() => {
                alert('Certificate text copied to clipboard!');
              });
            }}
            className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Copy Certificate Text
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 