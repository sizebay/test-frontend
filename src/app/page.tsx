import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sizebay - Início",
  description:
    "Página inicial do Sizebay Repo, onde você pode explorar repositórios do GitHub e descobrir projetos interessantes.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        {/* Floating circles */}
        <div
          className="size-[60vmax] rounded-full blur-3xl opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-2)))",
            position: "absolute",
            top: "-20vmax",
            right: "-10vmax",
          }}
        />
        <div
          className="size-[60vmax] rounded-full blur-3xl opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(var(--brand-2)), hsl(var(--brand)))",
            position: "absolute",
            bottom: "-20vmax",
            left: "-10vmax",
          }}
        />
      </div>

      <section className="text-center max-w-2xl px-4 relative z-10">
        {/* GitHub Icon */}
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-primary/10 rounded-full">
            <Github className="h-16 w-16 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Explore repositórios do GitHub
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Descubra projetos, veja estatísticas e navegue com uma
          interface rápida e elegante.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/search-repositories">
              <Github className="h-5 w-5" />
              Começar agora
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
