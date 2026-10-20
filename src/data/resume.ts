// Single source for everything the resume says: /resume, the homepage
// sections, the JSON-LD, and the PDF that .github/workflows/resume-pdf.yml
// prints from /resume.
//
// Every claim here must be checkable in one click. PR counts link to GitHub
// searches that return exactly that number, and store numbers carry the date
// they were read. When a number changes, update it here and bump `asOf`.

export const asOf = "Oct 2026";

export const profile = {
  name: "Amey Pawar",
  headline: "Software Engineer · Observability & Version Control",
  location: "Mumbai, India",
  timezone: "IST, UTC+5:30",
  status: "BTech, graduating May 2027 · Open to relocation, remote and contract work",
  contract: "Rust, observability and Git tooling, Next.js",
  email: "ameypawar1237@gmail.com",
  phone: "+91 8850558058",
  site: "https://ameypawar.com",
  github: "https://github.com/ameyypawar",
  linkedin: "https://www.linkedin.com/in/ameypawar77/",
  x: "https://x.com/ameyypawr",
};

export function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function mergedSearch(filter: string): string {
  const q = `is:pr is:merged author:ameyypawar ${filter}`;
  return `https://github.com/search?type=pullrequests&q=${encodeURIComponent(q)}`;
}

// Upstream work only: own repos, the college lab and a friend's repo are not
// counted.
const UPSTREAM = "-user:ameyypawar -org:voss-labs -repo:devdattatalele/VFORUM";

export const openSource = {
  merged: 68,
  projects: 12,
  url: mergedSearch(UPSTREAM),
  top: [
    {
      name: "OpenObserve",
      merged: 25,
      url: mergedSearch("repo:openobserve/openobserve"),
    },
    {
      name: "gitoxide",
      merged: 24,
      url: mergedSearch("repo:GitoxideLabs/gitoxide"),
    },
  ],
};

export type PRLink = { label: string; url: string };
export type Bullet = { text: string; prs?: PRLink[] };

function pr(repo: string, n: number): PRLink {
  return { label: `#${n}`, url: `https://github.com/${repo}/pull/${n}` };
}

const O2 = "openobserve/openobserve";
const GIX = "GitoxideLabs/gitoxide";

export type ExperienceEntry = {
  title: string;
  org: string;
  orgUrl?: string;
  dates: string;
  // One plain-language line about the organisation or project.
  about?: string;
  // Framing line: merged count and areas, linked to the merged-PR search.
  summary?: string;
  summaryUrl?: string;
  bullets: Bullet[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Open-Source Contributor (Rust backend)",
    org: "OpenObserve",
    orgUrl: "https://github.com/openobserve/openobserve",
    dates: "Aug 2026 – Present",
    about:
      "Open-source observability platform for logs, metrics and traces · 22k GitHub stars",
    summary:
      "25 merged PRs across search, alerts, PromQL and metrics, OTLP ingest, pipelines, compaction and migrations",
    summaryUrl: mergedSearch("repo:openobserve/openobserve"),
    bullets: [
      {
        text: "Made realtime metric alerts fire once per label set on the remote_write, OpenTelemetry (OTLP) and JSON ingest paths, instead of once per request",
        prs: [pr(O2, 14010), pr(O2, 14085)],
      },
      {
        text: "Fixed scheduled pipelines silently skipping records stamped on a window boundary by starting each run where the previous one ended",
        prs: [pr(O2, 15042)],
      },
      {
        text: "Fixed a querier panic on PromQL range selectors with no metric name, and stored non-monotonic OTLP sums as gauges instead of counters",
        prs: [pr(O2, 14115), pr(O2, 15113)],
      },
      {
        text: "Made SQLite migrations stop on a lost migration history instead of replaying the whole chain, and made failing migrations safe to re-run",
        prs: [pr(O2, 15087)],
      },
    ],
  },
  {
    title: "Open-Source Contributor (Rust, Git internals)",
    org: "gitoxide",
    orgUrl: "https://github.com/GitoxideLabs/gitoxide",
    dates: "Jun 2026 – Present",
    about:
      "Pure-Rust implementation of Git · 12k GitHub stars · 12th-most commits of all contributors",
    summary:
      "24 merged PRs across Git-compatible parsing, diff and rename tracking, pack compression, transport and error handling",
    summaryUrl: mergedSearch("repo:GitoxideLabs/gitoxide"),
    bullets: [
      {
        text: "Made gix-diff rename tracking order-independent and file-name-aware, fixing an intermittent gix-status CI failure and direction-dependent merge results",
        prs: [pr(GIX, 2687)],
      },
      {
        text: "Made gix-pack honour configured zlib compression levels; pack entries had grown about 50% after the backend switch to zlib-rs",
        prs: [pr(GIX, 2695)],
      },
      {
        text: "Added Remote::default_branch(), which reads a remote's default branch from refs/remotes/<name>/HEAD without connecting to it",
        prs: [pr(GIX, 3037)],
      },
      {
        text: "Matched Git's own parser in 9 fixes across refspecs, revspecs, pathspecs, ref names, remote helpers, ignore and attribute files",
        prs: [pr(GIX, 2888), pr(GIX, 2892)],
      },
    ],
  },
  {
    title: "Open-Source Contributor (Rust, TypeScript)",
    org: "Rust & TypeScript open-source projects",
    dates: "Jun 2026 – Present",
    summary:
      "19 merged PRs: GitButler (4), Kestra (3), Windmill (3), MCP Rust SDK (2), tokio (2), tower, qdrant, Mastra, LlamaIndex, MCP servers",
    summaryUrl: mergedSearch(
      `${UPSTREAM} -repo:openobserve/openobserve -repo:GitoxideLabs/gitoxide`
    ),
    bullets: [
      {
        text: "tokio: fixed the current-thread runtime skipping its timer and I/O driver when before_park scheduled work, a regression from two 1.50 changes",
        prs: [pr("tokio-rs/tokio", 8222)],
      },
      {
        text: "MCP Rust SDK: made AsyncRwTransport::receive cancel-safe, so busy stdio servers no longer drop incoming requests",
        prs: [pr("modelcontextprotocol/rust-sdk", 947)],
      },
      {
        text: "GitButler: restored self-hosted GitLab support by honouring the project's forge_override in Rust forge resolution",
        prs: [pr("gitbutlerapp/gitbutler", 14620)],
      },
    ],
  },
  {
    title: "Core Maintainer",
    org: "VOSS Labs",
    orgUrl: "https://github.com/voss-labs",
    dates: "Sep 2026 – Present",
    about: "Student-run open-source lab building the college's software",
    bullets: [
      {
        text: "Built elective rosters for verp, the college ERP (Next.js, TypeScript, PostgreSQL), so marks, locking, publishing and attendance count only enrolled students",
        prs: [pr("voss-labs/verp", 119)],
      },
    ],
  },
  {
    title: "Web Developer (Intern)",
    org: "Trineteini Quantum",
    dates: "Jan 2025 – Mar 2025",
    bullets: [
      {
        text: "Built the admin panel and social-media dashboard for dialclub.org: CRUD for users and content, cross-channel publishing, a role-based instructor dashboard, an event lifecycle and a quiz module (React, Node.js, REST APIs)",
      },
    ],
  },
];

