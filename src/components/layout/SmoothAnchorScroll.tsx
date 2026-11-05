"use client";

import { useEffect } from "react";

/**
 * Плавная прокрутка для всех якорных ссылок на странице (<a href="#id">)
 * через встроенный window.scrollTo({ behavior: "smooth" }).
 * Ссылки остаются обычными ссылками: без JavaScript они просто перейдут к секции.
 */
export function SmoothAnchorScroll() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // Ctrl/Cmd/Shift-клик и средняя кнопка — оставляем браузеру
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();

      // Отступ под фиксированную шапку берём из scroll-padding-top (globals.css)
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });

      history.pushState(null, "", `#${id}`);
      // Переводим фокус на секцию — важно для клавиатуры и экранных дикторов
      target.focus({ preventScroll: true });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
