'use client'
import { SiteLayout } from '@/components/ui/SiteLayout'
import { motion } from 'framer-motion'
import { ContactBackground } from '@/components/ui/ContactBackground'

export default function LayoutContactPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <div
        className="relative -m-4 flex h-[calc(100vh-4.5rem)] items-center justify-center overflow-hidden bg-zinc-50 p-4 dark:bg-zinc-950 md:-m-8 md:h-screen"
      >
        <ContactBackground />

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
