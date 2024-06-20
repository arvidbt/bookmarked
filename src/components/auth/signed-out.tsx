import { useGetUser } from '@/hooks/use-get-user'

export function SignedOut() {
  const { data } = useGetUser()

  if (data === undefined) {
    return null
  }

  return data?.id ? null : (
    <>
      <div className="flex gap-10"></div>
      <a
        className="rounded-lg bg-gray-200 p-3 px-8 text-sm font-medium hover:bg-gray-300"
        href={'/sign-in'}
      >
        Sign In
      </a>
    </>
  )
}
