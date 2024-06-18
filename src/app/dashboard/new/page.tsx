'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
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
import { toast } from '@/components/ui/use-toast'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useGetUser } from '@/hooks/use-get-user'
import { Folder } from '@/lib/schemas'
import { useMutation } from '@tanstack/react-query'
import { insertUserFolder } from '@/lib/db/insert-user-folder'
import { FolderSchema } from '@/lib/schemas'
import { revalidatePath } from 'next/cache'
import { urlPaths } from '@/utils/paths'
import { navigate } from '@/lib/actions/navigate'

export default function InputForm() {
  const user = useGetUser()

  const insertMutation = useMutation({
    mutationFn: (folder: Folder) => {
      return insertUserFolder(folder)
    },
  })

  const form = useForm<z.infer<typeof FolderSchema>>({
    resolver: zodResolver(FolderSchema),
    defaultValues: {
      title: 'Unnamed folder',
      public_folder: false,
      icon: '📁',
    },
  })

  function onSubmit(data: z.infer<typeof FolderSchema>) {
    insertMutation.mutate(data)

    navigate(urlPaths.DASHBOARD)

    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <>
      <div className="flex w-full p-4 sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center py-6">
          <div className="flex grow flex-col items-center">
            <div>
              <h1 className="text-2xl font-extrabold">
                {"Let's create your new folder"}
              </h1>
            </div>
            <div className="mt-4 flex flex-col gap-4 text-xs sm:text-sm">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
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
                            <FormControl>
                              <Input placeholder="Important links" {...field} />
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
                                <SelectValue placeholder="📁" />
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
                          <span className="text-gray-500">{'(optional)'}</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="A brief description about your folder"
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
                              ⚠️ Public folders can be accessed by anyone. This
                              cannot be changed once created.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
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
                      className="rounded-lg bg-green-500 hover:bg-green-600"
                      type="submit"
                    >
                      Create folder
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
