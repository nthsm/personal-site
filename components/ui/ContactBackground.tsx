import Image from 'next/image'
import { Marquee } from './marquee'

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => (
  <Marquee reverse={reverse}>
    {Array(15)
      .fill(0)
      .map((_, i) => (
        <div key={i} className="relative h-12 w-24 shrink-0 mx-2 md:h-16 md:w-32">
          <Image
            src="/ns.svg"
            alt="NS Logo"
            layout="fill"
            objectFit="contain"
            className="opacity-20 dark:opacity-10"
          />
        </div>
      ))}
  </Marquee>
)

export function ContactBackground() {
  return (
    <div className="absolute inset-0 z-0 flex flex-col justify-between overflow-hidden">
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={i % 2 === 1 ? 'ml-12 md:ml-16' : ''}>
            <MarqueeRow reverse={i % 2 === 1} />
          </div>
        ))}
    </div>
  )
}
