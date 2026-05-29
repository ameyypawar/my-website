import Reveal from "@/components/Reveal";
import SocialLink from "@/components/SocialLink";
import { socials } from "@/data/socials";

export default function ContactFooter() {
  return (
    <footer
      aria-labelledby="contact-heading"
      className="w-full border-t border-outline/25 mt-24"
    >
      <Reveal>
        <div className="w-full max-w-[1024px] mx-auto px-6 sm:px-10 py-16">
          <h2 id="contact-heading" className="text-headline-lg font-semibold">
            Get in touch
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-4 max-w-xl">
            Open to interesting collaborations and quick chats. Easiest via
            email or DMs.
          </p>
          <nav aria-label="Social links" className="mt-8 flex flex-wrap gap-2">
            {socials.map((s) => (
              <SocialLink key={s.label} social={s} />
            ))}
          </nav>

          <div className="mt-14 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md-sm bg-on-surface text-surface text-label-md font-bold tracking-tight"
            >
              AP
            </span>
            <p className="text-label-md text-on-surface-variant">
              © 2026 Amey Pawar
            </p>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
