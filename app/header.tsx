'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <Link href="/" className="group">
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.08 }}>
            <Image
              src="/headshot.png"
              alt="Nathan Smith"
              width={64}
              height={64}
              className="rounded-full"
            />
          </motion.div>
          <div>
            <div className="font-medium text-zinc-900 dark:text-zinc-50">
              Nathan Smith
            </div>
            <TextEffect
              as="p"
              preset="fade"
              className="text-zinc-700 dark:text-zinc-400"
              delay={0.5}
            >
              Product Designer
            </TextEffect>
          </div>
        </div>
      </Link>
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Case Studies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
