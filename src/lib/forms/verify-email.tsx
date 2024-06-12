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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { verifyOTP } from '@/lib/actions/verify-otp'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  token: z.string().min(6).max(6),
})

export default function VerifyEmailForm() {
  function onSubmit(data: z.infer<typeof FormSchema>) {
    verifyOTP(data)
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  })

  return (
    <div className="rounded-lg  border p-6 shadow-md">
      <div className="flex w-full flex-col">
        <a href="/">
          <h1 className="float-left py-4 text-2xl font-black">📚 Foldrr</h1>
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
              name="token"
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
                    Please enter the one-time password sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-10 w-full rounded-lg bg-red-600 p-2 px-4 font-black text-white hover:bg-red-500"
            >
              Verify
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
