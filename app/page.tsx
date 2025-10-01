'use client'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJECTS } from './data'

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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

export default function Personal() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1,
    )
  }

  useEffect(() => {
    const startAutoScroll = () => {
      timeoutRef.current = setInterval(() => {
        handleNext()
      }, 5000)
    }

    const stopAutoScroll = () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current)
      }
    }

    if (!isHovered) {
      startAutoScroll()
    }

    return () => stopAutoScroll()
  }, [isHovered, currentIndex])

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 100
    if (info.offset.x < -swipeThreshold) {
      handleNext()
    } else if (info.offset.x > swipeThreshold) {
      handlePrev()
    }
  }

  const currentStudy = PROJECTS[currentIndex]

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
          <h3 className="text-lg font-medium">Projects</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="rounded-full p-1.5 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full p-1.5 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="relative cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="relative overflow-hidden rounded-xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50"
            style={{ aspectRatio: '800 / 700' }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                className="absolute top-0 left-0 h-full w-full"
              >
                <Link
                  href={currentStudy.link}
                  key={currentStudy.id}
                  className="group block h-full w-full"
                >
                  <Image
                    src={currentStudy.image}
                    alt={currentStudy.name}
                    width={800}
                    height={700}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                currentIndex === index
                  ? 'bg-zinc-800 dark:bg-zinc-200'
                  : 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            View All
          </Link>
        </div>
      </motion.section>
    </motion.main>
  )
}
