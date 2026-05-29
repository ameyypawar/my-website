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
    const el = ref.current;
    if (!el) return;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      window.clearTimeout(timer);
      el.removeEventListener("animationend", onEnd);
      onPhaseDone(phase);
    };
    const onEnd = (e: AnimationEvent) => {
      if (e.target === el) finish();
    };

    const cs = window.getComputedStyle(el);
    const parseMs = (v: string) =>
      v.trim().endsWith("ms") ? parseFloat(v) : parseFloat(v) * 1000;
    const cssDur = parseMs((cs.animationDuration || "0s").split(",")[0]) || 0;

    el.addEventListener("animationend", onEnd);
    const timer = window.setTimeout(finish, cssDur + 300);

    return () => {
      done = true;
      window.clearTimeout(timer);
      el.removeEventListener("animationend", onEnd);
    };
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
