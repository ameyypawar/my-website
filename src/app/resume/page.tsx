import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume — Amey Pawar",
  description:
    "Amey Pawar — independent developer shipping production tools at the intersection of AI coding agents and developer tooling. Maintainer of gfix and tubio.",
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
          <h2 className="resume-h2">Amey Pawar</h2>
          <p className="resume-contact text-body-md text-on-surface-variant leading-relaxed">
            Mumbai · +91 8850558058 ·{" "}
            <a href="mailto:ameypawar1237@gmail.com" className="text-primary hover:underline">
              ameypawar1237@gmail.com
            </a>{" "}
            ·{" "}
            <a href="https://github.com/ameyypawar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub
            </a>{" "}
            ·{" "}
            <a href="https://linkedin.com/in/ameypawar77" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              LinkedIn
            </a>
          </p>
        </header>

        <section className="resume-section">
          <h3 className="resume-section-label">Summary</h3>
          <p className="text-body-md leading-relaxed">
            Independent developer shipping production tools at the intersection of AI coding agents and developer tooling. Building <strong>gfix</strong> (Rust + MCP merge resolver for AI agents) and <strong>tubio</strong> (Chrome MV3 SaaS — 4.8★, Chrome Web Store).
          </p>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Skills</h3>
          <ul className="space-y-1 text-body-md leading-relaxed list-none p-0">
            <li><strong>Languages:</strong> TypeScript, JavaScript, Rust, Python, Ruby</li>
            <li><strong>Frontend:</strong> React, Next.js (App Router), Tailwind CSS, Plasmo (MV3), HTML5 Canvas</li>
            <li><strong>AI / Agents:</strong> Model Context Protocol (MCP), Claude API, OpenAI, Gemini, Ollama, BYO-key provider abstractions, prompt engineering</li>
            <li><strong>Browser &amp; Extensions:</strong> Chrome MV3, VS Code (Marketplace + Open VSX), service workers, IndexedDB, content scripts, Innertube API</li>
            <li><strong>Git / Systems:</strong> Git internals, rerere, AST-based merging (Mergiraf), worktrees, multi-agent workflows</li>
            <li><strong>Backend &amp; APIs:</strong> Node.js, Ruby on Rails 8, Sidekiq, REST APIs, signed webhooks</li>
            <li><strong>Cloud / Infra:</strong> Vercel, Supabase, Polar, Docker, ISR</li>
          </ul>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Experience</h3>

          <div className="mt-1">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">Founder &amp; Engineer — gfix &amp; gitfix (Self-employed)</p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Mar 2026 – Present · Mumbai</p>
            </div>
            <ul className="mt-1 list-disc pl-5 space-y-1 text-body-md leading-relaxed">
              <li>Built <strong>gfix</strong> — a Rust CLI + MCP server that lets AI coding agents resolve git merge conflicts natively; closes the integration bottleneck as agents write in parallel.</li>
              <li>Shipped <strong>gitfix</strong>, a VS Code extension (Marketplace + Open VSX) with a conflict tree, one-click fixes, and a full audit trail; keeps a human in the loop on agent-driven resolutions.</li>
              <li>Engineered deterministic AST-level merging atop Mergiraf, cross-machine <em>rerere</em>-style replay, and a BYO-key AI layer abstracting OpenAI, Anthropic, Gemini, and Ollama — on a private Rust engine.</li>
            </ul>
            <p className="mt-1 text-body-md"><strong>Technologies:</strong> Rust, Model Context Protocol (MCP), Mergiraf, VS Code Extension API, Open VSX, Git internals.</p>
            <p className="mt-1 text-body-md text-on-surface-variant">
              <a href="https://gfix.space" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gfix.space</a>{" "}·{" "}
              <a href="https://gitfix.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gitfix.pro</a>{" "}·{" "}
              <a href="https://github.com/ameyypawar/gfix-docs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/ameyypawar/gfix-docs</a>{" "}·{" "}
              <a href="https://github.com/ameyypawar/gitfix" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/ameyypawar/gitfix</a>
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">Founder &amp; Engineer — Tubio (Self-employed)</p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Sep 2025 – Present · Mumbai</p>
            </div>
            <ul className="mt-1 list-disc pl-5 space-y-1 text-body-md leading-relaxed">
              <li>Built and shipped <strong>Tubio</strong> end-to-end — a Chrome MV3 SaaS (Plasmo + React + TypeScript) that downloads YouTube transcripts at volume with metadata and multimodal context the official YouTube Data API doesn&apos;t expose.</li>
              <li>Engineered bulk-download of up to 800 videos per session with sequential rate-limiting and IndexedDB persistence that survives MV3 service-worker restarts; sidesteps the 2024 PO Token gauntlet by reading from the user&apos;s authenticated session.</li>
              <li>Shipped <em>Watch with Claude</em> — bundles transcript + evenly-spaced frame captures + a structured <code>report.md</code> so LLMs can ingest full multimodal video context; <strong>4.8★</strong> on the Chrome Web Store.</li>
            </ul>
            <p className="mt-1 text-body-md"><strong>Technologies:</strong> Plasmo, Chrome MV3, React, TypeScript, IndexedDB, Innertube API, Supabase, Polar.</p>
            <p className="mt-1 text-body-md text-on-surface-variant">
              <a href="https://tubio.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tubio.pro</a>{" "}·{" "}
              <a href="https://github.com/ameyypawar/tubio-docs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/ameyypawar/tubio-docs</a>
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">Web Developer — Trineteini Quantum (Internship)</p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Jan 2025 – Mar 2025 · Remote</p>
            </div>
            <ul className="mt-1 list-disc pl-5 space-y-1 text-body-md leading-relaxed">
              <li>Shipped a full admin panel and social-media dashboard for <a href="https://dialclub.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dialclub.org</a> — CRUD surfaces over users, content, and operational state, plus cross-channel publishing.</li>
              <li>Built a role-based instructor dashboard and an event-setup workflow covering schedule, capacity, and lifecycle from draft to published.</li>
              <li>Implemented a dynamic quiz module (question-bank backed) and integrated a conversational chatbot onto the public site.</li>
            </ul>
            <p className="mt-1 text-body-md"><strong>Technologies:</strong> React, Node.js, REST APIs, Webhooks.</p>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Open Source</h3>
          <p className="text-body-md leading-relaxed">
            Contributing to <a href="https://github.com/GitoxideLabs/gitoxide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gitoxide</a> and <a href="https://github.com/modelcontextprotocol/python-sdk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mcp-py-sdk</a>; merged PRs to follow.
          </p>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Projects</h3>
          <div className="mt-1">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">
                scribed —{" "}
                <a href="https://github.com/ameyypawar/scribed" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-normal">
                  github.com/ameyypawar/scribed
                </a>
              </p>
            </div>
            <p className="mt-1 text-body-md leading-relaxed">
              Self-hostable, provider-agnostic audio transcription microservice for customer-support platforms (REST + signed webhooks).
            </p>
            <ul className="mt-1 list-disc pl-5 space-y-1 text-body-md leading-relaxed">
              <li>Pluggable transcription-provider abstraction across four backends (whisper.cpp, faster-whisper, Deepgram, OpenAI), swappable via env without code changes.</li>
              <li>Rails 8 + Sidekiq + Postgres with signed webhook delivery and exponential-backoff retry.</li>
            </ul>
            <p className="mt-1 text-body-md"><strong>Technologies:</strong> Ruby, Rails 8, Postgres, Sidekiq, Docker, REST.</p>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Education</h3>
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <p className="text-body-md"><strong>Vidyalankar Institute of Technology</strong> — BTech, Electronics and Computer Science</p>
            <p className="text-body-md text-on-surface-variant whitespace-nowrap">2022 – 2027</p>
          </div>
        </section>
      </article>
    </main>
  );
}
