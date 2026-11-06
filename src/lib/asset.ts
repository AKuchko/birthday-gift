/**
 * Добавляет basePath к пути файла из /public.
 * next/link делает это сам, а next/image и <audio> — нет, поэтому на GitHub Pages
 * (сайт живёт в /birthday-gift/) пути вида "/icons/x.svg" без этого дадут 404.
 */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path; // внешние URL и относительные пути не трогаем
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
