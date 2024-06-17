import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { verifyOTP } from '@/lib/auth/verify-otp'

export function useVerifyOTP(email: string, token: string) {
  const data = useQuery({
    queryKey: ['verify_otp'],
    queryFn: async () => {
      const data = await verifyOTP({ email: email, token: token })
      return data
    },
  })

  return data
}
