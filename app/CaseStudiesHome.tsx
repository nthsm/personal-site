// app/CaseStudiesHome.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react';
import { CaseStudy } from './data';

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

const getGridSpan = (width: number | undefined, height: number | undefined): string => {
    if (typeof width !== 'number' || typeof height !== 'number' || height === 0) {
        return 'col-span-1 row-span-1';
    }
    const aspectRatio = width / height;
    if (aspectRatio > 1.5) {
        return 'col-span-2';
    }
    if (aspectRatio < 0.75) {
        return 'row-span-2';
    }
    return 'col-span-1 row-span-1';
}

const DynamicLayout = ({ caseStudies }: { caseStudies: CaseStudy[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 [grid-auto-flow:dense]">
        {caseStudies.map((caseStudy: CaseStudy) => {
            const spanClass = getGridSpan(caseStudy.width, caseStudy.height);
            return (
                <div
                    key={caseStudy.id}
                    className={spanClass}
                >
                    <Link href={caseStudy.link} className="group block h-full">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="overflow-hidden h-full rounded-xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50"
                        >
                            <Image
                                src={caseStudy.image}
                                alt={caseStudy.name}
                                width={caseStudy.width || 800}
                                height={caseStudy.height || 450}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </motion.div>
                    </Link>
                </div>
            )
        })}
    </div>
);


interface CaseStudiesHomeProps {
  caseStudies: CaseStudy[];
  email: string;
  aboutme: string;
}


export default function CaseStudiesHome({ caseStudies, email, aboutme }: CaseStudiesHomeProps) {
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
          <a className="underline text-zinc-600 dark:text-zinc-50" href={`mailto:${email}`}>
            here
          </a>
          .
          Learn more about me{' '}
          <a className="underline text-zinc-600 dark:text-zinc-50" href={`/about-me`}>
            {aboutme}
          </a>
          .
        </p>
      </motion.section>

      {caseStudies.length > 0 && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Case Studies</h3>
          <DynamicLayout caseStudies={caseStudies} />
          <div className="mt-8 flex justify-center">
            <Link
              href="/case-studies"
              className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              View All
            </Link>
          </div>
        </motion.section>
      )}
    </motion.main>
  )
}