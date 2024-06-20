import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import { cn } from '@/utils/tailwind'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import { Bricolage_Grotesque } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import './globals.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'foldermates',
  description: 'Make bookmarking simpler.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.className)}
      style={{ colorScheme: 'dark' }}
    >
      <link rel="icon" href="/icon.ico" sizes="any" />
      <body className="bg-background text-foreground">
        <NextTopLoader showSpinner={false} height={2} color="#000" />
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <ReactQueryProvider>
            <main className="flex min-h-screen flex-col items-center">
              <Header />
              {children}
              <Toaster />
              <Analytics />{' '}
              {/* ^^ remove this if you are not deploying to vercel. See more at https://vercel.com/docs/analytics  */}
            </main>
            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
