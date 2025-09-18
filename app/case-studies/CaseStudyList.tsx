'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { type CaseStudy } from '@/app/data'

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
            <div key={caseStudy.id} className="space-y-2">
              <Link href={caseStudy.link} className="group">
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
              </Link>
              
              <Link href={caseStudy.link} className="group block px-1">
                <h4 className="group relative inline-block font-[450] text-zinc-900 dark:text-zinc-100">
                  {caseStudy.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-100 transition-all duration-200 group-hover:max-w-full"></span>
                </h4>
                <p className="text-base text-zinc-900 dark:text-zinc-400">
                  {caseStudy.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}