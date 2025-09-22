'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="prose prose-zinc mx-auto mt-24 pb-0 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold">
        <Link
          href="/"
          className="no-underline mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        
        {children}
      </main>
    </>
  )
}