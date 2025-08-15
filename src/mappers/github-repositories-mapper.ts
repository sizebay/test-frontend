import { GetGithubRepostoryDTO } from "@/DTOs";
import { DateFormatter } from "@/formatters";
import { TGithubRepository } from "@/types";

export class GithubRepositoriesMapper {
  static toFrontend(
    repositories: Array<GetGithubRepostoryDTO>
  ): Array<TGithubRepository> {
    return repositories.map((repository) => ({
      id: repository.id,
      name: repository.name,
      description: repository.description || "",
      url: repository.url,
      cloneUrl: repository.clone_url,
      gitUrl: repository.git_url,
      sshUrl: repository.ssh_url,
      visibility: repository.visibility,
      mainLanguage: repository.language || "",
      openIssuesCount: repository.open_issues_count,
      forksCount: repository.forks_count,
      watchCount: repository.watchers_count,
      starsCount: repository.stargazers_count,
      createdAt: DateFormatter.toReadableString(repository.created_at),
      updatedAt: DateFormatter.toReadableString(repository.updated_at),
      languages: [], // TODO: Mapear linguagens principais
      closedIssuesCount: 0, // TODO: Mapear issues fechadas
      issuesCount: 0, // TODO: Mapear issues fechadas
    }));
  }
}
