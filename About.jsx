"use client";

import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { WHAT_I_DO } from "@/lib/data";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="container-x">
        <SectionHeading kicker="S.Nilan" title={t("about_title")} sub={t("about_sub")} />
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="premium-card h-full p-7 sm:p-9">
              <p className="text-[17px] leading-relaxed text-neutral-900">{t("about_p1")}</p>
              <p className="mt-4 text-[17px] leading-relaxed text-neutral-900">{t("about_p2")}</p>
              <a
                href="https://www.ceyteq.linkpc.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-6"
              >
                Visit Ceyteq — ceyteq.linkpc.net
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="premium-card h-full p-7 sm:p-9">
              <h3 className="font-display text-xl font-extrabold tracking-tight">{t("what_do")}</h3>
              <ul className="mt-4">
                {WHAT_I_DO.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-dashed border-neutral-200 py-2.5 font-semibold last:border-0"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                      <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
