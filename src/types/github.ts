// Minimal shape of the GitHub REST repo object — only the fields we render.
export type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
  pushed_at: string | null;
};
