import { MainTemplate } from "@/components/templates/MainTemplate";
import { SearchRepositoriesPage } from "@/components/pages/SearchRepositoriesPage";
import { prefetchUserRepos } from "@/lib/prefetch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sizebay - Pesquisa de Repositórios",
  description:
    "Pesquise e explore repositórios do GitHub com facilidade. Descubra projetos interessantes e veja estatísticas detalhadas.",
};

interface ServerCtxProps {
  searchParams: Promise<{ username?: string }>;
}

export default async function SearchRepository(ctx: ServerCtxProps) {
  const { username } = await ctx.searchParams;

  // Prefetch user repositories if username is provided
  if (username) {
    await prefetchUserRepos(username, 1, 10);
  }

  return (
    <MainTemplate>
      <SearchRepositoriesPage username={username} />
    </MainTemplate>
  );
}
