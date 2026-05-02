/**
 * vehicleAssets — server-side helper for resolving local vehicle photos.
 *
 * Checks `public/vehicules/<gamme>.{jpg,jpeg,png,webp}` and returns the public
 * path if a file exists, else null. Pages then conditionally render a real
 * <Image> or fall back to the <VehicleIllustration> SVG.
 *
 * IMPORTANT: server-only (uses fs). Do not import from client components.
 */
import fs from "node:fs";
import path from "node:path";
import type { VehicleGamme } from "@/lib/vehicles";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const EXTENSIONS = ["webp", "jpg", "jpeg", "png"] as const;

/**
 * Returns the public URL of a local vehicle photo if found, else null.
 * Resolution order: webp → jpg → jpeg → png (smallest first).
 */
export function localVehicleImage(gamme: VehicleGamme): string | null {
  for (const ext of EXTENSIONS) {
    const rel = `/vehicules/${gamme}.${ext}`;
    if (fs.existsSync(path.join(PUBLIC_DIR, rel))) {
      return rel;
    }
  }
  return null;
}
