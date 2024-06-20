import Footer from '@/components/footer'
import Image from 'next/image'

export default async function Index() {
  return (
    <div className="flex h-screen max-w-7xl flex-1 flex-grow flex-col items-center justify-between px-16 pt-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 className="pb-2 text-4xl font-bold lg:text-6xl">
            <span className="font-black">Keep track</span> of{' '}
          </h1>
          <div className="text-4xl font-bold">
            <div className="">
              <span className="w-full">
                <ul className="rotating-list block items-center font-black">
                  <li>your own </li>
                  <li>friends </li>
                  <li>content creators </li>
                  <li>colleagues </li>
                  <li>classmates </li>
                </ul>
              </span>
            </div>
            <h2 className="text-4xl font-black  decoration-dashed decoration-4 underline-offset-2 lg:text-6xl">
              bookmarks
            </h2>
            <br />
          </div>
          <p className="pt-2 font-medium text-gray-500">
            * Only shared folders can be followed.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <ul className="text-lg font-bold">
              <li className="flex items-center justify-start gap-2">
                <div className="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </div>
                Keep track of bookmarks across devices
              </li>
              <li className="flex items-center justify-start gap-2">
                <div className="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </div>
                Easily share folders of bookmarks
              </li>
              <li className="flex items-center justify-start gap-2">
                <div className="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </div>
                Follow public bookmark folders and stay updated
              </li>
            </ul>
          </div>
          {/* <p className="float-right pt-5 font-semibold">
            Made with ❤️ by{' '}
            <a href="https://github.com/arvidbt" target="_blank">
              Arvid
            </a>
          </p> */}
        </div>
        <div className="min-h-full min-w-full rounded-xl border  p-4 shadow-md lg:col-span-2">
          <div className="col-span-2 min-h-full min-w-full   ">
            <Image
              src={'/dashboard.png'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt={''}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

{
}
