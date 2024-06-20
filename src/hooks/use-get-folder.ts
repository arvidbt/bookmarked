import { getFolder } from '@/lib/db/get-folder'
import { useQuery } from '@tanstack/react-query'

export function useGetFolder(id: string) {
  const { data, error } = useQuery({
    queryKey: ['get_folder'],
    queryFn: async () => {
      return await getFolder(id)
    },
  })

  if (!data) {
    return
  }

  return data
}
