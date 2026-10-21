import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import { openSource, profile } from "@/data/resume";

const proofLink =
  "text-on-surface underline decoration-primary/60 underline-offset-4 hover:text-primary transition-colors";

const solidButton =
  "group inline-flex items-center gap-2 rounded-full bg-on-surface px-4 py-2 text-body-md text-surface hover:bg-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";

const outlineButton =
  "group inline-flex items-center gap-2 rounded-full border border-outline bg-surface px-4 py-2 text-body-md text-on-surface hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";

function Avatar() {
  const frame =
    "relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full ring-4 ring-surface shadow-md";
  if (profile.avatar) {
    return (
      <div className={frame}>
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          sizes="112px"
          className="object-cover"
          priority
        />
      </div>
    );
  }
  return (
    <div
      className={`${frame} flex items-center justify-center bg-primary font-serif text-4xl text-surface`}
      aria-hidden="true"
    >
      AP
    </div>
  );
}

export default function Hero() {
  const [first, second] = openSource.top;

  return (
    <section aria-labelledby="hero-heading">
      {/* A window in the sheet onto the artwork behind it. */}
      <div className="art-window h-44 sm:h-56" aria-hidden="true" />

      <div className="px-6 pb-2">
        <div className="-mt-12 sm:-mt-14">
          <Avatar />
        </div>

        <p className="mt-5 font-mono text-label-md uppercase tracking-[0.18em] text-on-surface-variant">
          {profile.headline}
        </p>
        <h1
          id="hero-heading"
          className="mt-2 font-serif text-display-lg tracking-tight"
        >
          {profile.name}
        </h1>

        <p className="mt-5 text-body-lg sm:text-[18px] leading-relaxed text-on-surface">
          I work on <span className="marker">observability</span> and{" "}
          <span className="marker">version control</span> in Rust and
          TypeScript, with{" "}
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

        <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">
          Final-year BTech, graduating{" "}
          <strong className="font-semibold text-on-surface">May 2027</strong>.
          Open to new-grad roles, internships and contract work: Mumbai,
          remote, or relocation.
        </p>

        <p className="mt-4 inline-flex items-center gap-1.5 text-label-md text-on-surface-variant">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {profile.location} · {profile.timezone}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          <a href={`mailto:${profile.email}`} className={solidButton}>
            {profile.email}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>

          <Link href="/resume" className={outlineButton}>
            Resume
            <span aria-hidden="true">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>

          <a href="/amey-pawar-resume.pdf" download="Amey_Pawar_Resume.pdf" className={outlineButton}>
            PDF
            <span aria-hidden="true">
              <Download className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
