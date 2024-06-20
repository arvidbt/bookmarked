'use client'

import { Button } from '@/components/ui/button'
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
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { insertUserFolder } from '@/lib/db/insert-user-folder'
import { updateUserFolder } from '@/lib/db/update-user-folder'
import { FolderSchema } from '@/lib/schemas/object-schemas'
import { navigate } from '@/utils/navigate'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Folder } from 'fm/types'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FolderFormProps = {
  title: string
  operation: 'UPDATE' | 'INSERT'
  folderDefaults: {
    title: string
    public_folder: boolean
    icon?: string
    description?: string
  }
  folderId?: string
}

export function FolderForm({
  title,
  operation,
  folderDefaults,
  folderId,
}: FolderFormProps) {
  const form = useForm<z.infer<typeof FolderSchema>>({
    resolver: zodResolver(FolderSchema),
    defaultValues: {
      title: folderDefaults.title,
      public_folder: folderDefaults.public_folder,
      icon: folderDefaults.icon,
      folder_description: folderDefaults.description,
    },
  })

  const create = useMutation({
    mutationFn: (folder: Folder) => {
      return insertUserFolder(folder)
    },
  })

  const update = useMutation({
    mutationFn: (folder: Folder) => {
      return updateUserFolder(folder, folderId!)
    },
  })

  function onSubmit(data: z.infer<typeof FolderSchema>) {
    operation === 'INSERT'
      ? create.mutate(data, {
          onSettled: () => navigate('/dashboard/'),
        })
      : update.mutate(data, {
          onSettled: () => navigate('/dashboard/'),
        })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
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
                    ⚠️ Public folders can be followed by anyone.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    className="bg-black"
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
          <Button className="rounded-lg bg-black hover:bg-black" type="submit">
            {title}
          </Button>
        </div>
      </form>
    </Form>
  )
}
