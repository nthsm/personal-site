'use client'
import { SiteLayout } from '@/components/ui/SiteLayout'
import { motion } from 'framer-motion'

export default function LayoutContactPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <div
        className="relative -m-4 flex h-[calc(100vh-4.5rem)] items-center justify-center bg-cover bg-center p-4 md:-m-8 md:h-screen"
        style={{ backgroundImage: `url('/contact-bg.jpg')` }}
      >

        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
            duration: 0.2,
          }}
          className="relative z-10 w-full max-w-md rounded-2xl bg-white/80 p-8 shadow-2xl backdrop-blur-lg dark:bg-zinc-900/80"
        >
          {children}
        </motion.div>
      </div>
    </SiteLayout>
  )
}