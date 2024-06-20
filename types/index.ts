import { FolderSchema, UrlSchema } from '@/lib/schemas/object-schemas'
import { z } from 'zod'

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export type DashboadConfig = {
  userNav: {
    create: string
  }
  followedNav: {
    follow: string
  }
  url: string
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type URL = z.infer<typeof UrlSchema>
export type Folder = z.infer<typeof FolderSchema>
