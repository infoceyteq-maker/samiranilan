"use client";

import { Bot, Clapperboard, Globe, Search, Sparkles, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { SERVICES } from "@/lib/data";

const ICONS = { Globe, Target, Sparkles, Search, Bot, Clapperboard };

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-24 py-20">
      <div className="container-x">
        <SectionHeading kicker="Ceyteq" title={t("services_title")} sub={t("services_sub")} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.title} delay={0.06 * i}>
                <article className="premium-card group h-full p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-soft-gradient text-brand-deep shadow-sm transition group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-neutral-800">{s.desc}</p>
                  <div className="mt-4 text-xs font-black uppercase tracking-[0.08em] text-brand-emerald">
                    {s.meta}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
