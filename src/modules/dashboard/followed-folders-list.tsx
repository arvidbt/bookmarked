import { FolderCard } from './folder-card'

export async function FollowedFoldersList() {
  return (
    <div>
      <ul className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto p-6 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
        {/* {userFolders &&
          userFolders.map((f) => <FolderCard key={f.id} {...f} />)} */}
      </ul>
    </div>
  )
}
