import Image from "next/image";

type IconProps = {
  /** Путь к SVG в /public */
  src: string;
  width: number;
  height: number;
  className?: string;
  /** Пустой alt = декоративная иконка */
  alt?: string;
};

/** Декоративная SVG-иконка из /public с её родными размерами из макета. */
export function Icon({ src, width, height, className, alt = "" }: IconProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      className={className}
      unoptimized
    />
  );
}
