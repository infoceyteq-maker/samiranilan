"use client";

import { ArrowUpRight, FlaskConical } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { CREATIVE_PROJECTS } from "@/lib/data";

export default function CreativeLab() {
  const { t } = useLanguage();

  return (
    <section id="creative" className="scroll-mt-24 py-20">
      <div className="container-x">
        <SectionHeading
          kicker="Creative Technology"
          title={t("creative_title")}
          sub="Creative technology, 3D and media work — my own experiments and the ideas behind my design and development work."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {CREATIVE_PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={0.07 * i}>
              <article className="premium-card flex h-full flex-col overflow-hidden">
                <div className="flex items-center gap-3 p-5 text-white" style={{ background: p.gradient }}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-base font-black ring-1 ring-white/40">
                    {p.badge}
                  </span>
                  <span className="font-display text-[15px] font-extrabold">{p.header}</span>
                  <FlaskConical className="ml-auto h-4 w-4 opacity-70" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-extrabold leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-neutral-800">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
                        {l.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
