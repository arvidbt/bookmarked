import { urlPaths } from '@/utils/paths'
import Link from 'next/link'

export function FolderSettingsButton({ folderId }: { folderId: string }) {
  return (
    <Link
      href={`${urlPaths.FOLDER}/settings/${encodeURIComponent(folderId)}`}
      className="rounded-lg bg-gray-200 p-2 px-4 text-sm font-medium hover:bg-gray-300"
    >
      <p>Settings</p>
    </Link>
  )
}
