import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

type PR = {
  repo: string;
  number: number;
  title: string;
  oneLine: string;
  language: "Rust" | "TypeScript";
  url: string;
  status: "merged" | "open";
};

const MERGED: PR[] = [
  {
    repo: "windmill-labs/windmill",
    number: 9460,
    title: "fix(python): escape reserved-keyword step ids in wrapper codegen",
    oneLine:
      "Fixed Python SyntaxError in flow codegen when a step id collided with a reserved keyword (in, from, is); extended the existing digit-prefix guard.",
    language: "Rust",
    url: "https://github.com/windmill-labs/windmill/pull/9460",
    status: "merged",
  },
  {
    repo: "windmill-labs/windmill",
    number: 9463,
    title: "fix(frontend): respect forced column order for numeric column names",
    oneLine:
      "Fixed rich-table column ordering when column names are integer-like strings (JS numeric-key enumeration was overriding explicit header order).",
    language: "TypeScript",
    url: "https://github.com/windmill-labs/windmill/pull/9463",
    status: "merged",
  },
  {
    repo: "tokio-rs/tokio",
    number: 8196,
    title: "net: accept ConnectionReset in shutdown_after_tcp_reset test",
    oneLine:
      "Fixed a flaky tokio::net test on FreeBSD where shutdown() can return ConnectionReset if the kernel processes the peer RST first.",
    language: "Rust",
    url: "https://github.com/tokio-rs/tokio/pull/8196",
    status: "merged",
  },
];

const IN_REVIEW: PR[] = [
  {
    repo: "gitbutlerapp/gitbutler",
    number: 14144,
    title: "Fix crash on conflicted binary files in edit mode",
    oneLine:
      "Null-deref crash on edit-mode exit when a conflicted binary file is present; guarded looksConflicted() against null content.",
    language: "TypeScript",
    url: "https://github.com/gitbutlerapp/gitbutler/pull/14144",
    status: "open",
  },
  {
    repo: "gitbutlerapp/gitbutler",
    number: 14152,
    title: "Fix \"part N of M\" numbering in CLI stacked-PR footers",
    oneLine:
      "Off-by-one in generate_footer (Rust); the nth index was the inverse of the <kbd> numbering.",
    language: "Rust",
    url: "https://github.com/gitbutlerapp/gitbutler/pull/14152",
    status: "open",
  },
  {
    repo: "GitoxideLabs/gitoxide",
    number: 2637,
    title: "fix: write new remote sections to the local config file",
    oneLine:
      "Remote::save_to was writing to a foreign config section when a global override existed; filtered the write target to the local file's metadata.",
    language: "Rust",
    url: "https://github.com/GitoxideLabs/gitoxide/pull/2637",
    status: "open",
  },
];

function PRCard({ pr }: { pr: PR }) {
  const isMerged = pr.status === "merged";
  const statusClasses = isMerged
    ? "bg-primary/15 text-primary"
    : "border border-outline/50 text-on-surface-variant";
  const statusLabel = isMerged ? "MERGED" : "OPEN";

  return (
    <a
      href={pr.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-surface-container hover:bg-surface-container-high rounded-md-lg p-5 border border-outline/30 transition-colors duration-200 motion-safe:hover:scale-[1.01] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 group flex h-full flex-col"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-label-md uppercase tracking-[0.15em] text-on-surface-variant">
          {pr.repo} · #{pr.number}
        </span>
        <span
          className={`text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full shrink-0 ${statusClasses}`}
        >
          {statusLabel}
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
          Active contributor to the Rust and TypeScript open-source ecosystems
          — merged fixes in production projects, more in review.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {MERGED.map((pr) => (
            <PRCard key={`${pr.repo}-${pr.number}`} pr={pr} />
          ))}
        </div>

        <h3 className="mt-8 text-label-md uppercase tracking-[0.15em] text-on-surface-variant">
          In review
        </h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {IN_REVIEW.map((pr) => (
            <PRCard key={`${pr.repo}-${pr.number}`} pr={pr} />
          ))}
        </div>

        <p className="text-label-md text-on-surface-variant mt-8">
          376 contributions in the last year · 54 pull requests opened across 5
          upstream projects.
        </p>
      </section>
    </Reveal>
  );
}
