'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useGetUser } from '@/hooks/use-get-user'
import { signOut } from '@/lib/auth/sign-out-user'
import { navigate } from '@/utils/navigate'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'

import { useToast } from '../ui/use-toast'

export function SignedIn() {
  const { data } = useGetUser()
  const { toast } = useToast()

  const signout = useMutation({
    mutationFn: (id: string) => {
      return signOut()
    },

    onSuccess: () => {
      toast({
        title: `Signed out`,
      })
    },
  })

  return !data?.id ? null : (
    <div className="flex gap-4">
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger>
            {' '}
            <Avatar>
              <AvatarFallback>🧑</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DialogTrigger className="w-full">
              <DropdownMenuItem>🧑 Profile</DropdownMenuItem>
            </DialogTrigger>

            <Link href={'/billing/'}>
              <DropdownMenuItem>💳 Billing</DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              onClick={() =>
                signout.mutate(data.id, {
                  onSettled: () => navigate('/sign-in'),
                })
              }
            >
              🚪 Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dialog>
    </div>
  )
}
