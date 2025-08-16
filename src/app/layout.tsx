import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { getSession } from "@/next-auth";
import "@/global/styles.css";

import { Providers } from "./providers";

const openSans = Open_Sans({
  style: ["normal", "italic"],
  weight: ["700", "400"],
  subsets: ["latin"],
  variable: "--font-open-sans",
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
      <body className={openSans.className}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
