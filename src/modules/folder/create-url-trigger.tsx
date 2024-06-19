import { DialogTrigger } from '@/components/ui/dialog'

export function CreateURLTrigger() {
  return (
    <DialogTrigger>
      <span className="flex items-center gap-2 rounded-lg bg-green-600 p-2 text-white hover:bg-green-500">
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
    </DialogTrigger>
  )
}
