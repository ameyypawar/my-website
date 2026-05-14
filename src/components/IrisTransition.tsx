"use client";

import { useEffect, useRef } from "react";

export type IrisPhase = "idle" | "in" | "hold" | "out";

export default function IrisTransition({
  phase,
  onPhaseDone,
}: {
  phase: IrisPhase;
  onPhaseDone: (p: IrisPhase) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase === "idle" || phase === "hold") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 0 : 600;
    const t = window.setTimeout(() => onPhaseDone(phase), dur);
    return () => window.clearTimeout(t);
  }, [phase, onPhaseDone]);

  return <div ref={ref} className="iris-layer" data-phase={phase} aria-hidden="true" />;
}
