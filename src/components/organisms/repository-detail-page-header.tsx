"use client";

import { ArrowLeft } from "lucide-react";

import { PageHeader, PageHeaderProps } from "../atoms";
import { LinkButton } from "../molecules";

export function RepositoryDetailPageHeader({ ...props }: PageHeaderProps) {
  return (
    <PageHeader {...props}>
      <LinkButton variant="tertiary" leftIcon={<ArrowLeft />} href="/login">
        Voltar para repositórios
      </LinkButton>
    </PageHeader>
  );
}
