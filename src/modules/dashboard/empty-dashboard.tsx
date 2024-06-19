import { CreateFolderTrigger } from './create-folder-trigger'

export async function EmptyDashboard() {
  return (
    <div className="flex min-h-full max-w-full flex-col items-center justify-center py-6">
      <div className="flex flex-row justify-between gap-4">
        <CreateFolderTrigger title="Create your first folder" />
      </div>
    </div>
  )
}
