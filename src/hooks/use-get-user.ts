import { getUser } from '@/lib/db/get-user'
import { User } from '@supabase/supabase-js'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

export function useGetUser(): UseQueryResult<User | null, Error> {
  const data = useQuery({
    queryKey: ['get_user'],
    queryFn: async () => {
      const data = await getUser()
      return data
    },
  })

  return data
}
