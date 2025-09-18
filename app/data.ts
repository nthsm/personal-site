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
    name: 'Sleeper App Redesign',
    description:
      'A case study on improving the user experience and visual interface of the popular fantasy sports app, Sleeper.',
    link: '/case-studies/sleeper',
    image: '/placeholder.png',
    id: 'project1',
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
