'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { XIcon } from 'lucide-react'
import { CASE_STUDIES, type CaseStudy } from '@/app/data'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function CaseStudiesPage() {
  const springTransition = { type: 'spring', duration: 0.4, bounce: 0 }

  return (
    <main className="space-y-12">
      <motion.section
        variants={VARIANTS_SECTION}
        initial="hidden"
        animate="visible"
        transition={TRANSITION_SECTION}
      >
        <h1 className="mb-8 text-2xl font-semibold">All Case Studies</h1>
        <div className="flex flex-col gap-8">
          {CASE_STUDIES.map((caseStudy: CaseStudy) => (
            <div key={caseStudy.id} className="space-y-2">
              <MorphingDialog transition={springTransition}>
                <MorphingDialogTrigger>
                  <motion.div
                    layoutId={caseStudy.id}
                    transition={springTransition}
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
                    <motion.div layoutId={caseStudy.id} transition={springTransition} className="relative z-10">
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
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-white"
                  href={caseStudy.link}
                  target="_blank"
                >
                  {caseStudy.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-white transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-900 dark:text-zinc-300">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}