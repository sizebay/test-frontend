"use client";

import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { HydrationBoundaryWrapper } from "@/components/providers/HydrationBoundary";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FavoritesProvider } from "@/contexts/FavoritesContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark"]}
    >
      <ReactQueryProvider>
        <FavoritesProvider>
          <ErrorBoundary
            fallbackRender={() => (
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-2">
                    Algo deu errado
                  </h1>
                  <p className="text-muted-foreground">
                    Tente recarregar a página.
                  </p>
                </div>
              </div>
            )}
          >
            <HydrationBoundaryWrapper>
              {children}
            </HydrationBoundaryWrapper>
          </ErrorBoundary>
        </FavoritesProvider>
      </ReactQueryProvider>
      <Toaster />
    </ThemeProvider>
  );
}
