"use client";

import { useEffect, useState } from "react";
import { X, Play } from "lucide-react";
import BreakoutGame from "./BreakoutGame";

export default function BreakoutOverlay({ onClose }: { onClose: () => void }) {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [status, setStatus] = useState<"idle" | "playing" | "won" | "lost">("idle");
  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) main.setAttribute("inert", "");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      if (main) main.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const restart = () => {
    setScore(0);
    setLives(3);
    setStatus("idle");
    setGameKey((k) => k + 1);
  };

  const hearts = "♥ ".repeat(Math.max(0, lives)).trim();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Breakout game"
      className="fixed inset-0 z-[60] bg-surface flex flex-col"
    >
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-outline/30">
        <div className="font-mono uppercase text-[11px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.15em] text-on-surface flex flex-wrap gap-x-3 gap-y-0 min-w-0">
          <span>SCORE {String(score).padStart(6, "0")}</span>
          <span aria-hidden className="hidden sm:inline text-on-surface-variant">·</span>
          <span>LIVES {hearts || "—"}</span>
        </div>
        <div className="hidden md:block text-label-md text-on-surface-variant">
          Press space to launch · drag / arrows to move
        </div>
        <button
          autoFocus
          onClick={onClose}
          aria-label="Close game"
          className="shrink-0 rounded-full p-2 hover:bg-surface-container-high text-on-surface"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="relative w-full max-w-[480px] flex items-center justify-center">
          <BreakoutGame
            key={gameKey}
            onScoreChange={setScore}
            onLivesChange={setLives}
            onStatusChange={setStatus}
          />
          {(status === "won" || status === "lost") && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-surface-container border border-outline/40 rounded-md-md p-6 text-center">
                <p className="text-title-lg font-semibold">
                  {status === "won" ? "You won." : "Game over."}
                </p>
                <p className="text-body-md text-on-surface-variant mt-1">
                  Score {score}
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
      </div>
    </div>
  );
}
