'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export async function getUser() {
  const supabase = createServerClient(cookies())
  const {} = await supabase.from('folders').select('folder')
}
