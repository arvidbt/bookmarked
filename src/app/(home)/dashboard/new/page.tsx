import { CreateFolderForm } from '@/modules/dashboard/create-folder-form'

export default async function CreateNewFolder() {
  return (
    <>
      <div className="flex w-full p-4 sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center py-6">
          <div className="flex grow flex-col items-center">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">
                {"Let's create your new folder"}
              </h1>
            </div>
            <CreateFolderForm />
          </div>
        </div>
      </div>
    </>
  )
}
