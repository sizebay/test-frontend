import { TGithubRepositoryVisibility } from "@/types";
import { IGetGithubUserDTO } from "./get-github-user-dto";

export interface IGetGithubRepostoryDTO {
  id: number;
  name: string;
  owner: IGetGithubUserDTO;
  description: string | null;
  url: string;
  created_at: string;
  updated_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  visibility: TGithubRepositoryVisibility;
  forks: number;
  default_branch: string;
}
