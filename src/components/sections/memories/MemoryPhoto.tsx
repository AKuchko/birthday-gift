import Image from "next/image";
import { asset } from "@/lib/asset";

type MemoryPhotoProps = {
  src: string | null;
  alt: string;
  sizes: string;
  /** object-cover в карточке, object-contain в полноэкранном просмотре */
  fit?: "cover" | "contain";
  priority?: boolean;
};

/** Фото воспоминания или розовая заглушка, если фото ещё нет. Заполняет родителя. */
export function MemoryPhoto({ src, alt, sizes, fit = "cover", priority }: MemoryPhotoProps) {
  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-blush-100">
        <span aria-hidden className="text-4xl opacity-40">
          📷
        </span>
      </div>
    );
  }

  return (
    <Image
      src={asset(src)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={fit === "cover" ? "object-cover" : "object-contain"}
    />
  );
}
