'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { BackToTopButton } from '@/components/ui/back-to-top-button'

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gradient-to-b from-white to-transparent dark:from-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-zinc-500 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />
      
      <main className="prose prose-zinc mx-auto mt-24 pb-20 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold">
        <Link
          href="/projects"
          className="no-underline mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </Link>
        
        {children}
      </main>

      <BackToTopButton />
    </>
  )
}
