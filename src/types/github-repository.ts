import { TGithubRepositoryVisibility } from "./github-repository-visibility";

export interface TGithubRepository {
  id: number;
  name: string;
  url: string;
  visibility: TGithubRepositoryVisibility;
  languages: Array<string>;
  mainLanguage: string;
  description: string;
  starsCount: number;
  forksCount: number;
  watchCount: number;
  issuesCount: number;
  openIssuesCount: number;
  closedIssuesCount: number;
  gitUrl: string;
  sshUrl: string;
  cloneUrl: string;
  updatedAt: string;
  createdAt: string;
}
