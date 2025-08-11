import { Button } from "@/components/ui/button"
import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
import { forwardRef } from "react"

export type ButtonAtomProps = ButtonProps & {
  "aria-label"?: string
}

const ButtonAtom = forwardRef<HTMLButtonElement, ButtonAtomProps>(function ButtonAtom(props, ref) {
  return <Button ref={ref} {...props} />
})

ButtonAtom.displayName = "ButtonAtom"

export default ButtonAtom
