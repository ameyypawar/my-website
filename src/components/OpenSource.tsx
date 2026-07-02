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
    repo: "tokio-rs/tokio",
    number: 8196,
    title: "net: accept ConnectionReset in shutdown_after_tcp_reset test",
    oneLine:
      "Fixed a flaky tokio::net test on FreeBSD where shutdown() can return ConnectionReset if the kernel processes the peer RST first.",
    language: "Rust",
    url: "https://github.com/tokio-rs/tokio/pull/8196",
    status: "merged",
  },
  {
    repo: "tower-rs/tower",
    number: 874,
    title: "fix(balance): clear cached P2C ready index after a discovery removal",
    oneLine:
      "Fixed the P2C load balancer serving a stale cached ready-index after a service was removed via discovery, which could route to a dropped endpoint.",
    language: "Rust",
    url: "https://github.com/tower-rs/tower/pull/874",
    status: "merged",
  },
  {
    repo: "GitoxideLabs/gitoxide",
    number: 2673,
    title: "fix: don't report a tree of only empty directories as untracked",
    oneLine:
      "Fixed status wrongly flagging a tree that contains only empty directories as untracked.",
    language: "Rust",
    url: "https://github.com/GitoxideLabs/gitoxide/pull/2673",
    status: "merged",
  },
  {
    repo: "GitoxideLabs/gitoxide",
    number: 2669,
    title: "fix: preserve the underlying error when a reqwest request fails without a status",
    oneLine:
      "Preserved the underlying transport error when an HTTP request fails without a status code, instead of collapsing it into a generic error.",
    language: "Rust",
    url: "https://github.com/GitoxideLabs/gitoxide/pull/2669",
    status: "merged",
  },
  {
    repo: "GitoxideLabs/gitoxide",
    number: 2663,
    title: "fix: seed fast pseudo-random numbers to differ across processes",
    oneLine:
      "Fixed the fast PRNG seed so generated values differ across processes rather than colliding on identical seeds.",
    language: "Rust",
    url: "https://github.com/GitoxideLabs/gitoxide/pull/2663",
    status: "merged",
  },
  {
    repo: "GitoxideLabs/gitoxide",
    number: 2637,
    title: "fix: write new remote sections to the local config file",
    oneLine:
      "Remote::save_to was writing to a foreign config section when a global override existed; filtered the write target to the local file's metadata.",
    language: "Rust",
    url: "https://github.com/GitoxideLabs/gitoxide/pull/2637",
    status: "merged",
  },
  {
    repo: "GitoxideLabs/gitoxide",
    number: 2622,
    title: "Add tests for Repository::open_mailmap and open_mailmap_into",
    oneLine:
      "Added regression tests for previously-untested mailmap loading paths on Repository::open_mailmap and open_mailmap_into.",
    language: "Rust",
    url: "https://github.com/GitoxideLabs/gitoxide/pull/2622",
    status: "merged",
  },
  {
    repo: "GitoxideLabs/gitoxide",
    number: 2664,
    title: "Document that writing the index does not refresh the tree-cache extension",
    oneLine:
      "Documented that writing the index does not refresh the tree-cache extension — clarifying a subtle invariant for API consumers.",
    language: "Rust",
    url: "https://github.com/GitoxideLabs/gitoxide/pull/2664",
    status: "merged",
  },
  {
    repo: "GitoxideLabs/gitoxide",
    number: 2675,
    title: "gix-pack: add a benchmark for pack generation from loose objects",
    oneLine:
      "Added a benchmark covering pack generation from loose objects, giving gix-pack performance-regression coverage on that path.",
    language: "Rust",
    url: "https://github.com/GitoxideLabs/gitoxide/pull/2675",
    status: "merged",
  },
  {
    repo: "qdrant/rust-client",
    number: 286,
    title: "feat(client): opt-in connection check on Qdrant::build()",
    oneLine:
      "Added an opt-in connection health check to the client builder so a misconfigured endpoint fails fast at build time instead of on first query.",
    language: "Rust",
    url: "https://github.com/qdrant/rust-client/pull/286",
    status: "merged",
  },
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
    repo: "windmill-labs/windmill",
    number: 9566,
    title: "fix(folders): allow hyphens in folder names",
    oneLine:
      "Relaxed the folder-name validator to accept hyphen characters, matching the rest of the path validators across the codebase.",
    language: "Rust",
    url: "https://github.com/windmill-labs/windmill/pull/9566",
    status: "merged",
  },
  {
    repo: "gitbutlerapp/gitbutler",
    number: 14245,
    title: "Add a diff font size setting",
    oneLine:
      "Added a configurable diff font size to GitButler's editor; persists across sessions via the settings store.",
    language: "TypeScript",
    url: "https://github.com/gitbutlerapp/gitbutler/pull/14245",
    status: "merged",
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

        <p className="text-label-md text-on-surface-variant mt-8">
          14 PRs merged across 6 upstream projects — tokio, tower, gitoxide, qdrant, windmill, and GitButler.
        </p>
      </section>
    </Reveal>
  );
}
