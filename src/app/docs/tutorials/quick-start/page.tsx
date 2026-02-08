"use client";

import DocsShell from "@/components/DocsShell";
import QuickStartContent from "./quick-start.mdx";

export default function QuickStartPage() {
  return (
    <DocsShell
      title="Quick Start: Your First Compliance Project"
      description="Follow a practical first project path to launch compliance work with measurable momentum."
    >
      <QuickStartContent />
    </DocsShell>
  );
}
