'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function getFolder(id: string) {
  const supabase = createServerClient(cookies())
  const { data, error } = await supabase.from('folders').select().eq('id', id)

  return data
}
