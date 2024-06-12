import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export default function useSupabaseServer(
  cookieStore: ReturnType<typeof cookies>,
) {
  return createServerClient(cookieStore)
}
