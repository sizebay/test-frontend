import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ferramenta de pesquisa GitHub",
    template: "%s | Ferramenta de pesquisa GitHub",
  },
  description: "Ferramenta para pesquisar repositórios no GitHub. Explore repositórios públicos, veja estatísticas, linguagens e muito mais.",
  keywords: ["GitHub", "repositórios", "pesquisa", "desenvolvedor", "código"],
  authors: [{ name: "Jorge Madson Santos Viana" }],
  creator: "Jorge Madson Santos Viana",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Ferramenta de pesquisa GitHub",
    title: "Ferramenta de pesquisa GitHub",
    description: "Ferramenta para pesquisar repositórios no GitHub. Explore repositórios públicos, veja estatísticas, linguagens e muito mais.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferramenta de pesquisa GitHub",
    description: "Ferramenta para pesquisar repositórios no GitHub. Explore repositórios públicos, veja estatísticas, linguagens e muito mais.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
