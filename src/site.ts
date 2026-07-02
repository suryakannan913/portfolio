// Canonical site URL, used for metadata, sitemap, and robots.
//
// Priority:
//   1. NEXT_PUBLIC_SITE_URL  — set this in Vercel if you add a custom domain.
//   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel sets this automatically to the
//      project's production *.vercel.app domain (no protocol).
//   3. localhost fallback for local dev.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
