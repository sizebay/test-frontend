import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BadgeAtom from "../atoms/badge-atom"

export type RepoCardProps = {
  name: string
  fullName: string
  description?: string | null
  language?: string | null
  owner: string
}

export default function RepoCard({ name, fullName, description, language, owner }: RepoCardProps) {
  return (
    <Card className="hover:shadow-sm transition-shadow">
      <CardHeader>
        <CardTitle className="text-base flex flex-wrap items-center gap-2">
          <Link href={`/${owner}/${name}`} className="underline underline-offset-4">
            {fullName}
          </Link>
          {language ? <BadgeAtom variant="secondary">{language}</BadgeAtom> : null}
        </CardTitle>
      </CardHeader>
      {description ? (
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
      ) : null}
    </Card>
  )
}
