import Reveal from "@/components/Reveal";
import SocialLink from "@/components/SocialLink";
import { socials } from "@/data/socials";

export default function ContactFooter() {
  return (
    <Reveal>
      <footer aria-labelledby="contact-heading" className="mt-16 pt-12 border-t border-outline/30">
        <h2 id="contact-heading" className="text-headline-lg font-semibold">
          Get in touch
        </h2>
        <p className="text-body-lg text-on-surface-variant mt-4 max-w-xl">
          Open to interesting collaborations and quick chats. Easiest via email or DMs.
        </p>
        <nav aria-label="Social links" className="mt-8 flex flex-wrap gap-2">
          {socials.map((s) => (
            <SocialLink key={s.label} social={s} />
          ))}
        </nav>
        <p className="text-label-md text-on-surface-variant mt-12">© 2026 Amey Pawar</p>
      </footer>
    </Reveal>
  );
}
