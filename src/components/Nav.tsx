"use client";
import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "connect", label: "Connect" },
];

export default function Nav() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="absolute top-[100vh] h-px w-px" />
      <nav
        aria-label="Primary"
        className={`fixed top-0 inset-x-0 z-50 transition-[opacity,backdrop-filter,background-color] duration-300 ${
          visible
            ? "opacity-100 backdrop-blur-md bg-surface/70"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="max-w-[1200px] mx-auto flex justify-end gap-6 px-6 sm:px-12 py-4 text-label-md uppercase tracking-[0.15em] text-on-surface-variant">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-primary transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
