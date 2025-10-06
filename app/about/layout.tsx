'use client'
import { SiteLayout } from '@/components/ui/SiteLayout'

export default function LayoutAboutPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <main className="prose prose-zinc mx-auto pb-20 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold max-w-none">
        {children}
      </main>
    </SiteLayout>
  )
}
