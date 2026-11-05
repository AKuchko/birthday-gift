"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

/**
 * Кнопка фоновой музыки. Пока только переключает состояние —
 * проигрывание аудио подключим, когда будет файл с мелодией.
 */
export function MusicButton({ label }: { label: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setPlaying((v) => !v)}
      aria-pressed={playing}
      className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 shadow-soft transition-colors focus-visible:outline-2 focus-visible:outline-wine ${
        playing ? "bg-blush-100" : "bg-white hover:bg-blush-50"
      }`}
    >
      <Icon
        src="/icons/music-note.svg"
        width={9}
        height={13.5}
        className={playing ? "animate-paw-bounce" : undefined}
      />
      <span className="text-[13px] leading-[18px] font-semibold tracking-[0.26px] text-ink">
        {label}
      </span>
    </button>
  );
}
