import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume — Amey Pawar",
  description:
    "Amey Pawar — Software Engineer · Developer Tooling & AI Agents. Maintainer of gfix and Tubio.",
};

export default function ResumePage() {
  return (
    <main className="flex-1 w-full max-w-[1024px] mx-auto px-6 sm:px-10 py-24">
      <h1 className="text-display-lg font-semibold tracking-tight">Resume</h1>
      <div className="mt-6 h-px w-16 bg-primary/70" aria-hidden="true" />

      <div className="mt-8" data-print-hide>
        <PrintButton />
      </div>

      <article id="resume" className="mt-12 mx-auto max-w-[800px] text-on-surface">
        <header className="resume-header">
          <h2 className="resume-h2">AMEY PAWAR</h2>
          <p className="resume-contact text-body-md text-on-surface-variant leading-relaxed">
            Software Engineer · Developer Tooling & AI Agents
          </p>
          <p className="resume-contact text-body-md text-on-surface-variant leading-relaxed mt-1">
            <a href="mailto:ameypawar1237@gmail.com" className="text-primary hover:underline">
              ameypawar1237@gmail.com
            </a>{" "}· +91 88505 58058 ·{" "}
            <a href="https://github.com/ameyypawar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              github.com/ameyypawar
            </a>{" "}· Mumbai, India
          </p>
        </header>

        <section className="resume-section">
          <h3 className="resume-section-label">Summary</h3>
          <p className="text-body-md leading-relaxed">
            Independent engineer shipping production developer tools at the intersection of AI agents and Git workflows. Final-year BTech (Electronics & Computer Science), graduating <strong>May 2027</strong> — open to internships and new-grad roles. Built <strong>gfix</strong> (Rust + MCP merge resolver) and <strong>Tubio</strong> (Chrome MV3 SaaS, 4.8★).
          </p>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Technical Skills</h3>
          <ul className="space-y-1 text-body-md leading-relaxed list-none p-0">
            <li><strong>Languages:</strong> Rust, TypeScript, JavaScript, Python, Ruby</li>
            <li><strong>AI / Agents:</strong> Model Context Protocol (MCP), Claude API, OpenAI, Gemini, Ollama, prompt engineering</li>
            <li><strong>Frontend:</strong> React, Next.js (App Router), Tailwind CSS, Plasmo (MV3), HTML5 Canvas</li>
            <li><strong>Browser / Extensions:</strong> Chrome MV3, VS Code Extension API (Marketplace + Open VSX), service workers, IndexedDB, Innertube API</li>
            <li><strong>Backend & Infra:</strong> Node.js, Ruby on Rails 8, Sidekiq, REST APIs, Supabase, Vercel, Docker, Polar</li>
            <li><strong>Git / Systems:</strong> Git internals, rerere, AST-based merging (Mergiraf), worktrees, multi-agent workflows</li>
          </ul>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Experience</h3>

          <div className="mt-1">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">
                Founder & Engineer ·{" "}
                <a href="https://gfix.space" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  gfix & gitfix
                </a>
              </p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Mar 2026 – Present · Mumbai</p>
            </div>
            <ul className="mt-1 list-none pl-0 space-y-1 text-body-md leading-relaxed">
              <li className="resume-bullet">Architected <strong>gfix</strong> (Rust CLI + MCP server) and shipped the companion <strong>gitfix</strong> VS Code extension (Marketplace + Open VSX) — together they let AI coding agents resolve git merge conflicts natively, with a conflict tree, one-click fixes, and a per-resolution audit trail.</li>
              <li className="resume-bullet">Engineered deterministic AST-level merging on top of Mergiraf, cross-machine rerere-style replay, and a BYO-key AI provider layer abstracting OpenAI, Anthropic, Gemini, and Ollama — all on a private Rust engine.</li>
            </ul>
            <p className="mt-1 text-body-md text-on-surface-variant italic">Stack: Rust · MCP · Mergiraf · VS Code Extension API · Open VSX · Git internals</p>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">
                Founder & Engineer ·{" "}
                <a href="https://tubio.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Tubio
                </a>
              </p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Sep 2025 – Present · Mumbai</p>
            </div>
            <ul className="mt-1 list-none pl-0 space-y-1 text-body-md leading-relaxed">
              <li className="resume-bullet">Built and shipped Tubio end-to-end — a Chrome MV3 SaaS achieving <strong>4.8★</strong> on the Chrome Web Store; downloads YouTube transcripts at volume with metadata and multimodal context the official YouTube Data API doesn&apos;t expose.</li>
              <li className="resume-bullet">Engineered bulk download of up to 800 videos/session with sequential rate-limiting and IndexedDB persistence that survives MV3 service-worker restarts; bypassed the 2024 PoToken enforcement by reading from the user&apos;s authenticated session.</li>
            </ul>
            <p className="mt-1 text-body-md text-on-surface-variant italic">Stack: Plasmo · Chrome MV3 · React · TypeScript · IndexedDB · Innertube API · Supabase · Polar</p>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">
                Web Developer (Intern) ·{" "}
                <a href="https://dialclub.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Trineteini Quantum
                </a>
              </p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Jan 2025 – Mar 2025 · Remote</p>
            </div>
            <ul className="mt-1 list-none pl-0 space-y-1 text-body-md leading-relaxed">
              <li className="resume-bullet">Delivered a full admin panel and social-media dashboard for dialclub.org — CRUD surfaces over users, content, and operational state with cross-channel publishing.</li>
              <li className="resume-bullet">Built role-based instructor dashboard, event lifecycle management (draft → published), a question-bank-backed quiz module, and a public-facing conversational chatbot.</li>
            </ul>
            <p className="mt-1 text-body-md text-on-surface-variant italic">Stack: React · Node.js · REST APIs · Webhooks</p>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Projects</h3>

          <div className="mt-1">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">
                scribed ·{" "}
                <a href="https://github.com/ameyypawar/scribed" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-normal">
                  github.com/ameyypawar/scribed
                </a>
              </p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">2024</p>
            </div>
            <ul className="mt-1 list-none pl-0 space-y-1 text-body-md leading-relaxed">
              <li className="resume-bullet">Built a self-hostable, provider-agnostic audio transcription microservice for customer-support platforms, with pluggable backends across whisper.cpp, faster-whisper, Deepgram, and OpenAI — swappable via environment variable without code changes.</li>
            </ul>
          </div>

          <div className="mt-3">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">
                Pluck ·{" "}
                <a href="https://github.com/ameyypawar/pluck" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-normal">
                  github.com/ameyypawar/pluck
                </a>
              </p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">2026</p>
            </div>
            <p className="text-body-md leading-relaxed mt-1">
              MIT-licensed Chrome MV3 extension that auto-detects listed items on any page and exports to CSV; deterministic, no AI.{" "}
              <span className="text-on-surface-variant italic">Stack: TypeScript · Plasmo · Chrome MV3.</span>
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Open Source</h3>
          <p className="text-body-md leading-relaxed">
            Active contributor across the Rust and TypeScript open-source ecosystem — merged into <strong>windmill-labs/windmill</strong> (
            <a href="https://github.com/windmill-labs/windmill/pull/9460" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">#9460</a>,{" "}
            <a href="https://github.com/windmill-labs/windmill/pull/9463" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">#9463</a>
            ) and <strong>tokio-rs/tokio</strong> (
            <a href="https://github.com/tokio-rs/tokio/pull/8196" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">#8196</a>
            ).
          </p>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Education</h3>
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <p className="text-body-md"><strong>Vidyalankar Institute of Technology, Mumbai</strong></p>
            <p className="text-body-md text-on-surface-variant whitespace-nowrap">2022 – 2027</p>
          </div>
          <p className="text-body-md text-on-surface-variant mt-1">BTech, Electronics and Computer Science</p>
        </section>
      </article>
    </main>
  );
}
