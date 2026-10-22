"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import LanguageDropdown from "./LanguageDropdown";
import { CONTACT } from "@/lib/data";

const LINKS = [
  { href: "#about", key: "nav_about" },
  { href: "#services", key: "nav_services" },
  { href: "#works", key: "nav_work" },
  { href: "#profiles", key: "nav_profiles" },
  { href: "#contact", key: "nav_contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-[0_8px_30px_rgba(17,24,39,.08)] backdrop-blur-xl">
      <div className="container-x">
        <nav className="flex flex-wrap items-center justify-between gap-3 py-3" aria-label="Main">
          <a href="#top" className="flex items-center gap-3" aria-label="S.Nilan — home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-sm font-black text-white shadow-card">
              SN
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">
              S.Nilan
              <small className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-600">
                Ceyteq • Ceylon Technology
              </small>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-[15px] font-semibold lg:flex">
            {LINKS.map((l) => (
              <a key={l.key} href={l.href} className="transition hover:text-brand-deep">
                {t(l.key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageDropdown />
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red hidden !px-5 !py-2.5 text-sm sm:inline-flex"
            >
              {t("hire_me")}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-card lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-1 pb-4 pt-1 text-[15px] font-semibold">
                {LINKS.map((l) => (
                  <a
                    key={l.key}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 transition hover:bg-white"
                  >
                    {t(l.key)}
                  </a>
                ))}
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red mt-2"
                  onClick={() => setOpen(false)}
                >
                  {t("hire_me")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
