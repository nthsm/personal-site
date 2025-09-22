'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const imageUrls = [
  '/placeholder1.png',
  '/placeholder1.png',
  '/placeholder1.png',
  '/placeholder1.png',
  '/placeholder1.png',
  '/placeholder1.png',
  '/placeholder1.png',
  '/placeholder1.png',
  '/placeholder1.png',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ImageGrid() {
  return (
    <motion.div
      className="grid grid-cols-3 gap-x-2 gap-y-2 mt-28"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {imageUrls.map((url, index) => (
        <motion.div
          key={index}
          className="relative aspect-square"
          variants={itemVariants}
        >
          <Image
            src={url}
            alt={`Grid image ${index + 1}`}
            width={300}
            height={300}
            className="object-cover rounded-xl"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}