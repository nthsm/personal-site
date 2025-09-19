'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { type CaseStudy } from '@/app/data'

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) setIsVisible(true)
      else setIsVisible(false)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function CaseStudyList({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <>
      <div className="mt-24">
        <Link
          href="/"
          className="no-underline mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <motion.main
          className="space-y-24"
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <div className="flex flex-col gap-8">
              {caseStudies.map((caseStudy) => (
                <Link 
                  href={caseStudy.link} 
                  key={caseStudy.id} 
                  className="group block space-y-2"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    className="overflow-hidden rounded-xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50"
                  >
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.name}
                      width={800}
                      height={450}
                      className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                  
                  <div className="px-1">
                    <h4 className="group relative inline-block font-[450] text-zinc-900 dark:text-zinc-100">
                      {caseStudy.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-100 transition-all duration-200 group-hover:max-w-full"></span>
                    </h4>
                    <p className="text-base text-zinc-900 dark:text-zinc-400">
                      {caseStudy.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        </motion.main>
      </div>
      
      <BackToTopButton />
    </>
  )
}