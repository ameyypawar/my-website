import { ArrowUpRight, Star } from "lucide-react";
import type { GitHubRepo } from "@/types/github";

export default function RepoCard({
  repo,
  description,
}: {
  repo: GitHubRepo;
  description: string | null;
}) {
  return (
    <article className="group flex h-full flex-col bg-surface-container hover:bg-surface-container-high rounded-md-lg p-6 ring-1 ring-outline/20 transition-colors duration-200">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-title-lg font-medium text-on-surface min-w-0">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-words hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-md-sm"
          >
            {repo.name}
            <ArrowUpRight
              className="inline w-4 h-4 ml-1 align-text-top text-on-surface-variant group-hover:text-primary transition-colors"
              aria-hidden="true"
            />
          </a>
        </h2>
      </div>

      <p className="text-body-md text-on-surface-variant mt-3 flex-1">
        {description ?? (
          <span className="text-on-surface-variant/70">No description yet</span>
        )}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-label-md text-on-surface-variant">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary" />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="inline-flex items-center gap-1">
            <Star className="w-3.5 h-3.5" aria-hidden="true" />
            {repo.stargazers_count}
            <span className="sr-only"> stars</span>
          </span>
        )}
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-md-sm"
          >
            live ↗
          </a>
        )}
      </div>
    </article>
  );
}
