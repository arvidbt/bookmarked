import { ReactNode } from 'react'

type SettingsCardProps = {
  title?: string
  description?: string
  children: ReactNode
}

export function SettingsCard({
  children,
  title,
  description,
}: SettingsCardProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mt-4 w-full rounded-xl border bg-card text-card-foreground shadow">
        <div className="relative flex flex-row justify-between space-y-1.5 p-6 pb-2"></div>
        <div className="flex flex-col gap-0 p-6 pt-2">
          <h2 className="tracking-tighter font-semibold">{title}</h2>
          <p className="text-sm font-medium tracking-tighter text-gray-500">
            {description}
          </p>
          <div className="flex w-full pt-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
