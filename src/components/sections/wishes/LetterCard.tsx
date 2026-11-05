type LetterCardProps = {
  greeting: string;
  paragraphs: string[];
  signature: string;
  signatureNote: string;
};

/** Карточка-письмо с поздравлением и подписью. */
export function LetterCard({ greeting, paragraphs, signature, signatureNote }: LetterCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/0.1)] md:p-10">
      <span aria-hidden className="mx-auto h-1 w-12 rounded-full bg-rose" />

      <div className="flex flex-col gap-2 pt-1">
        <h3 className="font-serif text-[18px] leading-[28px] font-semibold text-wine md:text-[22px] md:leading-[30px]">
          {greeting}
        </h3>
        <div className="flex flex-col gap-4 text-[16px] leading-[26px] text-pretty text-ink md:text-[17px] md:leading-[28px]">
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>

      <footer className="flex flex-col items-end gap-1.5 pt-4 text-right">
        <p className="font-serif text-[22px] leading-[30px] font-semibold text-wine italic">
          {signature}
        </p>
        <p className="text-[11px] leading-4 font-bold tracking-[0.44px] text-ink-muted">
          {signatureNote}
        </p>
      </footer>
    </article>
  );
}
