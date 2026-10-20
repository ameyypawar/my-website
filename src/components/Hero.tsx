import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import { openSource, profile } from "@/data/resume";

const proofLink =
  "text-on-surface underline decoration-primary/60 underline-offset-4 hover:text-primary transition-colors";

const button =
  "group inline-flex items-center gap-2 rounded-md-sm border border-outline/60 px-5 py-2.5 text-body-md text-on-surface hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";

export default function Hero() {
  const [first, second] = openSource.top;

  return (
    <Reveal>
      <section aria-labelledby="hero-heading">
        <p className="text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
          {profile.headline}
        </p>
        <h1
          id="hero-heading"
          className="text-display-lg font-semibold tracking-tight mt-5"
        >
          Amey Pawar.
        </h1>

        <div className="mt-6 h-px w-16 bg-primary/70" aria-hidden="true" />

        <p className="text-body-lg text-on-surface mt-6 max-w-2xl">
          <a href={openSource.url} target="_blank" rel="noopener noreferrer" className={proofLink}>
            {openSource.merged} merged open-source PRs
          </a>{" "}
          across {openSource.projects} projects, including{" "}
          <a href={first.url} target="_blank" rel="noopener noreferrer" className={proofLink}>
            {first.name} ({first.merged})
          </a>{" "}
          and{" "}
          <a href={second.url} target="_blank" rel="noopener noreferrer" className={proofLink}>
            {second.name} ({second.merged})
          </a>
          .
        </p>

        <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl">
          I work on observability and version-control infrastructure in Rust
          and TypeScript. Final-year BTech, graduating{" "}
          <strong className="font-semibold text-on-surface">May 2027</strong>.
          Open to new-grad roles, internships and contract work: Mumbai,
          remote, or relocation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={button}>
            {profile.email}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>

          <Link href="/resume" className={button}>
            Resume
            <span aria-hidden="true">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>

          <a href="/amey-pawar-resume.pdf" download="Amey_Pawar_Resume.pdf" className={button}>
            PDF
            <span aria-hidden="true">
              <Download className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>
    </Reveal>
  );
}
