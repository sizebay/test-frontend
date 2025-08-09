import { Button } from "@/components/ui/button";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sizebay - Início",
  description:
    "Página inicial do Sizebay Repo, onde você pode explorar repositórios do GitHub e descobrir projetos interessantes.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div
          className="size-[60vmax] rounded-full blur-3xl"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-2)))",
            position: "absolute",
            top: "-20vmax",
            right: "-10vmax",
          }}
        />
        <div
          className="size-[60vmax] rounded-full blur-3xl"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(var(--brand-2)), hsl(var(--brand)))",
            position: "absolute",
            bottom: "-20vmax",
            left: "-10vmax",
          }}
        />
      </div>
      <section className="text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Explore repositórios do GitHub
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Descubra projetos, veja estatísticas e navegue com uma
          interface rápida e elegante.
        </p>
        <div className="mt-8 flex items-center justify-center ">
          <Link
            className="cursor-pointer"
            href="/search-repositories"
          >
            <Button size="lg">Começar agora</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
