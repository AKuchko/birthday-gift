import type { IconTone } from "@/content/site";

const toneClass: Record<IconTone, string> = {
  blush: "bg-blush-300",
  peach: "bg-peach",
  sage: "bg-sage-light",
  rose: "bg-blush-200",
};

type GratitudeCardProps = {
  icon: string;
  tone: IconTone;
  title: string;
  text: string;
};

/** Карточка «спасибо за…» с иконкой в цветном кружке. */
export function GratitudeCard({ icon, tone, title, text }: GratitudeCardProps) {
  return (
    <article className="flex items-start gap-4 rounded-xl bg-bg p-4 drop-shadow-[0_1px_1px_rgb(0_0_0/0.05)]">
      <span
        aria-hidden
        className={`flex size-12 shrink-0 items-center justify-center rounded-full text-[20px] leading-7 ${toneClass[tone]}`}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="font-serif text-[20px] leading-[28px] font-semibold text-ink md:text-[22px] md:leading-[30px]">
          {title}
        </h3>
        <p className="text-[16px] leading-6 text-pretty text-ink-muted">{text}</p>
      </div>
    </article>
  );
}
