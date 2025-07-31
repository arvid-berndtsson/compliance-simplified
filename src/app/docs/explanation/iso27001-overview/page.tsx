"use client";

import DocLayout from "@/components/DocLayout";
import ISO27001OverviewContent from "./iso27001-overview.mdx";

export default function ISO27001OverviewPage() {
  return (
    <DocLayout title="Understanding ISO 27001: The Complete Picture">
      <ISO27001OverviewContent />
    </DocLayout>
  );
}
