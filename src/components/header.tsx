'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Link from 'next/link'
import { ProfileModal } from './profile-modal'
import { useGetUser } from '@/hooks/use-get-user'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import { useMutation } from '@tanstack/react-query'
import { signOut } from '@/lib/actions/sign-out-user'
import { navigate } from '@/lib/actions/navigate'
import { revalidatePath } from 'next/cache'
import { useToast } from './ui/use-toast'
import { SignedIn } from './auth/signed-in'
import { SignedOut } from './auth/signed-out'

export default function Header() {
  const { data, isFetching, isLoading, isSuccess } = useGetUser()
  const url = usePathname()

  return (
    <div>
      {!url.includes('/login') && (
        <div>
          {/* Desktop view */}
          <div className="mx-auto hidden h-24 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
            <a href={data ? '/dashboard' : '/'}>
              <h1 className="relative flex flex-row items-baseline text-4xl font-black">
                Foldrr
                {/* 📚  */}
              </h1>
            </a>
            <SignedIn />
            <SignedOut />
          </div>

          {/* Mobile view */}
          <div className="flex items-center gap-x-4"></div>
          <div className="mx-auto flex h-16 w-full items-center justify-between gap-x-6 p-4 sm:hidden">
            <a href="/dashboard">
              <h1 className="relative flex flex-row items-baseline text-2xl font-bold">
                Foldrr
              </h1>
            </a>
            <div className="flex gap-4"></div>
          </div>
          <div className="h-px w-screen bg-border"></div>
        </div>
      )}
    </div>
  )
}
