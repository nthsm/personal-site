'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PROJECTS, Project } from '@/app/data'
import { cn } from '@/lib/utils'

export function ProjectNavigation() {
  const pathname = usePathname()

  const currentPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  const currentIndex = PROJECTS.findIndex(
    (project: Project) => project.link === currentPath,
  )

  if (currentIndex === -1) {
    return null
  }

  const numProjects = PROJECTS.length

  const nextIndex = (currentIndex + 1) % numProjects
  const nextProject = PROJECTS[nextIndex]

  const prevIndex = (currentIndex - 1 + numProjects) % numProjects
  const prevProject = PROJECTS[prevIndex]

  return (
    <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="grid grid-cols-2 gap-4">
        {prevProject && (
          <Link
            href={prevProject.link}
            className={cn(
              'w-full group flex flex-col items-start justify-center p-4 rounded-lg transition-colors duration-200',
              'bg-transparent hover:bg-zinc-200 dark:bg-transparent dark:hover:bg-zinc-800',
              'no-underline',
            )}
          >
            <div className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">
              <ArrowLeft className="h-4 w-4 mr-1 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Previous Project
            </div>
            <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {prevProject.name}
            </span>
          </Link>
        )}

        {nextProject && (
          <Link
            href={nextProject.link}
            className={cn(
              'w-full group flex flex-col items-end justify-center p-4 rounded-lg transition-colors duration-200',
              'bg-transparent hover:bg-zinc-200 dark:bg-transparent dark:hover:bg-zinc-800',
              'text-right no-underline',
            )}
          >
            <div className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">
              Next Project
              <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
            <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {nextProject.name}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}