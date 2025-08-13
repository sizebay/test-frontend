import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/global/styles.css";

const openSans = Open_Sans({
  weight: ["500", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repositórios Github",
  description: "Procure repositórios de usuários do github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}
