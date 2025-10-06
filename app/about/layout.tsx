'use client'
import { SiteLayout } from '@/components/ui/SiteLayout'

export default function LayoutAboutPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <main className="prose prose-zinc mx-auto max-w-none pb-20 dark:prose-invert">
        {children}
      </main>
    </SiteLayout>
  )
}
