import { getUserFolders } from '@/lib/db/get-user-folders'
import { useQuery } from '@tanstack/react-query'

export function useGetUserFolders() {
  return useQuery({
    queryKey: ['get_user_folders'],
    queryFn: async () => {
      return await getUserFolders()
    },
  })
}
