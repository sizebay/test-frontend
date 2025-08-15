import { Card, CardBody, Skeleton } from "../atoms";
import {
  SkeletonRepositoryCardFooter,
  SkeletonRepositoryCardHeader,
} from "../molecules";

export function SkeletonRepositoryCard() {
  return (
    <Card>
      <SkeletonRepositoryCardHeader />
      <CardBody className="h-24">
        <Skeleton className={"h-12 w-full"} />
      </CardBody>
      <SkeletonRepositoryCardFooter />
    </Card>
  );
}
