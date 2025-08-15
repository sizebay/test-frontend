import { TGithubRepository } from "@/types";

import { RepositoryCard } from "../organisms";

export const mockGithubRepositories: TGithubRepository[] = [
  {
    id: 1,
    name: "frontend-dashboard",
    url: "https://github.com/daniel-favero/frontend-dashboard",
    visibility: "public",
    languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
    mainLanguage: "TypeScript",
    description: "Dashboard interativo para monitoramento de câmeras com IA.",
    starsCount: 152,
    forksCount: 27,
    watchCount: 18,
    issuesCount: 12,
    openIssuesCount: 4,
    closedIssuesCount: 8,
    gitUrl: "git://github.com/daniel-favero/frontend-dashboard.git",
    sshUrl: "git@github.com:daniel-favero/frontend-dashboard.git",
    cloneUrl: "https://github.com/daniel-favero/frontend-dashboard.git",
    updatedAt: "2025-08-10T14:32:00Z",
    createdAt: "2024-04-15T09:00:00Z",
  },
  {
    id: 2,
    name: "internal-api-service",
    url: "https://github.com/daniel-favero/internal-api-service",
    visibility: "private",
    languages: ["Python", "Dockerfile"],
    mainLanguage: "Python",
    description: "Serviço interno para APIs de integração e análise de dados.",
    starsCount: 0,
    forksCount: 0,
    watchCount: 3,
    issuesCount: 5,
    openIssuesCount: 2,
    closedIssuesCount: 3,
    gitUrl: "git://github.com/daniel-favero/internal-api-service.git",
    sshUrl: "git@github.com:daniel-favero/internal-api-service.git",
    cloneUrl: "https://github.com/daniel-favero/internal-api-service.git",
    updatedAt: "2025-07-22T20:15:00Z",
    createdAt: "2023-12-01T11:45:00Z",
  },
];

export function RepositoriesList() {
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockGithubRepositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
}
