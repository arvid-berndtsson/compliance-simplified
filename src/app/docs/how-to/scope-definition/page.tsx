"use client";

import DocsShell from "@/components/DocsShell";
import ScopeDefinitionContent from "./scope-definition.mdx";

export default function ScopeDefinitionPage() {
  return (
    <DocsShell
      title="How to Define Your Compliance Scope"
      description="Define boundaries, systems, and ownership clearly so implementation and audits stay focused."
    >
      <ScopeDefinitionContent />
    </DocsShell>
  );
}
