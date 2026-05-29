"use client";

import { useEffect, useRef } from "react";

export type IrisPhase = "idle" | "in" | "hold" | "out";

export default function IrisTransition({
  phase,
  origin,
  onPhaseDone,
}: {
  phase: IrisPhase;
  origin: { x: number; y: number } | null;
  onPhaseDone: (p: IrisPhase) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase === "idle" || phase === "hold") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 0 : 2500;
    const t = window.setTimeout(() => onPhaseDone(phase), dur);
    return () => window.clearTimeout(t);
  }, [phase, onPhaseDone]);

  const style = origin
    ? ({ ["--iris-x" as string]: `${origin.x}px`, ["--iris-y" as string]: `${origin.y}px` } as React.CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      className="iris-layer"
      data-phase={phase}
      style={style}
      aria-hidden="true"
    />
  );
}
