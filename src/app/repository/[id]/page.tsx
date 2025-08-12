import { RepositoryContent } from "@/components/organisms/repository-content";
import { RepositoryHeader } from "@/components/organisms/repository-header";
import { getGithubRepositoryById } from "@/services/queries/get-respository-by-id";
import { dehydrate, QueryClient } from "@tanstack/query-core";
import { HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";
import { Suspense } from "react";

interface RepositoryProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    username: string;
  }>;
}

export const metadata: Metadata = {
  title: "GitView - Repositório",
  description: "Ferramenta de pesquisa de repositórios GitHub",
};

export default async function Repository({
  params,
  searchParams,
}: RepositoryProps) {
  const { id } = await params;
  const { username } = await searchParams;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["repository", id],
    queryFn: () => getGithubRepositoryById(username, id),
  });

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Carregando...</div>}>
          <RepositoryHeader />

          {/* Main Content */}
          <HydrationBoundary state={dehydrate(queryClient)}>
            <RepositoryContent repositoryId={id} username={username} />
          </HydrationBoundary>
        </Suspense>
      </div>
    </div>
  );
}
