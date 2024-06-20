'use client'

import { useGetFolder } from '@/hooks/use-get-folder'
import { useGetUser } from '@/hooks/use-get-user'
import { FolderForm } from '@/modules/folder/folder-form'
import { DeleteFolderForm } from '@/modules/settings/delete-folder-form'
import { SettingsCard } from '@/modules/settings/settings-card'
import { redirect } from 'next/navigation'

export default function Settings({ params }: { params: { slug: string } }) {
  const user = useGetUser()

  if (!user.data) {
    redirect(`/sign-in`)
  }
  const folder = useGetFolder(params.slug)

  return (
    <>
      {folder && (
        <div className="flex sm:h-[calc(100vh-6rem-1px)]">
          <div className="mx-auto flex min-w-0 max-w-7xl grow flex-col sm:flex-row sm:py-6">
            <div className="flex w-screen grow flex-col overflow-y-auto px-4 sm:w-full sm:p-6">
              <h1 className="pt-4 text-xl font-extrabold">Settings</h1>
              <div className="flex flex-col">
                <SettingsCard
                  title="Edit Folder"
                  description={`ID: ${params.slug}`}
                >
                  <FolderForm
                    title="Save changes"
                    folderDefaults={folder}
                    operation="UPDATE"
                    folderId={params.slug}
                  />
                </SettingsCard>

                <div className="flex w-full flex-col">
                  <SettingsCard
                    title="Danger Zone"
                    description="The following actions are destructive and cannot be
                          reversed."
                  >
                    <DeleteFolderForm folderId={params.slug} />
                  </SettingsCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
