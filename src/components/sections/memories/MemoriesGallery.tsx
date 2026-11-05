"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { Memory } from "@/content/site";
import { Lightbox } from "./Lightbox";
import { MemoryCard } from "./MemoryCard";

// Лёгкий «небрежный» наклон карточек, повторяется по кругу
const rotations = ["-rotate-1", "rotate-1", "rotate-2", "-rotate-2"];

/** Сетка полароидов + полноэкранный просмотр. Работает с любым числом фото. */
export function MemoriesGallery({ items }: { items: Memory[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 md:gap-6">
        {items.map((item, i) => (
          <li key={item.title} className="mx-auto w-full max-w-[340px]">
            <Reveal delay={(i % 2) * 120}>
              <MemoryCard
                {...item}
                index={i}
                rotateClassName={rotations[i % rotations.length]}
                onOpen={() => setOpenIndex(i)}
              />
            </Reveal>
          </li>
        ))}
      </ul>

      <Lightbox items={items} index={openIndex} onChange={setOpenIndex} />
    </>
  );
}
