import { BookmarkFolder } from '@/components/bookmark-folder'
import { FollowFolderModal } from '@/components/follow-folder-modal'
import Link from 'next/link'
import { z } from 'zod'
import { urlPaths } from '@/utils/paths'
import useSupabaseServer from '@/hooks/use-supabase-server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getUserFolders } from '@/lib/db/get-user-folders'

export default async function Dashboard() {
  const supabase = useSupabaseServer(cookies())
  const { data, error } = await supabase.auth.getUser()
  const userFolders = await getUserFolders()
  const followedFolders: string | any[] = []

  if (error || !data?.user) {
    revalidatePath(urlPaths.LOGIN, 'page')
    return redirect(urlPaths.LOGIN)
  }

  const displayGreeting =
    userFolders &&
    userFolders.length === 0 &&
    followedFolders &&
    followedFolders.length === 0

  return (
    <div className="flex w-full p-8 sm:h-[calc(100vh-6rem-1px)]">
      <div className="mx-auto flex max-w-7xl grow flex-col rounded-xl border bg-background py-6">
        {!displayGreeting && (
          <div className="flex grow flex-col">
            <div className="flex w-full items-center justify-between gap-4 px-6 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold">Your Folders</h2>
                <p className="text-sm font-medium text-gray-500">
                  Total followers:{' '}
                  <span className="font-bold text-green-600">0</span>
                </p>
              </div>

              <Link href={urlPaths.NEW_FOLDER}>
                <span className="flex items-center gap-2 rounded-lg bg-green-600 p-2 text-white hover:bg-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="aspect-square h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    ></path>
                  </svg>
                  <span className="hidden text-sm font-medium lg:block">
                    Create a new folder
                  </span>
                </span>
              </Link>
            </div>
            <div>
              <ul className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto p-6 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                {userFolders &&
                  userFolders.map((f) => <BookmarkFolder key={f.id} {...f} />)}
              </ul>
            </div>
            <div className="flex w-full items-center justify-between gap-4 px-6 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold">Followed Folders</h2>
              </div>
              <FollowFolderModal />
            </div>
            <div>
              <ul className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto p-6 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                {followedFolders &&
                  followedFolders.map((f) => (
                    <BookmarkFolder key={f.id} {...f} />
                  ))}
              </ul>
            </div>
            {/* <div className="flex w-full items-center justify-between gap-4 px-6 py-6 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold">Followed Folders</h2>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Not following any bookmarks. Start following a public
                    bookmark folder to see it here!
                  </p>
                </div>
                <div>
                  <ul className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto p-6 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                    {userFolders &&
                      userFolders.map((f) => (
                        <BookmarkFolder key={f.id} {...f} />
                      ))}
                  </ul>
                </div>
              </div>
              <FollowFolderModal />
            </div> */}
          </div>
        )}
        {displayGreeting && (
          <div className="flex min-h-full max-w-full flex-col items-center justify-center py-6">
            <div className="flex flex-row justify-between gap-4">
              <Link href={urlPaths.NEW_FOLDER}>
                <span className="flex items-center gap-2 rounded-lg bg-green-600 p-2 px-4 text-white hover:bg-green-500">
                  <span className="hidden text-sm font-medium lg:block">
                    Create your first folder
                  </span>
                </span>
              </Link>
              <FollowFolderModal />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
