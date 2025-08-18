"use client";

import { ArrowLeft } from "lucide-react";
import { useSession } from "next-auth/react";

import {
  PageHeader,
  GithubSignOutButton,
  LinkButton,
  type PageHeaderProps,
} from "../../atoms";

type RepositoriesListPageHeaderProps = PageHeaderProps;

export function RepositoriesListPageHeader(
  props: RepositoriesListPageHeaderProps
) {
  const { data } = useSession();
  return (
    <PageHeader {...props}>
      {data?.user ? (
        <GithubSignOutButton className="w-full lg:w-fit" />
      ) : (
        <LinkButton variant="tertiary" leftIcon={<ArrowLeft />} href="/login">
          Voltar ao Login
        </LinkButton>
      )}
    </PageHeader>
  );
}
