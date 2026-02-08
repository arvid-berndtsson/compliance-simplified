"use client";

import DocsShell from "@/components/DocsShell";
import ISO27001WalkthroughContent from "./iso27001-walkthrough.mdx";

export default function ISO27001WalkthroughPage() {
  return (
    <DocsShell
      title="ISO 27001 Walkthrough: Complete Implementation Guide"
      description="Work through a full ISO 27001 implementation sequence from scoping through operational rollout."
    >
      <ISO27001WalkthroughContent />
    </DocsShell>
  );
}
