import { columns } from './columns'
import { DataTable } from './data-table'
import { urlPaths } from '@/utils/paths'
import { redirect } from 'next/navigation'
import { getUserUrls } from '@/lib/db/get-user-urls'
import { getFolder } from '@/lib/db/get-folder'
import { auth } from '@/lib/auth/auth'
import { FolderMenu } from '@/modules/folder/folder-menu'

export default async function Folder({ params }: { params: { slug: string } }) {
  const { data } = await auth()

  const userUrls = await getUserUrls(params.slug)
  const folderData = await getFolder(params.slug)

  if (!userUrls || !folderData) {
    return
  }

  // if (folder && !(folder.user_id === data.user?.id) && !folder.public_folder) {
  //   redirect(urlPaths.LOGIN)
  // }

  return (
    <>
      <div className="flex w-full sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex max-w-7xl grow flex-col py-6">
          {data.user?.id && <FolderMenu folderId={params.slug} />}
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
