import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { User } from '@supabase/supabase-js'
import { getAuthenticatedUser } from '@/app/server/actions/get-user'

export function useGetUser(): UseQueryResult<User | null, Error> {
  return useQuery({
    queryKey: ['authenticated_user'],
    queryFn: getAuthenticatedUser,
    staleTime: Infinity,
  })
}
