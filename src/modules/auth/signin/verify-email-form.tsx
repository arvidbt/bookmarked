'use client'

import { verifyOTP } from '@/lib/auth/verify-otp'
import { useState } from 'react'
import { z } from 'zod'
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
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendOTP } from '@/lib/auth/send-otp'
import { useMutation } from '@tanstack/react-query'
import { navigate } from '@/utils/navigate'
import { pageMetadata } from '@/utils/metadata'
import { urlPaths } from '@/utils/paths'
import { SubmitEmailForm } from '@/modules/auth/signin/submit-email-form'
import { useSearchParams } from 'next/navigation'
import { AuthCredentials, TokenFormSchema } from '@/lib/schemas/auth-schemas'

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
          className="mt-10 w-full rounded-lg bg-green-600 p-2 px-4 font-black text-white hover:bg-green-500"
        >
          Verify
        </Button>
      </form>
    </Form>
  )
}
