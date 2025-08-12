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
import {
  ArrowLeft,
  Star,
  GitFork,
  AlertCircle,
  Calendar,
  Clock,
  Code,
  ExternalLink,
  Globe,
  BookOpen,
} from "lucide-react";

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
          className="flex items-center gap-2 hover:bg-muted/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">
            Detalhes do Repositório
          </h1>
        </div>
      </div>

      {isLoading && (
        <div className="h-48 rounded-lg border bg-muted animate-pulse flex items-center justify-center">
          <div className="text-center space-y-2">
            <BookOpen className="h-12 w-12 text-muted-foreground animate-pulse mx-auto" />
            <p className="text-muted-foreground">
              Carregando repositório...
            </p>
          </div>
        </div>
      )}

      {isError && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-medium text-destructive">
                  Erro ao carregar repositório
                </p>
                <p className="text-sm text-muted-foreground">
                  {error?.message || "Ocorreu um erro inesperado"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {data && (
        <div className="space-y-6">
          {/* Card Principal */}
          <Card className="border-2 border-primary/10 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between text-2xl">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="text-foreground">
                    {data.full_name}
                  </span>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={data.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver no GitHub
                  </a>
                </Button>
              </CardTitle>
              {data.description && (
                <CardDescription className="text-base text-muted-foreground mt-2">
                  {data.description}
                </CardDescription>
              )}
            </CardHeader>
          </Card>

          {/* Cards de Estatísticas */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
                    <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {data.stargazers_count}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Estrelas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                    <GitFork className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {data.forks_count}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Forks
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
                    <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {data.open_issues_count}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Issues
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                    <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {data.language ?? "—"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Linguagem
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cards de Informações */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-primary" />
                  Informações Gerais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                  <span className="text-sm font-medium text-muted-foreground">
                    Linguagem
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {data.language ?? "—"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                  <span className="text-sm font-medium text-muted-foreground">
                    Estrelas
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {data.stargazers_count}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                  <span className="text-sm font-medium text-muted-foreground">
                    Forks
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {data.forks_count}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                  <span className="text-sm font-medium text-muted-foreground">
                    Issues abertas
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {data.open_issues_count}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  Datas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Criado em
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {new Date(data.created_at).toLocaleDateString(
                      "pt-BR",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Atualizado em
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {new Date(data.updated_at).toLocaleDateString(
                      "pt-BR",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
};
