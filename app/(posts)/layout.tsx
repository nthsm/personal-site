'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteLayout } from '@/components/ui/SiteLayout'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { BackToTopButton } from '@/components/ui/back-to-top-button'

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <div className="pointer-events-none fixed left-0 top-14 z-10 h-12 w-full bg-gradient-to-b from-zinc-100 to-transparent dark:from-zinc-950 md:top-0 md:left-64" />
      <ScrollProgress
        className="fixed top-14 z-20 h-0.5 bg-zinc-500 dark:bg-zinc-600 md:top-0 md:left-64"
        springOptions={{
          bounce: 0,
        }}
      />
      <main className="prose prose-zinc mx-auto pb-20 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold max-w-none">
        <Link
          href="/"
          className="no-underline mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </Link>
        
        {children}
      </main>
      <BackToTopButton />
    </SiteLayout>
  )
}
