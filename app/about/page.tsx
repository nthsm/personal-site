'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowUpRight, Download, Eye } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function AboutPage() {
  return (
    <motion.div
      className="not-prose"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <div className="bg-white p-8 rounded-xl shadow-lg dark:bg-zinc-900 h-full flex flex-col justify-between">
          
          <div className="flex-1"> 
            <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 gradient-text leading-normal")}>
                Hello, I'm Nathan Smith.
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-zinc-700 dark:text-zinc-300 not-prose">
                I design intuitive and human-centered technology.
            </p>
            
            <div className="prose prose-zinc prose-xl dark:prose-invert max-w-none">
              <p>
                I love the blend of <span className="not-prose gradient-text font-bold"> creativity, analytical thinking, people skills, and problem-solving </span>
                that UX design and research requires.
              </p>
              <p>
                As a designer, I lead with my core talents of <span className="not-prose gradient-text font-bold"> organization and empathy </span> to create products that are <span className="not-prose gradient-text font-bold"> equitable, enjoyable, and useful </span> for all people.
              </p>
              <p>
                I am currently completing a <span className="not-prose gradient-text font-bold">M.S. in Information Technology</span>
                {' '}at Florida State University, specializing in <span className="not-prose gradient-text font-bold">User-Centered Design.</span>
              </p>
              <p>
                I am also completing the <span className="not-prose gradient-text font-bold">Google UX Design Professional Certificate.</span>
              </p>
              <p>
                I graduated from Florida State University in 2025 with a B.S. in Management Information Systems and a minor in Computer Science.
                  This helps me <span className="not-prose gradient-text font-bold"> understand both the technical and business sides</span> of product development.
              </p>
              <p>
                If you want to know <span className="not-prose gradient-text font-bold"> more about my professional experience, </span>
                you can view my resume on{' '}
                <a
                  href="https://www.linkedin.com/in/nthsm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-current no-underline"
                >
                  LinkedIn
                  <ArrowUpRight className="ml-0.5 h-3 w-3" />
                </a>{' '}
                or <a href="/nathan_smith_resume.pdf" target="_blank" rel="noopener noreferrer" download className="inline-flex items-center text-current no-underline">
                  download it here
                  <Download className="ml-0.5 h-3 w-3" />
                </a>.
              </p>
            </div>
          </div> 

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex justify-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
            >
              <Eye className="h-5 w-5 mr-2" />
              View My Work
            </Link>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}
