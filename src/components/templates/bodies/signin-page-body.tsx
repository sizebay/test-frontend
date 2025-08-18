import {
  GithubSignInButton,
  LinkButton,
  PageBody,
  type PageBodyProps,
} from "../../atoms";
import { LoginInfoCard, TextWithDivider } from "../../molecules";

type SigninPageBody = PageBodyProps;

export async function SigninPageBody(props: SigninPageBody) {
  return (
    <PageBody
      {...props}
      className="h-full justify-center items-center lg:max-w-96"
    >
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
  );
}
