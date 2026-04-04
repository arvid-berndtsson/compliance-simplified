import Link from 'next/link'
import LandingLayout from '@/components/LandingLayout'

export default function DocsHomePage() {
  return (
    <LandingLayout>
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Documentation</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">Start fast, then go deeper</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Choose your framework, run a quick check, and only read the sections you need.
          </p>
        </section>

        <section className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="text-2xl font-semibold text-foreground">ISO 27001</h2>
            <p className="mt-2 text-sm text-muted-foreground">Best for building a formal ISMS and certification program.</p>
            <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>1. Read the overview (10 min)</li>
              <li>2. Run a gap assessment (15-20 min)</li>
              <li>3. Use quick start to prioritize work</li>
            </ol>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/docs/iso27001/overview" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                Start ISO 27001
              </Link>
              <Link href="/gap-assessment" className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted">
                Run Gap Assessment
              </Link>
            </div>
          </article>

          <article className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="text-2xl font-semibold text-foreground">SOC 2</h2>
            <p className="mt-2 text-sm text-muted-foreground">Best for customer trust reporting and audit readiness.</p>
            <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>1. Read the overview (10 min)</li>
              <li>2. Review trust criteria map (15 min)</li>
              <li>3. Use implementation guide for evidence planning</li>
            </ol>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/docs/soc2/overview" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                Start SOC 2
              </Link>
              <Link href="/docs/soc2/criteria" className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted">
                Open Criteria
              </Link>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-8 grid max-w-5xl gap-4 rounded-2xl border border-border/60 bg-muted/20 p-6 md:grid-cols-3">
          <Link href="/gap-assessment" className="rounded-lg border border-border/60 bg-background px-4 py-3 hover:bg-muted/30">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Quick Check</p>
            <p className="mt-1 font-medium text-foreground">Gap Assessment</p>
          </Link>
          <Link href="/quiz" className="rounded-lg border border-border/60 bg-background px-4 py-3 hover:bg-muted/30">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Learning</p>
            <p className="mt-1 font-medium text-foreground">ISO 27001 Quiz</p>
          </Link>
          <Link href="/tools" className="rounded-lg border border-border/60 bg-background px-4 py-3 hover:bg-muted/30">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Templates</p>
            <p className="mt-1 font-medium text-foreground">Open Tools</p>
          </Link>
        </section>
      </main>
    </LandingLayout>
  )
}
