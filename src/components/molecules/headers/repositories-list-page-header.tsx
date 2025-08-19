"use client";

import { ArrowLeft } from "lucide-react";
import { useSession } from "next-auth/react";

import {
  PageHeader,
  GithubSignOutButton,
  LinkButton,
  type PageHeaderProps,
  ThemeSwitchButton,
} from "../../atoms";

type RepositoriesListPageHeaderProps = PageHeaderProps;

export function RepositoriesListPageHeader(
  props: RepositoriesListPageHeaderProps
) {
  const { data } = useSession();
  return (
    <PageHeader {...props}>
      {data?.user ? (
        <GithubSignOutButton />
      ) : (
        <LinkButton variant="tertiary" leftIcon={<ArrowLeft />} href="/login">
          Voltar ao Login
        </LinkButton>
      )}
      <ThemeSwitchButton />
    </PageHeader>
  );
}
