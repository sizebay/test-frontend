"use client";

import {
  Card,
  CardBody,
  CardDetail,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "../../atoms";

export function RepositoryCardSkeleton() {
  return (
    <Card>
      <RepositoryCardHeaderSkeleton />
      <CardBody className="h-24">
        <Skeleton className="h-12 w-full" />
      </CardBody>
      <RepositoryCardFooterSkeleton />
    </Card>
  );
}

export function RepositoryCardFooterSkeleton() {
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

export function RepositoryCardHeaderSkeleton() {
  return (
    <CardHeader className="justify-start lg:justify-between">
      <Skeleton className="h-5 w-52" />
      <Skeleton className="h-5 w-12" />
    </CardHeader>
  );
}
