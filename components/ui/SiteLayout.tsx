'use client'
import Link from 'next/link'
import { useState, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIAL_LINKS } from '@/app/data'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, X } from 'lucide-react'
import useClickOutside from '@/hooks/useClickOutside'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { BackToTopButton } from './back-to-top-button'
import Image from 'next/image'

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
        'transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-100',
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

const ThemeToggle = ({ variant = 'default' }: { variant?: 'default' | 'icon' }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const baseClasses = "relative flex items-center justify-center overflow-hidden transition-colors focus:outline-none";
        
  const variantClasses = {
      default: "h-8 w-8 rounded-lg bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700",
      icon: "h-8 w-8 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
  };

  const buttonContent = (
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
            <SunIcon className="h-[18px] w-[18px]" />
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
            <MoonIcon className="h-[18px] w-[18px]" />
          </motion.div>
        )}
      </AnimatePresence>
  );

  return (
      <button
        onClick={toggleTheme}
        className={cn(baseClasses, variantClasses[variant])}
        aria-label="Toggle theme"
        suppressHydrationWarning
      >
        {buttonContent}
      </button>
  )
}

const MobileNavMenu = ({ onClose }: { onClose?: () => void }) => (
    <div className="bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800">
      <nav className="flex flex-col space-y-4">
        <NavLink href="/" onClose={onClose}>Work</NavLink>
        <NavLink href="/about" onClose={onClose}>About</NavLink>
        <NavLink href="/experience" onClose={onClose}>Experience</NavLink>
        <NavLink href="/contact" onClose={onClose}>Contact</NavLink>
      </nav>
    </div>
);


const LogoComponent = ({ className, onClose }: { className?: string; onClose?: () => void }) => (
    <Link href="/" className={cn('block h-7', className)} onClick={onClose}>
        <Image
            src="/ns.svg"
            alt="Nathan Smith Logo"
            width={28}
            height={28}
            priority={true}
            className="w-7 h-7"
        />
    </Link>
)
  
export default function SiteLayout({
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
      <div className="sticky top-0 z-30 bg-zinc-50 dark:bg-zinc-950">
        <header className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <LogoComponent className="h-6" />
          
          <div className="hidden lg:flex items-center gap-6">
            <NavLink href="/">Work</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/experience">Experience</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle variant="icon" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 -mr-2 p-2 text-zinc-600 dark:text-zinc-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
        {showProgressBar && (
          <ScrollProgress
            className="h-0.5 bg-zinc-800 dark:bg-zinc-600"
            springOptions={{ bounce: 0 }}
          />
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-20 right-4 z-50 origin-top-right lg:hidden"
            >
              <MobileNavMenu onClose={() => setIsMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 p-4 pt-16 lg:p-8 lg:pt-24 max-w-7xl mx-auto">
        {children}
      </main>

      <BackToTopButton isMenuOpen={isMenuOpen} />
    </div>
  )
}
