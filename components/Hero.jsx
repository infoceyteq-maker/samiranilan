"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowDownRight, BadgeCheck, BarChart3, Mail, MessageCircle, Rocket } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { CONTACT, HERO_STATS, SOCIALS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-20">
        {/* ------- Copy ------- */}
        <div>
          <m.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-[13px] font-extrabold text-emerald-900 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {t("badge")}
          </m.div>

          <m.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-6 font-display text-6xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-7xl xl:text-[92px]">
            S.<span className="text-gradient">Nilan</span>
          </m.h1>

          <m.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-neutral-700">
            {CONTACT.fullName} &nbsp;•&nbsp; Sri Lanka → Working Worldwide
          </m.p>

          <m.p variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            {t("hero_role_1")}{" "}
            <span className="text-gradient">{CONTACT.brand}</span>
          </m.p>

          <m.p variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-900">
            {t("hero_desc")}
          </m.p>

          <m.div variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="mt-8 flex flex-wrap gap-3">
            <a href={CONTACT.whatsappProject} target="_blank" rel="noopener noreferrer" className="btn-olive">
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              {t("btn_whatsapp")}
            </a>
            <a href="#works" className="btn-red">
              {t("btn_work")}
              <ArrowDownRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn-ghost">
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              {t("btn_email")}
            </a>
          </m.div>

          <m.div variants={fadeUp} initial="hidden" animate="show" custom={6}
            className="mt-8 flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-300 bg-white/90 px-3.5 py-1.5 text-[13px] font-bold shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-card"
              >
                {s.label}
              </a>
            ))}
          </m.div>

          <m.dl variants={fadeUp} initial="hidden" animate="show" custom={7}
            className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-extrabold tracking-tight">{s.value}</dd>
                <dd className="mt-0.5 text-[11px] font-bold uppercase leading-snug tracking-wide text-neutral-700">
                  {s.label}
                </dd>
              </div>
            ))}
          </m.dl>
        </div>

        {/* ------- Visual composition ------- */}
        <m.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -inset-4 rounded-[36px] bg-white/25 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/60 shadow-premium">
            <div className="relative aspect-[4/4.6] sm:aspect-[4/4.2]">
              <Image
                src="/images/hero-main.jpg"
                alt="Digital agency professionals collaborating on a client growth strategy in a modern workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10" aria-hidden="true" />
            </div>

            {/* Bottom glass system card */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-lift backdrop-blur-xl">
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-brand-deep">
                <BarChart3 className="h-4 w-4" aria-hidden="true" />
                The Ceyteq Growth System
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[11px] font-extrabold">
                {["Ads", "Landing Page", "CRM", "GA4 Report"].map((step, i) => (
                  <div key={step} className="rounded-xl bg-white px-1 py-2 shadow-sm">
                    <div className={`font-display text-sm ${i === 3 ? "text-brand-red" : "text-brand-deep"}`}>0{i + 1}</div>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating accent images */}
          <m.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-8 hidden w-36 overflow-hidden rounded-2xl border border-white/60 shadow-lift sm:block lg:-left-10 lg:w-44"
          >
            <div className="relative aspect-[4/3]">
              <Image src="/images/hero-meeting.jpg" alt="Client strategy meeting" fill sizes="176px" className="object-cover" />
            </div>
          </m.div>
          <m.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -right-2 top-1/3 hidden w-32 overflow-hidden rounded-2xl border border-white/60 shadow-lift sm:block lg:-right-8 lg:w-40"
          >
            <div className="relative aspect-[4/3]">
              <Image src="/images/hero-strategy.jpg" alt="Presenting a digital marketing plan to a client" fill sizes="160px" className="object-cover" />
            </div>
          </m.div>

          {/* Floating proof badges */}
          <div className="glass absolute -top-3 right-5 flex items-center gap-2 rounded-full py-2 pl-2.5 pr-4 text-xs font-extrabold shadow-lift">
            <BadgeCheck className="h-4 w-4 text-brand-emerald" aria-hidden="true" />
            Fiverr Pro • Contra Verified
          </div>
          <div className="glass absolute -bottom-4 left-6 hidden items-center gap-2 rounded-full py-2 pl-2.5 pr-4 text-xs font-extrabold shadow-lift sm:flex">
            <Rocket className="h-4 w-4 text-brand-red" aria-hidden="true" />
            Next.js • Google Ads • Meta Ads • SEO
          </div>
        </m.div>
      </div>
    </section>
  );
}
