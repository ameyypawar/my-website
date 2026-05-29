"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import IrisTransition, { type IrisPhase } from "./IrisTransition";
import BreakoutOverlay from "./BreakoutOverlay";

type Phase = "closed" | "iris-in" | "iris-hold" | "iris-out" | "open";

export default function PlayBreakout() {
  const [phase, setPhase] = useState<Phase>("closed");
  // targetDir drives which direction we are transitioning; kept in both a ref
  // (for use inside callbacks) and state (for safe render reads — rule react-hooks/refs
  // forbids ref.current in render).
  const [targetDir, setTargetDir] = useState<"open" | "closed">("open");
  const targetRef = useRef<"open" | "closed">("open");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  const open = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    targetRef.current = "open";
    setTargetDir("open");
    setPhase("iris-in");
  };
  const close = useCallback(() => {
    targetRef.current = "closed";
    setTargetDir("closed");
    setPhase("iris-in");
  }, []);

  useEffect(() => {
    if (phase !== "iris-hold") return;
    const t = window.setTimeout(() => setPhase("iris-out"), 700);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "closed") buttonRef.current?.focus();
  }, [phase]);

  const onIrisDone = (p: IrisPhase) => {
    if (p === "in") setPhase("iris-hold");
    else if (p === "out") setPhase(targetRef.current === "open" ? "open" : "closed");
  };

  const irisPhase: IrisPhase =
    phase === "iris-in" ? "in" :
    phase === "iris-hold" ? "hold" :
    phase === "iris-out" ? "out" : "idle";

  const overlayVisible = phase === "iris-hold" ? targetDir === "open"
                       : phase === "iris-out" ? targetDir === "open"
                       : phase === "open";

  return (
    <>
      <button
        ref={buttonRef}
        onClick={open}
        aria-label="Play Breakout game"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 inline-flex items-center justify-center gap-0 sm:gap-2 bg-white text-black rounded-full p-3 sm:px-6 sm:py-3 text-sm font-medium shadow hover:shadow-lg hover:ring-2 hover:ring-white/30 transition pt-[max(1rem,env(safe-area-inset-top))] pr-[max(1rem,env(safe-area-inset-right))] sm:pt-3 sm:pr-6"
      >
        <Play size={16} />
        <span className="hidden sm:inline">Play Breakout</span>
      </button>
      {overlayVisible && <BreakoutOverlay onClose={close} />}
      <IrisTransition phase={irisPhase} origin={origin} onPhaseDone={onIrisDone} />
    </>
  );
}
