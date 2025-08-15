import { Page, PageBody, RepositoriesList, Typography } from "@/components";

export default function Home() {
  return (
    <Page>
      <PageBody>
        <Typography size="4xl">Hello World</Typography>
        <RepositoriesList />
      </PageBody>
    </Page>
  );
}
