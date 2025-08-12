import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, GitBranch, Star, Heart } from "lucide-react";
import { formatDistanceToNow } from "@/utils/date";
import { GitHubRepoProps } from "@/types/github";
import { useFavorites } from "@/contexts/FavoritesContext";
import { ClientOnly } from "@/components/providers/ClientOnly";
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
            <ClientOnly>
              <FavoriteButton repo={repo} />
            </ClientOnly>
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

const FavoriteButton = ({ repo }: { repo: GitHubRepoProps }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFavorited = isFavorite(repo.id);

  const handleToggleFavorite = () => {
    toggleFavorite(repo);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggleFavorite}
      className={`p-2 h-auto ${
        isFavorited
          ? "text-red-500 hover:text-red-600"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Heart
        className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`}
      />
    </Button>
  );
};
