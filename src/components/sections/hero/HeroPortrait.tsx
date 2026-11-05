import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

type HeroPortraitProps = {
  src: string;
  alt: string;
  pugBubble: string;
};

/**
 * Фото в арочной рамке с двойным кольцом, декоративными бейджами
 * и мопсом, выглядывающим из-под рамки.
 */
export function HeroPortrait({ src, alt, pugBubble }: HeroPortraitProps) {
  return (
    <figure className="relative mx-auto flex w-full max-w-[324px] flex-col items-center">
      {/* Внешнее кольцо с градиентом */}
      <div className="relative w-full rounded-t-[170px] rounded-b-[40px] bg-linear-to-b from-rose via-peach to-blush-50 p-2.5 shadow-frame">
        {/* Внутреннее белое кольцо */}
        <div className="rounded-t-[160px] rounded-b-[32px] bg-white p-2 shadow-[inset_0_2px_4px_rgb(0_0_0/0.05)]">
          {/* Фото */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[152px] rounded-b-[26px] bg-surface">
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="(min-width: 768px) 288px, calc(100vw - 76px)"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[rgb(62_44_41/0.15)] via-transparent via-50% to-transparent" />
          </div>
        </div>

        {/* Бейдж с искрами — левый верхний угол */}
        <span className="absolute -top-4 -left-4 flex size-8 items-center justify-center rounded-full bg-blush-50 drop-shadow-[0_1px_1px_rgb(0_0_0/0.05)]">
          <Icon src="/icons/sparkle.svg" width={16.5} height={16.5} />
        </span>
        {/* Бейдж с сердцем — справа */}
        <span className="absolute top-1/4 -right-5 flex size-7 items-center justify-center rounded-full bg-blush-100 drop-shadow-[0_1px_1px_rgb(0_0_0/0.05)]">
          <Icon src="/icons/heart-outline.svg" width={13.333} height={12.233} />
        </span>
      </div>

      {/* Мопс с репликой, наезжает на нижний край рамки */}
      <figcaption className="-mt-10 flex flex-col items-center">
        <span className="mb-1 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 drop-shadow-[0_4px_8px_rgb(var(--shadow-rgb)/0.08)]">
          <Icon src="/icons/paw-small.svg" width={11.667} height={11.083} />
          <span className="text-[11px] leading-4 font-bold tracking-[0.44px] text-wine">
            {pugBubble}
          </span>
        </span>
        <Icon
          src="/images/hero/pug-mascot.svg"
          width={112}
          height={96}
          className="origin-bottom animate-pug-tilt drop-shadow-[0_4px_3px_rgb(0_0_0/0.07)]"
        />
      </figcaption>
    </figure>
  );
}
