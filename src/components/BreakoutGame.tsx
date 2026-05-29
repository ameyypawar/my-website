"use client";

import { useEffect, useRef } from "react";

type Brick = { x: number; y: number; w: number; h: number; alive: boolean; color: string; points: number };
type Status = "idle" | "playing" | "won" | "lost";

// --- Logical portrait field (3:4). Integers keep brick math gap-free. ---
const LOGICAL_W = 360;
const LOGICAL_H = 480;

const WALL = 10;                 // thickness of left/right/top walls
const WALL_COLOR = "#cccccc";
const FIELD_BG = "#000000";

const FIELD_L = WALL;            // inner playfield bounds
const FIELD_R = LOGICAL_W - WALL;
const FIELD_T = WALL;
const FIELD_W = FIELD_R - FIELD_L; // 340

const ROWS = 8;
const COLS = 14;
const BRICK_GAP = 2;
const GRID_TOP = 90;
const BRICK_H = 12;
const BRICK_W = (FIELD_W - (COLS + 1) * BRICK_GAP) / COLS; // ~22.14
const GRID_LEFT = FIELD_L + BRICK_GAP;

// Row colors top->bottom and their points (authentic arcade scoring).
const ROW_DEF = [
  { color: "#d44b3a", points: 7 }, // red
  { color: "#d44b3a", points: 7 },
  { color: "#d9863a", points: 5 }, // orange
  { color: "#d9863a", points: 5 },
  { color: "#4ea24a", points: 3 }, // green
  { color: "#4ea24a", points: 3 },
  { color: "#d6c64a", points: 1 }, // yellow
  { color: "#d6c64a", points: 1 },
];

const PADDLE_W = 52;
const PADDLE_W_SHRUNK = 26;
const PADDLE_H = 8;
const PADDLE_Y = LOGICAL_H - 36;
const BALL_R = 4;

const BALL_SPEED_0 = 3.2;
const MAX_SPEED = 6.4;

const HIGH_LABEL = "AMEY";
const HIGH_SCORE = 448;    // all-time high == theoretical max, so a perfect game ties it

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
        color: ROW_DEF[r].color,
        points: ROW_DEF[r].points,
      });
    }
  }
  return out;
}

// --- 7-segment digit map. Order: [a, b, c, d, e, f, g] ---
const SEG: Record<string, boolean[]> = {
  "0": [true, true, true, true, true, true, false],
  "1": [false, true, true, false, false, false, false],
  "2": [true, true, false, true, true, false, true],
  "3": [true, true, true, true, false, false, true],
  "4": [false, true, true, false, false, true, true],
  "5": [true, false, true, true, false, true, true],
  "6": [true, false, true, true, true, true, true],
  "7": [true, true, true, false, false, false, false],
  "8": [true, true, true, true, true, true, true],
  "9": [true, true, true, true, false, true, true],
};

// 5x7 block letters for the "AMEY" label (1 = filled pixel).
const LETTERS: Record<string, number[][]> = {
  A: [
    [0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],
    [1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],
  ],
  M: [
    [1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,1,0,1],
    [1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],
  ],
  E: [
    [1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0],
    [1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1],
  ],
  Y: [
    [1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],
    [0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],
  ],
};

