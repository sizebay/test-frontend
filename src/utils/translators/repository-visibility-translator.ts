import { TGithubRepositoryVisibility } from "@/types";

export class RepositoryVisibilityTranslator {
  static toPt(visibility: TGithubRepositoryVisibility): string {
    const translationMap: Record<TGithubRepositoryVisibility, string> = {
      private: "Privado",
      public: "Público",
    };

    return translationMap[visibility];
  }
}
