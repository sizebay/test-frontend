"use client"

import { Input, type InputProps } from "@/components/ui/input"
import { forwardRef } from "react"

export type InputAtomProps = InputProps & {
  label?: string
  id?: string
}

const InputAtom = forwardRef<HTMLInputElement, InputAtomProps>(function InputAtom({ label, id, ...props }, ref) {
  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      ) : null}
      <Input id={id} ref={ref} {...props} />
    </div>
  )
})

InputAtom.displayName = "InputAtom"

export default InputAtom
