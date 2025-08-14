"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import { FavoritesList } from "@/components/organisms/FavoritesList";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientOnly } from "@/components/providers/ClientOnly";
import { MainTemplate } from "@/components/templates/MainTemplate";
import Link from "next/link";

export const FavoritesPage = () => {
  return (
    <MainTemplate>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/search-repositories">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
            <Heart className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Repositórios Favoritos
            </h1>
            <ClientOnly>
              <FavoritesDescription />
            </ClientOnly>
          </div>
        </div>
      </div>

      {/* Content */}
      <ClientOnly>
        <FavoritesContent />
      </ClientOnly>
    </MainTemplate>
  );
};

const FavoritesDescription = () => {
  const { favorites } = useFavorites();

  return (
    <p className="text-muted-foreground">
      {favorites.length === 0
        ? "Você ainda não tem repositórios favoritos"
        : `${favorites.length} repositório${
            favorites.length === 1 ? "" : "s"
          } favorito${favorites.length === 1 ? "" : "s"}`}
    </p>
  );
};

const FavoritesContent = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
          <Heart className="h-12 w-12 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Nenhum repositório favorito
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Comece a explorar repositórios e adicione seus favoritos
          clicando no ícone de coração.
        </p>
        <Button asChild>
          <Link href="/search-repositories">
            Explorar Repositórios
          </Link>
        </Button>
      </div>
    );
  }

  return <FavoritesList repos={favorites} />;
};
