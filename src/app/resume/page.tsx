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
      <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl">
        One page. Dark and sage here; black-on-white when printed.
      </p>

      <div className="mt-8" data-print-hide>
        <PrintButton />
      </div>

      <article id="resume" className="mt-12 mx-auto max-w-[800px] text-on-surface">
        <header className="resume-header">
          <h2 className="text-headline-lg font-semibold tracking-tight">Amey Pawar</h2>
          <p className="mt-2 text-body-md text-on-surface-variant leading-relaxed">
            Mumbai · +91 8850558058 ·{" "}
            <a href="mailto:ameypawar1237@gmail.com" className="text-primary hover:underline">
              ameypawar1237@gmail.com
            </a>
            <br />
            <a href="https://github.com/ameyypawar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              github.com/ameyypawar
            </a>{" "}
            ·{" "}
            <a href="https://linkedin.com/in/ameypawar77" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              linkedin.com/in/ameypawar77
            </a>
          </p>
        </header>

        <section className="resume-section">
          <h3 className="resume-section-label">Summary</h3>
          <p className="mt-3 text-body-md leading-relaxed">
            Independent developer shipping production tools at the intersection of AI coding agents and developer tooling. Maintainer of <strong>gfix</strong> (Rust CLI + MCP server for native git-conflict resolution under AI agents) and <strong>tubio</strong> (Chrome MV3 SaaS for bulk YouTube transcript and multimodal capture; 4.8★ on Chrome Web Store). Working on deterministic AST-level merge resolution atop Mergiraf, cross-machine rerere-style replay, and BYO-key AI integrations across the major LLM providers.
          </p>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Skills</h3>
          <ul className="mt-3 space-y-1.5 text-body-md leading-relaxed list-none p-0">
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

          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">Founder &amp; Engineer — Self-employed (gfix &amp; gitfix)</p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Mar 2026 – Present · Mumbai</p>
            </div>
            <ul className="mt-2 list-disc pl-5 space-y-1.5 text-body-md leading-relaxed">
              <li>Built <strong>gfix</strong>, a Rust CLI + MCP server that lets AI coding agents resolve git merge conflicts natively — closing the integration bottleneck as agents write more code in parallel.</li>
              <li>Shipped <strong>gitfix</strong>, a companion VS Code extension (Marketplace + Open VSX) that keeps a human in the loop with a conflict tree, one-click fixes, and a full audit trail of agent-driven resolutions.</li>
              <li>Implemented deterministic AST-level merging on top of Mergiraf and a cross-machine <em>rerere</em>-style resolution replay so the same conflict never gets resolved twice across a team.</li>
              <li>Designed an optional BYO-key AI layer abstracting OpenAI, Anthropic, Gemini, and Ollama behind one provider interface — all on a private Rust engine.</li>
              <li>Dogfooded daily by running parallel Claude agents across independent git worktrees on the same project.</li>
            </ul>
            <p className="mt-2 text-body-md text-on-surface-variant">
              <a href="https://gfix.space" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gfix.space</a>{" "}·{" "}
              <a href="https://gitfix.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gitfix.pro</a>{" "}·{" "}
              <a href="https://github.com/ameyypawar/gfix-docs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/ameyypawar/gfix-docs</a>{" "}·{" "}
              <a href="https://github.com/ameyypawar/gitfix" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/ameyypawar/gitfix</a>
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">Founder &amp; Engineer — Tubio (Self-employed)</p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Sep 2025 – Present · Mumbai</p>
            </div>
            <ul className="mt-2 list-disc pl-5 space-y-1.5 text-body-md leading-relaxed">
              <li>Built <strong>Tubio</strong>, a Chrome MV3 SaaS (Plasmo + React + TypeScript) that injects a native-feel button into every YouTube watch, Shorts, playlist, and channel page to download transcripts with the metadata and visual context the official YouTube Data API doesn&apos;t expose.</li>
              <li>Supports 28 languages with auto-generated caption fallback via the Innertube API; sidesteps the 2024 PO Token gauntlet by reading from the user&apos;s own authenticated browser session — no residential proxies, no token harvesting.</li>
              <li>Engineered bulk-download of up to 800 videos per session with sequential rate-limiting and IndexedDB persistence that survives MV3 service-worker restarts mid-job.</li>
              <li>Shipped <em>Watch with Claude</em> — bundles the transcript with evenly-spaced frame captures and a structured <code>report.md</code> so LLMs can ingest full multimodal video context.</li>
              <li>Freemium with a $25 one-time Pro license; <strong>4.8★</strong> on the Chrome Web Store.</li>
            </ul>
            <p className="mt-2 text-body-md text-on-surface-variant">
              <a href="https://tubio.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tubio.pro</a>{" "}·{" "}
              <a href="https://github.com/ameyypawar/tubio-docs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/ameyypawar/tubio-docs</a>
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">Web Developer — Trineteini Quantum (Internship)</p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Jan 2025 – Mar 2025 · Remote</p>
            </div>
            <ul className="mt-2 list-disc pl-5 space-y-1.5 text-body-md leading-relaxed">
              <li>Shipped a full admin panel for <a href="https://dialclub.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dialclub.org</a> — CRUD surfaces over users, content, and operational data, plus a social-media dashboard for cross-channel publishing state.</li>
              <li>Built a role-based instructor dashboard and an event-setup workflow covering schedule, capacity, and lifecycle state from draft to published.</li>
              <li>Implemented a dynamic quiz module (question-bank backed, instructor-authored) and integrated a conversational chatbot onto the public site.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Open Source</h3>
          <p className="mt-3 text-body-md leading-relaxed">
            Just started contributing to open source; merged PRs to follow.
          </p>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Projects</h3>
          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-body-md font-semibold">
                scribed —{" "}
                <a href="https://github.com/ameyypawar/scribed" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-normal">
                  github.com/ameyypawar/scribed
                </a>
              </p>
              <p className="text-body-md text-on-surface-variant whitespace-nowrap">Ruby · Rails 8 · Postgres · Sidekiq · Docker</p>
            </div>
            <p className="mt-2 text-body-md leading-relaxed">
              Self-hostable, provider-agnostic audio transcription microservice for customer-support platforms (REST API with pluggable backends).
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1.5 text-body-md leading-relaxed">
              <li>Pluggable transcription-provider abstraction across four backends (whisper.cpp, faster-whisper, Deepgram, OpenAI), swappable via env without code changes.</li>
              <li>Rails 8 API with Sidekiq job queue, Postgres persistence, and signed webhook delivery with exponential-backoff retry.</li>
              <li>Async diarization via pyannote.ai callback; native Deepgram speaker-label injection.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Education</h3>
          <div className="mt-3 flex items-baseline justify-between gap-4 flex-wrap">
            <p className="text-body-md"><strong>Vidyalankar Institute of Technology</strong> — BTech, Electronics and Computer Science</p>
            <p className="text-body-md text-on-surface-variant whitespace-nowrap">2022 – 2027</p>
          </div>
        </section>
      </article>
    </main>
  );
}
