'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SiteLayout from '@/components/ui/SiteLayout'
import { ProjectNavigation } from '@/components/ui/ProjectNavigation'

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout showProgressBar>
      <main className="prose prose-zinc mx-auto max-w-5xl pb-20 dark:prose-invert prose-h1:text-5xl prose-h1:font-semibold prose-h1:tracking-tight">
        <Link
          href="/"
          className="no-underline mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        
        {children}

        <ProjectNavigation />
      </main>
    </SiteLayout>
  )
}
