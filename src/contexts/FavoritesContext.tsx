"use client";

import React, { createContext, useContext } from "react";
import { GitHubRepoProps } from "@/types/github";
import { useCookies } from "@/hooks/useCookies";
import { toast } from "sonner";
import { Heart } from "lucide-react";

interface FavoritesContextType {
  favorites: GitHubRepoProps[];
  addFavorite: (repo: GitHubRepoProps) => void;
  removeFavorite: (repoId: number) => void;
  isFavorite: (repoId: number) => boolean;
  toggleFavorite: (repo: GitHubRepoProps) => void;
}

const FavoritesContext = createContext<
  FavoritesContextType | undefined
>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavorites must be used within a FavoritesProvider"
    );
  }
  return context;
};

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useCookies<GitHubRepoProps[]>(
    "github-favorites",
    []
  );

  const addFavorite = (repo: GitHubRepoProps) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === repo.id);
      if (!exists) {
        toast.success("Repositório adicionado aos favoritos!", {
          description: `${repo.name} foi adicionado à sua lista de favoritos.`,
          icon: (
            <Heart className="h-4 w-4 fill-current text-red-500" />
          ),
        });
        return [...prev, repo];
      }
      return prev;
    });
  };

  const removeFavorite = (repoId: number) => {
    setFavorites((prev) => {
      const repoToRemove = prev.find((fav) => fav.id === repoId);
      if (repoToRemove) {
        toast.info("Repositório removido dos favoritos", {
          description: `${repoToRemove.name} foi removido da sua lista de favoritos.`,
          icon: <Heart className="h-4 w-4" />,
        });
      }
      return prev.filter((fav) => fav.id !== repoId);
    });
  };

  const isFavorite = (repoId: number) => {
    return favorites.some((fav) => fav.id === repoId);
  };

  const toggleFavorite = (repo: GitHubRepoProps) => {
    if (isFavorite(repo.id)) {
      removeFavorite(repo.id);
    } else {
      addFavorite(repo);
    }
  };

  const value: FavoritesContextType = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
