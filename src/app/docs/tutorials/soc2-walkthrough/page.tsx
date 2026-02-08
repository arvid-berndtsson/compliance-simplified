"use client";

import DocsShell from "@/components/DocsShell";
import SOC2WalkthroughContent from "./soc2-walkthrough.mdx";

export default function SOC2WalkthroughPage() {
  return (
    <DocsShell
      title="SOC 2 Walkthrough: Complete Implementation Guide"
      description="Step through a complete SOC 2 readiness and evidence lifecycle across all trust criteria."
    >
      <SOC2WalkthroughContent />
    </DocsShell>
  );
}
