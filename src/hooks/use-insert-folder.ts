import { useQuery } from '@tanstack/react-query'
import { insertUserFolder } from '@/lib/db/insert-user-folder'
import { Folder } from '@/lib/schemas'

export function useInsertUserFolder(folder: Folder) {
  useQuery({
    queryKey: ['use_insert_folder'],
    queryFn: async () => {
      await insertUserFolder(folder)
    },
  })
}
