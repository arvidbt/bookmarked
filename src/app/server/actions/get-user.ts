'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function getAuthenticatedUser() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}
