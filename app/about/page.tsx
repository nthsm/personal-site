'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import Link from 'next/link'
import { Download, Send } from 'lucide-react'

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:your-email@example.com?subject=Contact from ${encodeURIComponent(name)} - ${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.div
      className="not-prose lg:grid lg:grid-cols-2 lg:gap-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      <motion.div variants={itemVariants} className="mt-12 lg:mt-0">
        <div className="bg-white p-8 rounded-xl shadow-lg dark:bg-zinc-900 h-full flex flex-col justify-between">
          
          <div className="flex-1"> 
            <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 not-prose gradient-text leading-normal")}>
                Hello, I'm Nathan Smith.
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-zinc-700 dark:text-zinc-300 not-prose">
                I design intuitive and human-centered technology.
            </p>
            
            <div className="prose prose-zinc prose-xl dark:prose-invert max-w-none">
              <p>
                I am currently completing a <span className="not-prose gradient-text font-bold">M.S. in Information Technology</span>
                {' '}at Florida State University, specializing in <span className="not-prose gradient-text font-bold">User-Centered Design.</span>
              </p>
              <p>
                I am also completing the <span className="not-prose gradient-text font-bold">Google UX Design</span> Professional Certificate.
              </p>
              <p>
                I have my B.S. in Management Information Systems with a minor in Computer Science.
              </p>
              <p>
                If you want to know more about my work experience, 
                you can view a <span className="not-prose gradient-text font-bold">copy of my resume</span> on LinkedIn 
                or <span className="not-prose gradient-text font-bold">click the download button below.</span>
              </p>
              <p>
                You can also connect with me on Strava—I'd love to see your favorite routes!
              </p>
            </div>
          </div> 

          <div className="pt-8">
            <Link
              href="/nathan_smith_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex justify-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Link>
          </div>

        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-12 lg:mt-0"> 
        <div className="bg-white p-8 rounded-xl shadow-lg dark:bg-zinc-900 h-full flex flex-col justify-between"> 

          <div className="flex-1"> 
            <h2 className={cn("text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 gradient-text leading-normal")}>
                Let's build something great.
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-zinc-700 dark:text-zinc-300">
              Have a project in mind or just want to say hello? I'm always seeking new opportunities to <span className="not-prose gradient-text font-bold">learn and grow.</span>
            </p>
          </div>

          <div className="mt-8 max-w-lg"> 
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-none bg-zinc-100 shadow-md focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-50 sm:text-lg p-3"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-none bg-zinc-100 shadow-md focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-50 sm:text-lg p-3"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-none bg-zinc-100 shadow-md focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-50 sm:text-lg p-3"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 rounded-md bg-green-50 p-4 dark:bg-green-900/20"
                >
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        Thank you! Your email client has been opened.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}
