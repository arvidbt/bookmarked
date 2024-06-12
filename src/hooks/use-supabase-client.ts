import { createBrowserClient } from '@/utils/supabase'
import { useMemo } from 'react'

function useSupabaseClient() {
  return useMemo(createBrowserClient, [])
}

export default useSupabaseClient
