import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-32 sm:py-40">
      <div className="max-w-[720px] mx-auto px-6 sm:px-12">
        <Reveal>
          <h2 id="about-heading" className="text-headline-lg font-semibold mb-8">About</h2>
        </Reveal>
        <Reveal>
          <p className="text-body-lg text-on-surface mb-6">
            I build small, opinionated tools for the parts of software work I find friction-heavy.
            Right now that&apos;s <span className="text-on-surface-strong font-medium">tubio</span> — a Chrome extension that turns YouTube
            into a focused workspace with clean transcripts, distraction controls, and an AI chat
            tuned to whatever video you&apos;re watching — and <span className="text-on-surface-strong font-medium">gitfix</span>, a VS Code
            extension that resolves merge conflicts the way a teammate would, by understanding
            intent instead of text diffs.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-body-lg text-on-surface">
            I live in the terminal, work in parallel with agents, and care most about the shortest
            path between an idea and something running. If you&apos;re building developer tools, AI
            infrastructure, or anything that lives close to a developer&apos;s daily loop, I&apos;d like to
            hear about it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
