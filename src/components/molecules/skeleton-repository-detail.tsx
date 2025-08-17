import { CardDetail, Skeleton } from "../atoms";

export function SkeletonRepositoryDetail() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 lg:justify-between w-full">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start lg:items-center">
          <div className="flex gap-2 items-center">
            <Skeleton className="w-52 h-8" />
          </div>
          <Skeleton className="w-14 h-5" />
        </div>
        <Skeleton className="h-12 w-full" />
        <div className="flex gap-4 items-center justify-start w-full">
          <CardDetail>
            <Skeleton className="w-10 h-4" />
          </CardDetail>
          <CardDetail>
            <Skeleton className="w-10 h-4" />
          </CardDetail>
          <CardDetail>
            <Skeleton className="w-10 h-4" />
          </CardDetail>
          <CardDetail>
            <Skeleton className="w-10 h-4" />
          </CardDetail>
        </div>
      </div>
      <div className="flex gap-2 w-full lg:w-fit flex-wrap">
        <Skeleton className="h-8 w-32 grow" />
        <Skeleton className="h-8 w-32 grow" />
        <Skeleton className="h-8 w-32 grow" />
      </div>
    </div>
  );
}
