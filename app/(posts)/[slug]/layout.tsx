import type { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PROJECTS } from '@/app/data'
import { ReactNode } from 'react'

type Params = {
  slug: string
}

async function getPostMetadata(slug: string) {
  const MDX_FILE_PATH = path.join(
    process.cwd(), 
    'app', 
    '(posts)', 
    '[slug]', 
    `${slug}.mdx` 
  )

  try {
    const fileContents = await fs.readFile(MDX_FILE_PATH, 'utf8')
    const { data } = matter(fileContents)
    return {
        title: data.title,
        description: data.description,
    }
  } catch (error) {
    return null;
  }
}

export function generateStaticParams() {
  return PROJECTS.map(project => ({
    slug: project.link.slice(1), 
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const metadata = await getPostMetadata(params.slug);
  
  if (metadata) {
    return metadata as Metadata;
  }
  
  return { title: 'Project Not Found' };
}

export default function DynamicPostLayout({ children }: { children: ReactNode }) {
  return children
}