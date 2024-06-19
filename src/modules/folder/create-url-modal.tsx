'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { Bookmark, BookmarkSchema } from '@/lib/schemas'
import { insertUserUrl } from '@/lib/db/insert-user-url'
import { useMutation } from '@tanstack/react-query'
import { navigate } from '@/utils/navigate'
import { urlPaths } from '@/utils/paths'

type Props = {
  folderId: string
}

export function CreateURLModal({ folderId }: Props) {
  const insertMutation = useMutation({
    mutationFn: (bookmark: Bookmark) => {
      return insertUserUrl(bookmark)
    },
  })

  const form = useForm<z.infer<typeof BookmarkSchema>>({
    resolver: zodResolver(BookmarkSchema),
    defaultValues: {
      id: folderId,
    },
  })

  function onSubmit(data: z.infer<typeof BookmarkSchema>) {
    insertMutation.mutate(data, {
      onSettled: () => navigate(`${urlPaths.FOLDER}/${folderId}`),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url_entry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Url</FormLabel>
              <FormControl>
                <Input placeholder="https://bookmarked.app/" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input placeholder="Label, Tag, Note" {...field} />
              </FormControl>
              <FormDescription>Add tags seperated by a comma.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button className="float-right bg-green-500" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
