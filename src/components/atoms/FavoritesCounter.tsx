"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import { Badge } from "@/components/ui/badge";
import { ClientOnly } from "@/components/providers/ClientOnly";

export const FavoritesCounter = () => {
  return (
    <ClientOnly>
      <FavoritesCounterContent />
    </ClientOnly>
  );
};

const FavoritesCounterContent = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return null;
  }

  return (
    <Badge
      variant="secondary"
      className="ml-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
    >
      {favorites.length}
    </Badge>
  );
};
