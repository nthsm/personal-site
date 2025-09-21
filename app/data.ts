export type CaseStudy = {
  name: string
  description: string
  link: string
  image: string
  id: string
  width?: number
  height?: number
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
  {
    name: 'GameKnight App Concept',
    description:
      'A mobile app concept that removes the logistical hurdles of planning a game night, from scheduling to game selection.',
    link: '/case-studies/gameknight',
    image: '/placeholder.png',
    id: 'project2',
  },
  {
    name: 'ChoreBud App Concept',
    description:
      'A concept for a mobile app designed to reduce household friction by gamifying and simplifying chore management for roommates.',
    link: '/case-studies/chorebud',
    image: '/placeholder.png',
    id: 'project3',
  },
  {
    name: 'IMON Website Redesign',
    description:
      'Revitalizing the digital presence for IMON, involving a complete overhaul of the information architecture and visual identity.',
    link: '/case-studies/imon',
    image: '/placeholder.png',
    id: 'project4',
  },
  {
    name: 'Spotify Road Trip Feature',
    description:
      'N/A',
    link: '/case-studies/spotify-road-trip',
    image: '/placeholder.png',
    id: 'project5',
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

export const EMAIL = 'here'

export const ABOUTME = 'here'
