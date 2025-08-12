"use client";

import { Button } from "@/components/atoms/button";
import { Card } from "@/components/atoms/card";
import { getLanguageColor } from "@/utils/get-language-color";
import dayjs from "dayjs";
import dayjsPtBr from "dayjs/locale/pt-br";
import { Circle, ExternalLink, Eye, GitFork, Star } from "lucide-react";
import { useRouter } from "next/navigation";

dayjs.locale(dayjsPtBr);

interface RepositoryData {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

interface RepositoryCardProps {
  repository: RepositoryData;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const router = useRouter();

  const handleViewDetails = () => {
    const [owner] = repository.full_name.split("/");
    router.push(`/repository/${repository.name}?username=${owner}`);
  };

  return (
    <Card className="group p-6 hover:bg-card-hover max-w-full transition-all duration-300 hover:scale-[1.02] animate-fade-in-up">
      <div className="flex flex-col h-full">
        <div className="flex md:flex-row flex-col items-start justify-between mb-3">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300 truncate">
            {repository.name}
          </h3>
          <div className="flex gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleViewDetails}
              className="hover-scale"
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover-scale">
              <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
          {repository.description || "No description available"}
        </p>

        <div className="flex flex-col gap-2 items-start text-sm">
          <div className="flex items-center gap-4">
            {repository.language && (
              <div className="flex items-center gap-1.5">
                <Circle
                  className="h-3 w-3"
                  style={{ color: getLanguageColor(repository.language) }}
                  fill="currentColor"
                />
                <span className="text-muted-foreground">
                  {repository.language}
                </span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {repository.stargazers_count}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {repository.forks_count}
              </span>
            </div>
          </div>

          <span className="text-xs text-muted-foreground">
            Atualizado em{" "}
            {dayjs(repository.updated_at).format(`DD [de] MMMM [de] YYYY`)}
          </span>
        </div>
      </div>
    </Card>
  );
}
