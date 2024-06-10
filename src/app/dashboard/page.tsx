import { BookmarkFolder } from '@/components/bookmark-folder'
import { FollowFolderForm } from '@/components/follow-folder'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { randomUUID } from 'crypto'

export default async function Dashboard() {
  return (
    <div className="flex w-full sm:h-[calc(100vh-6rem-1px)]">
      <div className="mx-auto flex max-w-7xl grow flex-col py-6">
        <div className="flex grow flex-col">
          <div className="flex w-full items-center justify-between gap-4 px-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Your Bookmarks</h2>
              <p className="text-sm font-medium text-gray-500">
                Quota used: {334}/1000
              </p>
            </div>

            <Link href={'/dashboard/new'}>
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
                  Create a new folder
                </span>
              </span>
            </Link>
          </div>
          <ul className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto p-6 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
            <BookmarkFolder
              id={randomUUID()}
              title="Hemmet"
              usedQuota={0}
              userQuota={1000}
              bucketQuota={100}
              publicFolder={false}
              tags={['Free', 'Shared Quota', 'Private']}
            />
            <BookmarkFolder
              id={randomUUID()}
              title="Jobbet"
              icon="🗃️"
              usedQuota={321}
              userQuota={1000}
              bucketQuota={700}
              publicFolder={false}
              tags={['Free', 'Shared Quota', 'Private']}
            />
            <BookmarkFolder
              id={randomUUID()}
              title="Fritid"
              icon="🎮"
              usedQuota={13}
              userQuota={1000}
              bucketQuota={200}
              publicFolder={false}
              tags={['Free', 'Shared Quota', 'Private']}
            />
          </ul>
          <div className="flex w-full items-center justify-between gap-4 px-6 py-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Followed Bookmarks</h2>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Not following any bookmarks. Start following a public bookmark
                  folder to see it here!
                </p>
              </div>
            </div>

            <Dialog>
              <DialogTrigger>
                <span className="flex items-center gap-2 rounded-lg bg-red-600 p-2 text-white">
                  <span className="hidden text-sm font-medium lg:block">
                    Follow a public folder
                  </span>
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Enter a folder ID</DialogTitle>
                </DialogHeader>
                <FollowFolderForm />
              </DialogContent>
            </Dialog>
          </div>
          {/* <ul className="flex w-full flex-col items-center justify-center gap-2 overflow-y-auto p-6 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
            <BookmarkFolder
              title="Hemmet"
              usedQuota={0}
              userQuota={1000}
              bucketQuota={100}
              publicFolder={false}
              tags={['Free', 'Shared Quota', 'Private']}
            />
            <BookmarkFolder
              title="Jobbet"
              icon="🗃️"
              usedQuota={321}
              userQuota={1000}
              bucketQuota={700}
              publicFolder={false}
              tags={['Free', 'Shared Quota', 'Private']}
            />
            <BookmarkFolder
              title="Fritid"
              icon="🎮"
              usedQuota={13}
              userQuota={1000}
              bucketQuota={200}
              publicFolder={false}
              tags={['Free', 'Shared Quota', 'Private']}
            />
          </ul> */}
        </div>
      </div>
    </div>
  )
}
