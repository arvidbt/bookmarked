import { UserFoldersList } from './user-folders-list'
import { CreateFolderTrigger } from './create-folder-trigger'
import { FollowedFoldersList } from './followed-folders-list'
import { FolderProps } from '@/lib/schemas'

export async function PopulatedDashboard({
  folders,
}: {
  folders: FolderProps[]
}) {
  if (!folders || folders.length === 0) {
    return null
  }

  return (
    <div className="flex grow flex-col">
      <div className="flex w-full items-center justify-between gap-4 px-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">Your Folders</h2>
          <p className="text-sm font-medium text-gray-500">
            Total folders:{' '}
            <span className="font-bold text-green-600">{folders.length}</span>
          </p>
        </div>
        <CreateFolderTrigger title="Create new folder" />
      </div>

      <UserFoldersList folders={folders} />
      <div className="flex w-full items-center justify-between gap-4 px-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">Followed Folders</h2>
        </div>
      </div>
      <FollowedFoldersList />
    </div>
  )
}
