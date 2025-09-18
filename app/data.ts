export type CaseStudy = {
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
    link: '/case-studies/gameknight',
    image: '/placeholder.png',
    id: 'project1',
  },
  {
    name: 'ChoreBud',
    description: 'Making chores easier.',
    link: '/case-studies/chorebud',
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
  {
    label: 'Strava',
    link: 'https://www.strava.com/athletes/139602024',
  },
]

export const EMAIL = 'nathan@nthsm.com'
