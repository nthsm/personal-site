import type { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SidebarProvider } from './context/SidebarContext'

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
    default: 'Projects — Nathan Smith',
    template: '%s — Nathan Smith'
  },
  description: 'Personal website and living portfolio for Nathan Smith, a FSU graduate student and Product Designer.',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png?v=2',
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
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
        className={`${figtree.variable} bg-zinc-50 tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
