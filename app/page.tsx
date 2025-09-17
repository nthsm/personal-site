'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram, XIcon } from 'lucide-react'
import {
  CASE_STUDIES,
  EMAIL,
} from './data'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

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
          <p className="text-zinc-900 dark:text-zinc-400">
            Passionate about untangling complex problems to create 
            simple, intuitive, and effective digital experiences.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Case Studies</h3>
        <div className="flex flex-col gap-8">
          {CASE_STUDIES.map((caseStudy) => (
            <div key={caseStudy.id} className="space-y-2">
                <MorphingDialog
                  transition={{
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.0,
                  }}
                >
                <MorphingDialogTrigger>
                  <motion.div
                    layoutId={caseStudy.id}
                    className="relative cursor-pointer overflow-hidden rounded-xl ring-1 ring-zinc-200/50 ring-inset transition-transform duration-300 group-hover:scale-105 dark:ring-zinc-800/50"
                  >
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.name}
                      width={800}
                      height={450}
                    />
                  </motion.div>
                </MorphingDialogTrigger>
                <MorphingDialogContent>
                  <MorphingDialogContainer>
                    <motion.div layoutId={caseStudy.id} className="relative z-10">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.name}
                        width={1200}
                        height={675}
                        className="rounded-xl"
                      />
                    </motion.div>
                    <MorphingDialogClose>
                      <div className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white/80 p-1 backdrop-blur-md">
                        <XIcon className="h-5 w-5 text-zinc-600" />
                      </div>
                    </MorphingDialogClose>
                  </MorphingDialogContainer>
                </MorphingDialogContent>
              </MorphingDialog>

              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-100"
                  href={caseStudy.link}
                  target="_blank"
                >
                  {caseStudy.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-100 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-900 dark:text-zinc-400">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link 
            href="/case-studies" 
            className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            View All
          </Link>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-900 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-200" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/nthsm" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nthsm" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/nhtfm" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            <Instagram size={24} />
          </a>
        </div>
      </motion.section>
    </motion.main>
  )
}