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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import Link from 'next/link'

const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
})

export function ProfileModal() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
    <div>
      <DialogHeader>
        <DialogTitle className="text-2xl">Account</DialogTitle>
        <DialogDescription className="pb-2">
          Manage your account information
        </DialogDescription>
      </DialogHeader>
      <p className="font-medium">🧑 Profile</p>
      <div className="h-px w-full bg-border"></div>
      <div className="flex flex-row items-center gap-4 rounded-lg border p-4">
        <Avatar className="aspect-square w-1/6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <p>Arvid</p>
          <div className="flex w-full flex-row items-center justify-between">
            <p>
              <span className="font-medium">Current plan:</span> Free
            </p>
            <Link href={'/billing'} className="border p-2">
              Upgrade plan
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-4">🚨 Danger Zone</p>
      <div className="flex flex-row items-center justify-between gap-4 rounded-lg border  p-4">
        <p>Delete your account and all its associated data.</p>
        <Button className="rounded-lg border border-red-500 bg-background text-red-500 hover:bg-red-500 hover:text-white">
          Delete account
        </Button>
      </div>
      {/* <Form {...form}>
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
          <Button className="float-right bg-red-500" type="submit">
            Submit
          </Button>
        </form>
      </Form> */}
    </div>
  )
}
