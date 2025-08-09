"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark =
    theme === "system" ? resolvedTheme === "dark" : theme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={
        isDark ? "Mudar para modo claro" : "Mudar para modo escuro"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Tema claro" : "Tema escuro"}
    >
      {isDark ? (
        <Sun aria-hidden className="transition-transform" />
      ) : (
        <Moon aria-hidden className="transition-transform" />
      )}
    </Button>
  );
};
