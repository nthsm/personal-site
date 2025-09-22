'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub, SiLinkedin, SiInstagram, SiStrava } from 'react-icons/si'
import {
  CASE_STUDIES,
  EMAIL,
  ABOUTME,
} from './data'

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
  const heroCaseStudy = CASE_STUDIES[0];
  const secondaryCaseStudies = CASE_STUDIES.slice(1, 4); 

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
          Passionate about untangling complex problems to create 
          simple, intuitive, and effective digital experiences.
          Feel free to contact me{' '}
          <a className="underline text-zinc-600 dark:text-zinc-50" href={`mailto:nathan@nthsm.com`}>
            {EMAIL}
          </a>
          . 
          Learn more about me{' '}
          <a className="underline text-zinc-600 dark:text-zinc-50" href={`/about-me`}>
            {ABOUTME}
          </a>
          .
        </p>
      </motion.section>

<motion.section
  variants={VARIANTS_SECTION}
  transition={TRANSITION_SECTION}
>
  <h3 className="mb-5 text-lg font-medium">Case Studies</h3>
  <div className="flex flex-col gap-1">
    {/* Hero Project */}
    <Link
      href={heroCaseStudy.link}
      key={heroCaseStudy.id}
      className="group block"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }} 
        className="overflow-hidden rounded-xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50"
      >
        <Image
          src={heroCaseStudy.image}
          alt={heroCaseStudy.name}
          width={800}
          height={450}
          className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>
    </Link>

    {/* Grid of 2 Secondary Projects */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
      {CASE_STUDIES.slice(1, 3).map((caseStudy) => ( // <-- Changed 4 to 3 here
        <Link
          href={caseStudy.link}
          key={caseStudy.id}
          className="group block" // <-- Simplified this className
        >
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="overflow-hidden rounded-xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50"
          >
            <Image
              src={caseStudy.image}
              alt={caseStudy.name}
              width={320}
              height={180}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        </Link>
      ))}
    </div>
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
