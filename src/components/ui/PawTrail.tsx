/** Декоративная «дорожка» из следов лап между секциями. */
export function PawTrail({ className = "" }: { className?: string }) {
  const paws = [
    { rotate: "-rotate-12", size: "text-[20px]" },
    { rotate: "rotate-6", size: "text-[18px]" },
    { rotate: "-rotate-6", size: "text-[20px]" },
    { rotate: "rotate-12", size: "text-[18px]" },
  ];

  return (
    <div aria-hidden className={`flex items-center justify-center gap-2.5 opacity-60 ${className}`}>
      {paws.map((paw, i) => (
        <span key={i} className={`${paw.rotate} ${paw.size} leading-7`}>
          🐾
        </span>
      ))}
    </div>
  );
}
