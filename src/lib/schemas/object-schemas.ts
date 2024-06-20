import { z } from 'zod'

export const DeleteFolderSchema = z.object({
  id: z.string(),
})

export const FolderSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Folder must be at least 2 characters.',
    })
    .max(20, {
      message: 'Folder must not be more than 20 characters',
    }),
  folder_description: z
    .string()
    .max(255, {
      message: 'Description must not exceed 255 characters',
    })
    .optional(),
  public_folder: z.boolean(),
  icon: z.string().emoji().optional(),
  tags: z.string().optional(),
  id: z.string().uuid().optional(),
})

export const UrlSchema = z.object({
  id: z.string().uuid(),
  title: z.string().max(64, {
    message: 'Title cannot exceed 64 characters',
  }),
  url_entry: z.string().url(),
})
