import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { asOf, highlights, openSource, type HighlightPR } from "@/data/resume";

function PRCard({ pr }: { pr: HighlightPR }) {
  return (
    <a
      href={`https://github.com/${pr.repo}/pull/${pr.number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-surface-container hover:bg-surface-container-high rounded-md-lg p-5 border border-outline/30 transition-colors duration-200 motion-safe:hover:scale-[1.01] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 group flex h-full flex-col"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-label-md uppercase tracking-[0.15em] text-on-surface-variant">
          {pr.repo} · #{pr.number}
        </span>
        <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full shrink-0 bg-primary/15 text-primary">
          MERGED
        </span>
      </div>

      <p className="text-body-md text-on-surface mt-3 font-medium">
        {pr.title}
      </p>
      <p className="text-body-md text-on-surface-variant mt-2">{pr.oneLine}</p>

      <div className="mt-4 flex items-center justify-between text-label-md text-on-surface-variant">
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block w-2 h-2 rounded-full bg-primary"
          />
          {pr.language}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors"
        />
      </div>
    </a>
  );
}

export default function OpenSource() {
  return (
    <Reveal>
      <section
        id="open-source"
        aria-labelledby="open-source-heading"
        className="mt-16"
      >
        <h2
          id="open-source-heading"
          className="text-headline-lg font-semibold"
        >
          Open Source
        </h2>
        <p className="text-body-md text-on-surface-variant mt-3 max-w-2xl">
          Selected merged PRs. Each card opens the change and its review.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((pr) => (
            <PRCard key={`${pr.repo}-${pr.number}`} pr={pr} />
          ))}
        </div>

        <p className="text-label-md text-on-surface-variant mt-8">
          {openSource.merged} PRs merged across {openSource.projects} upstream
          projects as of {asOf} ·{" "}
          <a
            href={openSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            see them all on GitHub
          </a>
        </p>
      </section>
    </Reveal>
  );
}
