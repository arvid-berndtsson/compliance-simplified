"use client";

import DocsShell from "@/components/DocsShell";
import GlossaryContent from "./glossary.mdx";

export default function GlossaryPage() {
  return (
    <DocsShell
      title="Compliance Glossary"
      description="Quick definitions for ISO 27001 and SOC 2 terms used throughout the implementation guides."
    >
      <GlossaryContent />
    </DocsShell>
  );
}
