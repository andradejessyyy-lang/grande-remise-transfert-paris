import { cn } from "@/lib/utils";

/**
 * Container — max-width wrapper with consistent horizontal padding.
 * Use as the inner block for every section (the section element itself
 * applies vertical rhythm via .section-y).
 */
export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-layout section-x",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
