import { Button } from '@/components/ui/button'

export function TriggerSubmitEmail() {
  return (
    <Button
      type="submit"
      className="mt-10 w-full rounded-lg bg-black p-2 px-4 font-black text-white hover:bg-black"
    >
      Send me a one-time password!
    </Button>
  )
}
