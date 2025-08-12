import { RepositoryCardSkeleton } from "@/components/molecules/repository-card-skeleton";

export function RepositoriesLoading({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <RepositoryCardSkeleton key={i} />
      ))}
    </div>
  );
}
