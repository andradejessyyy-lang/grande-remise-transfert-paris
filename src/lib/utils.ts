/**
 * cn — class-name merger.
 * Combines clsx (conditional classes) with tailwind-merge (dedupes Tailwind
 * conflicts, e.g. "px-2 px-4" → "px-4"). Used by every UI component.
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
