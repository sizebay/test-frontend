import { getSession } from "@/next-auth";

import { Page, PageBody, PageTitle } from "../atoms";
import {
  GithubSignInButton,
  LinkButton,
  LoginInfoCard,
  TextWithDivider,
} from "../molecules";
import { redirect } from "next/navigation";

export async function SigninPage() {
  const session = await getSession();

  if (session?.user) return redirect("/");

  return (
    <Page className="">
      <PageBody className="w-96 xs:w-1/4 items-center justify-center">
        <PageTitle>Repositórios</PageTitle>
        <GithubSignInButton className="w-full" />
        <TextWithDivider>ou</TextWithDivider>
        <LinkButton
          href="/"
          className="flex items-center w-full justify-center"
          variant="secondary"
        >
          Continuar sem login
        </LinkButton>
        <LoginInfoCard />
      </PageBody>
    </Page>
  );
}
