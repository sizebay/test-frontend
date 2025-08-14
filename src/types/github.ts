export type GitHubOwnerProps = {
  login: string;
};

export type GitHubRepoProps = {
  id: number;
  name: string;
  full_name: string;
  owner: GitHubOwnerProps;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  html_url: string;
};

export type GitHubRepoDetailsProps = GitHubRepoProps & {
  subscribers_count?: number;
};

export type GitHubUserProps = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};
