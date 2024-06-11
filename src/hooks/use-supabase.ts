import { createBrowserClient } from '@/utils/supabase'
import { useMemo } from 'react'

function useSupabase() {
  return useMemo(createBrowserClient, [])
}

export default useSupabase
