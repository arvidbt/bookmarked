'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { insertUserUrl } from '@/lib/db/insert-user-url'
import { UrlSchema } from '@/lib/schemas/object-schemas'
import { navigate } from '@/utils/navigate'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { URL } from 'fm/types'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
  folderId: string
}

export function CreateURLModal({ folderId }: Props) {
  const insertMutation = useMutation({
    mutationFn: (bookmark: URL) => {
      return insertUserUrl(bookmark)
    },
  })

  const form = useForm<z.infer<typeof UrlSchema>>({
    resolver: zodResolver(UrlSchema),
    defaultValues: {
      id: folderId,
    },
  })

  function onSubmit(data: z.infer<typeof UrlSchema>) {
    insertMutation.mutate(data, {
      onSettled: () => navigate(`/folder/${folderId}`),
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
        <Button className="float-right bg-black" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
