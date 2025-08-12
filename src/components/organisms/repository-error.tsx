"use client";

import { Button } from "@/components/atoms/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function RepositoryError() {
  const router = useRouter();

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertCircle className="w-12 h-12 text-destructive" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Repositório não encontrado</h1>
          <p className="text-muted-foreground">
            O repositório solicitado não existe ou não está acessível.
          </p>
        </div>
        <Button onClick={router.back} variant="outline" className="hover-glow">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar à busca
        </Button>
      </div>
    </div>
  );
}
