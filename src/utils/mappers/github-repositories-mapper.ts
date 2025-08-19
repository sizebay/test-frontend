import { IGetGithubRepostoryDTO } from "@/DTOs";
import { DateFormatter } from "@/utils";
import { TGithubRepository } from "@/types";

export class GithubRepositoriesMapper {
  static toFrontend(repository: IGetGithubRepostoryDTO): TGithubRepository {
    return {
      id: repository.id,
      name: repository.name,
      description: repository.description || "Sem descrição",
      url: repository.url,
      cloneUrl: repository.clone_url,
      gitUrl: repository.git_url,
      sshUrl: repository.ssh_url,
      visibility: repository.visibility,
      mainLanguage: repository.language || "-",
      openIssuesCount: repository.open_issues_count,
      forksCount: repository.forks_count,
      watchCount: repository.watchers_count,
      starsCount: repository.stargazers_count,
      createdAt: DateFormatter.toReadableString(repository.created_at),
      updatedAt: DateFormatter.toReadableString(repository.updated_at),
      owner: {
        id: repository.owner.id,
        name: repository.owner.login,
      },
    };
  }
}
