import { Icon } from "@/components/ui/Icon";
import { header } from "@/content/site";

export function Logo() {
  return (
    <a
      href="#hero"
      className="flex shrink-0 items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
    >
      <span className="font-serif text-[20px] leading-[30px] font-semibold text-wine italic md:text-[22px]">
        {header.logo}
      </span>
      <span className="flex items-center gap-1 rounded-full bg-blush-200 px-2 py-0.5 drop-shadow-[0_2px_3px_rgb(var(--shadow-rgb)/0.06)]">
        <Icon src="/icons/heart-logo.svg" width={10} height={9.175} />
        <span className="text-[11px] leading-4 font-bold tracking-[0.44px] text-ink-deep">
          {header.logoBadge}
        </span>
      </span>
    </a>
  );
}
