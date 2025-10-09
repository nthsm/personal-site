'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SiteLayout from '@/components/ui/SiteLayout'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={cn(
              'text-8xl md:text-9xl font-extrabold tracking-tighter mb-4 not-prose gradient-text leading-normal',
            )}
          >
            404
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-zinc-700 dark:text-zinc-300 not-prose">
            Page Not Found
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </SiteLayout>
  )
}