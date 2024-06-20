'use server'

import { createServerClient } from '@/utils/supabase'
import { URL } from 'fm/types'
import { cookies } from 'next/headers'

export async function getUserUrls(folderId: string) {
  const supabase = createServerClient(cookies())
  const { data, error } = await supabase
    .from('urls')
    .select()
    .eq('folder_id', folderId)
    .returns<URL[]>()

  return data
}
