"use client";

import LandingLayout from "@/components/LandingLayout";
import ISO27001Quiz from "@/components/ISO27001Quiz";
import { CERTIFICATE_THRESHOLD } from "@/data/iso27001Quiz";

export default function QuizPage() {
  return (
    <LandingLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              ISO 27001:2022 Learning Quiz
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Test your knowledge of ISO 27001:2022 controls and their corresponding annexes. 
              This interactive quiz helps you understand how different security controls are organized 
              and which annex they belong to. Score {CERTIFICATE_THRESHOLD}% or higher to earn a downloadable certificate!
            </p>
          </div>

          {/* Quiz Component */}
          <div className="mb-12">
            <ISO27001Quiz />
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Why Take This Quiz */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why Take This Quiz?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Understand ISO 27001:2022 control organization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Learn which controls belong to which annexes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Test your knowledge at different difficulty levels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Get detailed explanations for each answer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Track your progress and identify knowledge gaps</span>
                </li>
              </ul>
            </div>

            {/* ISO 27001:2022 Overview */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">ISO 27001:2022 Overview</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  ISO 27001:2022 is the international standard for information security management systems (ISMS). 
                  It provides a framework for managing and protecting sensitive information.
                </p>
                <p>
                  The standard includes 93 controls organized into 4 annexes:
                </p>
                <ul className="space-y-2 ml-4">
                  <li><strong>A.5 - Organizational Controls:</strong> Policies, roles, and governance</li>
                  <li><strong>A.6 - People Controls:</strong> Human resource security and awareness</li>
                  <li><strong>A.7 - Physical Controls:</strong> Physical and environmental security</li>
                  <li><strong>A.8 - Technological Controls:</strong> Technical security measures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Learn More?</h3>
              <p className="text-muted-foreground mb-6">
                After taking the quiz, explore our comprehensive ISO 27001 resources to deepen your understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/docs/iso27001/overview"
                  className="bg-primary text-primary-foreground py-2 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  ISO 27001 Overview
                </a>
                <a
                  href="/docs/iso27001/controls"
                  className="bg-secondary text-secondary-foreground py-2 px-6 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  Controls Reference
                </a>
                <a
                  href="/gap-assessment"
                  className="bg-primary text-primary-foreground py-2 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Gap Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
} 