import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  size,
}: {
  project: Project;
  size: "lg" | "md";
}) {
  const titleClass = size === "lg" ? "text-headline-lg sm:text-display-lg" : "text-title-lg sm:text-headline-lg";
  const pad = size === "lg" ? "p-6 sm:p-10" : "p-6 sm:p-8";
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col h-full justify-end overflow-hidden rounded-md-lg border border-outline/40 bg-surface-container/60 ${pad} transition-colors hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2`}
    >
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -right-6 -bottom-12 sm:-right-8 sm:-bottom-16 font-mono font-bold leading-[0.75] text-[200px] sm:text-[320px] text-on-surface/[0.035] transition-[color,opacity] duration-300 group-hover:text-on-surface/[0.08]"
      >
        {project.letter}
      </span>
      <p className="text-label-md uppercase tracking-[0.15em] text-on-surface-variant mb-3">
        {project.eyebrow}
      </p>
      <h3 className={`${titleClass} font-semibold text-on-surface`}>{project.name}</h3>
      <p className="text-body-md text-on-surface-variant mt-2 max-w-[520px]">
        {project.tagline}
      </p>
    </a>
  );
}
