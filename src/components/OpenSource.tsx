import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import { asOf, highlights, openSource, type HighlightPR } from "@/data/resume";

// Highlights grouped by repository, keeping their order in the data.
function byRepo(prs: HighlightPR[]): [string, HighlightPR[]][] {
  const groups = new Map<string, HighlightPR[]>();
  for (const pr of prs) {
    groups.set(pr.repo, [...(groups.get(pr.repo) ?? []), pr]);
  }
  return [...groups.entries()];
}

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      title="Open Source"
      aside={
        <a
          href={openSource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          {openSource.merged} merged ↗
        </a>
      }
    >
      <div className="px-6 py-5 space-y-6">
        {byRepo(highlights).map(([repo, prs]) => (
          <div key={repo}>
            <p className="font-mono text-label-md">
              <span className="rounded-full bg-surface-container px-2.5 py-0.5 text-on-surface">
                {repo}
              </span>
            </p>
            <ul className="mt-2">
              {prs.map((pr) => (
                <li key={pr.number}>
                  <a
                    href={`https://github.com/${pr.repo}/pull/${pr.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-2 flex items-start gap-3 rounded-md-sm px-2 py-2 hover:bg-surface-container transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    <span className="w-14 shrink-0 pt-0.5 font-mono text-label-md text-primary">
                      #{pr.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-body-md text-on-surface">
                        {pr.title}
                      </span>
                      <span className="mt-0.5 block text-label-md text-on-surface-variant">
                        {pr.oneLine}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-on-surface-variant group-hover:text-primary transition-colors"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-label-md text-on-surface-variant">
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
      </div>
    </Section>
  );
}
