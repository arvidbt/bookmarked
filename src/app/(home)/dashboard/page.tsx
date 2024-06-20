import { auth } from '@/lib/auth/auth'
import { getUserFolders } from '@/lib/db/get-user-folders'
import { EmptyDashboard } from '@/modules/dashboard/empty-dashboard'
import { PopulatedDashboard } from '@/modules/dashboard/populated-dashboard'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const { data, error } = await auth()

  if (error || !data?.user) {
    revalidatePath('sign-in', 'page')
    return redirect('sign-in')
  }

  const folders = await getUserFolders()

  if (!folders || folders.length === 0) {
    return (
      <div className="flex w-full p-8 sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex max-w-7xl grow flex-col rounded-xl border bg-background py-6">
          <EmptyDashboard />
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full p-8 sm:h-[calc(100vh-6rem-1px)]">
      <div className="mx-auto flex max-w-7xl grow flex-col rounded-xl border bg-background py-6">
        <PopulatedDashboard folders={folders} />
      </div>
    </div>
  )
}
