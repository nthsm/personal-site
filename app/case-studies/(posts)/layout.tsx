'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'


export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gradient-to-b from-white to-transparent backdrop-blur-sm dark:from-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-zinc-400 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />
      
      <main className="prose prose-zinc mx-auto mt-24 pb-20 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold">
        {children}
      </main>
    </>
  )
}