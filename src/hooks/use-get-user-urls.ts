import { getUserUrls } from '@/lib/db/get-user-urls'
import { useQuery } from '@tanstack/react-query'

export function useGetUserUrls(folderId: string) {
  return useQuery({
    queryKey: ['get_user_urls'],
    queryFn: async () => {
      return await getUserUrls(folderId)
    },
  })
}
