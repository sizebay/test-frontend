"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/hooks/useUser";

import {
  ExternalLink,
  FolderGit2,
  Users,
  UserX,
  AlertCircle,
} from "lucide-react";

interface UserCardProps {
  username: string;
}

function getInitials(name?: string | null, login?: string) {
  const src = (name || login || "").trim();
  if (!src) return "?";
  const parts = src.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

export const UserCard = ({ username }: UserCardProps) => {
  const { data, isLoading, isError, error } = useUser(username);

  if (isLoading) {
    return (
      <Card aria-busy className="overflow-hidden">
        <CardHeader className="flex flex-row items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-72" />
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    // Verifica se é erro 404 (usuário não encontrado)
    const isUserNotFound =
      error?.message?.includes("404") ||
      error?.message?.toLowerCase().includes("not found") ||
      error?.message?.toLowerCase().includes("não encontrado");

    if (isUserNotFound) {
      return (
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center">
              <UserX className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold leading-tight truncate text-muted-foreground">
                Usuário não encontrado
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                O usuário <strong>&ldquo;{username}&rdquo;</strong>{" "}
                não foi encontrado no GitHub.
              </p>
            </div>
          </CardHeader>
        </Card>
      );
    }

    // Outros tipos de erro
    return (
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-tight truncate text-destructive">
              Erro ao carregar usuário
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Não foi possível carregar as informações do usuário.
              Tente novamente em alguns instantes.
            </p>
          </div>
        </CardHeader>
      </Card>
    );
  }

  if (!data) return null;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16 shadow-sm">
          <AvatarImage
            src={data.avatar_url}
            alt={`Avatar do usuário GitHub ${
              data.name || data.login
            }`}
          />
          <AvatarFallback>
            {getInitials(data.name, data.login)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold leading-tight truncate">
              {data.name || data.login}
            </h2>
            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline"
              aria-label={`Abrir perfil GitHub de ${data.login}`}
            >
              @{data.login}
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
          {data.bio && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {data.bio}
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" aria-hidden />
            <span>
              <span className="font-medium text-foreground">
                {data.followers}
              </span>{" "}
              seguidores
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 rotate-180" aria-hidden />
            <span>
              <span className="font-medium text-foreground">
                {data.following}
              </span>{" "}
              seguindo
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FolderGit2 className="h-4 w-4" aria-hidden />
            <span>
              <span className="font-medium text-foreground">
                {data.public_repos}
              </span>{" "}
              repositórios públicos
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
