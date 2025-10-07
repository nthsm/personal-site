import { notFound } from 'next/navigation'
import { PROJECTS } from '@/app/data'

export default async function DynamicProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const projectExists = PROJECTS.some((project) => project.link.slice(1) === slug)

  if (!projectExists) {
    notFound()
  }

  try {
    const { default: Content } = await import(`./${slug}.mdx`)

    return <Content />
  } catch (e) {
    notFound()
  }
}