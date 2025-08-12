import { Metadata } from "next";
import { FavoritesPage } from "@/components/pages/FavoritesPage";

export const metadata: Metadata = {
  title: "Favoritos - GitHub Explorer",
  description: "Seus repositórios favoritos do GitHub",
};

export default function Favorites() {
  return <FavoritesPage />;
}
