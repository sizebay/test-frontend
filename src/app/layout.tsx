import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "@/global/styles.css";
import { getSession } from "@/next-auth";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./providers";

const openSans = Open_Sans({
  weight: ["500", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Repositórios Github",
  description: "Procure repositórios de usuários do github",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html lang="pt">
      <body
        suppressHydrationWarning
        className={`${openSans.className} antialiased`}
      >
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
