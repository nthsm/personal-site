import type { Metadata } from 'next'
import { title, description } from './page.mdx' 
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title,
  description,
}

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return children
}