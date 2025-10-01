import type { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nthsm.com/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Nathan Smith',
    template: '%s | Nathan Smith'
  },
  description: 'Personal website and living portfolio for Nathan Smith, a FSU graduate student and Product Designer.',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} bg-zinc-100 tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-figtree)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
