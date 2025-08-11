import { GitFork, Star, TriangleAlert } from "lucide-react"
import { formatNumber } from "@/lib/format"

interface RepoStatsProps {
  stars: number
  forks: number
  openIssues: number
}

export default function RepoStats({ stars, forks, openIssues }: RepoStatsProps) {
  return (
    <div className="flex flex-wrap gap-4 text-sm">
      <span className="inline-flex items-center gap-1">
        <Star className="h-4 w-4" />
        {formatNumber(stars)} stars
      </span>
      <span className="inline-flex items-center gap-1">
        <GitFork className="h-4 w-4" />
        {formatNumber(forks)} forks
      </span>
      <span className="inline-flex items-center gap-1">
        <TriangleAlert className="h-4 w-4" />
        {formatNumber(openIssues)} issues abertas
      </span>
    </div>
  )
}