import { insertUserFolder } from '@/lib/db/insert-user-folder'
import { useQuery } from '@tanstack/react-query'
import { Folder } from 'fm/types'

export function useInsertUserFolder(folder: Folder) {
  useQuery({
    queryKey: ['use_insert_folder'],
    queryFn: async () => {
      await insertUserFolder(folder)
    },
  })
}
