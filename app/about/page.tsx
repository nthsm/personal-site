'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function AboutPage() {
  return (
    <motion.div
      className="not-prose lg:grid lg:grid-cols-5 lg:gap-16 lg:items-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="prose prose-zinc max-w-none dark:prose-invert lg:col-span-3"
      >
        <p>
          <strong>
            Hello, I'm Nathan Smith. I design intuitive and human-centered
            technology.
          </strong>
        </p>
        <p>
          I'm a UX/UI Designer currently completing a M.S. in Information
          Technology at Florida State University, specializing in User-Centered
          Design, alongside the Google UX Design Professional Certificate.
        </p>
        <p>
          My journey into design began with a simple belief: that great
          technology should feel invisible. It should be intuitive, accessible,
          and built around real human needs. This led me to a B.S. in Management
          Information Systems and a minor in Computer Science, where I gained a
          strong technical foundation.
        </p>
        <p>
          This unique background in data and design, supported by a fluency in
          web development technologies, allows me to bridge the gap between
          technical possibilities and human-centered solutions. It means I can
          design with a deep understanding of the entire product lifecycle, from
          initial concept to final implementation.
        </p>
        <p>
          Outside of design, I spend my time tinkering, exploring, and riding
          far distances on my gravel bike or rugged trails on my mountain bike. I
          still make music from time to time as well, and I'm a proud owner of
          the DFAM and Mother-32 analog synths.
        </p>
        <p>
          I have a deep-seated curiosity for knowing why something works the way
          it does, and I’m always wondering if it can be done better. This drive
          to explore, understand, and improve is at the core of who I am, both
          in my hobbies and in my design work.
        </p>
        <p>
          If you want to know more about my work experience, you can view a copy
          of my resume on LinkedIn. You can also connect with me on Strava—I'd
          love to see your favorite routes!
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-12 lg:mt-0 lg:col-span-2"
      >
        <Image
          src="/aboutme.png"
          alt="An image of Nathan Smith with his girlfriend on a zip line in Tallahassee, Florida"
          width={995}
          height={1326}
          className="w-full h-auto rounded-xl"
          quality={100}
          priority
        />
      </motion.div>
    </motion.div>
  )
}