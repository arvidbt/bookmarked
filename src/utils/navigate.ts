'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function navigate(url: string) {
  revalidatePath('/dashboard')

  redirect(url)
}
