import type { Metadata } from "next";
import type { ReactNode } from "react";
import PrintButton from "@/components/PrintButton";
import ResumeBullet from "@/components/ResumeBullet";
import {
  education,
  experience,
  openSource,
  profile,
  resumeProjects,
  skills,
  stripProtocol,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Amey Pawar — Resume",
  description: `${profile.name} — ${profile.headline}. ${openSource.merged} merged open-source PRs, including ${openSource.top[0].merged} in OpenObserve and ${openSource.top[1].merged} in gitoxide.`,
};

// The PDF at /amey-pawar-resume.pdf is printed from this page in CI
// (.github/workflows/resume-pdf.yml). Keep it one column, in reading order:
// no tables, grids or right-aligned columns.

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      {children}
    </a>
  );
}

export default function ResumePage() {
  return (
    <main className="flex-1 w-full max-w-[1024px] mx-auto px-6 sm:px-10 py-24">
      <h1 className="text-display-lg font-semibold tracking-tight">Resume</h1>
      <div className="mt-6 h-px w-16 bg-primary/70" aria-hidden="true" />

      <div className="mt-8 flex flex-wrap gap-3" data-print-hide>
        <PrintButton />
        <a
          href="/amey-pawar-resume.pdf"
          download="Amey_Pawar_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-md-sm border border-outline/60 px-5 py-2.5 text-body-md text-on-surface hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          Download PDF
        </a>
      </div>

      <article
        id="resume"
        className="mt-12 mx-auto max-w-[800px] text-body-md leading-relaxed text-on-surface"
      >
        <div className="resume-header">
          <h2 className="resume-name">{profile.name}</h2>
          <p className="resume-line">{profile.headline}</p>
          <p className="resume-line resume-meta">
            {profile.location} ({profile.timezone}) · {profile.status}
          </p>
          <p className="resume-line resume-meta">
            {profile.phone} ·{" "}
            <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
              {profile.email}
            </a>{" "}
            · <ExternalLink href={profile.site}>{stripProtocol(profile.site)}</ExternalLink>{" "}
            · <ExternalLink href={profile.github}>{stripProtocol(profile.github)}</ExternalLink>{" "}
            · <ExternalLink href={profile.linkedin}>{stripProtocol(profile.linkedin)}</ExternalLink>
          </p>
        </div>

        <p className="resume-line resume-proof">
          <ExternalLink href={openSource.url}>
            {openSource.merged} merged upstream PRs across {openSource.projects} open-source
            projects
          </ExternalLink>
          {" — "}
          {openSource.top.map((p) => `${p.name} (${p.merged})`).join(", ")} · Rust, TypeScript
        </p>

        <section className="resume-section">
          <h3 className="resume-section-label">Experience</h3>
          {experience.map((entry) => (
            <div key={`${entry.title}-${entry.org}`} className="resume-entry">
              <p>
                <strong>{entry.title}</strong>
                {" — "}
                {entry.orgUrl ? (
                  <ExternalLink href={entry.orgUrl}>{entry.org}</ExternalLink>
                ) : (
                  entry.org
                )}
                <span className="resume-meta">{` · ${entry.dates}`}</span>
              </p>
              {entry.about && <p className="resume-meta">{entry.about}</p>}
              {entry.summary && (
                <p className="resume-meta">
                  {entry.summaryUrl ? (
                    <ExternalLink href={entry.summaryUrl}>{entry.summary}</ExternalLink>
                  ) : (
                    entry.summary
                  )}
                </p>
              )}
              <ul className="resume-bullets">
                {entry.bullets.map((bullet) => (
                  <li key={bullet.text} className="resume-bullet">
                    <ResumeBullet bullet={bullet} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Projects</h3>
          <ul className="resume-bullets">
            {resumeProjects.map((project) => (
              <li key={project.name} className="resume-bullet">
                <strong>{project.name}</strong>
                {" ("}
                <ExternalLink href={project.url}>{stripProtocol(project.url)}</ExternalLink>
                {`, ${project.dates}) — ${project.line}`}
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Education</h3>
          <p>
            <strong>{education.school}</strong> — {education.degree} · {education.dates}
          </p>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-label">Skills</h3>
          {skills.map((group) => (
            <p key={group.label}>
              <strong>{group.label}:</strong> {group.items}
            </p>
          ))}
        </section>
      </article>
    </main>
  );
}
