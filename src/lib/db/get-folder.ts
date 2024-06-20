'use server'

import { createServerClient } from '@/utils/supabase'
import { Folder } from 'fm/types'
import { cookies } from 'next/headers'

export async function getFolder(id: string) {
  const supabase = createServerClient(cookies())
  const { data, error } = await supabase
    .from('folders')
    .select()
    .eq('id', id)
    .returns<Folder>()

  return data
}
