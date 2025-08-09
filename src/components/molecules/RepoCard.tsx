import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitHubRepoProps } from "@/types/github";
import Link from "next/link";

export const RepoCard = ({ repo }: { repo: GitHubRepoProps }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <Link
            href={{
              pathname: "/repository-details",
              query: { repoId: repo.id, owner: repo.owner.login },
            }}
            className="hover:underline"
          >
            {repo.name}
          </Link>
          {repo.language && (
            <Badge variant="secondary">{repo.language}</Badge>
          )}
        </CardTitle>
        {repo.description && (
          <CardDescription>{repo.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>🐛 {repo.open_issues_count}</span>
      </CardContent>
    </Card>
  );
};
