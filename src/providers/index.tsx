"use client";

import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { HydrationBoundaryWrapper } from "@/components/providers/HydrationBoundary";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark"]}
    >
      <ReactQueryProvider>
        <HydrationBoundaryWrapper>
          {children}
        </HydrationBoundaryWrapper>
      </ReactQueryProvider>
      <Toaster />
    </ThemeProvider>
  );
}
