'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PROJECTS } from './data'
import SiteLayout from '@/components/ui/SiteLayout'
import { cn } from '@/lib/utils'
import { ArrowRight, PenTool, MapPin } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function HomePage() {
  return (
    <SiteLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="mb-24 text-left" variants={itemVariants}>
            <h1 className="font-serif text-6xl tracking-tight text-zinc-900 dark:text-zinc-100 md:text-7xl">
                Nathan Smith
            </h1>
            <div className="mt-4 space-y-1 text-base text-zinc-600 dark:text-zinc-400 md:text-lg">
                <div className="flex items-center">
                    <PenTool className="h-4 w-4 mr-2" />
                    <span>UX/UI Designer</span>
                </div>
                <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Tallahassee, FL</span>
                </div>
            </div>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={cn(
                'group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12',
              )}
            >
              <Link
                href={project.link}
                className={cn(
                  'overflow-hidden rounded-lg',
                  index % 2 !== 0 && 'md:order-2',
                )}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div
                className={cn(
                  'flex flex-col items-start gap-4',
                  index % 2 !== 0 && 'md:order-1',
                )}
              >
                <h2 className="font-serif text-3xl tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
                  {project.name}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="mt-2 inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SiteLayout>
  )
}
