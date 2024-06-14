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
import { signOut } from '@/lib/actions/sign-out-user'
import { revalidatePath } from 'next/cache'
import { ProfileModal } from '../profile-modal'
import { urlPaths } from '@/utils/paths'
import { useRouter } from 'next/navigation'

export function SignedIn() {
  const { data } = useGetUser()
  const { toast } = useToast()
  const router = useRouter()

  const signOutMutation = useMutation({
    mutationFn: () => {
      return signOut()
    },

    onSuccess: () => {
      toast({
        title: `Signed out`,
      })
      revalidatePath(urlPaths.HOME)
      router.push(urlPaths.HOME)
    },
  })

  return !data?.id ? null : (
    <div className="flex gap-4">
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger>
            {' '}
            <Avatar>
              <AvatarImage src="https://githubs.com/shadcn.png" />
              <AvatarFallback>🧑</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="">
                <p className="font-medium">{''}</p>
                <p className="font-light text-gray-500">{'user.data.email'}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DialogTrigger className="w-full">
              <DropdownMenuItem>🧑 Profile</DropdownMenuItem>
            </DialogTrigger>

            <Link href={urlPaths.BILLING}>
              <DropdownMenuItem>💳 Billing</DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={() => signOutMutation.mutate()}>
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
