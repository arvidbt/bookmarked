import { Logo } from '@/components/logo'
import { siteConfig } from '@/config/site'
import { ReactNode } from 'react'

type SignInCardProps = {
  children: ReactNode
  title: string
}

export function SignInCard({ children, title }: SignInCardProps) {
  return (
    <div className="w-full rounded-lg border p-6 shadow-md">
      <div className="flex w-full flex-col">
        <a href={'/'}>
          <h1 className="float-left py-4 text-2xl font-black tracking-tighter">
            <div className="flex flex-row items-center gap-2">
              <Logo />
              {siteConfig.name}
            </div>
          </h1>
        </a>
        <h2 className="text-xl font-black tracking-tighter">{title}</h2>
        <p className="font-medium text-gray-500 tracking-tighter">
          to continue to <span className="font-bold">{siteConfig.name}</span>
        </p>
      </div>
      <div>{children}</div>
    </div>
  )
}
