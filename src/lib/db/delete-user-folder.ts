'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function deleteUserFolder(id: string) {
  const supabase = createServerClient(cookies())

  await supabase.from('folders').delete().eq('id', id)
}
