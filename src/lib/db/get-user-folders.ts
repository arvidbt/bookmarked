'use server'

import { createServerClient } from '@/utils/supabase'
import { Folder } from 'fm/types'
import { cookies } from 'next/headers'

import { getUser } from './get-user'

export async function getUserFolders() {
  const user = await getUser()
  const supabase = createServerClient(cookies())
  const { data, error } = await supabase
    .from('folders')
    .select()
    .eq('user_id', user?.id)
    .returns<Folder[]>()

  return data
}
