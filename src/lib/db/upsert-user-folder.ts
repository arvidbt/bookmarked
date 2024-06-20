'use server'

import { createServerClient } from '@/utils/supabase'
import { Folder } from 'fm/types'
import { cookies } from 'next/headers'

export async function insertUserFolder(folder: Folder) {
  const supabase = createServerClient(cookies())

  await supabase.from('folders').upsert({
    title: folder.title,
    folder_description: folder.folder_description,
    public_folder: folder.public_folder,
    icon: folder.icon,
  })
}
