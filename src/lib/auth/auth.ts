'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function auth() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  return await supabase.auth.getUser()
}
