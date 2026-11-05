import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { memories } from "@/content/site";
import { MemoriesGallery } from "./MemoriesGallery";

/** Секция 3 — памятные моменты. */
export function Memories() {
  return (
    <section id="memories" className="bg-bg px-5 py-12 md:px-8 md:py-10">
      <div className="mx-auto flex max-w-[896px] flex-col gap-6">
        <Reveal>
          <SectionHeading
            overline={memories.overline}
            title={memories.title}
            description={memories.description}
          />
        </Reveal>

        <MemoriesGallery items={memories.items} />

        <Reveal className="mx-auto mt-4 w-full max-w-[704px]">
          <p className="rounded-2xl bg-blush-50 p-4 text-center text-[13px] leading-[18px] tracking-[0.26px] text-balance text-ink drop-shadow-[0_1px_1px_rgb(0_0_0/0.05)] md:text-[15px] md:leading-[22px]">
            {memories.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
