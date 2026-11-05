import { Icon } from "@/components/ui/Icon";

type HeroTitleProps = {
  overline: string;
  titleLine: string;
  titleName: string;
};

export function HeroTitle({ overline, titleLine, titleName }: HeroTitleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="relative pb-1 font-serif text-[19px] leading-[28px] font-semibold tracking-[0.55px] text-balance text-cocoa italic md:text-[22px] md:leading-[30px]">
        {overline}
        <Icon
          src="/icons/heart-accent.svg"
          width={20}
          height={20}
          className="absolute -top-2 -right-6"
        />
      </p>
      <h1 className="font-serif text-[40px] leading-[46px] font-bold tracking-[-0.8px] text-balance text-ink md:text-[56px] md:leading-[64px] md:tracking-[-1.12px]">
        {titleLine}
        <span className="block font-semibold text-wine italic">{titleName}</span>
      </h1>
    </div>
  );
}
