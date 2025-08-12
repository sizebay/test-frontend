import type { Metadata } from "next";
import "../styles/globals.css";
import { QueryClientProviderWrapper } from "@/providers/query-client-provider";
import { Header } from '@/components/organisms/Header/Header'



export const metadata: Metadata = {
  title: "Test Frontend",
  description: "Encontre repositórios do GitHub por nome de usuário.",
  openGraph: {
    title: "Test Frontend",
    description: "Encontre repositórios do GitHub por nome de usuário.",
    siteName: "Test Frontend",
    locale: "pt_BR",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <QueryClientProviderWrapper>
          {children}
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
