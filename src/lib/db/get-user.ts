'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function getUser() {
  const supabase = createServerClient(cookies())
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  return user
}
