'use client'

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { SearchProvider } from './SearchProvider'

interface LandingLayoutProps {
  children: ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-background">
        <Header showSearch={false} />
        {children}
        <Footer />
      </div>
    </SearchProvider>
  )
} 