"use client";

import { ReactNode } from "react";
import { Globe, Lock, LucideProps } from "lucide-react";

import { TGithubRepositoryVisibility } from "@/types";

type RepositoryVisibilityIconProps = LucideProps & {
  visibility: TGithubRepositoryVisibility;
};

export function RepositoryVisibilityIcon({
  visibility,
  ...props
}: RepositoryVisibilityIconProps) {
  const iconProps: LucideProps = {
    size: 16,
    className: "text-accent-900",
    ...props,
  };

  const visibilityIconsMap: Record<TGithubRepositoryVisibility, ReactNode> = {
    private: <Lock {...iconProps} />,
    public: <Globe {...iconProps} />,
  };

  return visibilityIconsMap[visibility];
}
