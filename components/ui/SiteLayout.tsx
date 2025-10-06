'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIAL_LINKS } from '@/app/data'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, X } from 'lucide-react'
import useClickOutside from '@/hooks/useClickOutside'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { BackToTopButton } from './back-to-top-button'

const NavLink = ({
  href,
  children,
  onClose,
}: {
  href: string
  children: React.ReactNode
  onClose?: () => void
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'block transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-100',
        isActive
          ? 'font-semibold text-zinc-900 dark:text-zinc-100'
          : 'text-zinc-600 dark:text-zinc-400',
      )}
      onClick={onClose}
    >
      {children}
    </Link>
  )
}

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-8 w-8 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-300 focus:outline-none dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute"
          >
            <SunIcon className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute"
          >
            <MoonIcon className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

const Sidebar = ({ onClose }: { onClose?: () => void }) => (
  <aside className="flex h-full flex-col justify-between bg-zinc-50 p-8 dark:bg-zinc-950">
    <div>
      <div className="mb-12 flex items-start justify-between">
        <Link href="/" className="block" onClick={onClose}>
          <h1 className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
            Nathan Smith
          </h1>
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            className="-mr-2 -mt-1 p-2 text-zinc-600 dark:text-zinc-400 md:hidden"
          >
            <X size={20} />
          </button>
        )}
      </div>
      <nav className="space-y-4">
        <NavLink href="/" onClose={onClose}>
          Projects
        </NavLink>
        <NavLink href="/about" onClose={onClose}>
          About
        </NavLink>
        <NavLink href="/contact" onClose={onClose}>
          Contact
        </NavLink>
      </nav>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              <Icon size={18} />
            </a>
          )
        })}
      </div>
      <ThemeToggle />
    </div>
  </aside>
)

export function SiteLayout({
  children,
  showProgressBar = false,
}: {
  children: React.ReactNode
  showProgressBar?: boolean
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false)
  })

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="md:flex">
        {/* Desktop Sidebar */}
        <div className="fixed hidden h-full border-zinc-200 dark:border-zinc-800 md:block md:w-64 md:flex-shrink-0 md:border-r">
          <Sidebar />
        </div>
        <div className="hidden md:block md:w-64 md:flex-shrink-0"></div>

        {/* Mobile Header */}
        <div className="sticky top-0 z-30 bg-zinc-100/80 backdrop-blur-sm dark:bg-zinc-950/80 md:hidden">
          <header className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
            <Link href="/" className="block">
              <h1 className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
                Nathan Smith
              </h1>
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="z-50 -mr-2 p-2 text-zinc-600 dark:text-zinc-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </header>
          {showProgressBar && (
            <ScrollProgress
              className="h-0.5 bg-zinc-800 dark:bg-zinc-600"
              springOptions={{ bounce: 0 }}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 bg-black/50 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed bottom-0 right-0 top-0 z-50 w-64 border-l border-zinc-200 dark:border-zinc-800 md:hidden"
              >
                <Sidebar onClose={() => setIsMenuOpen(false)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <main className="flex-1 p-4 md:p-8">
          {showProgressBar && (
            <div className="sticky top-0 z-20 -mx-8 mb-4 hidden bg-zinc-100 px-8 py-4 dark:bg-zinc-950 md:block">
              <div className="h-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <ScrollProgress
                  className="h-full rounded-full bg-zinc-800 dark:bg-zinc-600"
                  springOptions={{ bounce: 0 }}
                />
              </div>
            </div>
          )}
          {children}
        </main>
      </div>
      <BackToTopButton isMenuOpen={isMenuOpen} />
    </div>
  )
}
