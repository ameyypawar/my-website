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
          className="text-display-lg font-semibold tracking-tight mt-4"
        >
          Amey Pawar.
        </h1>
        <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl">
          Independent developer building tools that make everyday software feel
          less painful. Currently shipping tubio — focus and transcripts for
          YouTube — and gitfix, a VS Code extension that resolves merge
          conflicts. Always poking at terminals, agents, and the loop between
          idea and deploy.
        </p>
      </section>
    </Reveal>
  );
}
