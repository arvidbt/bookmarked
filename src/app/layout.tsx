import { GeistSans } from 'geist/font/sans'
import ThemeProvider from '@/providers/ThemeProvider'
import NextTopLoader from 'nextjs-toploader'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'
import { pageMetadata } from '@/utils/metadata'

export const metadata = { ...pageMetadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={GeistSans.className}
      style={{ colorScheme: 'dark' }}
    >
      <link rel="icon" href="/icon.ico" sizes="any" />
      <body className="bg-background text-foreground">
        <NextTopLoader showSpinner={false} height={4} color="#FFEB3B" />
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
