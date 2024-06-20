'use client'

import { FolderForm } from '../folder/folder-form'

export function CreateFolderForm() {
  return (
    <div className="mt-4 flex flex-col gap-4 text-xs sm:text-sm">
      <FolderForm
        title="Create new folder"
        operation="INSERT"
        folderDefaults={{
          title: 'Unnamed folder',
          public_folder: false,
          icon: '📁',
        }}
      />
    </div>
  )
}
