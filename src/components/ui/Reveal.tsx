"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /**
   * Порядковый номер элемента в группе (0, 1, 2…) для поочерёдного появления.
   * Задержка = order × шаг из CSS (--reveal-stagger), поэтому ритм одинаков на всём сайте.
   */
  order?: number;
  className?: string;
};

/**
 * Scroll reveal: элемент плавно проявляется и поднимается, когда попадает в экран.
 * Срабатывает один раз. Параметры анимации — CSS-переменные в globals.css (блок «Reveal»).
 *
 * Не оборачивайте в Reveal то, что видно сразу при загрузке (первый экран, шапка):
 * такие элементы должны появляться без задержки.
 */
export function Reveal({ children, order = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observers: IntersectionObserver[] = [];
    const show = () => {
      setVisible(true);
      // Один раз и навсегда — без повторов при движении скролла туда-обратно
      observers.forEach((o) => o.disconnect());
    };

    // Может ли элемент вообще подняться до линии 80% экрана?
    // У самого низа страницы (подвал) — нет: дальше прокрутить нельзя.
    const stuckAtPageBottom = (entry: IntersectionObserverEntry) => {
      const docTop = entry.boundingClientRect.top + window.scrollY;
      const lowestReachableTop = document.documentElement.scrollHeight - window.innerHeight * 0.2;
      return docTop > lowestReachableTop - 40; // 40px — запас на начальный сдвиг анимации
    };

    observers = [
      // Основное условие: элемент поднялся примерно до 80% высоты экрана —
      // анимация идёт там, куда смотрит пользователь, а не у нижней кромки.
      new IntersectionObserver(
        (entries) => entries.some((e) => e.isIntersecting) && show(),
        { rootMargin: "0px 0px -20% 0px", threshold: 0 },
      ),
      // Запасное, только для самого низа страницы: показать, когда элемент целиком на экране.
      new IntersectionObserver(
        (entries) => entries.some((e) => e.isIntersecting && stuckAtPageBottom(e)) && show(),
        { threshold: 1 },
      ),
    ];
    observers.forEach((o) => o.observe(el));
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={order ? ({ "--reveal-order": order } as React.CSSProperties) : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
