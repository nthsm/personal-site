'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      {}
      <div className="flex items-center gap-4"> 
        <Image
          src="/headshot.png"
          alt="Your Name"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Nathan Smith
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            User-Centered Design
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
