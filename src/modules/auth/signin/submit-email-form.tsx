'use client'

import { z } from 'zod'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { sendOTP } from '@/lib/auth/send-otp'

import { EmailFormSchema } from '@/lib/schemas/auth-schemas'
import { TriggerSubmitEmail } from './trigger-submit-email'

export function SubmitEmailForm() {
  function onSubmit(data: z.infer<typeof EmailFormSchema>) {
    sendOTP(data.email)
  }

  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col items-center justify-center">
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
        <TriggerSubmitEmail />
      </form>
    </Form>
  )
}
