import Reveal from "@/components/Reveal";

type Role = {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: React.ReactNode[];
  stack: string;
};

const ROLES: Role[] = [
  {
    title: "Founder & Engineer",
    company: "gfix & gitfix",
    dates: "Mar 2026 – Present",
    location: "Mumbai",
    bullets: [
      <>
        Architected <strong>gfix</strong> — a Rust CLI + MCP server that lets AI
        coding agents resolve git merge conflicts natively, eliminating the
        human bottleneck in parallel-agent workflows.
      </>,
      <>
        Shipped <strong>gitfix</strong> VS Code extension (Marketplace + Open
        VSX) with a conflict tree, one-click fixes, and a full per-resolution
        audit trail.
      </>,
    ],
    stack:
      "Rust · MCP · Mergiraf · VS Code Extension API · Open VSX · Git internals",
  },
  {
    title: "Founder & Engineer",
    company: "Tubio",
    dates: "Sep 2025 – Present",
    location: "Mumbai",
    bullets: [
      <>
        Built and shipped Tubio end-to-end — a Chrome MV3 SaaS (Plasmo + React +
        TypeScript) achieving <strong>4.8★</strong> on the Chrome Web Store;
        downloads YouTube transcripts at volume with metadata and multimodal
        context the official YouTube Data API doesn&apos;t expose.
      </>,
      <>
        Engineered bulk download of up to 800 videos/session with sequential
        rate-limiting and IndexedDB persistence that survives MV3 service-worker
        restarts; bypassed the 2024 PoToken enforcement by reading from the
        user&apos;s authenticated session.
      </>,
    ],
    stack:
      "Plasmo · Chrome MV3 · React · TypeScript · IndexedDB · Innertube API · Supabase · Polar",
  },
  {
    title: "Web Developer (Intern)",
    company: "Trineteini Quantum",
    dates: "Jan 2025 – Mar 2025",
    location: "Remote",
    bullets: [
      <>
        Delivered a full admin panel and social-media dashboard for{" "}
        <strong>dialclub.org</strong> — CRUD surfaces over users, content, and
        operational state with cross-channel publishing.
      </>,
      <>
        Built role-based instructor dashboard, event lifecycle management (draft
        → published), a question-bank-backed quiz module, and a public-facing
        conversational chatbot.
      </>,
    ],
    stack: "React · Node.js · REST APIs · Webhooks",
  },
];

export default function Experience() {
  return (
    <Reveal>
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="mt-16"
      >
        <h2
          id="experience-heading"
          className="text-headline-lg font-semibold"
        >
          Experience
        </h2>
        <p className="text-body-md text-on-surface-variant mt-3 max-w-2xl">
          Independent product work since September 2025, with a recent EdTech
          internship.
        </p>

        <div className="mt-8 space-y-6">
          {ROLES.map((role) => (
            <article key={`${role.title}-${role.company}`}>
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-title-lg font-medium">
                  {role.title}
                  <span className="text-on-surface-variant"> · </span>
                  {role.company}
                </h3>
                <p className="text-label-md text-on-surface-variant whitespace-nowrap">
                  {role.dates} · {role.location}
                </p>
              </div>
              <ul className="mt-3 list-none pl-0 space-y-2 text-body-md text-on-surface leading-relaxed">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="resume-bullet">
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-label-md text-on-surface-variant italic">
                Stack: {role.stack}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
