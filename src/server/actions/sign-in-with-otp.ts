'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function signInWithOtp(email: string) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: '/dashboard',
    },
  })

  return data
}
