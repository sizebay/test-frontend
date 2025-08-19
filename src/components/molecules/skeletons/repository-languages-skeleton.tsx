import {
  Card,
  CardBody,
  CardDetail,
  CardHeader,
  Divider,
  Skeleton,
} from "../../atoms";

export function RepositoryLanguagesSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-5 w-52" />
      </CardHeader>
      <Divider />
      <CardBody>
        {Array.from({ length: 5 }).map((_, i) => (
          <CardDetail key={i}>
            <Skeleton className="w-10 h-4" />
          </CardDetail>
        ))}
      </CardBody>
    </Card>
  );
}
