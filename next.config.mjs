/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow the hosted live-preview origin to load dev resources (HMR) in sandboxed previews.
  allowedDevOrigins: ["*.e2b.app", "*.vercel.app"],
  images: {
    // All production imagery is local (public/). Keep remote patterns ready for a future CDN.
    remotePatterns: [],
  },
};

export default nextConfig;
