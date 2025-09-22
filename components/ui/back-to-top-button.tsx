'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTopButton() {
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
      className={`fixed bottom-12 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-700 shadow-md transition-opacity duration-200 dark:bg-zinc-800 dark:text-zinc-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Go to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}