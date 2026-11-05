"use client";

import { useCallback, useState } from "react";
import { ConfettiBurst, createConfetti, type ConfettiPiece } from "@/components/ui/ConfettiBurst";
import { Icon } from "@/components/ui/Icon";
import { CakeIllustration } from "./CakeIllustration";

type BirthdayCakeProps = {
  pugBubble: string;
  blowButton: string;
  relightButton: string;
  hint: string;
  hintDone: string;
};

/** Интерактивный торт: свечи гаснут по кнопке, летит конфетти, мопсы радуются. */
export function BirthdayCake({
  pugBubble,
  blowButton,
  relightButton,
  hint,
  hintDone,
}: BirthdayCakeProps) {
  const [lit, setLit] = useState(true);
  // Счётчик задуваний: перезапускает анимации дыма и прыжка мопсов
  const [blowCount, setBlowCount] = useState(0);
  const [confetti, setConfetti] = useState<ConfettiPiece[] | null>(null);

  const toggle = () => {
    if (lit) {
      setLit(false);
      setBlowCount((n) => n + 1);
      setConfetti(createConfetti());
    } else {
      setLit(true);
    }
  };

  const clearConfetti = useCallback(() => setConfetti(null), []);
  const pugClass = !lit ? "animate-hop" : "";

  return (
    <div className="flex flex-col items-center rounded-3xl bg-surface p-4 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1)] md:p-6">
      {/* Сцена с тортом */}
      <div className="relative mb-4 flex h-[260px] w-full items-end justify-center overflow-hidden rounded-2xl bg-blush-100 md:h-[340px]">
        {/* Тёплое свечение, пока горят свечи */}
        <div
          aria-hidden
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(255_220_195/0.7),transparent_65%)] transition-opacity duration-700 ${
            lit ? "opacity-100" : "opacity-0"
          }`}
        />

        <CakeIllustration
          lit={lit}
          smokeKey={blowCount}
          className="relative mb-3 w-[210px] md:mb-4 md:w-[280px]"
        />

        {/* Мопсы по бокам торта */}
        <div key={`l${blowCount}`} className={`absolute bottom-0 left-1 md:left-[14%] ${pugClass}`}>
          <Icon src="/images/hero/pug-mascot.svg" width={112} height={96} className="w-[78px] md:w-[104px]" />
        </div>
        <div
          key={`r${blowCount}`}
          className={`absolute right-1 bottom-0 md:right-[14%] ${pugClass}`}
          style={{ animationDelay: "0.15s" }}
        >
          <Icon
            src="/images/hero/pug-mascot.svg"
            width={112}
            height={96}
            className="w-[78px] -scale-x-100 md:w-[104px]"
          />
        </div>

        {/* Реплика мопсов */}
        <span className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1)] backdrop-blur-[4px]">
          <span aria-hidden className="text-[12px] leading-4">
            🐾
          </span>
          <span className="text-[11px] leading-4 font-semibold tracking-[0.44px] text-cocoa">
            {pugBubble}
          </span>
        </span>
      </div>

      <button
        type="button"
        onClick={toggle}
        className={`flex w-full max-w-[420px] items-center justify-center gap-2 rounded-full px-5 py-4 text-center text-[15px] leading-5 font-semibold tracking-[0.15px] transition-[transform,background-color] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine ${
          lit
            ? "bg-wine text-white shadow-[0_10px_15px_-3px_rgb(137_78_73/0.25),0_4px_6px_-4px_rgb(137_78_73/0.25)]"
            : "bg-white text-wine shadow-soft"
        }`}
      >
        <span aria-hidden className="text-[18px] leading-7">
          {lit ? "✨" : "🕯️"}
        </span>
        <span className="text-balance">{lit ? blowButton : relightButton}</span>
      </button>

      <p
        aria-live="polite"
        className="min-h-[30px] pt-2.5 text-center text-[11px] leading-4 font-bold tracking-[0.44px] text-ink-muted md:text-[13px] md:leading-[18px]"
      >
        {lit ? hint : hintDone}
      </p>

      {confetti && <ConfettiBurst key={blowCount} pieces={confetti} onDone={clearConfetti} />}
    </div>
  );
}
