"use client";

import { useEffect } from "react";

export type ConfettiPiece = {
  left: number; // %
  dx: number; // px
  rot: number; // deg
  delay: number; // s
  duration: number; // s
  color: string;
  round: boolean;
};

const colors = [
  "var(--color-rose)",
  "var(--color-peach)",
  "var(--color-wine)",
  "var(--color-sage)",
  "#e2b865",
  "var(--color-blush-200)",
];

/** Генерирует кусочки конфетти. Вызывать в обработчике события, не при рендере. */
export function createConfetti(count = 70): ConfettiPiece[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    dx: (Math.random() - 0.5) * 220,
    rot: (Math.random() - 0.5) * 1080,
    delay: Math.random() * 0.5,
    duration: 2.4 + Math.random() * 1.6,
    color: colors[Math.floor(Math.random() * colors.length)],
    round: Math.random() > 0.6,
  }));
}

type ConfettiBurstProps = {
  pieces: ConfettiPiece[];
  onDone: () => void;
};

/** Конфетти, падающее на весь экран. Само удаляется после анимации. */
export function ConfettiBurst({ pieces, onDone }: ConfettiBurstProps) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 4500);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className={`absolute top-0 animate-confetti ${p.round ? "size-2 rounded-full" : "h-3 w-1.5 rounded-[1px]"}`}
          style={
            {
              left: `${p.left}%`,
              background: p.color,
              "--dx": `${p.dx}px`,
              "--rot": `${p.rot}deg`,
              "--delay": `${p.delay}s`,
              "--duration": `${p.duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
