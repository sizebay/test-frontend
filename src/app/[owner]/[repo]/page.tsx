import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDateISO, formatNumber } from '@/lib/format'
import { fetchRepoDetails } from '@/services/github'
import { ArrowLeft, ExternalLink, GitFork, Star, TriangleAlert } from 'lucide-react'
import Link from 'next/link'
 
export default async function Page({
  params,
}: {
  params: Promise<{ owner: string, repo: string }>
}) {
  const { owner, repo } = await params
  // Essa págin não é estática, não há necessidade de usar SWR aqui
  const data = await fetchRepoDetails(owner, repo)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          aria-label="Voltar para a busca"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex flex-wrap items-center gap-2">
            <span className="truncate">{data.full_name}</span>
            {data.language ? <Badge variant="secondary">{data.language}</Badge> : null}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.description ? <p className="text-muted-foreground">{data.description}</p> : null}

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4" />
              {formatNumber(data.stargazers_count)} stars
            </span>
            <span className="inline-flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {formatNumber(data.forks_count)} forks
            </span>
            <span className="inline-flex items-center gap-1">
              <TriangleAlert className="h-4 w-4" />
              {formatNumber(data.open_issues_count)} issues abertas
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <div>
              <span className="font-medium text-foreground">Criado em: </span>
              {formatDateISO(data.created_at)}
            </div>
            <div>
              <span className="font-medium text-foreground">Atualizado em: </span>
              {formatDateISO(data.updated_at)}
            </div>
          </div>

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
    </main>
  )
}