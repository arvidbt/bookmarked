import { AddUrlModal } from '@/components/add-url-modal'
import { DatatableUrl, columns } from './columns'
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
import { redirect } from 'next/navigation'

async function getData(): Promise<DatatableUrl[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      title: 'NextJS dynamic routes',
      url: 'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes',
      tags: ['NextJS', 'ReactJS'],
    },
    {
      id: '489e1d42',
      title: 'Shadcn datatable component',
      url: 'https://ui.shadcn.com/docs/components/data-table',
      tags: ['UI', 'Design'],
    },
    {
      id: '728ed52f',
      title: 'Emojipedia',
      url: 'https://emojipedia.org/',
      tags: ['Emojis'],
    },
  ]
}

export default async function Folder({ params }: { params: { slug: string } }) {
  const mockedData = await getData()

  const supabase = useSupabaseServer(cookies())
  const { data, error } = await supabase.auth.getUser()

  // const folderData = await getFolderData()

  if (error || !data?.user) {
    redirect(urlPaths.HOME)
  }

  return (
    <>
      {mockedData.length > 0 ? (
        // If there is data, render datatable
        <div className="flex w-full sm:h-[calc(100vh-6rem-1px)]">
          <div className="mx-auto flex max-w-7xl grow flex-col py-6">
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
                    <AddUrlModal />
                  </DialogContent>
                </Dialog>
                <p>Settings</p>
              </div>
            </div>
            <div className="flex grow flex-col">
              <div className="p-4">
                <DataTable columns={columns} data={mockedData} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // If no data, prompt to add.
        <div className="flex w-full sm:h-[calc(100vh-6rem-1px)]">
          <div className="mx-auto flex max-w-7xl grow flex-col py-6">
            <div className="flex w-full items-center justify-between gap-4 px-6 md:flex-row">
              <div className="flex h-full flex-col">
                <div>
                  <h2 className="text-xl font-extrabold">
                    🎉 Congratulations to your new folder!
                  </h2>
                  <p className="font-medium text-gray-500">
                    Folder ID:{' '}
                    <span className="text-black">
                      6415acff-fa74-4807-b421-fa51da067970
                    </span>
                  </p>
                </div>
              </div>
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
                  Add your first URL
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
