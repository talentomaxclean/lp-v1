import { useId } from "react";

function wreath(from: number, to: number, key: string) {
  return Array.from({ length: 7 }, (_, index) => {
    const angle = from + ((to - from) * index) / 6;
    const rad = (angle * Math.PI) / 180;
    const x = 60 + Math.cos(rad) * 40;
    const y = 60 + Math.sin(rad) * 40;
    return (
      <ellipse
        key={`${key}-${index}`}
        cx={x}
        cy={y}
        rx="3.1"
        ry="6.4"
        fill="#7a4e16"
        transform={`rotate(${angle + 90} ${x} ${y})`}
      />
    );
  });
}

export function PartnerSeals() {
  const id = useId().replace(/:/g, "");

  return (
    <div className="flex items-center justify-center gap-6 sm:gap-14">
      <figure className="flex flex-col items-center gap-2">
        <figcaption className="text-[10px] font-semibold tracking-[0.22em] text-[#e6c98a] sm:text-[11px]">
          SISTEMA VSC
        </figcaption>
        <svg viewBox="0 0 120 120" className="size-[4.5rem] drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] sm:size-24" role="img" aria-label="Sistema VSC">
          <defs>
            <radialGradient id={`${id}-vsc`} cx="34%" cy="28%" r="75%">
              <stop offset="0%" stopColor="#fff4cc" />
              <stop offset="38%" stopColor="#e8c56a" />
              <stop offset="72%" stopColor="#c4923a" />
              <stop offset="100%" stopColor="#8a5a1c" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="56" fill={`url(#${id}-vsc)`} />
          <circle cx="60" cy="60" r="50" fill="none" stroke="#fff6d8" strokeOpacity="0.7" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="44" fill="none" stroke="#7a4e16" strokeOpacity="0.45" strokeWidth="1.5" />
          <text
            x="60"
            y="68"
            textAnchor="middle"
            fill="#7a4e16"
            fontFamily="Montserrat, sans-serif"
            fontSize="28"
            fontWeight="800"
            letterSpacing="1.5"
          >
            VSC
          </text>
        </svg>
      </figure>

      <span aria-hidden className="h-16 w-px bg-[#e6c98a]/40 sm:h-20" />

      <figure className="flex flex-col items-center gap-2">
        <svg viewBox="0 0 120 120" className="size-[4.5rem] drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] sm:size-24" role="img" aria-label="Kärcher Certified Partner">
          <defs>
            <radialGradient id={`${id}-k`} cx="34%" cy="28%" r="75%">
              <stop offset="0%" stopColor="#fff4cc" />
              <stop offset="38%" stopColor="#e8c56a" />
              <stop offset="72%" stopColor="#c4923a" />
              <stop offset="100%" stopColor="#8a5a1c" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="56" fill={`url(#${id}-k)`} />
          <circle cx="60" cy="60" r="50" fill="none" stroke="#fff6d8" strokeOpacity="0.7" strokeWidth="1.5" />
          {wreath(125, 235, "l")}
          {wreath(-55, 55, "r")}
          <text
            x="60"
            y="62"
            textAnchor="middle"
            fill="#5c3a10"
            fontFamily="Montserrat, sans-serif"
            fontSize="15"
            fontWeight="800"
          >
            Kärcher
          </text>
          <path d="M38 70h44" stroke="#7a4e16" strokeWidth="1.6" />
        </svg>
        <figcaption className="text-[10px] font-semibold tracking-[0.16em] text-[#e6c98a] sm:text-[11px]">
          CERTIFIED PARTNER
        </figcaption>
      </figure>
    </div>
  );
}
