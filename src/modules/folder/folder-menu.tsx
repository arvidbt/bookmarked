import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { CreateURLModal } from './create-url-modal'
import { CreateURLTrigger } from './create-url-trigger'
import { FolderSettingsButton } from './folder-settings-button'

export function FolderMenu({ folderId }: { folderId: string }) {
  return (
    <div className="flex w-full items-center justify-between gap-4 px-6 md:flex-row">
      <div>
        <h2 className="text-2xl font-bold tracking-tighter">Your Bookmarks</h2>
        <p className="font-medium text-gray-500">
          Folder ID:{' '}
          <span className="text-black tracking-tighter">{folderId}</span>
        </p>
      </div>

      <div className="flow-row flex items-center justify-evenly gap-4">
        <Dialog>
          <CreateURLTrigger />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new URL entry</DialogTitle>
            </DialogHeader>
            <CreateURLModal folderId={folderId} />
          </DialogContent>
        </Dialog>

        <FolderSettingsButton folderId={folderId} />
      </div>
    </div>
  )
}
