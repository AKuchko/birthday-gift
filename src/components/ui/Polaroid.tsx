import Image from "next/image";
import { asset } from "@/lib/asset";

type PolaroidProps = {
  /** Фото; если не задано — показывается розовая заглушка */
  src?: string | null;
  alt: string;
  caption: string;
  /** Маленькая розовая плашка справа от подписи */
  badge?: string;
  /** Наклон карточки, например "-rotate-2" */
  rotateClassName?: string;
  sizes?: string;
  className?: string;
};

/** Фото в стиле полароида с полоской скотча сверху. */
export function Polaroid({
  src,
  alt,
  caption,
  badge,
  rotateClassName = "-rotate-2",
  sizes = "(min-width: 768px) 360px, calc(100vw - 64px)",
  className = "",
}: PolaroidProps) {
  return (
    <figure
      className={`relative flex flex-col gap-3 rounded-lg bg-white px-3 pt-3 pb-6 drop-shadow-[0_12px_16px_rgb(var(--shadow-rgb)/0.12)] ${rotateClassName} ${className}`}
    >
      {/* Скотч */}
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 h-6 w-28 -translate-x-1/2 rotate-1 rounded-[2px] bg-peach/80 opacity-90 shadow-[inset_0_2px_4px_rgb(0_0_0/0.05)] backdrop-blur-[4px]"
      />

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-blush-100">
        {src && <Image src={asset(src)} alt={alt} fill sizes={sizes} className="object-cover" />}
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-2">
        <span className="font-serif text-[20px] leading-[28px] font-semibold text-ink italic md:text-[22px] md:leading-[30px]">
          {caption}
        </span>
        {badge && (
          <span className="rounded-full bg-rose px-2.5 py-1 text-[11px] leading-4 font-bold tracking-[0.44px] text-rose-ink">
            {badge}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
