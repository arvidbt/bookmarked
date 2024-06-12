'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { z } from 'zod'

const VerifyOTPSchema = z.object({
  email: z.string().email(),
  token: z.number().min(6).max(6),
})

type Props = z.infer<typeof VerifyOTPSchema>

export async function verifyOTP({ email, token }: Props) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    email,
    token: token.toString(),
    type: 'email',
  })
}
