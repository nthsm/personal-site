'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { Send, X } from 'lucide-react'
import { SOCIAL_LINKS } from '@/app/data'

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'General Inquiry',
    message: '',
  })
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('')
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    const data = new FormData(e.currentTarget)

    try {
      const response = await fetch(e.currentTarget.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', reason: 'General Inquiry', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <>
      <motion.div
        className="not-prose"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div> 
            <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 gradient-text leading-normal md:inline-block")}>
                Let's build something great.
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-zinc-700 dark:text-zinc-300">
              Have a project in mind or just want to say hello? I'm always seeking new opportunities to <span className="not-prose gradient-text font-bold">learn and grow.</span>
            </p>

            <div className="mt-8 max-w-lg"> 
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                method="POST"
                action="https://formspree.io/f/xblzazba"
              >
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Reason <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <select
                      name="reason" id="reason" required value={formData.reason} onChange={handleChange}
                      className="block w-full rounded-md border-none bg-zinc-50 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-50 sm:text-lg p-3"
                    >
                      <option>General Inquiry</option>
                      <option>Project Collaboration</option>
                      <option>Job Opportunity</option>
                      <option>Just saying hello!</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                      className="block w-full rounded-md border-none bg-zinc-50 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-50 sm:text-lg p-3"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange}
                      className="block w-full rounded-md border-none bg-zinc-50 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-50 sm:text-lg p-3"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange}
                      className="block w-full rounded-md border-none bg-zinc-50 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-50 sm:text-lg p-3"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit" disabled={status === 'loading'}
                    className="inline-flex justify-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 disabled:opacity-50"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">Or connect with me on social media</h3>
                <div className="flex justify-center items-center gap-6 mt-4">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.label}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="p-2 text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
            
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
            className="fixed bottom-4 right-4 z-50 w-full max-w-sm"
          >
            <div className={cn('relative rounded-lg p-4', status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200')}>
              <button onClick={() => setStatus('')} aria-label="Close" className="absolute top-2 right-2 p-1 rounded-full text-inherit hover:bg-white/20">
                <X className="h-5 w-5" />
              </button>
              <p className="pr-6 text-sm font-medium">
                {status === 'success'
                  ? 'Thank you! Your message has been sent successfully.'
                  : 'Something went wrong. Please try again later.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
