'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactPage() {
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
    <>
      <h1><strong>Contact Me</strong></h1>
      <p className="lead">
        Have a project in mind or just want to say hello? Fill out the form
        below, and I'll get back to you as soon as possible.
      </p>

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
                className="block w-full rounded-md border-zinc-300 bg-zinc-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 sm:text-sm"
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
                className="block w-full rounded-md border-zinc-300 bg-zinc-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 sm:text-sm"
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
                className="block w-full rounded-md border-zinc-300 bg-zinc-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 dark:focus:ring-offset-zinc-900"
            >
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
    </>
  )
}