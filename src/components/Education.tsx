import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-32">
      <div className="max-w-[720px] mx-auto px-6 sm:px-12">
        <Reveal>
          <h2 id="education-heading" className="text-headline-lg font-semibold mb-8">Education</h2>
        </Reveal>
        <Reveal>
          <div className="relative overflow-hidden rounded-md-lg border border-outline/40 bg-surface-container/40 p-8 sm:p-10">
            <div className="flex items-center justify-between text-label-md uppercase tracking-[0.15em] text-on-surface-variant">
              <span>BTech</span>
              <span>2022 — 2027</span>
            </div>
            <h3 className="text-title-lg sm:text-headline-lg font-semibold text-on-surface mt-4">
              Electronics and Computer Science
            </h3>
            <p className="text-body-md text-on-surface-variant mt-2">
              Vidyalankar Institute of Technology
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
