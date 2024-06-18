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
import { useGetUser } from '@/hooks/use-get-user'
import { useToast } from '../ui/use-toast'
import { useMutation } from '@tanstack/react-query'
import { signOut } from '@/lib/auth/sign-out-user'
import { ProfileModal } from '../profile-modal'
import { urlPaths } from '@/utils/paths'
import { navigate } from '@/lib/actions/navigate'

export function SignedIn() {
  const { data } = useGetUser()
  const { toast } = useToast()

  const signOutMutation = useMutation({
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

            <Link href={urlPaths.BILLING}>
              <DropdownMenuItem>💳 Billing</DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              onClick={() =>
                signOutMutation.mutate(data.id, {
                  onSettled: () => navigate(urlPaths.LOGIN),
                })
              }
            >
              🚪 Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <ProfileModal />
        </DialogContent>
      </Dialog>
    </div>
  )
}
