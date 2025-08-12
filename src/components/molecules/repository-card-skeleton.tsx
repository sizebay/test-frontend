import { Card } from "@/components/atoms/card";
import { Skeleton } from "@/components/atoms/skeleton";

export function RepositoryCardSkeleton() {
  return (
    <Card className="p-6 animate-pulse">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </Card>
  );
}
