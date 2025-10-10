'use client'
import Link from 'next/link'
import { useState, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIAL_LINKS } from '@/app/data'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, X, PanelLeftClose, PanelLeftOpen, LayoutGrid, User, Briefcase, Mail } from 'lucide-react'
import useClickOutside from '@/hooks/useClickOutside'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { BackToTopButton } from './back-to-top-button'
import Image from 'next/image'
import { useSidebar } from '@/app/context/SidebarContext'

const Tooltip = ({ children, label, side = 'left' }: { children: ReactNode, label: string, side?: 'left' | 'right' | 'top' }) => {
    const positionClasses = {
        left: 'left-full ml-4',
        right: 'right-full mr-4',
        top: 'bottom-full mb-2 left-1/2 -translate-x-1/2'
    };
    const animationClasses = {
        left: '-translate-x-2 group-hover:translate-x-0',
        right: 'translate-x-2 group-hover:translate-x-0',
        top: 'translate-y-2 group-hover:translate-y-0'
    };

    return (
      <div className="group relative flex items-center">
        {children}
        <span
          className={cn(
            "pointer-events-none absolute whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 delay-150 group-hover:opacity-100 group-hover:delay-1000",
            positionClasses[side],
            animationClasses[side]
          )}
        >
          {label}
        </span>
      </div>
    );
};

const NavLink = ({
  href,
  children,
  onClose,
  isCollapsed,
  icon: Icon
}: {
  href: string
  children: React.ReactNode
  onClose?: () => void
  isCollapsed?: boolean
  icon?: React.ElementType
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  const linkContent = (
    <>
      {Icon && <Icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />}
      {!isCollapsed && children}
    </>
  );

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-100',
        isActive
          ? 'font-semibold text-zinc-900 dark:text-zinc-100'
          : 'text-zinc-600 dark:text-zinc-400',
        isCollapsed ? 'justify-center rounded-lg p-2' : ''
      )}
      onClick={onClose}
    >
      {isCollapsed ? (
        <Tooltip label={children as string}>
          {linkContent}
        </Tooltip>
      ) : (
        linkContent
      )}
    </Link>
  )
}

const ThemeToggle = ({ variant = 'default', isCollapsed = false }: { variant?: 'default' | 'icon', isCollapsed?: boolean }) => {
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
    <Tooltip label={theme === 'dark' ? "Light Mode" : "Dark Mode"} side={isCollapsed ? 'left' : 'top'}>
      <button
        onClick={toggleTheme}
        className={cn(baseClasses, variantClasses[variant])}
        aria-label="Toggle theme"
        suppressHydrationWarning
      >
        {buttonContent}
      </button>
    </Tooltip>
  )
}

const MobileNavMenu = ({ onClose }: { onClose?: () => void }) => (
    <div className="bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800">
      <nav className="space-y-4 mb-6">
        <NavLink href="/" onClose={onClose}>Projects</NavLink>
        <NavLink href="/about" onClose={onClose}>About</NavLink>
        <NavLink href="/experience" onClose={onClose}>Experience</NavLink>
        <NavLink href="/contact" onClose={onClose}>Contact</NavLink>
      </nav>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
            <ThemeToggle variant="icon" />
        </div>
      </div>
    </div>
);


const LogoComponent = ({ className, onClose, isCollapsed }: { className?: string; onClose?: () => void, isCollapsed?: boolean }) => (
    <Link href="/" className={cn('block h-7', className)} onClick={onClose}>
        {isCollapsed ? (
            <Image
                src="/ns.svg"
                alt="Nathan Smith Logo (condensed)"
                width={28}
                height={28}
                priority={true}
                className="w-7 h-7"
            />
        ) : (
            <Image
                src="/nathansmith.svg"
                alt="Nathan Smith Logo"
                width={200}
                height={30}
                priority={true}
                className="w-auto h-7 dark:h-7"
            />
        )}
    </Link>
)


const Sidebar = ({ isCollapsed, onToggleCollapse }: { isCollapsed: boolean; onToggleCollapse: () => void; }) => (
    <aside className="flex h-full flex-col justify-between bg-zinc-50 dark:bg-zinc-950">
      <div className={cn(isCollapsed ? 'p-4 pt-8' : 'p-8')}>
        <div className={cn("mb-12 flex items-start", isCollapsed ? 'justify-center' : 'justify-between')}>
          <LogoComponent isCollapsed={isCollapsed} />
        </div>
        <nav className="space-y-4">
            <NavLink href="/" isCollapsed={isCollapsed} icon={LayoutGrid}>Projects</NavLink>
            <NavLink href="/about" isCollapsed={isCollapsed} icon={User}>About</NavLink>
            <NavLink href="/experience" isCollapsed={isCollapsed} icon={Briefcase}>Experience</NavLink>
            <NavLink href="/contact" isCollapsed={isCollapsed} icon={Mail}>Contact</NavLink>
        </nav>
      </div>

      <div className={cn("w-full", isCollapsed ? 'p-4' : 'p-8')}>
        <div className={cn("flex w-full items-center", isCollapsed ? "flex-col" : "justify-between")}>
          <div className={cn("flex items-center", isCollapsed ? "mt-4 flex-col gap-2" : "gap-2")}>
            <ThemeToggle isCollapsed={isCollapsed} />
            <Tooltip label={isCollapsed ? "Expand Navigation" : "Collapse Navigation"} side={isCollapsed ? 'left' : 'top'}>
                <button
                  onClick={onToggleCollapse}
                  className="relative hidden lg:flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-300 focus:outline-none dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                  aria-label="Toggle sidebar"
                >
                  {isCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
                </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
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
  const { isCollapsed, setIsCollapsed, hasMounted } = useSidebar();

  useClickOutside(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false)
  })

  if (!hasMounted) {
    return (
       <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="lg:flex">
            <div className="hidden lg:block lg:flex-shrink-0 lg:w-64"></div>
            <main className="flex-1 p-4 lg:p-8">
                {children}
            </main>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="lg:flex">
        {/* Desktop Sidebar */}
        <div className={cn(
          'fixed hidden h-svh border-zinc-200 dark:border-zinc-800 lg:block lg:flex-shrink-0 lg:border-r [will-change:width]',
          'transition-[width] duration-300 ease-in-out',
          isCollapsed ? 'lg:w-20' : 'lg:w-64'
        )}>
          <Sidebar isCollapsed={isCollapsed} onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />
        </div>
        <div className={cn(
          "hidden lg:block lg:flex-shrink-0 [will-change:width]",
          'transition-[width] duration-300 ease-in-out',
           isCollapsed ? 'lg:w-20' : 'lg:w-64'
        )}></div>

        {/* Mobile Header */}
        <div className="sticky top-0 z-30 bg-zinc-100/80 backdrop-blur-sm dark:bg-zinc-950/80 lg:hidden">
          <header className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
            <LogoComponent className="h-6" /> 
            
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

        <main className="flex-1 p-4 lg:p-8">
          {showProgressBar && (
            <div className="sticky top-0 z-20 -mx-8 mb-4 hidden bg-zinc-100 px-8 py-4 dark:bg-zinc-950 lg:block">
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
