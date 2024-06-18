import { AddUrlModal } from '@/components/add-url-modal'
import { columns } from './columns'
import { DataTable } from './data-table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import useSupabaseServer from '@/hooks/use-supabase-server'
import { urlPaths } from '@/utils/paths'
import { cookies } from 'next/headers'
import { RedirectType, redirect } from 'next/navigation'
import Link from 'next/link'
import { getUserUrls } from '@/lib/db/get-user-urls'
import { getFolder } from '@/lib/db/get-folder'
import { z } from 'zod'
import { FolderSchema } from '@/lib/schemas'

export default async function Folder({ params }: { params: { slug: string } }) {
  const supabase = useSupabaseServer(cookies())
  const { data, error } = await supabase.auth.getUser()

  const userUrls = await getUserUrls(params.slug)
  const folderData = await getFolder(params.slug)

  if (!userUrls || !folderData) {
    return
  }

  const folder = folderData[0]
  if (!(folder.user_id === data.user?.id) && !folder.public_folder) {
    redirect(urlPaths.LOGIN)
  }

  return (
    <>
      <div className="flex w-full sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex max-w-7xl grow flex-col py-6">
          {data.user?.id && (
            <div className="flex w-full items-center justify-between gap-4 px-6 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold">Your Bookmarks</h2>
                <p className="font-medium text-gray-500">
                  Folder ID: <span className="text-black">{params.slug}</span>
                </p>
              </div>

              <div className="flow-row flex items-center justify-evenly gap-4">
                <Dialog>
                  <DialogTrigger>
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
                        Add a new URL
                      </span>
                    </span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add new URL entry</DialogTitle>
                    </DialogHeader>
                    <AddUrlModal folderId={params.slug} />
                  </DialogContent>
                </Dialog>

                <Link
                  href={`${urlPaths.FOLDER}/settings/${encodeURIComponent(
                    params.slug,
                  )}`}
                  className="rounded-lg bg-gray-200 p-2 px-4 text-sm font-medium hover:bg-gray-300"
                >
                  <p>Settings</p>
                </Link>
              </div>
            </div>
          )}
          <div className="flex grow flex-col">
            <div className="p-4">
              <DataTable columns={columns} data={userUrls} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
