'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
})

export default function Login() {
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

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
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
                <h2 className="text-xl font-black">Verify your email</h2>
                <p className="font-medium text-gray-500">
                  to continue to <span className="font-bold">Foldrr</span>
                </p>
              </div>
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name="pin"
                      render={({ field }) => (
                        <FormItem className="flex w-full flex-col items-center justify-center">
                          {/* <FormLabel>One-Time Password</FormLabel> */}
                          <FormControl>
                            <InputOTP maxLength={6} {...field}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormDescription>
                            Please enter the one-time password sent to your
                            email.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        className="mt-10 w-1/3 rounded-lg bg-red-300 p-2 px-4 font-black text-white hover:bg-red-500"
                      >
                        Resend
                      </Button>
                      <Button
                        type="submit"
                        className="mt-10 w-2/3 rounded-lg bg-red-600 p-2 px-4 font-black text-white hover:bg-red-500"
                      >
                        Verify
                      </Button>
                    </div>
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
