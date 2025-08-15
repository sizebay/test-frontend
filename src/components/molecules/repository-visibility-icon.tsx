import { ReactNode } from "react";
import { Globe, Lock, LucideProps } from "lucide-react";

import { TGithubRepositoryVisibility } from "@/types";

type RepositoryVisibilityIconProps = {
  visibility: TGithubRepositoryVisibility;
};

export function RepositoryVisibilityIcon({
  visibility,
}: RepositoryVisibilityIconProps) {
  const iconProps: LucideProps = {
    size: 16,
    className: "text-neutral-700",
  };

  const visibilityIconsMap: Record<TGithubRepositoryVisibility, ReactNode> = {
    private: <Lock {...iconProps} />,
    public: <Globe {...iconProps} />,
  };

  return visibilityIconsMap[visibility];
}
