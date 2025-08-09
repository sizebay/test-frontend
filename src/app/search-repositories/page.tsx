import { MainTemplate } from "@/components/templates/MainTemplate";
import { SearchRepositoriesPage } from "@/components/pages/SearchRepositoriesPage";
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

  return (
    <MainTemplate>
      <SearchRepositoriesPage username={username} />
    </MainTemplate>
  );
}
