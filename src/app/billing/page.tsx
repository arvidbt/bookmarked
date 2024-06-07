export default function Billing() {
  return (
    <>
      <div className="flex sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex min-w-0 max-w-7xl grow flex-col sm:flex-row sm:py-6">
          <div className="flex w-screen grow flex-col overflow-y-auto px-4 sm:w-full sm:p-6">
            <h1 className="text-xl font-extrabold">Plan & Billing</h1>
            <p>Manage your subscription for this application.</p>
            <div className="flex flex-col">
              <div className="flex w-full flex-col items-center justify-center">
                <div className="mt-4 w-full rounded-xl border bg-card text-card-foreground shadow">
                  <div className="relative flex flex-row justify-between space-y-1.5 p-6 pb-2">
                    <div className="w-max">
                      <h3 className="font-semibold leading-none tracking-tight">
                        Current Plan
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Manage and view your current plan
                      </p>
                    </div>
                    <button
                      disabled
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      <div className="flex flex-row items-center gap-1">
                        <span>Manage</span>
                        <span className="hidden truncate lg:block">
                          your billing settings
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col gap-4 p-6 pt-2">
                    <div>
                      <p>Plan: Free</p>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        No expiration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-between mt-4 flex w-full flex-row gap-4">
                  <div className="flex w-full flex-col gap-2 rounded-lg border p-4 sm:p-6 md:flex-row">
                    <div className="flex w-full flex-col gap-1 md:w-3/5">
                      <h2 className="text-base font-medium sm:text-lg">
                        Available Plans
                      </h2>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        View available plans and change subscription
                      </p>
                    </div>
                    <div className="flex w-full flex-col gap-8 md:w-2/5">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex w-full items-center justify-between">
                          <h2 className="flex items-baseline gap-1 text-base font-medium sm:text-lg">
                            1000 URLs
                          </h2>
                          <button className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Current plan
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm">
                          Everything you need to start!
                        </p>
                        <ul className="text-xs text-muted-foreground sm:text-sm">
                          <li>- 1000 URLs *</li>
                          <li>- (Probably) cheaper than a cup of coffee</li>
                          <div className="mt-2">
                            <li className="text-xs text-muted-foreground">
                              * Storage shared between all apps
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
