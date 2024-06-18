'use client'

import { Button } from '@/components/ui/button'
import useSupabaseServer from '@/hooks/use-supabase-server'
import { urlPaths } from '@/utils/paths'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useGetUser } from '@/hooks/use-get-user'
import { navigate } from '@/lib/actions/navigate'
import { useMutation } from '@tanstack/react-query'
import { Folder, FolderSchema, FolderSettingsSchema } from '@/lib/schemas'
import { useGetFolder } from '@/hooks/use-get-folder'
import { updateUserFolder } from '@/lib/db/update-user-folder'
import { deleteUserFolder } from '@/lib/db/delete-user-folder'

const DeleteSchema = z.object({
  id: z.string(),
})

export default function Settings({ params }: { params: { slug: string } }) {
  const user = useGetUser()

  if (!user.data) {
    redirect(`${urlPaths.FOLDER}/${params.slug}`)
  }
  const folder = useGetFolder(params.slug)

  const updateMutation = useMutation({
    mutationFn: (folder: Folder) => {
      return updateUserFolder(folder, params.slug)
    },
  })

  const deletionMutation = useMutation({
    mutationFn: (voidData: null) => {
      return deleteUserFolder(params.slug)
    },
  })

  const form = useForm<z.infer<typeof FolderSchema>>({
    resolver: zodResolver(FolderSchema),
    defaultValues: {
      title: folder?.title,
      public_folder: folder?.public_folder,
      icon: folder?.icon,
      folder_description: folder?.folder_description,
    },
  })

  const deleteForm = useForm<z.infer<typeof DeleteSchema>>({
    resolver: zodResolver(DeleteSchema),
  })

  function onSubmitUpdate(data: z.infer<typeof FolderSchema>) {
    updateMutation.mutate(data, {
      onSettled: () => navigate(`${urlPaths.FOLDER}${params.slug}`),
    })
  }

  function onSubmitDelete(data: z.infer<typeof DeleteSchema>) {
    if (data.id === params.slug) {
      deletionMutation.mutate(null, {
        onSettled: () => navigate(`${urlPaths.FOLDER}${params.slug}`),
      })
    }
  }

  return (
    <>
      {folder && (
        <div className="flex sm:h-[calc(100vh-6rem-1px)]">
          <div className="mx-auto flex min-w-0 max-w-7xl grow flex-col sm:flex-row sm:py-6">
            <div className="flex w-screen grow flex-col overflow-y-auto px-4 sm:w-full sm:p-6">
              <h1 className="text-xl font-extrabold">Settings</h1>
              <p>Folder ID: {params.slug}</p>
              <div className="flex flex-col">
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="mt-4 w-full rounded-xl border bg-card text-card-foreground shadow">
                    <div className="relative flex flex-row justify-between space-y-1.5 p-6 pb-2"></div>
                    <div className="flex flex-col gap-4 p-6 pt-2">
                      <div>
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmitUpdate)}
                            className="w-full space-y-4"
                          >
                            <div className="grid grid-cols-3 gap-2">
                              <div className="col-span-2">
                                <FormField
                                  control={form.control}
                                  name="title"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Folder name *</FormLabel>
                                      <FormControl defaultValue={folder?.title}>
                                        <Input
                                          defaultValue={folder?.title}
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormDescription></FormDescription>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <FormField
                                control={form.control}
                                name="icon"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Icon</FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue
                                            placeholder={folder?.icon}
                                          />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <div className="grid grid-cols-4 md:grid-cols-6">
                                          <SelectItem value="📁">📁</SelectItem>
                                          <SelectItem value="📄">📄</SelectItem>
                                          <SelectItem value="📊">📊</SelectItem>
                                          <SelectItem value="📈">📈</SelectItem>
                                          <SelectItem value="📉">📉</SelectItem>
                                          <SelectItem value="📑">📑</SelectItem>
                                          <SelectItem value="🗂️">🗂️</SelectItem>
                                          <SelectItem value="🗃️">🗃️</SelectItem>
                                          <SelectItem value="🗄️">🗄️</SelectItem>
                                          <SelectItem value="📝">📝</SelectItem>
                                          <SelectItem value="🖋️">🖋️</SelectItem>
                                          <SelectItem value="📚">📚</SelectItem>
                                          <SelectItem value="📖">📖</SelectItem>
                                          <SelectItem value="🎓">🎓</SelectItem>
                                          <SelectItem value="🏫">🏫</SelectItem>
                                          <SelectItem value="💼">💼</SelectItem>
                                          <SelectItem value="🛠️">🛠️</SelectItem>
                                          <SelectItem value="💡">💡</SelectItem>
                                          <SelectItem value="🖼️">🖼️</SelectItem>
                                          <SelectItem value="🎨">🎨</SelectItem>
                                          <SelectItem value="🎵">🎵</SelectItem>
                                          <SelectItem value="🎬">🎬</SelectItem>
                                          <SelectItem value="📸">📸</SelectItem>
                                          <SelectItem value="🌐">🌐</SelectItem>
                                          <SelectItem value="🔒">🔒</SelectItem>
                                          <SelectItem value="🧾">🧾</SelectItem>
                                          <SelectItem value="🏠">🏠</SelectItem>
                                          <SelectItem value="🍴">🍴</SelectItem>
                                          <SelectItem value="⚽">⚽</SelectItem>
                                        </div>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="folder_description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Description{' '}
                                    <span className="text-gray-500">
                                      {'(optional)'}
                                    </span>
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder={folder?.folder_description}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormDescription></FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div>
                              <FormField
                                control={form.control}
                                name="public_folder"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center justify-between gap-4 rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                      <FormLabel className="text-base">
                                        Is your folder public?
                                      </FormLabel>
                                      <FormDescription>
                                        ⚠️ Public folders can be accessed by
                                        anyone. This cannot be changed once
                                        created.
                                      </FormDescription>
                                    </div>
                                    <FormControl>
                                      <Switch
                                        defaultChecked={folder.public_folder}
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        aria-readonly
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="flex items-end justify-end">
                              <Button
                                type="submit"
                                className="rounded-lg bg-green-600 p-2 text-white hover:bg-green-500"
                              >
                                Save changes
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col">
                    <div className="flex w-full flex-col items-center justify-center">
                      <div className="mt-4 w-full rounded-xl border bg-card text-card-foreground shadow">
                        <div className="relative flex flex-row justify-between space-y-1.5 p-6 pb-2"></div>
                        <div className="flex flex-col gap-4 p-6 pt-2">
                          <h2 className="font-semibold">Danger Zone</h2>
                          <p className="text-sm font-medium text-gray-500">
                            The following actions are destructive and cannot be
                            reversed.
                          </p>
                          <div className="flex w-full">
                            <Form {...deleteForm}>
                              <form
                                className="flex w-full items-center justify-between"
                                onSubmit={deleteForm.handleSubmit(
                                  onSubmitDelete,
                                )}
                              >
                                <div className="grid w-full grid-cols-3 gap-2">
                                  <div className="col-span-2">
                                    <FormField
                                      control={deleteForm.control}
                                      name="id"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormControl>
                                            <Input
                                              placeholder={
                                                'Confirm with ID of folder'
                                              }
                                              {...field}
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  <Button className="col-span-1 rounded-lg border border-red-500 bg-background text-xs text-red-500 hover:bg-red-500 hover:text-white md:text-sm">
                                    Delete Folder
                                  </Button>
                                </div>
                              </form>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
