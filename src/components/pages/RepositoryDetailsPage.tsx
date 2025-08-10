"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRepoDetails } from "@/hooks/useRepoDetails";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface Props {
  owner: string;
  repoId: string;
}

export const RepositoryDetailsPage = ({ repoId, owner }: Props) => {
  const { data, isLoading, isError, error } = useRepoDetails(
    owner,
    repoId
  );
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handleGoBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        <h1 className="text-3xl font-bold">
          Detalhes do Repositório
        </h1>
      </div>

      {isLoading && (
        <div className="h-48 rounded-lg border bg-muted animate-pulse" />
      )}

      {isError && (
        <div role="alert" className="rounded-lg border p-4">
          <p className="font-medium">Erro ao carregar repositório.</p>
          <p className="text-sm text-muted-foreground mt-1">
            {error?.message}
          </p>
        </div>
      )}

      {data && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{data.full_name}</span>
              <a
                href={data.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline">Ver no GitHub</Button>
              </a>
            </CardTitle>
            {data.description && (
              <CardDescription>{data.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <p>
                <span className="font-medium">Linguagem:</span>{" "}
                {data.language ?? "—"}
              </p>
              <p>
                <span className="font-medium">Estrelas:</span>{" "}
                {data.stargazers_count}
              </p>
              <p>
                <span className="font-medium">Forks:</span>{" "}
                {data.forks_count}
              </p>
              <p>
                <span className="font-medium">Issues abertas:</span>{" "}
                {data.open_issues_count}
              </p>
            </div>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Criado em:</span>{" "}
                {new Date(data.created_at).toLocaleDateString()}
              </p>
              <p>
                <span className="font-medium">Atualizado em:</span>{" "}
                {new Date(data.updated_at).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};
