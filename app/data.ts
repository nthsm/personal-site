import { SiLinkedin, SiInstagram, SiStrava } from 'react-icons/si';
import { IconType } from 'react-icons';

export type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type SocialLink = {
  label: string
  link: string
  icon: IconType
}

export const PROJECTS: Project[] = [
  {
    name: 'Sleeper Mobile App Redesign',
    description:
      'A project on improving the user experience and visual interface of the popular fantasy sports app, Sleeper.',
    link: '/sleeper',
    image: '/placeholder1.png',
    id: 'project1',
  },
  {
    name: 'GameKnight Website & Mobile App Concept',
    description:
      'A website and mobile app concept that removes the logistical hurdles of planning a game night, from scheduling to game selection.',
    link: '/gameknight',
    image: '/placeholder2.png',
    id: 'project2',
  },
  {
    name: 'Google Maps Mobile App Redesign',
    description:
      'A case study on improving the user experience and visual interface of the Google Maps mobile app.',
    link: '/google-maps',
    image: '/placeholder3.png',
    id: 'project3',
  },
  {
    name: 'Spotify Road Trip Mobile Feature',
    description:
      'A conceptual feature for Spotify that transforms passive listening into a collaborative road trip experience.',
    link: '/spotify-road-trip',
    image: '/placeholder4.png',
    id: 'project4',
  },
  {
    name: 'Kanopy TV App Redesign',
    description:
      'A TV app concept that focuses on improving the navigation for the TV app, Kanopy.',
    link: '/kanopy',
    image: '/placeholder4.png',
    id: 'project5',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nthsm',
    icon: SiLinkedin,
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/nhtfm',
    icon: SiInstagram,
  },
  {
    label: 'Strava',
    link: 'https://www.strava.com/athletes/139602024',
    icon: SiStrava,
  },
]
