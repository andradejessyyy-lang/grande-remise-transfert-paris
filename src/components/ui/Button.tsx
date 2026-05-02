import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

/**
 * Button — single primary component for CTAs across the site.
 *
 * Variants:
 * - default: solid black on light, white text. The dominant CTA.
 * - luxe:    solid gold on light, ink text. Premium signal CTA.
 * - outline: transparent + ink border. Secondary actions.
 * - ghost-dark: outline variant for use ON DARK BACKGROUNDS (paper border).
 *
 * Renders as <a> (Next Link) when `href` is provided, else <button>.
 * The arrow prop adds an editorial diagonal arrow icon (Apple/Loro Piana feel).
 */
type Variant = "default" | "luxe" | "outline" | "ghost-dark";

type CommonProps = {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type Props = ButtonAsLink | ButtonAsButton;

const baseClasses =
  "inline-flex items-center justify-center gap-2 cursor-pointer font-sans " +
  "font-medium uppercase tracking-btn text-[12px] " +
  "px-7 py-3.5 transition-colors min-h-[44px] " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<Variant, string> = {
  default:
    "bg-ink text-paper-pure hover:bg-black focus-visible:outline-luxe",
  luxe:
    "bg-luxe text-paper-pure hover:bg-luxe-bright hover:text-ink focus-visible:outline-ink",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper-pure focus-visible:outline-luxe",
  "ghost-dark":
    "bg-transparent text-paper-pure border border-paper-pure hover:bg-paper-pure hover:text-ink focus-visible:outline-luxe-bright",
};

export default function Button(props: Props) {
  const { variant = "default", arrow, className, children, ...rest } = props;

  const classes = cn(baseClasses, variantClasses[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      ) : null}
    </>
  );

  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = rest as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, "group")}
    >
      {content}
    </button>
  );
}