// Homepage open-source cards.
export type HighlightPR = {
  repo: string;
  number: number;
  title: string;
  oneLine: string;
  language: "Rust" | "TypeScript";
};

export const highlights: HighlightPR[] = [
  {
    repo: O2,
    number: 14085,
    title: "fix(alerts): keep every label set on the OTLP and JSON metrics paths",
    oneLine:
      "Realtime metric alerts fired once per request on OTLP and JSON ingest; they now fire once per label set, matching remote_write.",
    language: "Rust",
  },
  {
    repo: O2,
    number: 15042,
    title: "fix(pipelines): start each scheduled window where the previous one ended",
    oneLine:
      "A record stamped exactly on the boundary between two scheduled runs was read by neither and never reached its destination.",
    language: "Rust",
  },
  {
    repo: O2,
    number: 15087,
    title:
      "fix(migration): stop on a lost migration history; make failing migrations safe to re-run",
    oneLine:
      "An empty migration history made upgrades replay the whole chain over existing tables; failed migrations could not be re-run.",
    language: "Rust",
  },
  {
    repo: O2,
    number: 14115,
    title: "fix(promql): return an error for a range selector with no metric name",
    oneLine:
      "A nameless range selector unwrapped an empty result and panicked the querier's gRPC runtime thread.",
    language: "Rust",
  },
  {
    repo: GIX,
    number: 2687,
    title: "gix-diff: order-independent and file-name-aware rename tracking",
    oneLine:
      "Same-content rename candidates were picked by push order, which made gix-status flaky on CI and merges direction-sensitive.",
    language: "Rust",
  },
  {
    repo: GIX,
    number: 2695,
    title:
      "gix-pack: respect configured zlib compression levels instead of a hard-coded fastest level",
    oneLine:
      "Pack entries had grown about 50% after the switch to zlib-rs, whose fastest level trades ratio for speed.",
    language: "Rust",
  },
  {
    repo: GIX,
    number: 3037,
    title:
      "feat: add Remote::default_branch() to learn the default branch of a remote without connecting to it",
    oneLine:
      "Reads refs/remotes/<name>/HEAD, as written by git clone and git fetch, and maps it back through the remote's refspecs.",
    language: "Rust",
  },
  {
    repo: GIX,
    number: 2888,
    title: "fix: split refspecs on the last colon, like Git does",
    oneLine:
      "Push sources are revisions and may contain colons; gitoxide now splits where Git's refspec.c does.",
    language: "Rust",
  },
  {
    repo: "tokio-rs/tokio",
    number: 8222,
    title: "runtime: don't skip the driver when before_park schedules work",
    oneLine:
      "Two 1.50 scheduler changes combined so a runtime driven by short block_on calls never advanced its timer or I/O driver.",
    language: "Rust",
  },
  {
    repo: "modelcontextprotocol/rust-sdk",
    number: 947,
    title: "fix(transport): make AsyncRwTransport::receive cancel-safe",
    oneLine:
      "A partially read request line was discarded when select! dropped the receive future, so busy stdio servers lost requests.",
    language: "Rust",
  },
  {
    repo: "gitbutlerapp/gitbutler",
    number: 14620,
    title: "fix(forge): honor project forge_override for self-hosted forges",
    oneLine:
      "Forge resolution moved into Rust without reading forge_override, which broke self-hosted GitLab in 0.20.1.",
    language: "Rust",
  },
  {
    repo: "tower-rs/tower",
    number: 874,
    title: "fix(balance): clear cached P2C ready index after a discovery removal",
    oneLine:
      "The P2C load balancer could route to an endpoint that discovery had already removed.",
    language: "Rust",
  },
];

