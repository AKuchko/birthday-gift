import { PawTrail } from "@/components/ui/PawTrail";
import { Polaroid } from "@/components/ui/Polaroid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gratitude } from "@/content/site";
import { GratitudeCard } from "./GratitudeCard";
import { QuoteCard } from "./QuoteCard";

/** Секция 2 — благодарность. */
export function Gratitude() {
  return (
    <section id="gratitude" tabIndex={-1} className="outline-none bg-surface px-5 pt-12 pb-4 md:px-8 md:pt-10">
      <div className="mx-auto flex max-w-[896px] flex-col">
        <SectionHeading overline={gratitude.overline} title={gratitude.title} />

        <Reveal className="mt-6">
          <QuoteCard quote={gratitude.quote} />
        </Reveal>

        {/* Мобильная версия: карточки, затем фото с отступом.
            Десктоп: карточки слева (7 колонок), фото справа (5 колонок). */}
        <div className="mt-8 grid grid-cols-1 gap-12 md:mt-10 md:grid-cols-12 md:items-center md:gap-6">
          <ul className="flex flex-col gap-4 md:col-span-7">
            {gratitude.items.map((item, i) => (
              <li key={item.title}>
                <Reveal order={i}>
                  <GratitudeCard {...item} />
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal order={1} className="mx-auto w-full max-w-[384px] px-2 md:col-span-5 md:px-0">
            <Polaroid
              src={gratitude.polaroid.src}
              alt={gratitude.polaroid.alt}
              caption={gratitude.polaroid.caption}
              badge={gratitude.polaroid.badge}
            />
          </Reveal>
        </div>

        <Reveal>
          <PawTrail className="py-10 md:py-[40px]" />
        </Reveal>
      </div>
    </section>
  );
}
