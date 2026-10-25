"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-dashed border-outline bg-surface/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="px-4 sm:px-6 h-14 flex items-center justify-between gap-4 pt-[env(safe-area-inset-top)]"
      >
        <Link
          href="/"
          aria-label="Amey Pawar, home"
          className="inline-flex items-center justify-center w-8 h-8 rounded-md-sm bg-on-surface text-surface text-label-md font-bold tracking-tight hover:bg-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          AP
        </Link>

        <div className="flex items-center gap-1.5">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1 text-body-md transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
