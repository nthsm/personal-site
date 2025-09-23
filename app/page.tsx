'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CASE_STUDIES } from './data'

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

export default function Personal() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CASE_STUDIES.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CASE_STUDIES.length - 1 ? 0 : prevIndex + 1,
    )
  }
  
  useEffect(() => {
    const startAutoScroll = () => {
      timeoutRef.current = setInterval(() => {
        handleNext()
      }, 5000)
    };

    const stopAutoScroll = () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current)
      }
    };

    if (!isHovered) {
      startAutoScroll()
    }

    return () => stopAutoScroll()
  }, [isHovered, currentIndex])


  const currentStudy = CASE_STUDIES[currentIndex]

  return (
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
        <p className="text-zinc-800 dark:text-zinc-400">
          I'm passionate about untangling complex problems to create simple,
          intuitive, and effective digital experiences. I'm currently looking
          for new opportunities, so please feel free to{' '}
          <a
            className="underline text-zinc-600 dark:text-zinc-50"
            href="mailto:nathan@nthsm.com"
          >
            get in touch
          </a>{' '}
          or learn more{' '}
          <a
            className="underline text-zinc-600 dark:text-zinc-50"
            href="/about"
          >
            about me
          </a>
          .
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-medium">Case Studies</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="rounded-full p-1.5 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full p-1.5 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              aria-label="Next case study"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={currentStudy.link}
                key={currentStudy.id}
                className="group block"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50"
                >
                  <Image
                    src={currentStudy.image}
                    alt={currentStudy.name}
                    width={800}
                    height={450}
                    className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          {CASE_STUDIES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                currentIndex === index
                  ? 'bg-zinc-800 dark:bg-zinc-200'
                  : 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/case-studies"
            className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            View All
          </Link>
        </div>
      </motion.section>
    </motion.main>
  )
}
