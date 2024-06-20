'use server'

import { createServerClient } from '@/utils/supabase'
import { URL } from 'fm/types'
import { cookies } from 'next/headers'

export async function insertUserUrl(bookmark: URL) {
  const supabase = createServerClient(cookies())

  await supabase.from('urls').insert({
    folder_id: bookmark.id,
    title: bookmark.title,
    url_entry: bookmark.url_entry,
    // tags: bookmark.tags
  })
}
