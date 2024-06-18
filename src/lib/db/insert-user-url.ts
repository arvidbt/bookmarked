'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { Bookmark } from '../schemas'

export async function insertUserUrl(bookmark: Bookmark) {
  const supabase = createServerClient(cookies())

  await supabase.from('urls').insert({
    folder_id: bookmark.id,
    title: bookmark.title,
    url_entry: bookmark.url_entry,
    // tags: bookmark.tags
  })
}
