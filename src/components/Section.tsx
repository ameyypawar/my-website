import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

// A titled band of the homepage sheet: the title sits between dashed rules,
// like a page in a notebook.
export default function Section({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <Reveal>
      <section
        id={id}
        aria-labelledby={headingId}
        className="mt-10 border-t border-dashed border-outline"
      >
        <div className="flex items-baseline justify-between gap-4 px-6 py-3 bg-surface-container/60 border-b border-dashed border-outline">
          <h2 id={headingId} className="text-title-lg font-semibold tracking-tight">
            {title}
          </h2>
          {aside && (
            <div className="text-label-md text-on-surface-variant">{aside}</div>
          )}
        </div>
        {children}
      </section>
    </Reveal>
  );
}
