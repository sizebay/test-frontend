import React from "react"
import {
    Select as ShadcnSelect,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

type SelectProps = React.ComponentProps<typeof ShadcnSelect>

export function Select(props: SelectProps) {
    return <ShadcnSelect {...props} />
}

export { SelectTrigger, SelectValue, SelectContent, SelectItem }
