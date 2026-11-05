import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  overline: string;
  title: string;
  /** Необязательный вводный абзац под заголовком */
  description?: string;
};

/**
 * Заголовок секции: рукописная строка сверху, крупный заголовок и вводный текст.
 * Строки появляются по очереди при прокрутке.
 */
export function SectionHeading({ overline, title, description }: SectionHeadingProps) {
  return (
    <header className="flex flex-col items-center gap-1 text-center">
      <Reveal>
        <p className="font-serif text-[19px] leading-[28px] font-semibold text-balance text-wine italic md:text-[22px] md:leading-[30px]">
          {overline}
        </p>
      </Reveal>
      <Reveal order={1}>
        <h2 className="font-serif text-[32px] leading-[40px] font-semibold text-balance text-ink md:text-[40px] md:leading-[48px]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal order={2}>
          <p className="mt-2 max-w-[560px] text-[15px] leading-[24px] text-balance text-ink-muted md:text-[17px] md:leading-[28px]">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}
