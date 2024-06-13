import { useGetUser } from '@/hooks/use-get-user'

export function SignedOut() {
  const { data } = useGetUser()

  return data?.id ? null : (
    <>
      <div className="flex gap-6">
        <h2 className="font-medium hover:underline">About</h2>
        <h2 className="font-medium hover:underline">Pricing</h2>
      </div>
      <a
        className="rounded-lg bg-red-600 p-2 px-4 font-medium text-white hover:bg-red-500"
        href="/login"
      >
        Sign In
      </a>
    </>
  )
}
