'use client'

import { useGetUser } from '@/hooks/use-get-user'
import { usePathname } from 'next/navigation'
import { SignedIn } from './auth/signed-in'
import { SignedOut } from './auth/signed-out'
import { urlPaths } from '@/utils/paths'
import { pageMetadata } from '@/utils/metadata'
import { Logo } from './logo'

export const dynamic = 'force-dynamic'

export default function Header() {
  const { data } = useGetUser()
  const url = usePathname()

  return (
    <div className="bg-gray-100/40">
      {!url.includes(urlPaths.LOGIN) && (
        <div>
          {/* Desktop view */}
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8">
            <a href={data ? urlPaths.DASHBOARD : urlPaths.HOME}>
              <h1 className="relative flex flex-row items-baseline text-2xl font-black">
                <div className="flex items-center justify-center gap-2">
                  <Logo />
                  {pageMetadata.title}
                </div>
                {/* 📚  */}
              </h1>
            </a>
            <SignedIn />
            <SignedOut />
          </div>

          {/* Mobile view */}
          <div className="flex items-center gap-x-4"></div>
          {/* <div className="mx-auto flex h-16 w-full items-center justify-between gap-x-6 p-4 px-6 sm:hidden">
            <a href={data ? urlPaths.DASHBOARD : urlPaths.HOME}>
              <h1 className="relative flex flex-row items-baseline text-2xl font-bold">
                {pageMetadata.title}
              </h1>
            </a>
            <div className="flex gap-4"></div>
          </div> */}
          <div className="h-px w-screen bg-border"></div>
        </div>
      )}
    </div>
  )
}
