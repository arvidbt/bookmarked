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
import { usePathname } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { useMutation } from '@tanstack/react-query'
import { signOut } from '@/lib/actions/sign-out-user'
import { revalidatePath } from 'next/cache'
import { navigate } from '@/lib/actions/navigate'
import { ProfileModal } from '../profile-modal'

export function SignedIn() {
  const { data, isFetching, isLoading, isSuccess } = useGetUser()
  const url = usePathname()
  const { toast } = useToast()

  const signOutMutation = useMutation({
    mutationFn: () => {
      return signOut()
    },

    onSuccess: () => {
      toast({
        title: `Signed out`,
      })
      revalidatePath('/')
      navigate('/')
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

            <Link href={'/billing'}>
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
