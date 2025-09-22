'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from './morphing-dialog'

const imageUrls = [
  '/image-grid/PXL7.jpg',
  '/image-grid/PXL3.jpg',
  '/image-grid/PXL9.jpg',
  '/image-grid/PXL4.jpg',
  '/image-grid/PXL11.jpg',
  '/image-grid/PXL12.jpg',
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
        <motion.div variants={itemVariants} key={url}>
          <MorphingDialog>
            <MorphingDialogTrigger>
              <div className="relative aspect-square">
                <Image
                  src={url}
                  alt={`Grid image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover rounded-xl cursor-pointer"
                />
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent>
                <div className="relative">
                  <Image
                    src={url}
                    alt="Enlarged grid image"
                    width={1200}
                    height={900}
                    className="object-contain rounded-xl max-h-[90vh] max-w-[90vw]"
                  />
                  <MorphingDialogClose />
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        </motion.div>
      ))}
    </motion.div>
  )
}