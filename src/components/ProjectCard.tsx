import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function stripHttps(url: string): string {
  return url.replace(/^https?:\/\//, "");
}

export default function ProjectCard({ project }: { project: Project }) {
  const statusClasses =
    project.status === "live"
      ? "bg-primary/15 text-primary"
      : project.status === "beta"
      ? "bg-on-surface-variant/15 text-on-surface"
      : "border border-outline/50 text-on-surface-variant";
  const statusLabel =
    project.status === "live"
      ? "LIVE"
      : project.status === "beta"
      ? "BETA"
      : "OPEN SOURCE";

  return (
    <article className="bg-surface-container hover:bg-surface-container-high focus-within:bg-surface-container-high rounded-md-lg p-6 transition-colors duration-200 motion-safe:hover:scale-[1.01] group flex h-full flex-col border border-outline/30">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-title-lg font-medium text-on-surface">
          {project.name}
        </h3>
        <span
          className={`text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full shrink-0 ${statusClasses}`}
        >
          {statusLabel}
        </span>
      </div>

      <p className="text-body-md text-on-surface-variant mt-3 flex-1">
        {project.tagline}
      </p>

      <div className="mt-4 flex items-center gap-4 text-label-md">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-md-sm"
        >
          {stripHttps(project.url)}
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary inline-flex items-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-md-sm"
          >
            <GithubMark className="w-3.5 h-3.5" />
            Code
          </a>
        )}
      </div>
    </article>
  );
}
