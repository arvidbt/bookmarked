'use client'

export default function Footer() {
  return (
    <div className="bg-gray-100/40">
      <div>
        {/* Desktop view */}
        <div className="h-px w-screen bg-border"></div>
        <div className="mx-auto h-16 max-w-7xl  items-center justify-between gap-x-6 p-4 sm:flex xl:px-8">
          <div>
            <p className="float-right font-semibold">
              Made with ❤️ by{' '}
              <a href="https://github.com/arvidbt" target="_blank">
                Arvid
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <p>Cookies</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
