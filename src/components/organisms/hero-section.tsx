"use client";

import { SearchInput } from "@/components/molecules/search-input";
import { useApp } from "@/hooks/use-app";
import { useSearchFilters } from "@/hooks/use-search-filters";
import { getGithubUser } from "@/services/queries/get-user";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useTransition } from "react";

export function HeroSection() {
  const { username = "", setUsername } = useApp();
  const { updateSearchParam } = useSearchFilters();

  const [isPending, startTransition] = useTransition();

  const { refetch } = useQuery({
    queryKey: ["user", username],
    queryFn: () => getGithubUser(username),
    enabled: false,
  });

  const handleSearch = useCallback(() => {
    startTransition(async () => {
      if (!username.trim()) return;
      updateSearchParam({ field: "username", value: username });
      await refetch();
    });
  }, [username, refetch, startTransition, updateSearchParam]);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(images/hero-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Descubra os melhores <br />
            Repositórios do GitHub
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            GitView é a sua porta de entrada para explorar o mundo do GitHub.
          </p>
          <div className="flex justify-center">
            <SearchInput
              value={username}
              onChange={setUsername}
              onSearch={handleSearch}
              isLoading={isPending}
              placeholder="Digite um nome de usuário do GitHub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
