import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT, SOCIALS } from "@/lib/data";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "S.Nilan — Digital Strategist & Founder of Ceyteq",
    template: "%s | S.Nilan",
  },
  description:
    "S.Nilan (S M S N Udayanga) — Digital Strategist & Founder of Ceyteq, Sri Lanka. Next.js websites, Google & Meta Ads, SEO, branding and AI automation.",
  applicationName: "S.Nilan",
  authors: [{ name: "S M S N Udayanga", url: SITE_URL }],
  creator: "S.Nilan",
  publisher: "Ceyteq — Ceylon Technology",
  keywords: [
    "S.Nilan",
    "Nilan Udayanga",
    "Ceyteq",
    "Ceylon Technology",
    "Digital Marketing Sri Lanka",
    "Next.js Developer",
    "Meta Ads",
    "Google Ads",
    "SEO Sri Lanka",
    "Brand Identity",
    "AI Automation",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "S.Nilan",
    locale: "en_US",
    title: "S.Nilan — Digital Strategist & Founder of Ceyteq",
    description:
      "Websites, Ads, Branding, SEO & AI Automation. Based in Sri Lanka, working worldwide.",
    images: [
      {
        url: "/images/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "S.Nilan — Digital Strategist & Founder of Ceyteq, Ceylon Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.Nilan — Digital Strategist & Founder of Ceyteq",
    description:
      "Websites, Ads, Branding, SEO & AI Automation. Based in Sri Lanka, working worldwide.",
    images: ["/images/hero-main.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#065f46",
  colorScheme: "light",
};

/** Structured data (schema.org) — helps Google show the right person + social profiles. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "S.Nilan",
      alternateName: ["S M S N Udayanga", "Nilan Udayanga", "Samiranilan"],
      url: SITE_URL,
      image: `${SITE_URL}/images/hero-main.jpg`,
      jobTitle: "Digital Strategist",
      email: `mailto:${CONTACT.email}`,
      telephone: CONTACT.phoneDisplay,
      worksFor: {
        "@type": "Organization",
        name: "Ceyteq (Ceylon Technology)",
        url: "https://www.ceyteq.linkpc.net/",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
        addressRegion: "Western Province",
      },
      sameAs: SOCIALS.map((s) => s.href),
      knowsAbout: [
        "Next.js",
        "React",
        "Web Development",
        "Google Ads",
        "Meta Ads",
        "SEO",
        "Brand Identity",
        "AI Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "S.Nilan — Digital Strategist",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <script
          type="application/ld+json"
          // Static, trusted content — the "<" escape prevents any script-tag break-out.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
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
