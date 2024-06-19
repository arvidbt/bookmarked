import { FolderProps } from '@/lib/schemas'
import { FolderCard } from './folder-card'

export async function UserFoldersList({ folders }: { folders: FolderProps[] }) {
  return (
    <div>
      <ul className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto p-6 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
        {folders &&
          folders.map((folder, i) => <FolderCard key={i} {...folder} />)}
      </ul>
    </div>
  )
}
