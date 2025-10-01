'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import useClickOutside from '@/hooks/useClickOutside'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)

  useClickOutside(menuRef, () => setIsMenuOpen(false))

  return (
    <header ref={menuRef} className="relative z-50">
      <div className="mb-8 flex items-center justify-between">
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
                UX/UI Designer
              </TextEffect>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-md p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-md border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
          >
            <nav className="flex flex-col p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-4 py-2 text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
