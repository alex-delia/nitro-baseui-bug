import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/ui/dialog"
import { Button } from "@workspace/ui/components/ui/button"

export function SignInDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button>Open Sign In Dialog</Button>}
      ></DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>Dialog Description</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
