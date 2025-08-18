import { PageHeader, PageHeaderProps, PageTitle } from "../../atoms";

export type SigninPageHeaderProps = PageHeaderProps;

export async function SigninPageHeader(props: SigninPageHeaderProps) {
  return (
    <PageHeader {...props}>
      <PageTitle>Repositórios</PageTitle>
    </PageHeader>
  );
}
