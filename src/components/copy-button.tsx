import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'

type Props = {
  value: string
  text: string
}

export const CopyButton = ({ value, text }: Props) => {
  const { toast } = useToast()
  return (
    <Button
      className="inline-block rounded-lg"
      variant="ghost"
      onClick={() => {
        toast({
          title: `Copied URL ✅`,
        })
        navigator.clipboard.writeText(value)
      }}
    >
      {text}
    </Button>
  )
}
