"use client";

import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { PLATFORMS } from "@/lib/data";

function Badge({ children }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient font-display text-base font-extrabold text-white shadow-card">
      {children}
    </span>
  );
}

export default function Profiles() {
  const { t } = useLanguage();

  return (
    <section id="profiles" className="scroll-mt-24 py-20">
      <div className="container-x">
        <SectionHeading kicker="Online Presence" title={t("profiles_title")} sub={t("profiles_sub")} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={0.04 * (i % 3)}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-card group flex items-center gap-4 p-5"
              >
                <Badge>{p.badge}</Badge>
                <span className="min-w-0">
                  <strong className="block font-display text-base font-extrabold leading-tight">{p.name}</strong>
                  <small className="block truncate text-[13px] font-semibold text-neutral-700">{p.handle}</small>
                </span>
                <span className="ml-auto inline-flex items-center gap-1 text-sm font-extrabold text-brand-deep">
                  Visit
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
