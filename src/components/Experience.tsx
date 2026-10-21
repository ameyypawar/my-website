import Reveal from "@/components/Reveal";
import ResumeBullet from "@/components/ResumeBullet";
import { experience } from "@/data/resume";

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
          Open-source work in production Rust and TypeScript codebases, my
          college&apos;s open-source lab, and a 2025 internship.
        </p>

        <div className="mt-8 space-y-8">
          {experience.map((role) => (
            <article key={`${role.title}-${role.org}`}>
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-title-lg font-medium">
                  {role.title}
                  <span className="text-on-surface-variant"> · </span>
                  {role.orgUrl ? (
                    <a
                      href={role.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {role.org}
                    </a>
                  ) : (
                    role.org
                  )}
                </h3>
                <p className="text-label-md text-on-surface-variant whitespace-nowrap">
                  {role.dates}
                </p>
              </div>
              {role.about && (
                <p className="mt-2 text-body-md text-on-surface-variant">
                  {role.about}
                </p>
              )}
              {role.summary && (
                <p className="mt-1 text-body-md text-on-surface-variant">
                  {role.summaryUrl ? (
                    <a
                      href={role.summaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-outline/60 underline-offset-4 hover:text-primary transition-colors"
                    >
                      {role.summary}
                    </a>
                  ) : (
                    role.summary
                  )}
                </p>
              )}
              <ul className="mt-3 list-none pl-0 space-y-2 text-body-md text-on-surface leading-relaxed">
                {role.bullets.map((bullet) => (
                  <li key={bullet.text} className="resume-bullet">
                    <ResumeBullet bullet={bullet} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
