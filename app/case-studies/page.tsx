import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import CaseStudyList from './CaseStudyList'
import { type CaseStudy } from '@/app/data'

function getCaseStudies() {
  const postsDirectory = path.join(process.cwd(), 'app/case-studies/(posts)')
  const allEntries = fs.readdirSync(postsDirectory)

  const caseStudies = allEntries
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
        name: data.title || 'Untitled Case Study',
        description: data.description || 'No description provided.',
        image: data.image || '/placeholder.png',
        link: `/case-studies/${slug}`,
      }
    })

  return caseStudies as CaseStudy[]
}

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies()

  return <CaseStudyList caseStudies={caseStudies} />
}
