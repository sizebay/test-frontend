import { Input } from "@/components/ui/input"
import type { ComponentProps } from "react"

export type InputAtomProps = ComponentProps<"input"> & {
  label?: string
  id?: string
}

export default function InputAtom({ label, id, ...props }: InputAtomProps) {
  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      ) : null}
      <Input id={id} {...props} />
    </div>
  )
}
