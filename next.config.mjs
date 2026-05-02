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

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Optional: trailingSlash makes URLs end with `/` — better for some static
  // hosts (Hostinger serves /tarifs/ → tarifs/index.html).
  trailingSlash: true,
};

export default nextConfig;
