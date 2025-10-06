import { cn } from '@/lib/utils'
import React from 'react'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  [key: string]: any
}

export function Marquee({ className, reverse, children, ...props }: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex w-full overflow-hidden',
        className
      )}
    >
      <div
        className={cn('flex w-max shrink-0 animate-marquee items-center', {
          '[animation-direction:reverse]': reverse,
        })}
      >
        {children}
      </div>
      <div
        className={cn('flex w-max shrink-0 animate-marquee items-center', {
          '[animation-direction:reverse]': reverse,
        })}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
