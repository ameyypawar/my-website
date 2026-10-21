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
  // Set once the game has been opened, so focus returns to the button after
  // it closes but not on first load.
  const openedRef = useRef(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  const open = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    openedRef.current = true;
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
    if (phase === "closed" && openedRef.current) buttonRef.current?.focus();
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
        data-print-hide
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center gap-0 sm:gap-2 bg-on-surface text-surface rounded-full p-3 sm:px-5 sm:py-2.5 text-sm font-medium shadow-lg hover:bg-primary transition-colors"
      >
        <Play size={16} />
        <span className="hidden sm:inline">Play Breakout</span>
      </button>
      {overlayVisible && <BreakoutOverlay onClose={close} />}
      <IrisTransition phase={irisPhase} origin={origin} onPhaseDone={onIrisDone} />
    </>
  );
}
