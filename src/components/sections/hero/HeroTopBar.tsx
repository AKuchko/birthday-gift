import { Icon } from "@/components/ui/Icon";
import { MusicButton } from "./MusicButton";

type HeroTopBarProps = {
  datePill: string;
  musicLabel: string;
};

/** Плашка с датой слева и кнопка музыки справа. */
export function HeroTopBar({ datePill, musicLabel }: HeroTopBarProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="flex min-w-0 items-center gap-1.5 rounded-full bg-blush-100 px-3 py-1 drop-shadow-[0_1px_1px_rgb(0_0_0/0.05)]">
        <Icon src="/icons/cake.svg" width={11.25} height={12.5} className="shrink-0" />
        <span className="text-[11px] leading-4 font-bold tracking-[0.4px] text-wine uppercase md:tracking-[1.1px]">
          {datePill}
        </span>
      </p>
      <MusicButton label={musicLabel} />
    </div>
  );
}
