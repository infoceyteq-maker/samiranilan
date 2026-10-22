/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

/**
 * Content-Security-Policy.
 * - Google Drive is allowed for images / embeds (work gallery).
 * - 'unsafe-inline' is required by Next.js inline bootstrap scripts + Framer Motion inline styles.
 * - 'unsafe-eval' / ws: are only needed by the dev server (HMR).
 * - Framing is blocked in production (clickjacking protection) but allowed in dev so the
 *   sandboxed live-preview iframe can load the app.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://drive.google.com https://*.googleusercontent.com",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-src https://drive.google.com",
  "media-src 'self' https://drive.google.com https://*.googleusercontent.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  isDev ? "frame-ancestors *" : "frame-ancestors 'none'",
  isDev ? "" : "upgrade-insecure-requests",
]
  .filter(Boolean)
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // HSTS is only meaningful over HTTPS; harmless locally because browsers ignore it on http.
  ...(isDev
    ? []
    : [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" }]),
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Allow the hosted live-preview origin to load dev resources (HMR) in sandboxed previews.
  allowedDevOrigins: ["*.e2b.app", "*.vercel.app"],
  images: {
    // All production imagery is local (public/). Keep remote patterns ready for a future CDN.
    remotePatterns: [],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
