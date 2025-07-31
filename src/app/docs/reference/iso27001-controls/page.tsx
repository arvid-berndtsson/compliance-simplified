"use client";

import DocLayout from "@/components/DocLayout";
import ISO27001ControlsContent from "./iso27001-controls.mdx";

export default function ISO27001ControlsPage() {
  return (
    <DocLayout title="ISO 27001 Controls Reference">
      <ISO27001ControlsContent />
    </DocLayout>
  );
}
