import { Icon } from "@/components/ui/Icon";

/** Тонкая линия-разделитель между секциями с иконкой по центру. */
export function SectionDivider() {
  return (
    <div aria-hidden className="flex items-center justify-center gap-3 py-2 opacity-50">
      <span className="h-px w-16 bg-linear-to-r from-transparent to-outline" />
      <Icon src="/icons/divider-accent.svg" width={10.5} height={12.25} />
      <span className="h-px w-16 bg-linear-to-l from-transparent to-outline" />
    </div>
  );
}
