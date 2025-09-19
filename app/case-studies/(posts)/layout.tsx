'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ScrollProgress } from '@/components/ui/scroll-progress'

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-700 shadow-md transition-opacity duration-200 dark:bg-zinc-800 dark:text-zinc-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Go to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}


export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gradient-to-b from-white to-transparent backdrop-blur-sm dark:from-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-zinc-400 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />
      
      <main className="prose prose-zinc mx-auto mt-24 pb-20 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold">
        <Link
          href="/case-studies"
          className="no-underline mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Case Studies</span>
        </Link>
        
        {children}
      </main>

      <BackToTopButton />
    </>
  )
}