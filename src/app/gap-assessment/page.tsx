"use client";

import GapAssessmentTool from "@/components/GapAssessmentTool";
import LandingLayout from "@/components/LandingLayout";

export default function GapAssessmentPage() {
  return (
    <LandingLayout>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              ISO 27001 Gap Assessment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Evaluate your organization's current state against ISO 27001:2022
              requirements. This self-assessment tool will help you identify
              gaps and prioritize your compliance efforts.
            </p>
          </div>

          <GapAssessmentTool />
        </div>
      </div>
    </LandingLayout>
  );
}
