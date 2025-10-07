'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PROJECTS } from './data'
import { SiteLayout } from '@/components/ui/SiteLayout'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function HomePage() {
  return (
    <SiteLayout>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Link
              href={project.link}
              className="group block space-y-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-lg aspect-w-1 aspect-h-1"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>

              <div className="pt-1">
                <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h4>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SiteLayout>
  )
}
