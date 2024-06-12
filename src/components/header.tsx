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

export default function Header() {
  const user = useGetUser().data
  const url = usePathname()

  return (
    <div>
      {!url.includes('/login') && (
        <div>
          {/* Desktop view */}
          <div className="mx-auto hidden h-24 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
            <a href={user ? '/dashboad' : '/'}>
              <h1 className="relative flex flex-row items-baseline text-4xl font-black">
                📚 Foldrr
              </h1>
            </a>

            {user && (
              <div className="flex gap-4">
                <Dialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      {' '}
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>🧑</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        <div className="">
                          <p className="font-medium">Arvid</p>
                          <p className="font-light text-gray-500">
                            arvid.bergman.thorn@cygni.se
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <DialogTrigger className="w-full">
                        <DropdownMenuItem>🧑 Profile</DropdownMenuItem>
                      </DialogTrigger>

                      <Link href={'/billing'}>
                        <DropdownMenuItem>💳 Billing</DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem>🚪 Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DialogContent>
                    <ProfileModal />
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {!user && (
              <a
                className="rounded-lg bg-red-600 p-2 px-4 font-black text-white hover:bg-red-500"
                href="/login"
              >
                Sign In
              </a>
            )}
          </div>

          {/* Mobile view */}
          <div className="flex items-center gap-x-4"></div>
          <div className="mx-auto flex h-16 w-full items-center justify-between gap-x-6 p-4 sm:hidden">
            <a href="/dashboard">
              <h1 className="relative flex flex-row items-baseline text-2xl font-bold">
                📚 Foldrr
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
