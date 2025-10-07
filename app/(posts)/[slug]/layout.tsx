import type { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PROJECTS } from '@/app/data'
import { ReactNode } from 'react'

type NextPageProps<P = {}, S = {}> = {
  params: P;
  searchParams: S;
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

export async function generateMetadata(
  props: NextPageProps<{ slug: string }>
): Promise<Metadata> {
  const metadata = await getPostMetadata(props.params.slug);
  
  if (metadata) {
    return metadata as Metadata;
  }
  
  return { title: 'Project Not Found' };
}

export default function DynamicPostLayout({ children }: { 
    children: ReactNode; 
    params: { slug: string }; 
}) {
  return children
}