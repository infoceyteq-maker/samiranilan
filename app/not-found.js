import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Home, MessageCircle, Search } from "lucide-react";
import { CONTACT } from "@/lib/data";

export const metadata = {
  title: "Page not found",
  description: "That page does not exist. Head back to S.Nilan's homepage to see services, work and contact details.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#works", label: "Work" },
  { href: "/#profiles", label: "Profiles" },
  { href: "/#contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="scroll-mt-24 py-24">
      <div className="container-x">
        <div className="premium-card mx-auto max-w-2xl p-8 text-center sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-ash-100 px-4 py-1.5 text-[13px] font-black uppercase tracking-[0.14em] text-brand-deep">
            <Search className="h-4 w-4" aria-hidden="true" />
            Error 404
          </span>

          <p className="mt-6 font-display text-6xl font-extrabold leading-none tracking-tight sm:text-7xl">
            <span className="text-gradient">404</span>
          </p>

          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            This page took a different route
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-neutral-800">
            The link you followed does not exist (or was moved). Everything I do — services,
            work videos, profiles and contact details — lives on the homepage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn-red">
              <Home className="h-[18px] w-[18px]" aria-hidden="true" />
              Back to homepage
            </Link>
            <a
              href={CONTACT.whatsappProject}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-olive"
            >
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              WhatsApp me
            </a>
            <Link href="/#works" className="btn-ghost">
              <ArrowLeft className="h-[18px] w-[18px]" aria-hidden="true" />
              View my work
            </Link>
          </div>

          <nav aria-label="Quick links" className="mt-10 border-t border-dashed border-neutral-300 pt-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-600">
              Jump to a section
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {QUICK_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white px-3.5 py-1.5 text-sm font-extrabold shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-card"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
