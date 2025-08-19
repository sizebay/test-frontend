"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type ProvidersProps = {
  session: Session | null;
  children: React.ReactNode;
};

export function Providers({ session, children }: ProvidersProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
