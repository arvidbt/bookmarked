'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function sendOTP(email: string) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  return await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: '/dashboard',
      shouldCreateUser: true,
      data: {
        username: email.split('@')[0],
      },
    },
  })
}
