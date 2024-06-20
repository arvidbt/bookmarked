'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { deleteUserFolder } from '@/lib/db/delete-user-folder'
import { DeleteFolderSchema } from '@/lib/schemas/object-schemas'
import { navigate } from '@/utils/navigate'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function DeleteFolderForm({ folderId }: { folderId: string }) {
  const deletionMutation = useMutation({
    mutationFn: (voidData: null) => {
      return deleteUserFolder(folderId)
    },
  })

  const deleteForm = useForm<z.infer<typeof DeleteFolderSchema>>({
    resolver: zodResolver(DeleteFolderSchema),
  })

  function onSubmitDelete(data: z.infer<typeof DeleteFolderSchema>) {
    if (data.id === folderId) {
      deletionMutation.mutate(null, {
        onSettled: () => navigate(`/dashboard`),
      })
    }
  }
  return (
    <Form {...deleteForm}>
      <form
        className="flex w-full items-center justify-between"
        onSubmit={deleteForm.handleSubmit(onSubmitDelete)}
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
                      placeholder={'Confirm with ID of folder'}
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
  )
}
