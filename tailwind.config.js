/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        ash: {
          50: "#f8f9fa",
          100: "#edeff1",
          200: "#dcdfe3",
          300: "#c8cacc",
          400: "#a9abad",
          500: "#8f9194",
          600: "#4b5563",
        },
        brand: {
          emerald: "#059669",
          deep: "#065f46",
          dark: "#064e3b",
          red: "#dc2626",
          olive: "#5c7c10",
          oliveLight: "#65a30d",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans",
          "Noto Sans Arabic",
          "Noto Sans Devanagari",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
        display: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 60px -18px rgba(17,24,39,.25)",
        card: "0 14px 34px rgba(17,24,39,.10)",
        lift: "0 28px 56px -16px rgba(17,24,39,.30)",
        red: "0 14px 30px rgba(220,38,38,.32)",
        olive: "0 14px 30px rgba(92,124,16,.34)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(92deg,#111111 0%,#065f46 55%,#059669 100%)",
        "soft-gradient": "linear-gradient(135deg,#ffffff 0%,#eef1f3 55%,#e6f4ec 100%)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "floaty-slow": "floaty 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
