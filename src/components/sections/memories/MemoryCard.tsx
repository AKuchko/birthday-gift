import type { Memory } from "@/content/site";
import { MemoryPhoto } from "./MemoryPhoto";

type MemoryCardProps = Memory & {
  index: number;
  /** Наклон карточки, например "-rotate-1" */
  rotateClassName: string;
  onOpen: () => void;
};

/** Карточка-полароид в галерее. По нажатию открывает фото на весь экран. */
export function MemoryCard({
  title,
  text,
  src,
  badge,
  index,
  rotateClassName,
  onOpen,
}: MemoryCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Открыть фото: ${title}`}
      className={`group flex w-full flex-col rounded-xl bg-white px-3.5 pt-3.5 pb-5 text-left drop-shadow-[0_6px_10px_rgb(var(--shadow-rgb)/0.08)] transition-[rotate,translate] duration-300 hover:-translate-y-1 hover:rotate-0 focus-visible:rotate-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine ${rotateClassName}`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-blush-100">
        <MemoryPhoto
          src={src}
          alt={title}
          sizes="(min-width: 768px) 340px, calc(100vw - 68px)"
        />
        {badge && (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-peach px-2 py-0.5 text-[11px] leading-4 font-bold tracking-[0.44px] text-cocoa">
            {badge}
          </span>
        )}
        <span className="absolute top-2.5 right-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[11px] leading-4 font-bold tracking-[0.44px] text-ink backdrop-blur-[4px]">
          #{index + 1}
        </span>
      </div>

      {/* Название и подпись — всегда друг под другом с отступом */}
      <span className="mt-3 flex flex-col gap-1 px-0.5">
        <span className="font-serif text-[20px] leading-[28px] font-semibold text-balance text-ink italic md:text-[22px] md:leading-[30px]">
          {title}
        </span>
        <span className="text-[14px] leading-5 text-pretty text-ink-muted">{text}</span>
      </span>
    </button>
  );
}
