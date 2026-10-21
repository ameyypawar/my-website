import Section from "@/components/Section";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <Section id="skills" title="Stack">
      <dl className="divide-y divide-dashed divide-outline">
        {skills.map((group, i) => (
          <div
            key={group.label}
            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 px-6 py-4"
          >
            <dt className="pt-1 font-mono text-label-md text-on-surface-variant">
              {String(i + 1).padStart(2, "0")} {group.label}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md-sm border border-outline bg-surface px-2 py-0.5 text-label-md text-on-surface"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
