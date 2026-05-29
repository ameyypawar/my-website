"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary"
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-40 flex items-center gap-5 pt-[max(1rem,env(safe-area-inset-top))] pl-[max(1rem,env(safe-area-inset-left))] sm:pt-0 sm:pl-0"
    >
      {links.map(({ href, label }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`text-label-md transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-md-sm ${
              active
                ? "text-on-surface"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
