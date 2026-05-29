import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { wide } = project;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col bg-surface-container hover:bg-surface-container-high rounded-md-lg p-6 transition-[background-color,transform] duration-200 motion-safe:hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`${wide ? "text-headline-lg" : "text-title-lg"} font-medium text-on-surface`}
        >
          {project.name}
        </h3>
        <ArrowUpRight
          className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors shrink-0"
          aria-hidden="true"
        />
      </div>
      <p className="text-body-md text-on-surface-variant mt-3">{project.tagline}</p>
      <span className="text-label-md text-primary mt-4 inline-block">
        {project.url.replace("https://", "")}
      </span>
    </a>
  );
}
