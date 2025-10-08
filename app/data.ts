import { SiLinkedin, SiStrava } from 'react-icons/si';
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
    name: 'Sleeper — Mobile App Redesign',
    description:
      'A project on improving the user experience and visual interface of the popular fantasy sports app, Sleeper.',
    link: '/sleeper',
    image: '/placeholder.png',
    id: 'project1',
  },
  {
    name: 'GameKnight — Website & Mobile App Concept',
    description:
      'A website and mobile app concept that removes the logistical hurdles of planning a game night, from scheduling to game selection.',
    link: '/gameknight',
    image: '/placeholder.png',
    id: 'project2',
  },
  {
    name: 'Google Maps — Mobile App Redesign',
    description:
      'A case study on improving the user experience and visual interface of the Google Maps mobile app.',
    link: '/google-maps',
    image: '/placeholder.png',
    id: 'project3',
  },
  {
    name: 'Spotify Road Trip — Mobile Feature Concept',
    description:
      'A conceptual feature for Spotify that transforms passive listening into a collaborative road trip experience.',
    link: '/spotify-road-trip',
    image: '/placeholder.png',
    id: 'project4',
  },
  {
    name: 'Kanopy — TV App Redesign',
    description:
      'A TV app concept that focuses on improving the navigation for the TV app, Kanopy.',
    link: '/kanopy',
    image: '/placeholder.png',
    id: 'project5',
  },
  {
    name: 'My Portfolio — Website & Mobile App Design',
    description:
      'A website & mobile app design created for my digital portfolio.',
    link: '/portfolio',
    image: '/placeholder.png',
    id: 'project6',
  },
  {
    name: 'Circuit Source — Website & Mobile App Concept',
    description:
      'A website & mobile app concept that gives gamers a place to buy and sell gaming equipment.',
    link: '/circuit-source',
    image: '/placeholder.png',
    id: 'project7',
  },
  {
    name: 'It\'s Meow or Never — Website Redesign',
    description:
      'A website & mobile app design created for my digital portfolio.',
    link: '/itsmeowornever',
    image: '/placeholder.png',
    id: 'project8',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nthsm',
    icon: SiLinkedin,
  },
  {
    label: 'Strava',
    link: 'https://www.strava.com/athletes/139602024',
    icon: SiStrava,
  },
]
