import Reveal from "@/components/Reveal";
import SocialLink from "@/components/SocialLink";
import { socials } from "@/data/socials";

export default function Connect() {
  return (
    <section id="connect" aria-labelledby="connect-heading" className="py-32">
      <div className="max-w-[720px] mx-auto px-6 sm:px-12 text-center">
        <Reveal>
          <h2 id="connect-heading" className="text-headline-lg font-semibold mb-8">Connect</h2>
        </Reveal>
        <Reveal>
          <p className="text-body-lg text-on-surface-variant max-w-[420px] mx-auto">
            Open to interesting collaborations and quick chats. Easiest via email or DMs.
          </p>
        </Reveal>
        <Reveal>
          <nav aria-label="Social links" className="flex items-center justify-center gap-2 mt-12">
            {socials.map((s) => <SocialLink key={s.label} social={s} />)}
          </nav>
        </Reveal>
        <footer className="mt-16 pt-8 border-t border-outline/30">
          <p className="text-label-md text-on-surface-variant">© 2026 Amey Pawar</p>
        </footer>
      </div>
    </section>
  );
}
