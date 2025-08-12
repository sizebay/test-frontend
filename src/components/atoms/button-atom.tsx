import { Button } from "@/components/ui/button"
import type { ComponentProps } from "react"

export type ButtonAtomProps = ComponentProps<typeof Button>

export default function ButtonAtom(props: ButtonAtomProps) {
  return <Button {...props} />
}
