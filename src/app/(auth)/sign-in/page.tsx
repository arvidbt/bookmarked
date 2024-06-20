'use client'

import { SignInCard } from '@/modules/auth/signin/sign-in-card'
import { SubmitEmailForm } from '@/modules/auth/signin/submit-email-form'
import { VerifyEmailForm } from '@/modules/auth/signin/verify-email-form'
import { useSearchParams } from 'next/navigation'

export default function SignIn() {
  const searchParams = useSearchParams()
  const stateValue = searchParams.get('u')

  return (
    <div className="flex sm:h-[calc(100vh-6rem-1px)]">
      <div className="mx-auto flex grow flex-col sm:flex-row sm:py-6">
        <div className="flex w-screen grow flex-col px-4 sm:w-full sm:p-6">
          <div className="flex h-full w-full flex-col items-center justify-center">
            {!stateValue ? (
              <SignInCard title="Submit your email">
                <SubmitEmailForm />
              </SignInCard>
            ) : (
              <SignInCard title="Verify your email">
                <VerifyEmailForm email={stateValue} />
              </SignInCard>
            )}

            <p className="py-2 font-medium tracking-tighter">
              By signing in, you agree to our{' '}
              <span className="text-blue-400 underline">Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
