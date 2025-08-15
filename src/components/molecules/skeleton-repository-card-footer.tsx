"use client";

import { CardDetail, CardFooter, Divider, Skeleton } from "../atoms";

export function SkeletonRepositoryCardFooter() {
  return (
    <CardFooter className={"flex flex-col items-start justify-center gap-3"}>
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
      <Divider />
      <Skeleton className="w-52 h-4" />
    </CardFooter>
  );
}
