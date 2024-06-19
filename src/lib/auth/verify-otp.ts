'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { AuthCredentials } from '../schemas/auth-schemas'

export async function verifyOTP({ email, token }: AuthCredentials) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    email,
    token: token,
    type: 'email',
  })

  return { session, error }
}
