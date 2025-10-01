import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ProjectList from './ProjectList'
import { type Project } from '@/app/data'

function getProjects() {
  const postsDirectory = path.join(process.cwd(), 'app/projects/(posts)')
  const allEntries = fs.readdirSync(postsDirectory)

  const projects = allEntries
    .filter(entry => {
      const fullPath = path.join(postsDirectory, entry)
      return fs.statSync(fullPath).isDirectory()
    })
    .map(slug => {
      const filePath = path.join(postsDirectory, slug, 'page.mdx')
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)

      return {
        id: slug,
        name: data.title || 'Untitled Project',
        description: data.description || 'No description provided.',
        image: data.image || '/placeholder.png',
        link: `/projects/${slug}`,
      }
    })

  return projects as Project[]
}

export default function ProjectsPage() {
  const projects = getProjects()

  return <ProjectList projects={projects} />
}
