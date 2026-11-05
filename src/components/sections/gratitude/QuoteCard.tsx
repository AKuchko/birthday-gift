import { Icon } from "@/components/ui/Icon";

/** Большая белая карточка с главной благодарностью-цитатой. */
export function QuoteCard({ quote }: { quote: string }) {
  return (
    <blockquote className="relative flex flex-col items-center gap-4 rounded-2xl bg-white px-6 pt-12 pb-8 drop-shadow-[0_6px_14px_rgb(var(--shadow-rgb)/0.06)] md:p-10">
      <Icon
        src="/icons/quote.svg"
        width={34}
        height={24}
        className="absolute top-5 left-5 md:top-7 md:left-8"
      />
      <p className="max-w-[672px] pt-1 text-center font-serif text-[21px] leading-[34px] font-semibold text-pretty text-ink italic md:text-[28px] md:leading-[45.5px]">
        «{quote}»
      </p>
      <div aria-hidden className="flex items-center justify-center gap-2">
        <span className="h-0.5 w-10 rounded-full bg-rose" />
        <Icon src="/icons/heart-divider.svg" width={15} height={13.7625} />
        <span className="h-0.5 w-10 rounded-full bg-rose" />
      </div>
    </blockquote>
  );
}
