import { IGetGithubRepostoryLanguagesDTO } from "@/DTOs";
import { TGithubRepository } from "@/types";

export class GithubRepositoryLanguagesMapper {
  static toFrontend(
    languages: IGetGithubRepostoryLanguagesDTO
  ): Pick<TGithubRepository, "languages"> {
    return { languages: Object.keys(languages) };
  }
}
