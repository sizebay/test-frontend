"use client";

import { ArrowLeft } from "lucide-react";
import { useSession } from "next-auth/react";

import { PageHeader } from "../atoms";
import { GithubSignOutButton, LinkButton } from "../molecules";

export function RepositoriesListPageHeader() {
  const { data } = useSession();
  return (
    <PageHeader>
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
