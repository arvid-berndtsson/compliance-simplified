'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface LegacyRedirectPageProps {
  destination: string
  label: string
}

export default function LegacyRedirectPage({ destination, label }: LegacyRedirectPageProps) {
  const router = useRouter()

  useEffect(() => {
    router.replace(destination)
  }, [destination, router])

  return (
    <main className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Page moved</h1>
      <p className="mt-2 text-muted-foreground">This page now lives at {label}.</p>
      <Link
        href={destination}
        className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Continue
      </Link>
    </main>
  )
}
