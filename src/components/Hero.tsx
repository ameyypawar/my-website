import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <Reveal>
      <section aria-labelledby="hero-heading">
        <p className="text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
          Independent developer
        </p>
        <h1
          id="hero-heading"
          className="text-display-lg font-semibold tracking-tight mt-5"
        >
          Amey Pawar.
        </h1>

        <div className="mt-6 h-px w-16 bg-primary/70" aria-hidden="true" />

        <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl">
          Independent developer building tools that make everyday software feel
          less painful. Currently shipping tubio — focus and transcripts for
          YouTube — and gitfix, a VS Code extension that resolves merge
          conflicts. Always poking at terminals, agents, and the loop between
          idea and deploy.
        </p>

        <div className="mt-8">
          <a
            href="mailto:ameypawar1237@gmail.com"
            className="group inline-flex items-center gap-2 rounded-md-sm border border-outline/60 px-5 py-2.5 text-body-md text-on-surface hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Email me
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </section>
    </Reveal>
  );
}
