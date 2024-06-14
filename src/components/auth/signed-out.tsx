import { useGetUser } from '@/hooks/use-get-user'
import { urlPaths } from '@/utils/paths'

export function SignedOut() {
  const { data } = useGetUser()

  if (data === undefined) {
    return null
  }

  return data?.id ? null : (
    <>
      <div className="flex gap-10">
        <h2 className="text-sm font-semibold text-gray-900 hover:underline">
          About
        </h2>
        <h2 className="text-sm font-semibold text-gray-900 hover:underline">
          Pricing
        </h2>
      </div>
      <a
        className="rounded-lg bg-green-600 p-2 px-4 font-medium text-white hover:bg-green-500"
        href={urlPaths.LOGIN}
      >
        Sign In
      </a>
    </>
  )
}
