import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn(
      'fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-sm flex justify-center py-4 px-4 bg-zinc-100 dark:bg-zinc-900',
      className
    )}>
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/" className="text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
            About
          </Link>
        </li>
        <li>
          <Link href="/case-studies" className="text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
            Case Studies
          </Link>
        </li>
      </ul>
    </nav>
  )
}