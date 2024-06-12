'use client'

import { Button } from '@/components/ui/button'
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signInWithOtp } from '@/lib/actions/sign-in-with-otp'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'

const FormSchema = z.object({
  email: z.string().email(),
})

export default function SubmitEmailForm() {
  function onSubmit(data: z.infer<typeof FormSchema>) {
    signInWithOtp(data.email)
    toast({
      title: 'A email is heading your way! 📫',
    })
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  })

  return (
    <div>
      <div className="rounded-lg  border p-6 shadow-md">
        <div className="flex w-full flex-col">
          <a href="/">
            <h1 className="float-left py-4 text-2xl font-black">📚 Foldrr</h1>
          </a>
          <h2 className="text-xl font-black">Sign In</h2>
          <p className="pb-4 font-medium text-gray-500">
            to continue to <span className="font-bold">Foldrr</span>
          </p>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col items-center justify-center">
                    {/* <FormLabel>One-Time Password</FormLabel> */}
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      If the mail does not show up, check your junkmail.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-10 w-full rounded-lg bg-red-600 p-2 px-4 font-black text-white hover:bg-red-500"
              >
                Send me a one-time password!
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
