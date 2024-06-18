import { useQuery } from '@tanstack/react-query'
import { Folder } from '@/lib/schemas'
import { getFolder } from '@/lib/db/get-folder'

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

  return data[0] as Folder
}
