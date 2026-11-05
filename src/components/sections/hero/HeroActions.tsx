import { Icon } from "@/components/ui/Icon";

type HeroActionsProps = {
  cta: string;
  scrollHint: string;
  /** id секции, к которой ведёт кнопка */
  targetId: string;
};

/** Кнопка «Открыть поздравление» и подсказка «листай вниз». */
export function HeroActions({ cta, scrollHint, targetId }: HeroActionsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href={`#${targetId}`}
        className="flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-center shadow-button transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--color-rose)_92%,var(--color-wine))] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
      >
        <span className="text-[15px] leading-5 font-semibold tracking-[0.15px] text-rose-ink">
          {cta}
        </span>
        <Icon src="/icons/heart-button.svg" width={15} height={13.7625} />
      </a>

      <a
        href={`#${targetId}`}
        aria-hidden
        tabIndex={-1}
        className="flex flex-col items-center gap-1 pt-4 opacity-80"
      >
        <span className="text-[11px] leading-4 font-bold tracking-[0.55px] text-cocoa uppercase">
          {scrollHint}
        </span>
        <span className="flex size-8 animate-paw-bounce items-center justify-center rounded-full bg-blush-50 drop-shadow-[0_1px_1px_rgb(0_0_0/0.05)]">
          <Icon src="/icons/paw.svg" width={15} height={14.25} />
        </span>
      </a>
    </div>
  );
}
