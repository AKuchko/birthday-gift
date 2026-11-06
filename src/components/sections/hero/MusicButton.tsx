"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { asset } from "@/lib/asset";

type MusicButtonProps = {
  label: string;
  /** Путь к аудиофайлу в /public */
  src: string;
};

/** Кнопка фоновой музыки: включает и ставит на паузу мелодию, играет по кругу. */
export function MusicButton({ label, src }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.6;
      try {
        await audio.play();
      } catch {
        // Браузер может отказать в воспроизведении — просто остаёмся на паузе
        setPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? `${label}: поставить на паузу` : `${label}: включить`}
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

      {/* Состояние кнопки берём из событий плеера — так оно всегда совпадает с реальным звуком */}
      <audio
        ref={audioRef}
        src={asset(src)}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </>
  );
}
