import DocsLayout from "@/components/DocsLayout"
import ControlsMDX from "./controls.mdx"

export default function ISO27001ControlsPage() {
  return (
    <DocsLayout
      title="ISO 27001 Controls Reference"
      description="Comprehensive reference for all ISO 27001:2022 Annex A controls"
    >
      <ControlsMDX />
    </DocsLayout>
  )
} 