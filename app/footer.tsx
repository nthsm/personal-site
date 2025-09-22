'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SiGithub, SiLinkedin, SiInstagram, SiStrava } from 'react-icons/si'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-200 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-transparent text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 hover:border-zinc-300 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50 dark:hover:border-zinc-700"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-300 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">

        <span className="text-xs text-zinc-600">
          © 2025 Nathan Smith
        </span>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nthsm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            <SiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nthsm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            <SiLinkedin size={16} />
          </a>
          <a
            href="https://www.instagram.com/nhtfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            <SiInstagram size={16} />
          </a>
          <a
            href="https://www.strava.com/athletes/139602024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            <SiStrava size={16} />
          </a>
          <div className="text-xs text-zinc-400">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  )
}
