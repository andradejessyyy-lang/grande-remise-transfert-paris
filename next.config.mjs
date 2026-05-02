/**
 * Next.js config — static export for hosting on any static-friendly server
 * (Hostinger Shared/Premium, Netlify, GitHub Pages, S3, etc.).
 *
 * `output: 'export'` makes `npm run build` produce a self-contained `out/`
 * directory with HTML/CSS/JS files only — uploadable as-is via FTP.
 *
 * Notes & trade-offs:
 *  - `images.unoptimized: true` disables Next/Image runtime optimisation
 *    (required for static export). Local images still load fine; remote
 *    images go through the browser directly.
 *  - No server actions, no API routes (we don't use any).
 *  - The booking form's submit handler is client-only — wire it to a service
 *    like Formspree/Resend when the agency goes live.
 */

/**
 * Static export config — sert à la fois GitHub Pages et hébergement statique
 * classique (Hostinger, Netlify, S3, etc.).
 *
 * GitHub Pages : le site est servi à
 *   https://andradejessyyy-lang.github.io/grande-remise-transfert-paris
 * On a donc besoin d'un `basePath` qui correspond au nom du repo.
 *
 * En dev local et sur d'autres hosts (domaine custom), le basePath peut être
 * surchargé via la variable d'environnement NEXT_PUBLIC_BASE_PATH.
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
