import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "Desculpe, mas a página que você ao qual tentou acessar não existe.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Página não encontrada
        </p>
        <Link href="/">Voltar para a página inicial</Link>
      </div>
    </div>
  );
}
