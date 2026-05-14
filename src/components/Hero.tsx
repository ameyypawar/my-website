import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-start justify-end px-6 sm:px-12 pb-32 sm:pb-40 overflow-hidden"
    >
      <p className="fade-up fade-up-1 text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
        Independent Developer
      </p>
      <h1
        id="hero-heading"
        className="fade-up fade-up-2 text-display-lg font-semibold tracking-tight text-on-surface-strong mt-4"
      >
        Amey Pawar
      </h1>
      <div
        aria-hidden
        className="slide-in-x slide-in-x-delay-400 mt-6 h-px w-32 sm:w-48 bg-on-surface"
      />
      <p className="fade-up fade-up-3 text-body-lg text-on-surface-variant mt-6 max-w-2xl">
        Building small, opinionated tools that make everyday software feel less painful.
        Currently shipping tubio and gitfix.
      </p>
      <a
        href="mailto:ameypawar1237@gmail.com"
        className="fade-up fade-up-4 group relative mt-10 inline-flex items-center gap-2 text-body-lg text-on-surface"
      >
        <span>Email me</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
        <span
          aria-hidden
          className="slide-in-x slide-in-x-delay-800 absolute -bottom-1 left-0 right-0 h-px bg-on-surface"
        />
      </a>
      <ChevronDown
        aria-hidden
        className="absolute bottom-8 left-6 sm:left-12 w-5 h-5 text-on-surface-variant animate-pulse"
      />
    </section>
  );
}
