"use client";

import { useEffect, useRef } from "react";

type Brick = { x: number; y: number; w: number; h: number; alive: boolean; color: string };
type Status = "idle" | "playing" | "won" | "lost";

const LOGICAL_W = 480;
const LOGICAL_H = 360;
const PADDLE_W = 80;
const PADDLE_H = 10;
const BALL_R = 5;
const ROWS = 5;
const COLS = 8;
const BRICK_W = 52;
const BRICK_H = 16;
const BRICK_GAP = 4;
const GRID_TOP = 40;
const GRID_LEFT = (LOGICAL_W - (COLS * BRICK_W + (COLS - 1) * BRICK_GAP)) / 2;
const ROW_COLORS = ["#C4E890", "#A3D262", "#A3D262", "#7CB342", "#7CB342"];

function makeBricks(): Brick[] {
  const out: Brick[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      out.push({
        x: GRID_LEFT + c * (BRICK_W + BRICK_GAP),
        y: GRID_TOP + r * (BRICK_H + BRICK_GAP),
        w: BRICK_W,
        h: BRICK_H,
        alive: true,
        color: ROW_COLORS[r],
      });
    }
  }
  return out;
}

export default function BreakoutGame({
  onScoreChange,
  onLivesChange,
  onStatusChange,
}: {
  onScoreChange: (n: number) => void;
  onLivesChange: (n: number) => void;
  onStatusChange: (s: Status) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef({
    paddle: { x: (LOGICAL_W - PADDLE_W) / 2, w: PADDLE_W, h: PADDLE_H },
    ball: { x: LOGICAL_W / 2, y: LOGICAL_H - 30, vx: 0, vy: 0, r: BALL_R, attached: true },
    bricks: makeBricks(),
    score: 0,
    lives: 3,
    status: "idle" as Status,
  });

  const cbRef = useRef({ onScoreChange, onLivesChange, onStatusChange });
  useEffect(() => {
    cbRef.current = { onScoreChange, onLivesChange, onStatusChange };
  });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeBuffer = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const cssW = Math.max(1, Math.round(rect.width));
      const cssH = Math.max(1, Math.round(rect.height));
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
      ctx.setTransform(
        (cssW / LOGICAL_W) * dpr, 0,
        0, (cssH / LOGICAL_H) * dpr,
        0, 0,
      );
    };

    resizeBuffer();

    const ro = new ResizeObserver(resizeBuffer);
    ro.observe(canvas);
    window.addEventListener("orientationchange", resizeBuffer);

    const g = gameRef.current;
    let raf = 0;

    const reattach = () => {
      g.ball.attached = true;
      g.ball.vx = 0;
      g.ball.vy = 0;
      g.ball.x = g.paddle.x + g.paddle.w / 2;
      g.ball.y = LOGICAL_H - 30;
    };

    const launch = () => {
      if (!g.ball.attached || g.status === "won" || g.status === "lost") return;
      g.ball.attached = false;
      g.ball.vy = -4;
      g.ball.vx = (Math.random() * 2 - 1) * 2;
      if (g.status === "idle") {
        g.status = "playing";
        cbRef.current.onStatusChange("playing");
      }
    };

    const movePaddleTo = (clientX: number) => {
      const rect = canvas.getBoundingClientRect();
      const scale = LOGICAL_W / rect.width;
      const localX = (clientX - rect.left) * scale;
      g.paddle.x = Math.max(0, Math.min(LOGICAL_W - g.paddle.w, localX - g.paddle.w / 2));
      if (g.ball.attached) g.ball.x = g.paddle.x + g.paddle.w / 2;
    };

    const onPointerMove = (e: PointerEvent) => movePaddleTo(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) movePaddleTo(e.touches[0].clientX);
    };
    const onPointerDown = () => launch();
    const keyState = { left: false, right: false };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keyState.left = true;
      else if (e.key === "ArrowRight") keyState.right = true;
      else if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        launch();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keyState.left = false;
      else if (e.key === "ArrowRight") keyState.right = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    const step = () => {
      if (keyState.left) {
        g.paddle.x = Math.max(0, g.paddle.x - 6);
        if (g.ball.attached) g.ball.x = g.paddle.x + g.paddle.w / 2;
      }
      if (keyState.right) {
        g.paddle.x = Math.min(LOGICAL_W - g.paddle.w, g.paddle.x + 6);
        if (g.ball.attached) g.ball.x = g.paddle.x + g.paddle.w / 2;
      }

      if (!g.ball.attached && g.status === "playing") {
        g.ball.x += g.ball.vx;
        g.ball.y += g.ball.vy;

        if (g.ball.x - g.ball.r < 0) { g.ball.x = g.ball.r; g.ball.vx *= -1; }
        if (g.ball.x + g.ball.r > LOGICAL_W) { g.ball.x = LOGICAL_W - g.ball.r; g.ball.vx *= -1; }
        if (g.ball.y - g.ball.r < 0) { g.ball.y = g.ball.r; g.ball.vy *= -1; }

        const py = LOGICAL_H - 24;
        if (g.ball.y + g.ball.r >= py && g.ball.y + g.ball.r <= py + g.paddle.h + 4
            && g.ball.x >= g.paddle.x && g.ball.x <= g.paddle.x + g.paddle.w
            && g.ball.vy > 0) {
          const hit = (g.ball.x - (g.paddle.x + g.paddle.w / 2)) / (g.paddle.w / 2);
          g.ball.vx = hit * 5;
          g.ball.vy = -Math.abs(g.ball.vy);
        }

        for (const br of g.bricks) {
          if (!br.alive) continue;
          if (g.ball.x + g.ball.r > br.x && g.ball.x - g.ball.r < br.x + br.w
              && g.ball.y + g.ball.r > br.y && g.ball.y - g.ball.r < br.y + br.h) {
            const bcx = br.x + br.w / 2, bcy = br.y + br.h / 2;
            const dx = (g.ball.x - bcx) / (br.w / 2);
            const dy = (g.ball.y - bcy) / (br.h / 2);
            if (Math.abs(dx) > Math.abs(dy)) g.ball.vx *= -1; else g.ball.vy *= -1;
            br.alive = false;
            g.score += 10;
            cbRef.current.onScoreChange(g.score);
            if (g.bricks.every((b) => !b.alive)) {
              g.status = "won";
              cbRef.current.onStatusChange("won");
            }
            break;
          }
        }

        if (g.ball.y - g.ball.r > LOGICAL_H) {
          g.lives -= 1;
          cbRef.current.onLivesChange(g.lives);
          if (g.lives <= 0) {
            g.status = "lost";
            cbRef.current.onStatusChange("lost");
          } else {
            reattach();
          }
        }
      }

      ctx.clearRect(0, 0, LOGICAL_W, LOGICAL_H);
      ctx.fillStyle = "#0A0A0A";
      ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);

      for (const br of g.bricks) {
        if (!br.alive) continue;
        ctx.fillStyle = br.color;
        ctx.fillRect(br.x, br.y, br.w, br.h);
      }

      ctx.fillStyle = "#FFFFFF";
      const px = g.paddle.x, py2 = LOGICAL_H - 24;
      ctx.beginPath();
      const rr = 4;
      ctx.moveTo(px + rr, py2);
      ctx.arcTo(px + g.paddle.w, py2, px + g.paddle.w, py2 + g.paddle.h, rr);
      ctx.arcTo(px + g.paddle.w, py2 + g.paddle.h, px, py2 + g.paddle.h, rr);
      ctx.arcTo(px, py2 + g.paddle.h, px, py2, rr);
      ctx.arcTo(px, py2, px + g.paddle.w, py2, rr);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.arc(g.ball.x, g.ball.y, g.ball.r, 0, Math.PI * 2);
      ctx.fill();

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", resizeBuffer);
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full max-w-[480px] mx-auto rounded-md-md border border-outline/40 bg-[#0A0A0A] aspect-[4/3] max-h-[calc(100dvh-9rem)] [touch-action:none]"
      aria-label="Breakout game canvas"
    />
  );
}
