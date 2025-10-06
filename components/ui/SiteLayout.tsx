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

const NavLink = ({ href, children, onClose }: { href: string; children: React.ReactNode; onClose?: () => void }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'block transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-100',
        isActive
          ? 'font-semibold text-zinc-900 dark:text-zinc-100'
          : 'text-zinc-600 dark:text-zinc-400'
      )}
      onClick={onClose}
    >
      {children}
    </Link>
  )
};

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      // return a placeholder to avoid layout shift
      return <div className="w-8 h-8" />;
    }
    
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-md flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </button>
    )
}

const Sidebar = ({ onClose }: { onClose?: () => void }) => (
  <aside className="h-full flex flex-col justify-between p-8 bg-zinc-50 dark:bg-zinc-950">
    <div>
        <div className="flex justify-between items-start mb-12">
            <Link href="/" className="block" onClick={onClose}>
                <h1 className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">Nathan Smith</h1>
            </Link>
            {onClose && (
                <button onClick={onClose} className="md:hidden -mt-1 -mr-2 p-2 text-zinc-600 dark:text-zinc-400">
                    <X size={20} />
                </button>
            )}
        </div>
        <nav className="space-y-4">
            <NavLink href="/" onClose={onClose}>Projects</NavLink>
            <NavLink href="/about" onClose={onClose}>About</NavLink>
        </nav>
    </div>
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(social => {
                const Icon = social.icon;
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
);

export function SiteLayout({ children, showProgressBar = false }: { children: React.ReactNode, showProgressBar?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    if(isMenuOpen) setIsMenuOpen(false);
  })

  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100">
      <div className="md:flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block md:w-64 md:flex-shrink-0 md:border-r border-zinc-200 dark:border-zinc-800 fixed h-full">
          <Sidebar />
        </div>
        <div className="hidden md:block md:w-64 md:flex-shrink-0"></div>

        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 bg-zinc-100/80 dark:bg-zinc-950/80 backdrop-blur-sm">
            <header className="flex justify-between items-center p-4 border-b border-zinc-200 dark:border-zinc-800">
                <Link href="/" className="block">
                    <h1 className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">Nathan Smith</h1>
                </Link>
                <button onClick={() => setIsMenuOpen(true)} className="z-50 p-2 -mr-2 text-zinc-600 dark:text-zinc-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </header>
            {showProgressBar && (
                <ScrollProgress
                className="h-0.5 bg-zinc-500 dark:bg-zinc-600"
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
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 right-0 bottom-0 w-64 border-l border-zinc-200 dark:border-zinc-800 z-50 md:hidden"
              >
                <Sidebar onClose={() => setIsMenuOpen(false)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <main className="flex-1 p-4 md:p-8">
            {showProgressBar && (
                <div className="hidden md:block sticky top-0 z-20 bg-zinc-100 dark:bg-zinc-950 py-4 -mx-8 px-8 mb-4">
                    <div className="h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <ScrollProgress
                            className="h-full bg-zinc-500 dark:bg-zinc-600 rounded-full"
                            springOptions={{ bounce: 0 }}
                        />
                    </div>
                </div>
            )}
          {children}
        </main>
      </div>
    </div>
  );
}
