import { pageMetadata } from '@/utils/metadata'
import { urlPaths } from '@/utils/paths'
import { ReactNode } from 'react'

type SignInCardProps = {
  children: ReactNode
  title: string
}

export function SignInCard({ children, title }: SignInCardProps) {
  return (
    <div className="w-full rounded-lg border p-6 shadow-md">
      <div className="flex w-full flex-col">
        <a href={urlPaths.HOME}>
          <h1 className="float-left py-4 text-2xl font-black">
            {pageMetadata.title}
          </h1>
        </a>
        <h2 className="text-xl font-black">{title}</h2>
        <p className="font-medium text-gray-500">
          to continue to <span className="font-bold">{pageMetadata.title}</span>
        </p>
      </div>
      <div>{children}</div>
    </div>
  )
}
