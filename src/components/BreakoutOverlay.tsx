"use client";

import { useEffect, useRef, useState } from "react";
import { X, Play } from "lucide-react";
import BreakoutGame from "./BreakoutGame";

type Status = "idle" | "playing" | "won" | "lost";

export default function BreakoutOverlay({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    const overlay = overlayRef.current;
    const inerted: Element[] = [];
    for (const child of Array.from(document.body.children)) {
      if (child === overlay) continue;
      if (!child.hasAttribute("inert")) {
        child.setAttribute("inert", "");
        inerted.push(child);
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      for (const el of inerted) el.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const restart = () => {
    setScore(0);
    setStatus("idle");
    setGameKey((k) => k + 1);
  };

  const won = status === "won";

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Breakout game"
      className="fixed inset-0 z-[60] bg-black"
    >
      <BreakoutGame
        key={gameKey}
        onScoreChange={setScore}
        onStatusChange={setStatus}
      />

      <p className="sr-only" aria-live="polite">
        {status === "won"
          ? `You tied AMEY. Final score ${score} of 448.`
          : status === "lost"
          ? `Game over. Final score ${score}.`
          : `Score ${score}.`}
      </p>

      <button
        autoFocus
        onClick={onClose}
        aria-label="Close game"
        className="absolute top-4 right-4 z-10 rounded-full p-2 bg-surface-container/80 backdrop-blur text-on-surface hover:bg-surface-container-high"
      >
        <X size={18} />
      </button>

      <div className="absolute bottom-4 inset-x-0 z-10 text-center text-label-md text-on-surface-variant/70 pointer-events-none">
        Space to launch · drag / arrows to move · Esc to close
      </div>

      {(status === "won" || status === "lost") && (
        <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
          <div className="bg-surface-container border border-outline/40 rounded-md-md p-6 text-center max-w-sm">
            <p className="text-title-lg font-semibold">
              {won ? "You tied AMEY — 448" : "Game over."}
            </p>
            <p className="text-body-md text-on-surface-variant mt-1">
              {won ? "Perfect game. Score " + score + " of 448." : "Score " + score}
            </p>
            <div className="mt-4 flex gap-2 justify-center">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-sm font-medium"
              >
                <Play size={14} /> Restart
              </button>
              <button
                onClick={onClose}
                className="rounded-full px-4 py-2 text-sm font-medium border border-outline/40 text-on-surface hover:bg-surface-container-high"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
