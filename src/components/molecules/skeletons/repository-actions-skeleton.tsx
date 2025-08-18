import { Skeleton } from "@/components/atoms";

export function RepositoryActionsSkeleton() {
  return (
    <div className="flex gap-2 w-full lg:w-fit flex-wrap">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-8 w-24" />
      ))}
    </div>
  );
}
