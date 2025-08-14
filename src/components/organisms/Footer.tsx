"use client";
import Link from "next/link";
import { Mail, Phone, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-background/50 border-t">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Company Info */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">Sizebay</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Construindo soluções digitais de alto impacto para o
                seu negócio.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Navegação
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search-repositories"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Repositórios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/favorites"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Favoritos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Contato
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:ncls.braga19@gmail.com"
                    className="hover:text-foreground transition-colors"
                  >
                    ncls.braga19@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a
                    href="tel:+5592982027275"
                    className="hover:text-foreground transition-colors"
                  >
                    (92) 98202-7275
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 Sizebay. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
