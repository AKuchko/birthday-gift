import { SectionDivider } from "@/components/ui/SectionDivider";
import { hero } from "@/content/site";
import { HeroActions } from "./HeroActions";
import { HeroDecor } from "./HeroDecor";
import { HeroPortrait } from "./HeroPortrait";
import { HeroTitle } from "./HeroTitle";
import { HeroTopBar } from "./HeroTopBar";

/**
 * Секция 1 — приветствие.
 * Это первый экран: он виден сразу при загрузке, поэтому без анимации появления.
 */
export function Hero() {
  return (
    <section
      id="hero"
      tabIndex={-1}
      aria-label="Поздравление"
      className="relative isolate pt-(--header-height) outline-none"
    >
      <HeroDecor />

      <div className="relative mx-auto flex max-w-[672px] flex-col px-5 pt-6 pb-10 md:px-4 md:pt-10 md:pb-12">
        <HeroTopBar
          datePill={hero.datePill}
          musicLabel={hero.musicLabel}
          musicSrc={hero.musicSrc}
        />

        <div className="mt-6">
          <HeroTitle
            overline={hero.overline}
            titleLine={hero.titleLine}
            titleName={hero.titleName}
          />
        </div>

        <div className="mt-8 md:mt-10">
          <HeroPortrait
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            pugBubble={hero.pugBubble}
          />
        </div>

        <p className="mx-auto mt-6 max-w-[512px] text-center text-[17px] leading-[28px] text-balance text-ink-muted md:mt-8 md:text-[18px] md:leading-[29.25px]">
          {hero.subtitle}
        </p>

        <div className="mt-8 md:mt-10">
          <HeroActions cta={hero.cta} scrollHint={hero.scrollHint} targetId="gratitude" />
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
