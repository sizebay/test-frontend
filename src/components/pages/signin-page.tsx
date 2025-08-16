import { getSession } from "@/next-auth";

import { Page, PageBody, PageTitle } from "../atoms";
import {
  GithubSignInButton,
  GithubSignOutButton,
  LinkButton,
  LoginInfoCard,
  TextWithDivider,
} from "../molecules";

export async function SigninPage() {
  const session = await getSession();

  return (
    <Page className="">
      <PageBody className="w-96 xs:w-1/4 items-center justify-center">
        <PageTitle>Repositórios</PageTitle>
        {session?.user ? (
          <>
            <GithubSignOutButton className="w-full" />
            <TextWithDivider>ou</TextWithDivider>
            <LinkButton
              href="/repositories"
              className="flex items-center w-full justify-center"
              variant="secondary"
            >
              Voltar
            </LinkButton>
          </>
        ) : (
          <>
            <GithubSignInButton className="w-full" />
            <TextWithDivider>ou</TextWithDivider>
            <LinkButton
              href="/repositories"
              className="flex items-center w-full justify-center"
              variant="secondary"
            >
              Continuar sem login
            </LinkButton>
            <LoginInfoCard />
          </>
        )}
      </PageBody>
    </Page>
  );
}
