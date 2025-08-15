"use client";

import { CardHeader, Skeleton } from "../atoms";

export function SkeletonRepositoryCardHeader() {
  return (
    <CardHeader className={"justify-start lg:justify-between"}>
      <Skeleton className="h-5 w-52" />
      <Skeleton className="h-5 w-12" />
    </CardHeader>
  );
}
