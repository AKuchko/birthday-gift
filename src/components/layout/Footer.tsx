import { Reveal } from "@/components/ui/Reveal";
import { footer } from "@/content/site";

const paws = ["🐾", "🐶", "🐾"];

export function Footer() {
  return (
    <footer className="bg-bg px-5 pt-12 pb-8 md:px-8 md:pt-16">
      <div className="mx-auto flex max-w-[672px] flex-col items-center text-center">
        <Reveal>
          <p className="pb-2 font-serif text-[30px] leading-[38px] font-semibold text-balance text-ink md:text-[36px] md:leading-[44px]">
            {footer.title}
          </p>
        </Reveal>

        <Reveal order={1}>
          <p aria-hidden className="flex gap-2 py-2 text-[16px] leading-6">
            {paws.map((paw, i) => (
              <span key={i}>{paw}</span>
            ))}
          </p>
        </Reveal>

        <Reveal order={2} className="mt-2">
          <p className="flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-[13px] leading-[18px] font-semibold tracking-[0.26px] text-ink-muted">
            <span aria-hidden>🗓️</span>
            <span>{footer.datePill}</span>
          </p>
        </Reveal>

        <Reveal order={3} className="mt-6">
          <a
            href="#hero"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] leading-[18px] font-semibold tracking-[0.26px] text-wine drop-shadow-[0_1px_1px_rgb(0_0_0/0.05)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
          >
            {footer.backToTop}
            <span aria-hidden>🌸</span>
          </a>
        </Reveal>

        <Reveal className="mt-8 w-full">
          <div className="border-t border-outline/30 pt-6">
            <p className="text-[14px] leading-5 text-ink-muted/80">{footer.keepsake}</p>
            <p className="pt-1 text-[11px] leading-4 font-bold tracking-[0.44px] text-ink-muted/60">
              {footer.note}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
