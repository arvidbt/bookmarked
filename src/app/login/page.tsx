'use client'

import SubmitEmailForm from '@/lib/forms/submit-email'
import VerifyEmailForm from '@/lib/forms/verify-email'

export default function Login() {
  return (
    <div>
      <div className="flex sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex grow flex-col sm:flex-row sm:py-6">
          <div className="flex w-screen grow flex-col px-4 sm:w-full sm:p-6">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <SubmitEmailForm />
              <VerifyEmailForm />

              <p className="py-2 font-medium">
                By signing in, you agree to our{' '}
                <span className="text-blue-400 underline">
                  Terms of Service
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
