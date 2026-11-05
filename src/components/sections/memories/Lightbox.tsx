"use client";

import { useEffect, useRef } from "react";
import type { Memory } from "@/content/site";
import { MemoryPhoto } from "./MemoryPhoto";

type LightboxProps = {
  items: Memory[];
  /** Индекс открытого фото; null — просмотр закрыт */
  index: number | null;
  onChange: (index: number | null) => void;
};

/** Полноэкранный просмотр фото: стрелки, свайп, Escape и клик по фону закрывают. */
export function Lightbox({ items, index, onChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const open = index !== null;
  const item = open ? items[index] : null;

  // Синхронизируем состояние React с нативным <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const go = (step: number) => {
    if (index === null) return;
    onChange((index + step + items.length) % items.length);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={item ? item.title : "Просмотр фото"}
      onClose={() => onChange(null)}
      onKeyDown={onKeyDown}
      // Клик по затемнённому фону (сам <dialog>, а не его содержимое) закрывает просмотр
      onClick={(e) => e.target === e.currentTarget && onChange(null)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
      className="m-auto h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ink/85 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center"
    >
      {item && index !== null && (
        <figure className="flex max-h-dvh w-full max-w-[720px] flex-col gap-4 px-4 py-16">
          <div className="relative h-[min(70dvh,720px)] w-full overflow-hidden rounded-xl">
            <MemoryPhoto src={item.src} alt={item.title} sizes="(min-width: 768px) 720px, 100vw" fit="contain" />
          </div>
          <figcaption className="text-center text-white">
            <p className="font-serif text-[22px] leading-[30px] font-semibold italic">{item.title}</p>
            <p className="mt-1 text-[14px] leading-5 text-white/80">{item.text}</p>
            <p className="mt-2 text-[12px] leading-4 tracking-[0.5px] text-white/60">
              {index + 1} / {items.length}
            </p>
          </figcaption>
        </figure>
      )}

      <LightboxButton label="Закрыть" onClick={() => onChange(null)} className="top-4 right-4">
        ✕
      </LightboxButton>
      {items.length > 1 && (
        <>
          <LightboxButton label="Предыдущее фото" onClick={() => go(-1)} className="top-1/2 left-3 -translate-y-1/2">
            ‹
          </LightboxButton>
          <LightboxButton label="Следующее фото" onClick={() => go(1)} className="top-1/2 right-3 -translate-y-1/2">
            ›
          </LightboxButton>
        </>
      )}
    </dialog>
  );
}

type LightboxButtonProps = {
  label: string;
  onClick: () => void;
  className: string;
  children: React.ReactNode;
};

function LightboxButton({ label, onClick, className, children }: LightboxButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`fixed flex size-11 items-center justify-center rounded-full bg-white/90 text-[22px] leading-none text-wine shadow-soft transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-white ${className}`}
    >
      {children}
    </button>
  );
}
