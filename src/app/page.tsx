export default async function Index() {
  return (
    <div className="flex h-screen w-full flex-1 flex-col items-center justify-center">
      <div className="relative px-6 py-14 lg:px-8">
        <h1 className="py-1 text-4xl font-black">
          <span className="rounded-2xl bg-red-500 px-4 py-2 pb-1 text-white">
            Effortless bookmarking
          </span>{' '}
        </h1>
        <h1 className="text-4xl font-black">
          for the modern user. <br />
        </h1>
        <h1 className="py-1 text-4xl font-black">
          Bookmark, Share and Follow.
        </h1>
        <div className="mt-10 flex items-center justify-between rounded-lg border p-10">
          <a
            className="rounded-lg bg-red-600 p-2 px-4 font-black text-white hover:bg-red-500"
            href="/login"
          >
            Get started for free now
          </a>
          <h2 className="text-base font-bold">Learn more</h2>
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
