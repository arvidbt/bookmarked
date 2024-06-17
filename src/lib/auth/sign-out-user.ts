'use server'

import { createServerClient } from '@/utils/supabase'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function signOut() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  revalidatePath('/')
  const { error } = await supabase.auth.signOut()
}
