import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wishes } from "@/content/site";
import { BirthdayCake } from "./BirthdayCake";
import { LetterCard } from "./LetterCard";

/** Секция 4 — пожелания и интерактивный торт. */
export function Wishes() {
  return (
    <section id="wishes" tabIndex={-1} className="outline-none bg-bg px-5 pt-4 pb-4 md:px-8">
      <Reveal>
        <SectionDivider />
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-[672px] flex-col gap-8 md:mt-12">
        <SectionHeading overline={wishes.overline} title={wishes.title} />

        <Reveal className="-mt-3">
          <LetterCard {...wishes.letter} />
        </Reveal>

        <Reveal>
          <BirthdayCake {...wishes.cake} />
        </Reveal>
      </div>
    </section>
  );
}
