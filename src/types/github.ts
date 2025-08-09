export type GitHubOwner = {
  login: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  owner: GitHubOwner;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  html_url: string;
};

export type GitHubRepoDetails = GitHubRepo & {
  subscribers_count?: number;
};