export default function BreakoutGame({
  onScoreChange,
  onStatusChange,
}: {
  onScoreChange: (n: number) => void;
  onStatusChange: (s: Status) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef({
    paddle: { x: (LOGICAL_W - PADDLE_W) / 2, w: PADDLE_W, h: PADDLE_H },
    ball: { x: LOGICAL_W / 2, y: PADDLE_Y - BALL_R - 1, vx: 0, vy: 0, r: BALL_R, attached: true },
    bricks: makeBricks(),
    score: 0,
    lives: 3,
    speed: BALL_SPEED_0,
    paddleHits: 0,
    hitOrange: false,
    hitRed: false,
    brokeThrough: false,
    status: "idle" as Status,
  });

  const cbRef = useRef({ onScoreChange, onStatusChange });
  useEffect(() => {
    cbRef.current = { onScoreChange, onStatusChange };
  });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let scale = 1;
    let offX = 0;
    let offY = 0;
    let dpr = 1;

    const resizeBuffer = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const cssW = Math.max(1, Math.round(rect.width));
      const cssH = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);

      scale = Math.min(cssW / LOGICAL_W, cssH / LOGICAL_H);
      offX = (cssW - LOGICAL_W * scale) / 2;
      offY = (cssH - LOGICAL_H * scale) / 2;

      ctx.setTransform(
        scale * dpr, 0,
        0, scale * dpr,
        offX * dpr, offY * dpr,
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
      g.ball.y = PADDLE_Y - BALL_R - 1;
    };

    const setSpeed = (s: number) => { g.speed = Math.min(MAX_SPEED, s); };

    const applySpeed = () => {
      const m = Math.hypot(g.ball.vx, g.ball.vy) || 1;
      g.ball.vx = (g.ball.vx / m) * g.speed;
      g.ball.vy = (g.ball.vy / m) * g.speed;
    };

    const launch = () => {
      if (!g.ball.attached || g.status === "won" || g.status === "lost") return;
      g.ball.attached = false;
      g.ball.vy = -1;
      g.ball.vx = (Math.random() * 2 - 1) * 0.5;
      applySpeed();
      if (g.status === "idle") {
        g.status = "playing";
        cbRef.current.onStatusChange("playing");
      }
    };

    const movePaddleTo = (clientX: number) => {
      const rect = canvas.getBoundingClientRect();
      const cssX = clientX - rect.left;
      const logicalX = (cssX - offX) / scale;
      g.paddle.x = Math.max(FIELD_L, Math.min(FIELD_R - g.paddle.w, logicalX - g.paddle.w / 2));
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
      else if (e.key === " " || e.code === "Space") { e.preventDefault(); launch(); }
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

    const drawDigit = (ch: string, x: number, y: number, w: number, h: number, color: string) => {
      const segs = SEG[ch];
      if (!segs) return;
      ctx.fillStyle = color;
      const t = Math.max(2, w * 0.18);
      const innerW = w - 2 * t;
      const half = (h - 3 * t) / 2;
      if (segs[0]) ctx.fillRect(x + t, y, innerW, t);
      if (segs[1]) ctx.fillRect(x + w - t, y + t, t, half);
      if (segs[2]) ctx.fillRect(x + w - t, y + 2 * t + half, t, half);
      if (segs[3]) ctx.fillRect(x + t, y + h - t, innerW, t);
      if (segs[4]) ctx.fillRect(x, y + 2 * t + half, t, half);
      if (segs[5]) ctx.fillRect(x, y + t, t, half);
      if (segs[6]) ctx.fillRect(x + t, y + t + half, innerW, t);
    };

    const drawNumber = (n: number, pad: number, x: number, y: number, dw: number, dh: number, gap: number, color: string) => {
      const s = String(n).padStart(pad, "0");
      for (let i = 0; i < s.length; i++) {
        drawDigit(s[i], x + i * (dw + gap), y, dw, dh, color);
      }
    };

    const drawLetters = (text: string, x: number, y: number, px: number, color: string) => {
      ctx.fillStyle = color;
      let cx = x;
      for (const ch of text) {
        const grid = LETTERS[ch];
        if (grid) {
          for (let r = 0; r < grid.length; r++)
            for (let c = 0; c < grid[r].length; c++)
              if (grid[r][c]) ctx.fillRect(cx + c * px, y + r * px, px, px);
        }
        cx += 6 * px;
      }
    };

    const onBrickHit = (br: Brick) => {
      br.alive = false;
      g.score += br.points;
      cbRef.current.onScoreChange(g.score);
      if (br.points === 5 && !g.hitOrange) { g.hitOrange = true; setSpeed(g.speed * 1.10); applySpeed(); }
      if (br.points === 7 && !g.hitRed)    { g.hitRed = true;    setSpeed(g.speed * 1.10); applySpeed(); }
      if (g.bricks.every((b) => !b.alive)) {
        g.status = "won";
        cbRef.current.onStatusChange("won");
      }
    };

    const step = () => {
      if (keyState.left) {
        g.paddle.x = Math.max(FIELD_L, g.paddle.x - 5);
        if (g.ball.attached) g.ball.x = g.paddle.x + g.paddle.w / 2;
      }
      if (keyState.right) {
        g.paddle.x = Math.min(FIELD_R - g.paddle.w, g.paddle.x + 5);
        if (g.ball.attached) g.ball.x = g.paddle.x + g.paddle.w / 2;
      }

      if (!g.ball.attached && g.status === "playing") {
        g.ball.x += g.ball.vx;
        g.ball.y += g.ball.vy;

        if (g.ball.x - g.ball.r < FIELD_L) { g.ball.x = FIELD_L + g.ball.r; g.ball.vx = Math.abs(g.ball.vx); }
        if (g.ball.x + g.ball.r > FIELD_R) { g.ball.x = FIELD_R - g.ball.r; g.ball.vx = -Math.abs(g.ball.vx); }
        if (g.ball.y - g.ball.r < FIELD_T) {
          g.ball.y = FIELD_T + g.ball.r;
          g.ball.vy = Math.abs(g.ball.vy);
          if (!g.brokeThrough) {
            g.brokeThrough = true;
            const cx = g.paddle.x + g.paddle.w / 2;
            g.paddle.w = PADDLE_W_SHRUNK;
            g.paddle.x = Math.max(FIELD_L, Math.min(FIELD_R - g.paddle.w, cx - g.paddle.w / 2));
          }
        }

        if (g.ball.y + g.ball.r >= PADDLE_Y && g.ball.y + g.ball.r <= PADDLE_Y + g.paddle.h + 4
            && g.ball.x >= g.paddle.x && g.ball.x <= g.paddle.x + g.paddle.w
            && g.ball.vy > 0) {
          g.paddleHits += 1;
          if (g.paddleHits === 4 || g.paddleHits === 12) setSpeed(g.speed * 1.08);
          const hit = (g.ball.x - (g.paddle.x + g.paddle.w / 2)) / (g.paddle.w / 2);
          const maxAngle = (60 * Math.PI) / 180;
          const angle = hit * maxAngle;
          g.ball.vx = Math.sin(angle) * g.speed;
          g.ball.vy = -Math.cos(angle) * g.speed;
          g.ball.y = PADDLE_Y - g.ball.r - 1;
        }

        for (const br of g.bricks) {
          if (!br.alive) continue;
          if (g.ball.x + g.ball.r > br.x && g.ball.x - g.ball.r < br.x + br.w
              && g.ball.y + g.ball.r > br.y && g.ball.y - g.ball.r < br.y + br.h) {
            const bcx = br.x + br.w / 2, bcy = br.y + br.h / 2;
            const dx = (g.ball.x - bcx) / (br.w / 2);
            const dy = (g.ball.y - bcy) / (br.h / 2);
            if (Math.abs(dx) > Math.abs(dy)) g.ball.vx *= -1; else g.ball.vy *= -1;
            onBrickHit(br);
            break;
          }
        }

        if (g.ball.y - g.ball.r > LOGICAL_H) {
          g.lives -= 1;
          if (g.lives <= 0) {
            g.status = "lost";
            cbRef.current.onStatusChange("lost");
          } else {
            reattach();
          }
        }
      }

      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = FIELD_BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      ctx.fillStyle = WALL_COLOR;
      ctx.fillRect(0, 0, LOGICAL_W, FIELD_T);
      ctx.fillRect(0, 0, WALL, LOGICAL_H);
      ctx.fillRect(FIELD_R, 0, WALL, LOGICAL_H);

      const dh = 22, dw = 14, dgap = 4;
      drawNumber(g.score, 3, FIELD_L + 8, 26, dw, dh, dgap, "#ffffff");
      const ameyPx = 2;
      drawLetters(HIGH_LABEL, LOGICAL_W - WALL - 4 * 6 * ameyPx - 4, 22, ameyPx, "#cccccc");
      drawNumber(HIGH_SCORE, 3, LOGICAL_W - WALL - 3 * (dw + dgap) - 4, 40, dw, dh, dgap, "#ffffff");

      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < g.lives; i++) {
        ctx.beginPath();
        ctx.arc(FIELD_L + 8 + i * 12, LOGICAL_H - 14, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const br of g.bricks) {
        if (!br.alive) continue;
        ctx.fillStyle = br.color;
        ctx.fillRect(br.x, br.y, br.w, br.h);
      }

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(g.paddle.x, PADDLE_Y, g.paddle.w, g.paddle.h);

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
      className="block w-full h-full bg-black [touch-action:none]"
      aria-label="Breakout arcade game. Score shown on screen."
    />
  );
}
