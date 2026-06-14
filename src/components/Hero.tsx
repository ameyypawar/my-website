import { ArrowRight, Download } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <Reveal>
      <section aria-labelledby="hero-heading">
        <p className="text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
          Software Engineer · Developer Tooling & AI Agents
        </p>
        <h1
          id="hero-heading"
          className="text-display-lg font-semibold tracking-tight mt-5"
        >
          Amey Pawar.
        </h1>

        <div className="mt-6 h-px w-16 bg-primary/70" aria-hidden="true" />

        <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl">
          Final-year BTech in Electronics & Computer Science — graduating{" "}
          <strong className="font-semibold text-on-surface">May 2027</strong>.
          Building developer tooling in Rust and TypeScript at the intersection
          of AI coding agents and Git. Open to internships and new-grad roles —
          Mumbai, remote, or relocation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:ameypawar1237@gmail.com"
            className="group inline-flex items-center gap-2 rounded-md-sm border border-outline/60 px-5 py-2.5 text-body-md text-on-surface hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Email me
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>

          <a
            href="/amey-pawar-resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-md-sm border border-outline/60 px-5 py-2.5 text-body-md text-on-surface hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Download resume
            <span aria-hidden="true" className="transition-transform">
              <Download className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>
    </Reveal>
  );
}
