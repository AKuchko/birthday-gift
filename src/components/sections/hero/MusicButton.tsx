"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { asset } from "@/lib/asset";

type MusicButtonProps = {
  label: string;
  /** Путь к аудиофайлу в /public */
  src: string;
};

const VOLUME = 0.6;

/** События, которые браузер считает действием пользователя и после которых разрешает звук */
const GESTURE_EVENTS = ["pointerdown", "keydown", "touchend"] as const;

/**
 * Кнопка фоновой музыки: мелодия играет по кругу и стартует сама при загрузке.
 * Браузеры обычно блокируют звук до первого действия пользователя — в этом случае
 * мелодия включится при первом касании, клике или нажатии клавиши в любом месте страницы.
 */
export function MusicButton({ label, src }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = VOLUME;

    const removeListeners = () => {
      GESTURE_EVENTS.forEach((e) => document.removeEventListener(e, onGesture, true));
    };

    function onGesture(event: Event) {
      removeListeners();
      // Клик по самой кнопке обработает toggle — иначе он сразу поставит мелодию на паузу
      if (buttonRef.current?.contains(event.target as Node)) return;
      if (audio!.paused) audio!.play().catch(() => {});
    }

    audio.play().catch(() => {
      // Автозапуск заблокирован — ждём первого действия пользователя
      GESTURE_EVENTS.forEach((e) => document.addEventListener(e, onGesture, true));
    });

    return removeListeners;
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = VOLUME;
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
        ref={buttonRef}
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
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </>
  );
}
