"use client";

import { Button } from "@/components/atoms/button";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function RepositoryHeader() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-8 animate-fade-in">
      <Button onClick={router.back} variant="ghost" className="hover-glow">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar
      </Button>
      <ThemeToggle />
    </div>
  );
}
