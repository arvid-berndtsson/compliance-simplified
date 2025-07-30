import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audit Site - ISO 27001 & SOC 2 Compliance',
  description: 'Comprehensive guidance for ISO 27001 and SOC 2 compliance implementation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
} 