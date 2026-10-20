import Reveal from "@/components/Reveal";
import { skills } from "@/data/resume";

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
          The stack behind the work above.
        </p>

        <dl className="mt-8 space-y-3">
          {skills.map((group) => (
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
