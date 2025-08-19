"use client";

import { ArrowLeft } from "lucide-react";

import {
  PageHeader,
  type PageHeaderProps,
  LinkButton,
  ThemeSwitchButton,
} from "../../atoms";

type RepositoryDetailPageHeaderProps = PageHeaderProps;

export function RepositoryDetailPageHeader(
  props: RepositoryDetailPageHeaderProps
) {
  return (
    <PageHeader {...props}>
      <LinkButton variant="tertiary" leftIcon={<ArrowLeft />} href="/login">
        Voltar para repositórios
      </LinkButton>
      <ThemeSwitchButton />
    </PageHeader>
  );
}
