'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub, SiLinkedin, SiInstagram, SiStrava } from 'react-icons/si'
import {
  CASE_STUDIES,
  EMAIL,
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
        <div className="flex-1">
          <p className="text-zinc-900 dark:text-zinc-300">
            Passionate about untangling complex problems to create 
            simple, intuitive, and effective digital experiences.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Featured Case Studies</h3>
        <div className="flex flex-col gap-8">
          {CASE_STUDIES.slice(0, 2).map((caseStudy) => (
            <div key={caseStudy.id} className="space-y-4">
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
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {caseStudy.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link 
            href="/case-studies" 
            className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            View All
          </Link>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect With Me</h3>
        <p className="mb-5 text-zinc-900 dark:text-zinc-300">
          Feel free to contact me at{' '}
          <a className="underline text-zinc-600 dark:text-zinc-50" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/nthsm" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
            <SiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nthsm" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
            <SiLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/nhtfm" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
            <SiInstagram size={24} />
          </a>
          <a href="https://www.strava.com/athletes/139602024" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
            <SiStrava size={24} />
          </a>
        </div>
      </motion.section>
    </motion.main>
  )
}