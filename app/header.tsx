'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">
          <motion.div whileHover={{ scale: 1.07 }}>
            <Image
              src="/headshot.png"
              alt="Nathan Smith"
              width={64}
              height={64}
              className="rounded-full"
            />
          </motion.div>
        </Link>

        <div>
          <Link href="/" className="font-medium text-zinc-900 dark:text-zinc-50">
            Nathan Smith
          </Link>
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
    </header>
  )
}
