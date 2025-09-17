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
          alt="Nathan Smith"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <Link href="/" className="font-medium text-zinc-900 dark:text-zinc-100">
            Nathan Smith
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            className="text-zinc-600 dark:text-zinc-400"
            delay={0.5}
          >
            User-Centered Design
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