// Homepage project cards.
export type ProjectStatus = "live" | "open-source" | "beta";

export type Project = {
  name: string;
  tagline: string;
  url: string;
  linkLabel?: string;
  repo?: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    name: "gfix",
    tagline:
      "Rust CLI and MCP server that lets AI coding agents resolve Git merge conflicts natively.",
    url: "https://gfix.space",
    repo: "https://github.com/ameyypawar/gfix-docs",
    status: "live",
  },
  {
    name: "gitfix",
    tagline:
      "VS Code extension for merge conflicts: a conflict tree, one-click fixes and a per-resolution audit trail. 44 VS Marketplace installs and 922 Open VSX downloads.",
    url: "https://gitfix.pro",
    repo: "https://github.com/ameyypawar/gitfix",
    status: "live",
  },
  {
    name: "Tubio",
    tagline:
      "Chrome extension that bulk-downloads YouTube transcripts with metadata, up to 800 videos a session. 343 users, 4.4/5 from 24 ratings.",
    url: "https://tubio.pro",
    repo: "https://github.com/ameyypawar/tubio-docs",
    status: "live",
  },
  {
    name: "Pluck",
    tagline:
      "MIT Chrome extension that detects lists on any page and exports them to CSV. Deterministic, no AI, no tracking.",
    url: "https://chromewebstore.google.com/detail/listpick-%E2%80%94-export-any-lis/iiiemjbnkofeafjiaflfhibehcnchcgh",
    linkLabel: "Chrome Web Store",
    repo: "https://github.com/ameyypawar/pluck",
    status: "live",
  },
];

// Resume projects section.
export type ResumeProject = {
  name: string;
  url: string;
  dates: string;
  line: string;
};

export const resumeProjects: ResumeProject[] = [
  {
    name: "gfix & gitfix",
    url: "https://gfix.space",
    dates: "Mar 2026 – Present",
    line: "Rust CLI + MCP server and VS Code extension that let AI coding agents resolve Git merge conflicts, with a conflict tree, one-click fixes and a per-resolution audit trail. v1.0.0: 44 VS Marketplace installs, 922 Open VSX downloads",
  },
  {
    name: "Tubio",
    url: "https://tubio.pro",
    dates: "Sep 2025 – Present",
    line: "Chrome extension that bulk-downloads YouTube transcripts with metadata, up to 800 videos a session, keeping progress in IndexedDB across service-worker restarts. 343 users, 4.4/5 from 24 Chrome Web Store ratings",
  },
  {
    name: "Pluck",
    url: "https://github.com/ameyypawar/pluck",
    dates: "2026",
    line: "MIT-licensed Chrome extension that detects lists on any page and exports them to CSV; deterministic, no AI",
  },
  {
    name: "scribed",
    url: "https://github.com/ameyypawar/scribed",
    dates: "2026",
    line: "Self-hostable speech-to-text microservice with pluggable providers (whisper.cpp, faster-whisper, Deepgram, OpenAI) and signed webhooks with retries; Ruby on Rails 8, Sidekiq",
  },
];

export const education = {
  school: "University of Mumbai",
  degree: "BTech, Electronics and Computer Science",
  dates: "2022 – May 2027 (expected)",
};

export type SkillGroup = { label: string; items: string };

export const skills: SkillGroup[] = [
  { label: "Languages", items: "Rust, TypeScript, JavaScript, Python, SQL, Ruby" },
  {
    label: "Observability",
    items:
      "Logs, metrics and traces, PromQL, OpenTelemetry (OTLP), alerting, Vector Remap Language (VRL)",
  },
  {
    label: "Git & systems",
    items:
      "Git internals (packfiles, refspecs, revspecs, rename detection, transport), async Rust (tokio), Model Context Protocol (MCP)",
  },
  {
    label: "Web & tools",
    items:
      "React, Next.js, Node.js, PostgreSQL, Chrome extensions (MV3), VS Code extension API, Docker",
  },
];
