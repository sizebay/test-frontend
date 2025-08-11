import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ferramenta de pesquisa GitHub",
  description: "Ferramenta para pesquisar repositórios no GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
