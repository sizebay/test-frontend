import { RepoCard } from "@/components/molecules/RepoCard";
import { GitHubRepoProps } from "@/types/github";

interface FavoritesListProps {
  repos: GitHubRepoProps[];
}

export const FavoritesList = ({ repos }: FavoritesListProps) => {
  if (!repos || repos.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center">
        <p className="text-muted-foreground">
          Nenhum repositório favorito encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
