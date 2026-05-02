/**
 * VehicleIllustration — minimalist SVG line drawings of each vehicle gamme.
 *
 * Why SVG and not photos?
 *  - Stock photo libraries don't reliably carry "black Mercedes E-Class /
 *    GLE / V-Class" on a Paris backdrop, so we'd ship inconsistent imagery.
 *  - Editorial luxury houses (Hermès, Loro Piana, Dior) use line illustrations
 *    for product showcases — it reads premium, intentional, and consistent.
 *  - Replaceable with real photography in 5 min once a custom shoot lands.
 *
 * Each illustration uses currentColor so the parent can theme it (we render
 * them in luxe-bright gold on a black slab background).
 */

type Props = {
  className?: string;
  ariaLabel?: string;
};

const sharedSvgProps = {
  viewBox: "0 0 240 80",
  fill: "none" as const,
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

/**
 * Sedan — Mercedes E-Class style profile (low, long, sweeping roofline).
 */
export function SedanIllustration({ className, ariaLabel }: Props) {
  return (
    <svg
      {...sharedSvgProps}
      className={className}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {/* Body outline */}
      <path
        d="M 14 58 L 22 50 L 52 44 L 70 24 L 168 24 L 188 42 L 222 48 L 230 58"
        strokeWidth="1.6"
      />
      {/* Underbody between wheels */}
      <path d="M 80 58 L 158 58" strokeWidth="1.6" />
      {/* Wheel arches */}
      <path d="M 52 58 Q 66 44 80 58" strokeWidth="1.6" />
      <path d="M 158 58 Q 172 44 186 58" strokeWidth="1.6" />
      {/* Front and rear bumper feet */}
      <path d="M 14 58 L 52 58" strokeWidth="1.6" />
      <path d="M 186 58 L 230 58" strokeWidth="1.6" />
      {/* Window belt line */}
      <path d="M 76 30 L 88 36 L 152 36 L 164 30" strokeWidth="1.2" />
      {/* B-pillar (door division) */}
      <line
        x1="120"
        y1="36"
        x2="120"
        y2="56"
        strokeWidth="0.8"
        opacity="0.5"
      />
      {/* Wheels */}
      <circle cx="66" cy="62" r="10" strokeWidth="1.6" />
      <circle cx="172" cy="62" r="10" strokeWidth="1.6" />
      {/* Wheel hubs */}
      <circle cx="66" cy="62" r="3" strokeWidth="1.2" />
      <circle cx="172" cy="62" r="3" strokeWidth="1.2" />
      {/* Headlight hint */}
      <path d="M 16 50 L 24 49" strokeWidth="1" opacity="0.7" />
      {/* Star emblem (Mercedes hint, very subtle) */}
      <circle cx="20" cy="55" r="0.8" strokeWidth="0.6" opacity="0.6" />
    </svg>
  );
}

/**
 * SUV — Mercedes GLE / GLA style (taller, more upright C-pillar, boxier rear).
 */
export function SuvIllustration({ className, ariaLabel }: Props) {
  return (
    <svg
      {...sharedSvgProps}
      className={className}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {/* Body outline */}
      <path
        d="M 14 58 L 20 48 L 40 42 L 54 22 L 188 22 L 200 42 L 200 58"
        strokeWidth="1.6"
      />
      {/* Underbody */}
      <path d="M 76 58 L 156 58" strokeWidth="1.6" />
      {/* Wheel arches (deeper, more pronounced for SUV) */}
      <path d="M 48 58 Q 62 42 76 58" strokeWidth="1.6" />
      <path d="M 156 58 Q 170 42 184 58" strokeWidth="1.6" />
      {/* Bumper feet */}
      <path d="M 14 58 L 48 58" strokeWidth="1.6" />
      <path d="M 184 58 L 200 58" strokeWidth="1.6" />
      {/* Window belt line */}
      <path d="M 60 28 L 72 34 L 178 34 L 188 28" strokeWidth="1.2" />
      {/* B-pillar */}
      <line
        x1="116"
        y1="34"
        x2="116"
        y2="56"
        strokeWidth="0.8"
        opacity="0.5"
      />
      {/* Wheels (slightly larger than sedan) */}
      <circle cx="62" cy="62" r="11" strokeWidth="1.6" />
      <circle cx="170" cy="62" r="11" strokeWidth="1.6" />
      {/* Hubs */}
      <circle cx="62" cy="62" r="3.5" strokeWidth="1.2" />
      <circle cx="170" cy="62" r="3.5" strokeWidth="1.2" />
      {/* Headlight */}
      <path d="M 16 48 L 22 47" strokeWidth="1" opacity="0.7" />
      {/* Roof rails subtle */}
      <line
        x1="60"
        y1="22"
        x2="180"
        y2="22"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * Van — Mercedes V-Class style (boxy, taller, longer roof line, big sliding window).
 */
export function VanIllustration({ className, ariaLabel }: Props) {
  return (
    <svg
      {...sharedSvgProps}
      className={className}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {/* Body outline — single sweeping windshield, long flat roof */}
      <path
        d="M 14 58 L 20 46 L 32 28 L 48 14 L 220 14 L 222 18 L 222 58"
        strokeWidth="1.6"
      />
      {/* Underbody */}
      <path d="M 80 58 L 178 58" strokeWidth="1.6" />
      {/* Wheel arches */}
      <path d="M 52 58 Q 66 44 80 58" strokeWidth="1.6" />
      <path d="M 178 58 Q 192 44 206 58" strokeWidth="1.6" />
      {/* Bumper feet */}
      <path d="M 14 58 L 52 58" strokeWidth="1.6" />
      <path d="M 206 58 L 222 58" strokeWidth="1.6" />
      {/* Windshield (sweeping) */}
      <path d="M 38 26 L 56 22" strokeWidth="1.2" />
      {/* Driver window vertical division */}
      <line x1="60" y1="22" x2="60" y2="38" strokeWidth="1.2" />
      <path d="M 60 38 L 88 38" strokeWidth="1.2" />
      {/* Sliding door window (long) */}
      <line x1="92" y1="22" x2="92" y2="38" strokeWidth="0.8" opacity="0.6" />
      <path d="M 92 22 L 200 22" strokeWidth="1.2" />
      <path d="M 92 38 L 200 38" strokeWidth="1.2" />
      <line
        x1="200"
        y1="22"
        x2="200"
        y2="38"
        strokeWidth="0.8"
        opacity="0.6"
      />
      {/* Rear D-pillar */}
      <line
        x1="146"
        y1="22"
        x2="146"
        y2="38"
        strokeWidth="0.6"
        opacity="0.4"
      />
      {/* Wheels */}
      <circle cx="66" cy="62" r="11" strokeWidth="1.6" />
      <circle cx="192" cy="62" r="11" strokeWidth="1.6" />
      {/* Hubs */}
      <circle cx="66" cy="62" r="3.5" strokeWidth="1.2" />
      <circle cx="192" cy="62" r="3.5" strokeWidth="1.2" />
      {/* Headlight */}
      <path d="M 16 46 L 22 44" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

/**
 * Convenience map keyed by gamme — used by pages to render the right illustration.
 */
import type { VehicleGamme } from "@/lib/vehicles";
export const illustrationByGamme: Record<
  VehicleGamme,
  (props: Props) => JSX.Element
> = {
  eco: SedanIllustration,
  suv: SuvIllustration,
  van: VanIllustration,
};
