'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { verifyOTP } from '@/lib/auth/verify-otp'
import { AuthCredentials, TokenFormSchema } from '@/lib/schemas/auth-schemas'
import { navigate } from '@/utils/navigate'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function VerifyEmailForm({ email }: { email: string }) {
  const verify = useMutation({
    mutationFn: (authCredentials: AuthCredentials) => {
      return verifyOTP(authCredentials)
    },

    onSuccess: () => {
      navigate('/dashboard')
    },
  })

  function onSubmitToken(data: z.infer<typeof TokenFormSchema>) {
    const authCredentials = {
      email: email,
      token: data.token,
    } satisfies AuthCredentials

    verify.mutate(authCredentials)
  }

  const tokenForm = useForm<z.infer<typeof TokenFormSchema>>({
    resolver: zodResolver(TokenFormSchema),
    defaultValues: {
      token: '',
    },
  })

  return (
    <Form {...tokenForm}>
      <form onSubmit={tokenForm.handleSubmit(onSubmitToken)}>
        <FormField
          control={tokenForm.control}
          name="token"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col items-center justify-center">
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
              <FormDescription className="tracking-tighter">
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-10 w-full rounded-lg bg-black p-2 px-4 font-black text-white hover:bg-black tracking-tighter"
        >
          Verify
        </Button>
      </form>
    </Form>
  )
}
