import ResumeBullet from "@/components/ResumeBullet";
import Section from "@/components/Section";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-dashed divide-outline">
        {experience.map((role) => (
          <li key={`${role.title}-${role.org}`} className="px-6 py-5">
            <div className="flex items-baseline justify-between gap-x-4 gap-y-1 flex-wrap">
              <h3 className="text-body-lg font-semibold">{role.title}</h3>
              <span className="font-mono text-label-md text-on-surface-variant whitespace-nowrap">
                {role.dates}
              </span>
            </div>
            <p className="text-body-md">
              {role.orgUrl ? (
                <a
                  href={role.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {role.org}
                </a>
              ) : (
                <span className="text-on-surface">{role.org}</span>
              )}
            </p>
            {role.about && (
              <p className="mt-2 text-label-md text-on-surface-variant">
                {role.about}
              </p>
            )}
            {role.summary && (
              <p className="mt-1 text-label-md text-on-surface-variant">
                {role.summaryUrl ? (
                  <a
                    href={role.summaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-outline underline-offset-4 hover:text-primary transition-colors"
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
          </li>
        ))}
      </ol>
    </Section>
  );
}
