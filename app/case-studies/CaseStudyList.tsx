'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { type CaseStudy } from '@/app/data'

// 1. Create a new component that is both a motion component AND a Next.js Link
const MotionLink = motion(Link)

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
        <h3 className="mb-5 text-lg font-medium">Case Studies Collection</h3>
        <div className="flex flex-col gap-8">
          {caseStudies.map((caseStudy) => (
            <MotionLink
              key={caseStudy.id}
              href={caseStudy.link}
              className="group block space-y-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="overflow-hidden rounded-xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.name}
                  width={800}
                  height={450}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="px-1">
                <h4 className="group relative inline-block font-[450] text-zinc-900 dark:text-zinc-100">
                  {caseStudy.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-100 transition-all duration-200 group-hover:max-w-full"></span>
                </h4>
                <p className="text-base text-zinc-900 dark:text-zinc-400">
                  {caseStudy.description}
                </p>
              </div>
            </MotionLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}