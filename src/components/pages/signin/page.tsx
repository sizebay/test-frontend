import { getSession } from "@/next-auth";
import { redirect } from "next/navigation";

import { Page } from "../../atoms";
import { SigninPageHeader } from "../../molecules";
import { SigninPageBody } from "../../templates";

export async function SigninPage() {
  const session = await getSession();

  if (session?.user) return redirect("/");

  return (
    <Page>
      <SigninPageHeader />
      <SigninPageBody />
    </Page>
  );
}
