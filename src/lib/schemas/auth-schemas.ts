import { z } from 'zod'

export const EmailFormSchema = z.object({
  email: z.string().email(),
})

export const TokenFormSchema = z.object({
  token: z.string().min(6).max(6),
})

export type AuthCredentials = {
  email: string
  token: string
}
