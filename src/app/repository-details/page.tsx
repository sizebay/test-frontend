import { RepositoryDetailsPage } from "@/components/pages/RepositoryDetailsPage";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { prefetchRepoDetails } from "@/lib/prefetch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sizebay - Pesquisa de Repositórios",
  description:
    "Pesquise e explore repositórios do GitHub com facilidade. Descubra projetos interessantes e veja estatísticas detalhadas.",
};

interface ServerCtxProps {
  searchParams: Promise<{ owner?: string; repoId?: string }>;
}

export default async function RepositoryDetails(ctx: ServerCtxProps) {
  const { owner, repoId } = await ctx.searchParams;

  // Prefetch repository details if owner and repoId are provided
  if (owner && repoId) {
    await prefetchRepoDetails(owner, repoId);
  }

  return (
    <MainTemplate>
      <RepositoryDetailsPage owner={owner!} repoId={repoId!} />
    </MainTemplate>
  );
}
