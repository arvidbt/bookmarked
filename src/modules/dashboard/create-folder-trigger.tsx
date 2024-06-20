import Link from 'next/link'

export async function CreateFolderTrigger({
  title,
  href,
}: {
  title: string
  href: string
}) {
  return (
    <Link href={href}>
      <span className="flex items-center gap-2 rounded-lg bg-black p-2 text-white hover:bg-black">
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
        <span className="text-sm font-medium lg:block tracking-tighter">
          {title}
        </span>
      </span>
    </Link>
  )
}
