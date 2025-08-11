
import { Badge } from "@/components/ui/badge"

export type BadgeAtomProps = React.ComponentProps<typeof Badge>

export default function BadgeAtom(props: BadgeAtomProps) {
  return <Badge {...props} />
}
