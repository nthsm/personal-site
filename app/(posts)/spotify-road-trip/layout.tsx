import type { Metadata } from 'next'
import { ReactNode } from 'react'
import path from 'path'
import { promises as fs } from 'fs'
import matter from 'gray-matter'

export async function generateMetadata(): Promise<Metadata> {
  const relativePath = 'app/(posts)/spotify-road-trip/page.mdx'
  const fullPath = path.join(process.cwd(), relativePath)

  let data: { title?: string; description?: string } = {}
  try {
    const fileContent = await fs.readFile(fullPath, 'utf8')
    data = matter(fileContent).data
  } catch (error) {
    
  }

  const projectTitle = (data.title ?? 'Untitled Project')
  const projectDescription = data.description

  return {
    title: `${projectTitle} — Nathan Smith`,
    description: projectDescription,
  }
}

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return children
}