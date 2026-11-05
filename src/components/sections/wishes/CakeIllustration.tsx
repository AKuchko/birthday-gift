type CakeIllustrationProps = {
  lit: boolean;
  /** Меняется при каждом задувании — перезапускает анимацию дыма */
  smokeKey: number;
  className?: string;
};

const candles = [
  { x: 82, stripe: "var(--color-rose)" },
  { x: 110, stripe: "var(--color-peach)" },
  { x: 138, stripe: "var(--color-rose)" },
];

// Капли глазури по краю ярусов
const bottomDrips = [42, 62, 84, 104, 126, 146, 168, 184];
const topDrips = [64, 82, 100, 120, 138, 156];

/** Двухъярусный торт со свечами. Пламя мерцает, пока свечи горят. */
export function CakeIllustration({ lit, smokeKey, className }: CakeIllustrationProps) {
  return (
    <svg
      viewBox="0 0 220 190"
      role="img"
      aria-label={lit ? "Праздничный торт с горящими свечами" : "Праздничный торт, свечи задуты"}
      className={className}
    >
      <defs>
        <radialGradient id="cake-glow">
          <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffe9a8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Тарелка */}
      <ellipse cx="110" cy="179" rx="98" ry="9" fill="rgb(74 59 52 / 0.08)" />
      <ellipse cx="110" cy="174" rx="100" ry="10" fill="#ffffff" />

      {/* Нижний ярус */}
      <rect x="30" y="112" width="160" height="62" rx="14" fill="var(--color-rose)" />
      <rect x="30" y="148" width="160" height="10" fill="#ffffff" opacity="0.25" />
      {[52, 80, 110, 140, 168].map((cx) => (
        <circle key={cx} cx={cx} cy="164" r="2.5" fill="#ffffff" opacity="0.7" />
      ))}
      <rect x="30" y="110" width="160" height="16" rx="8" fill="#fff6ee" />
      {bottomDrips.map((cx, i) => (
        <ellipse key={cx} cx={cx} cy="126" rx="6" ry={i % 2 ? 7 : 10} fill="#fff6ee" />
      ))}

      {/* Верхний ярус */}
      <rect x="55" y="66" width="110" height="50" rx="12" fill="#fff0e4" />
      <rect x="55" y="64" width="110" height="13" rx="6.5" fill="var(--color-peach)" />
      {topDrips.map((cx, i) => (
        <ellipse key={cx} cx={cx} cy="77" rx="5" ry={i % 2 ? 6 : 8.5} fill="var(--color-peach)" />
      ))}
      {[70, 96, 124, 150].map((cx) => (
        <circle key={cx} cx={cx} cy="101" r="3" fill="var(--color-rose)" />
      ))}

      {/* Ягоды на верхушке */}
      <circle cx="66" cy="63" r="5" fill="var(--color-wine)" />
      <circle cx="154" cy="63" r="5" fill="var(--color-wine)" />
      <circle cx="64" cy="61" r="1.5" fill="#ffffff" opacity="0.6" />
      <circle cx="152" cy="61" r="1.5" fill="#ffffff" opacity="0.6" />

      {/* Свечи */}
      {candles.map(({ x, stripe }, i) => (
        <g key={x}>
          <rect x={x - 4} y="34" width="8" height="32" rx="3" fill="#ffffff" />
          {[38, 47, 56].map((y) => (
            <rect key={y} x={x - 4} y={y} width="8" height="3" fill={stripe} />
          ))}
          <line x1={x} y1="34" x2={x} y2="28" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Свечение и пламя */}
          <g className={`transition-opacity duration-300 ${lit ? "opacity-100" : "opacity-0"}`}>
            <circle cx={x} cy="20" r="18" fill="url(#cake-glow)" className="animate-glow" />
            <g
              className="origin-bottom animate-flicker [transform-box:fill-box]"
              style={{ animationDelay: `${i * -0.3}s` }}
            >
              <path
                d={`M${x} 6 C ${x + 6} 14 ${x + 7} 20 ${x} 28 C ${x - 7} 20 ${x - 6} 14 ${x} 6 Z`}
                fill="#e2b865"
              />
              <path
                d={`M${x} 14 C ${x + 3} 19 ${x + 3.5} 22 ${x} 27 C ${x - 3.5} 22 ${x - 3} 19 ${x} 14 Z`}
                fill="#fff6d5"
              />
            </g>
          </g>

          {/* Дымок после задувания */}
          {!lit && smokeKey > 0 && (
            <path
              key={smokeKey}
              d={`M${x} 26 q -4 -5 0 -10 q 4 -5 0 -10`}
              fill="none"
              stroke="rgb(124 86 56 / 0.45)"
              strokeWidth="2"
              strokeLinecap="round"
              className="origin-bottom animate-smoke [transform-box:fill-box]"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          )}
        </g>
      ))}
    </svg>
  );
}
