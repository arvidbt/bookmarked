type FolderProps = {
  title: string
}

import { DatatableUrl, columns } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<DatatableUrl[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      title: 'NextJS dynamic routes',
      url: 'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes',
      tags: ['NextJS', 'ReactJS'],
    },
    {
      id: '489e1d42',
      title: 'Shadcn datatable component',
      url: 'https://ui.shadcn.com/docs/components/data-table',
      tags: ['UI', 'Design'],
    },
    {
      id: '728ed52f',
      title: 'Emojipedia',
      url: 'https://emojipedia.org/',
      tags: ['Emojis', 'Vidar', 'Vill', 'Till', 'Portugal'],
    },
  ]
}

export default async function DemoPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getData()

  return (
    <>
      <div className="flex w-full sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex max-w-7xl grow flex-col py-6">
          <div className="flex w-full flex-col items-center justify-between gap-4 px-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Your URLs</h2>
            </div>
            <span className="flex items-center gap-2 rounded-lg bg-red-600 p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aspect-square h-4"
              >
                <path
                  fill="currentColor"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                ></path>
              </svg>
              <span className="hidden text-sm font-medium lg:block">
                Add a new URL
              </span>
            </span>
          </div>
          <div className="flex grow flex-col">
            <div className="container mx-auto p-4">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
