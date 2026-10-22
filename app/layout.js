import { Inter, Manrope } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "S.Nilan — Digital Strategist & Founder of Ceyteq | Ceylon Technology",
  description:
    "S.Nilan (S M S N Udayanga) — Digital Strategist & Founder of Ceyteq, Ceylon Technology, Sri Lanka. Next.js websites, Google & Meta Ads, SEO, Brand Identity and AI Automation — based in Sri Lanka, working worldwide.",
  keywords: [
    "S.Nilan",
    "Nilan Udayanga",
    "Ceyteq",
    "Ceylon Technology",
    "Digital Marketing Sri Lanka",
    "Next.js Developer",
    "Meta Ads",
    "Google Ads",
    "SEO",
  ],
  authors: [{ name: "S M S N Udayanga" }],
  openGraph: {
    title: "S.Nilan — Digital Strategist & Founder of Ceyteq",
    description:
      "Websites, Ads, Branding, SEO & AI Automation. Based in Sri Lanka, working worldwide.",
    type: "profile",
    images: ["/images/hero-main.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.Nilan — Digital Strategist & Founder of Ceyteq",
    description:
      "Websites, Ads, Branding, SEO & AI Automation. Based in Sri Lanka, working worldwide.",
    images: ["/images/hero-main.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans text-ink antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
