"use client";

import {
  CardBody,
  CardDetail,
  CardFooter,
  CardHeader,
  PageBody,
  Skeleton,
} from "../../atoms";

import { RepositoryActionsSkeleton } from "./repository-actions-skeleton";
import { RepositoryLanguagesSkeleton } from "./repository-languages-skeleton";

export function RepositorySummaryHeaderSkeleton() {
  return (
    <CardHeader className="justify-start lg:justify-between">
      <Skeleton className="h-5 w-52" />
      <Skeleton className="h-5 w-12" />
    </CardHeader>
  );
}

export function RepositorySummaryFooterSkeleton() {
  return (
    <CardFooter className="flex flex-col items-start justify-center gap-3">
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
    </CardFooter>
  );
}

export function RepositorySummarySkeleton() {
  return (
    <PageBody>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full gap-2 lg:w-1/2">
          <RepositorySummaryHeaderSkeleton />
          <CardBody>
            <Skeleton className="h-12 w-full" />
          </CardBody>
          <RepositorySummaryFooterSkeleton />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-2 justify-start items-start lg:items-end">
          <RepositoryActionsSkeleton />
          <Skeleton className="h-4 w-60" />
          <Skeleton className="h-4 w-60" />
        </div>
      </div>
      <RepositoryLanguagesSkeleton />
    </PageBody>
  );
}
