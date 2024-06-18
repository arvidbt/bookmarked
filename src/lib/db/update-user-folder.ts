'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { Folder } from '../schemas'

export async function updateUserFolder(folder: Folder, id: string) {
  const supabase = createServerClient(cookies())

  await supabase
    .from('folders')
    .update({
      title: folder.title,
      folder_description: folder.folder_description,
      public_folder: folder.public_folder,
      icon: folder.icon,
    })
    .eq('id', id)
}
