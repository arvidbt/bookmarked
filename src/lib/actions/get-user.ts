'use server'

import useSupabaseServer from '@/hooks/use-supabase-server'
import { cookies } from 'next/headers'

export async function getUser() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const supabase = useSupabaseServer(cookies())
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}
