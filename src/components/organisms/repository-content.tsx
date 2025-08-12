"use client";

import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Card, CardContent, CardHeader } from "@/components/atoms/card";
import { RepositoryError } from "@/components/organisms/repository-error";
import { getGithubRepositoryById } from "@/services/queries/get-respository-by-id";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import {
  AlertCircle,
  Calendar,
  Code,
  ExternalLink,
  Eye,
  GitFork,
  Star,
} from "lucide-react";

interface RepositoryContentProps {
  username: string;
  repositoryId: string;
}

export function RepositoryContent({
  repositoryId,
  username,
}: RepositoryContentProps) {
  const { data: repository, error } = useQuery({
    queryKey: ["repository", repositoryId],
    queryFn: () => getGithubRepositoryById(username, repositoryId),
    enabled: !!repositoryId,
  });

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      TypeScript: "hsl(var(--primary))",
      JavaScript: "hsl(45, 100%, 51%)",
      Python: "hsl(199, 89%, 48%)",
      Java: "hsl(19, 100%, 55%)",
      "C++": "hsl(9, 100%, 57%)",
      Go: "hsl(180, 82%, 33%)",
      Rust: "hsl(26, 100%, 37%)",
      PHP: "hsl(225, 82%, 56%)",
      Ruby: "hsl(349, 86%, 46%)",
      Swift: "hsl(24, 100%, 58%)",
    };
    return colors[language || ""] || "hsl(var(--muted-foreground))";
  };

  if (!repository || error) {
    return <RepositoryError />;
  }

  return (
    <Card className="glass-card w-full mx-auto animate-scale-in">
      <CardHeader className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text leading-tight">
            {repository.name}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {repository.description || "Sem descrição disponível"}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat-card group">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-muted-foreground">
                Stars
              </span>
            </div>
            <p className="text-2xl font-bold">
              {repository.stargazers_count.toLocaleString()}
            </p>
          </div>

          <div className="stat-card group">
            <div className="flex items-center gap-2 mb-2">
              <GitFork className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-muted-foreground">
                Forks
              </span>
            </div>
            <p className="text-2xl font-bold">
              {repository.forks_count.toLocaleString()}
            </p>
          </div>

          <div className="stat-card group">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-muted-foreground">
                Issues
              </span>
            </div>
            <p className="text-2xl font-bold">
              {repository.open_issues_count.toLocaleString()}
            </p>
          </div>

          <div className="stat-card group">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-muted-foreground">
                Visibilidade
              </span>
            </div>
            <Badge variant="secondary" className="text-sm">
              {repository.visibility}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Language and Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repository.language && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Code
                className="w-5 h-5"
                style={{ color: getLanguageColor(repository.language) }}
              />
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Linguagem Principal
                </p>
                <p className="font-semibold">{repository.language}</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Criado
              </p>
              <p className="font-semibold">
                {dayjs(repository.created_at).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
            <Calendar className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Última Atualização
              </p>
              <p className="font-semibold">
                {dayjs(repository.updated_at).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
            <Calendar className="w-5 h-5 text-accent" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Último Push
              </p>
              <p className="font-semibold">
                {dayjs(repository.pushed_at).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>
        </div>

        {/* Topics */}
        {repository.topics && repository.topics.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Tópicos</h3>
            <div className="flex flex-wrap gap-2">
              {repository.topics.map((topic, index) => (
                <Badge
                  key={topic}
                  variant="outline"
                  className="hover-scale"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4">
          <Button asChild className="w-full md:w-auto premium-button">
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Abrir no GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
