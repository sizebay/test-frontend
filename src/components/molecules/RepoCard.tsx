import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GitBranch, Star } from "lucide-react";
import { formatDistanceToNow } from "@/utils/date";
import { GitHubRepoProps } from "@/types/github";
import Link from "next/link";

export const RepoCard = ({ repo }: { repo: GitHubRepoProps }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">
              <Link
                href={`/repository-details?owner=${repo.owner.login}&repoId=${repo.name}`}
                className="hover:underline"
              >
                {repo.name}
              </Link>
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {repo.description || "Sem descrição"}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs">
              {repo.language || "N/A"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitBranch className="h-4 w-4" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>
              {formatDistanceToNow(new Date(repo.updated_at))}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
