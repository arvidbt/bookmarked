import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { User } from '@supabase/supabase-js'
import { getUser } from '@/server/actions/get-user'

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
