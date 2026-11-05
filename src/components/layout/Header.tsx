"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { navigation } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navigation.map((item) => item.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  // Закрываем мобильное меню по Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 shadow-header backdrop-blur-[24px]">
      <div className="mx-auto flex h-(--header-height) max-w-[1120px] items-center justify-between px-5 md:grid md:grid-cols-[1fr_auto_1fr] md:px-12">
        <Logo />

        {/* Десктопная навигация */}
        <nav aria-label="Разделы открытки" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full bg-surface p-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <NavLink
                  href={`#${item.id}`}
                  active={active === item.id}
                  className="rounded-full px-4 py-1.5 text-[13px] leading-[18px] tracking-[0.26px]"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопка бургера (мобильная версия) */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          className="relative flex size-10 items-center justify-center rounded-full bg-blush-100 drop-shadow-[0_2px_4px_rgb(var(--shadow-rgb)/0.06)] transition-colors active:bg-blush-200 md:hidden"
        >
          <BurgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Мобильное меню */}
      <nav
        id="mobile-menu"
        aria-label="Разделы открытки"
        hidden={!menuOpen}
        className="border-t border-outline/40 px-5 pt-2 pb-5 md:hidden"
      >
        <ul className="flex flex-col gap-1 rounded-3xl bg-surface p-2">
          {navigation.map((item) => (
            <li key={item.id}>
              <NavLink
                href={`#${item.id}`}
                active={active === item.id}
                onClick={closeMenu}
                className="block rounded-full px-5 py-3 text-[15px] leading-5"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

type NavLinkProps = {
  href: string;
  active: boolean;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
};

function NavLink({ href, active, className, onClick, children }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={`${className} font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-wine ${
        active
          ? "bg-rose text-rose-ink drop-shadow-[0_2px_4px_rgb(var(--shadow-rgb)/0.08)]"
          : "text-ink-muted hover:bg-blush-50"
      }`}
    >
      {children}
    </a>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  const line =
    "absolute left-0 h-0.5 w-full rounded-full bg-wine transition-transform duration-300";
  return (
    <span aria-hidden className="relative block h-3 w-[18px]">
      <span className={`${line} top-0 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
      <span
        className={`${line} top-[5px] transition-opacity ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`${line} top-[10px] ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
      />
    </span>
  );
}
