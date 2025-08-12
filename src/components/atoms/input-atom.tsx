import { Input } from "@/components/ui/input"
import type { ComponentProps } from "react"
import { forwardRef } from "react"

export type InputAtomProps = ComponentProps<"input"> & {
  label?: string
  id?: string
}

const InputAtom = forwardRef<HTMLInputElement, InputAtomProps>(
  function InputAtom({ label, id, ...props }, ref) {
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
  }
)

export default InputAtom
