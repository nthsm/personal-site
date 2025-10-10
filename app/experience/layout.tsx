import SiteLayout from '@/components/ui/SiteLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
}

export default function LayoutExperiencePage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-none pb-20">
        {children}
      </main>
    </SiteLayout>
  )
}