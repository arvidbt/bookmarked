import { Divider } from './Divider'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="mx-auto hidden h-24 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
        <a href="/dashboard">
          <h1 className="relative flex flex-row items-baseline text-2xl font-bold">
            📚 bookmark
          </h1>
        </a>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              {' '}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
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
              <DropdownMenuItem>🧑 Profile</DropdownMenuItem>
              <Link href={'/billing'}>
                <DropdownMenuItem>💳 Billing</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>🚪 Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-x-4"></div>
      <div className="mx-auto flex h-16 w-full items-center justify-between gap-x-6 p-4 sm:hidden">
        <a href="/dashboard">
          <h1 className="relative flex flex-row items-baseline text-2xl font-bold">
            📚 bookmark
          </h1>
        </a>
        <div className="flex gap-4"></div>
      </div>
      <Divider />
    </>
  )
}
