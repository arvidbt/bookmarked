import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'

type Props = {
  value: string
}

export const CopyButton = ({ value }: Props) => {
  const { toast } = useToast()
  return (
    <Button
      className="bg-transparent hover:bg-transparent"
      onClick={() => {
        toast({
          title: `Copied URL: ${value}`,
        })
        navigator.clipboard.writeText(value)
      }}
    >
      📋
    </Button>
  )
}
