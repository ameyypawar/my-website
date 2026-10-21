import SocialLink from "@/components/SocialLink";
import { profile } from "@/data/resume";
import { socials } from "@/data/socials";

export default function ContactFooter() {
  return (
    <footer
      aria-labelledby="contact-heading"
      className="mt-10 border-t border-dashed border-outline"
    >
      <div className="px-6 py-3 bg-surface-container/60 border-b border-dashed border-outline">
        <h2 id="contact-heading" className="text-title-lg font-semibold tracking-tight">
          Get in touch
        </h2>
      </div>
      <p className="px-6 py-5 text-body-md text-on-surface-variant">
        Open to new-grad roles, internships and contract work (
        {profile.contract}). Easiest via email.
      </p>
      <nav
        aria-label="Social links"
        className="grid grid-cols-1 sm:grid-cols-2 border-t border-dashed border-outline"
      >
        {socials.map((s) => (
          <SocialLink key={s.label} social={s} />
        ))}
      </nav>

      <div className="px-6 py-6 flex items-center gap-3">
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
    </footer>
  );
}
