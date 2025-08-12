"use client";

import { AppProvider } from "@/contexts/app";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AppProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
