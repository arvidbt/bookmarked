'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function getUserProfile() {
  const supabase = createServerClient(cookies())
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id)

  return data
}
