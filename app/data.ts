type CaseStudy = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: 'GameKnight',
    description:
      'Crown your crew.',
    link: '#',
    image: '/placeholder.png',
    id: 'project1',
  },
  {
    name: 'ChoreBud',
    description: 'Making chores easier.',
    link: '#',
    image: '/placeholder.png',
    id: 'project2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/nthsm',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nthsm',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/nhtfm',
  },
]

export const EMAIL = 'nathan@nthsm.com'
