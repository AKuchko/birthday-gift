import { Icon } from "@/components/ui/Icon";

/** Фоновые конфетти и веточки. Чисто декоративный слой под контентом. */
export function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Конфетти-точки */}
      <span className="absolute top-20 right-[15%] size-3 animate-float rounded-full bg-peach/60" />
      <span className="absolute top-[373px] left-[6%] size-2.5 animate-float rounded-full bg-sage/50 [animation-delay:-2s]" />
      <span className="absolute top-[calc(50%+7px)] right-[8%] size-3.5 animate-float rounded-full bg-blush-200/70 [animation-delay:-4s]" />
      <span className="absolute bottom-24 left-[18%] size-2 animate-float rounded-full bg-[#ffdcc3]/80 [animation-delay:-1s]" />

      {/* Веточки по краям */}
      <Icon
        src="/images/hero/botanical-sprig.svg"
        width={144}
        height={144}
        className="absolute top-[96px] -left-[40px] w-24 rotate-12 md:w-36"
      />
      <Icon
        src="/images/hero/botanical-sprig-2.svg"
        width={128}
        height={128}
        className="absolute top-[360px] -right-[45px] w-20 -rotate-45 md:w-32"
      />
    </div>
  );
}
