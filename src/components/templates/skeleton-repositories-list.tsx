import { SkeletonRepositoryCard } from "../organisms";

export function SkeletonRepositoriesList() {
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonRepositoryCard key={index} />
      ))}
    </div>
  );
}
