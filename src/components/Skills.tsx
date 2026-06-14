import Reveal from "@/components/Reveal";

type SkillGroup = { label: string; items: string };

const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    items: "Rust, TypeScript, JavaScript, Python, Ruby",
  },
  {
    label: "AI / Agents",
    items:
      "Model Context Protocol (MCP), Claude API, OpenAI, Gemini, Ollama, prompt engineering",
  },
  {
    label: "Frontend",
    items:
      "React, Next.js (App Router), Tailwind CSS, Plasmo (MV3), HTML5 Canvas",
  },
  {
    label: "Browser / Extensions",
    items:
      "Chrome MV3, VS Code Extension API (Marketplace + Open VSX), service workers, IndexedDB, Innertube API",
  },
  {
    label: "Backend & Infra",
    items:
      "Node.js, Ruby on Rails 8, Sidekiq, REST APIs, Supabase, Vercel, Docker, Polar",
  },
  {
    label: "Git / Systems",
    items:
      "Git internals, rerere, AST-based merging (Mergiraf), worktrees, multi-agent workflows",
  },
];

export default function Skills() {
  return (
    <Reveal>
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="mt-16"
      >
        <h2 id="skills-heading" className="text-headline-lg font-semibold">
          Skills
        </h2>
        <p className="text-body-md text-on-surface-variant mt-3 max-w-2xl">
          The stack behind the projects above.
        </p>

        <dl className="mt-8 space-y-3">
          {SKILLS.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-6"
            >
              <dt className="text-body-md font-medium text-on-surface">
                {group.label}
              </dt>
              <dd className="text-body-md text-on-surface-variant">
                {group.items}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </Reveal>
  );
}
