"use client";

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { PROCESS, SKILLS } from "@/lib/data";

export default function ProcessSkills() {
  const { t } = useLanguage();

  return (
    <section id="process" className="scroll-mt-24 py-20">
      <div className="container-x">
        <SectionHeading kicker="How It Works" title={t("process_title")} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} delay={0.07 * i}>
              <article className="premium-card relative h-full p-6">
                <span className="pointer-events-none absolute right-4 top-3 font-display text-5xl font-extrabold text-neutral-200" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-display text-base font-extrabold text-white shadow-card">
                  {i + 1}
                </span>
                <h3 className="relative mt-4 font-display text-lg font-extrabold">{step.title}</h3>
                <p className="relative mt-1.5 text-[15px] leading-relaxed text-neutral-800">{step.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="text-center font-display text-3xl font-extrabold tracking-tight">{t("skills_title")}</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-300 bg-white/90 px-3.5 py-1.5 text-sm font-extrabold shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-card"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
