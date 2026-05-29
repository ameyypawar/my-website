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
    <header className="sticky top-0 z-40 w-full border-b border-outline/25 bg-surface/80 backdrop-blur-md supports-[backdrop-filter]:bg-surface/65">
      <nav
        aria-label="Primary"
        className="w-full max-w-[1024px] mx-auto px-6 sm:px-10 h-14 sm:h-16 flex items-center justify-between gap-4 pt-[env(safe-area-inset-top)]"
      >
        <Link
          href="/"
          className="text-body-lg font-semibold tracking-tight text-on-surface hover:text-primary transition-colors rounded-md-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
        >
          Amey&nbsp;Pawar
        </Link>

        <div className="flex items-center gap-6 sm:gap-8 pr-12 sm:pr-44">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative text-body-md py-1 transition-colors rounded-md-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 ${
                  active
                    ? "text-on-surface after:absolute after:left-0 after:-bottom-px after:h-0.5 after:w-full after:rounded-full after:bg-primary after:content-['']"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
