import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { User } from '@supabase/supabase-js'
import { signInWithOtp } from '@/server/actions/sign-in-with-otp'

export function useSignIn(email: string): UseQueryResult<User | null, Error> {
  return useQuery({
    queryKey: ['get_user'],
    queryFn: async () => {
      const data = await signInWithOtp(email)
      return data
    },
  })
}
