import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { RepoDetails as RepoDetailsType } from '@/types/github'
import BackLink from '../molecules/back-link'
import RepoStats from '../molecules/repo-stats'
import RepoDates from '../molecules/repo-dates'

interface RepoDetailsProps {
  data: RepoDetailsType
}

export default function RepoDetails({ data }: RepoDetailsProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <BackLink />
      
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-wrap items-center gap-2">
            <span className="truncate">{data.full_name}</span>
            {data.language ? <Badge variant="secondary">{data.language}</Badge> : null}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.description ? (
            <p className="text-muted-foreground">
              {data.description}
            </p>
          ) : null}

          <RepoStats 
            stars={data.stargazers_count}
            forks={data.forks_count}
            openIssues={data.open_issues_count}
          />

          <RepoDates 
            createdAt={data.created_at}
            updatedAt={data.updated_at}
          />

          <div>
            <Link
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 underline underline-offset-4"
              aria-label="Abrir no GitHub"
            >
              Ver no GitHub
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}