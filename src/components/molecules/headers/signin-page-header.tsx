import {
  PageHeader,
  PageHeaderProps,
  PageTitle,
  ThemeSwitchButton,
} from "../../atoms";

export type SigninPageHeaderProps = PageHeaderProps;

export async function SigninPageHeader(props: SigninPageHeaderProps) {
  return (
    <PageHeader {...props}>
      <PageTitle>Repositórios</PageTitle>
      <ThemeSwitchButton />
    </PageHeader>
  );
}
