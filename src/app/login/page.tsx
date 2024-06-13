'use client'

import { verifyOTP } from '@/lib/actions/verify-otp'
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
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendOTP } from '@/lib/actions/send-otp'
import { useMutation } from '@tanstack/react-query'
import { getUser } from '@/lib/actions/get-user'
import { navigate } from '@/lib/actions/navigate'

const EmailFormSchema = z.object({
  email: z.string().email(),
})

const TokenFormSchema = z.object({
  token: z.string().min(6).max(6),
})

type AuthCredentials = {
  email: string
  token: string
}

export default function Login() {
  const [email, setEmail] = useState<string>()
  const { toast } = useToast()

  const verificationMutation = useMutation({
    mutationFn: (authCredentials: AuthCredentials) => {
      return verifyOTP(authCredentials)
    },

    onError: () => {
      toast({
        title: 'Pin is invalid or have expired!',
      })
    },

    onSuccess: () => {
      toast({
        title: 'Pin successfully verified',
      })
      navigate('/dashboard')
    },
  })

  function onSubmitEmail(data: z.infer<typeof EmailFormSchema>) {
    setEmail(data.email)
    sendOTP(data.email)
  }

  function onSubmitToken(data: z.infer<typeof TokenFormSchema>) {
    if (!email) {
      return
    }

    const authCredentials = {
      email: email,
      token: data.token,
    } satisfies AuthCredentials

    verificationMutation.mutate(authCredentials)
  }

  const emailForm = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: '',
    },
  })

  const tokenForm = useForm<z.infer<typeof TokenFormSchema>>({
    resolver: zodResolver(TokenFormSchema),
    defaultValues: {
      token: '',
    },
  })

  return (
    <div>
      <div className="flex sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex grow flex-col sm:flex-row sm:py-6">
          <div className="flex w-screen grow flex-col px-4 sm:w-full sm:p-6">
            <div className="flex h-full w-full flex-col items-center justify-center">
              {!email ? (
                <div>
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
                      <Form {...emailForm}>
                        <form onSubmit={emailForm.handleSubmit(onSubmitEmail)}>
                          <FormField
                            control={emailForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem className="flex w-full flex-col items-center justify-center">
                                {/* <FormLabel>One-Time Password</FormLabel> */}
                                <FormControl>
                                  <Input
                                    placeholder="example@mail.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  If the mail does not show up, check your
                                  junkmail.
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
              ) : (
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
                                Please enter the one-time password sent to your
                                email.
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
              )}

              <p className="py-2 font-medium">
                By signing in, you agree to our{' '}
                <span className="text-blue-400 underline">
                  Terms of Service
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
