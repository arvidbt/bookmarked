'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { Button } from '@/components/ui/button'
import { navigate } from '@/server/actions/navigate'
import { toast } from '@/components/ui/use-toast'
import { signInWithOtp } from '@/server/actions/sign-in-with-otp'

const FormSchema = z.object({
  email: z.string().email(),
})

export default function Login() {
  function onSubmit(data: z.infer<typeof FormSchema>) {
    signInWithOtp(data.email)
    toast({
      title: 'A email is heading your way! 📫',
    })
    navigate('/login/verify')
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  })

  return (
    <div className="flex sm:h-[calc(100vh-6rem-1px)]">
      <div className="mx-auto flex grow flex-col sm:flex-row sm:py-6">
        <div className="flex w-screen grow flex-col px-4 sm:w-full sm:p-6">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="rounded-lg  border p-6 shadow-md">
              <div className="flex w-full flex-col">
                <a href="/">
                  <h1 className="float-left py-4 text-2xl font-black">
                    📚 Foldrr
                  </h1>
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
            <p className="py-2 font-medium">
              By signing in, you agree to our{' '}
              <span className="text-blue-400 underline">Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
