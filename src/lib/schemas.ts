import { z } from 'zod'

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
})

export const FolderSettingsSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Folder must be at least 2 characters.',
    })
    .max(20, {
      message: 'Folder must not be more than 20 characters',
    })
    .optional(),
  folder_description: z
    .string()
    .max(255, {
      message: 'Description must not exceed 255 characters',
    })
    .default('')
    .optional(),
  public_folder: z.boolean().optional(),
  icon: z.string().emoji().optional(),
})

export type Folder = z.infer<typeof FolderSchema>

export const BookmarkFolderSchema = z.object({
  id: z.string().uuid(),
  title: z.string().max(20),
  icon: z.string().emoji().optional(),
  public_folder: z.boolean(),
  folder_description: z.string().max(255).optional(),
  tags: z.array(z.string().max(12)).optional(),
})

export type FolderProps = z.infer<typeof BookmarkFolderSchema>

export const BookmarkSchema = z.object({
  id: z.string().uuid(),
  title: z.string().max(64, {
    message: 'Title cannot exceed 64 characters',
  }),
  url_entry: z.string().url(),
  // tags: z.string().nullish(),
})

export type Bookmark = z.infer<typeof BookmarkSchema>
