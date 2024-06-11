export default async function Index() {
  return (
    <div className="flex h-screen w-full flex-1 flex-col items-center justify-center">
      <div className="relative isolate max-w-xl px-6 py-14 lg:px-8">
        <h1 className="text-4xl font-black">
          <span className="bg-red-500 px-2 py-1 pb-1 text-white">
            Effortless bookmarking
          </span>{' '}
          <span className="">
            for the modern user. Bookmark, Share and Follow.
          </span>
        </h1>
        {/* <p className="py-10 font-medium">
          Be part of the first 100 people to sign-up to recieve 3 months of
          premium usage.
          </p> */}
        <div className="mt-10 flex items-center justify-between rounded-lg border p-10">
          <h2 className="text-xl font-bold">Get started now</h2>
          <a
            className="rounded-lg bg-red-600 p-2 px-4 font-black text-white hover:bg-red-500"
            href="/login"
          >
            Create a free account
          </a>
        </div>
        <p className="float-right pt-5 font-semibold">
          Made with ❤️ by{' '}
          <a href="https://github.com/arvidbt" target="_blank">
            Arvid
          </a>
        </p>
      </div>
    </div>
  )
}
