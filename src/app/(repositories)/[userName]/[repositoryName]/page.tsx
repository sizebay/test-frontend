import { RepositoryDetailPage } from "@/components";
import { AsyncDynamicParams } from "@/types";

export default async function Page({
  params,
}: AsyncDynamicParams<{ userName: string; repositoryName: string }>) {
  return <RepositoryDetailPage params={params} />;
}
