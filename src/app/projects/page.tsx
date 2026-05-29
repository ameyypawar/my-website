import type { Metadata } from "next";
import RepoCard from "@/components/RepoCard";
import { HIDE, DESCRIPTION_OVERRIDES } from "@/data/projectsConfig";

export const metadata: Metadata = {
  title: "Projects — Amey Pawar",
  description:
    "Everything Amey Pawar has shipped in public — auto-synced from GitHub.",
};

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

const GITHUB_USER = "ameyypawar";
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&type=owner`;

async function getRepos(): Promise<GitHubRepo[] | null> {
  try {
    const res = await fetch(REPOS_URL, {
      next: { revalidate: 86400 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as GitHubRepo[];
    if (!Array.isArray(data)) return null;
    return data;
  } catch {
    return null;
  }
}

function isHidden(repo: GitHubRepo): boolean {
  return (
    repo.fork ||
    repo.archived ||
    repo.name === "my-website" ||
    HIDE.includes(repo.name)
  );
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <main className="flex-1 w-full max-w-[1024px] mx-auto px-6 sm:px-10 py-24">
      <h1 className="text-display-lg font-semibold tracking-tight">Projects</h1>
      <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl">
        Everything I&apos;ve shipped in public — auto-synced from GitHub.
      </p>

      {repos === null ? (
        <p className="text-body-lg text-on-surface-variant mt-12">
          Couldn&apos;t load the repo list right now. You can browse everything
          directly on{" "}
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/{GITHUB_USER}
          </a>
          .
        </p>
      ) : (
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
          {repos
            .filter((r) => !isHidden(r))
            .sort(
              (a, b) =>
                new Date(b.pushed_at ?? b.updated_at).getTime() -
                new Date(a.pushed_at ?? a.updated_at).getTime()
            )
            .map((repo) => (
              <li key={repo.name}>
                <RepoCard
                  repo={repo}
                  description={
                    DESCRIPTION_OVERRIDES[repo.name] ?? repo.description ?? null
                  }
                />
              </li>
            ))}
        </ul>
      )}
    </main>
  );
}
