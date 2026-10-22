"use client";

import { useState } from "react";
import { ArrowUpRight, Building2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { CONTACT } from "@/lib/data";

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3.5 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft-gradient text-brand-deep shadow-sm ring-1 ring-neutral-200">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <div>
        <div className="text-sm font-extrabold">{label}</div>
        <div className="mt-0.5 text-[15px] font-semibold text-neutral-900">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project enquiry from ${form.name || "website visitor"} — ${form.subject || "Digital project"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const input =
    "w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-[15px] font-semibold text-ink outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/60 placeholder:font-medium placeholder:text-neutral-500";

  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="container-x">
        <SectionHeading kicker="Contact" title={t("contact_title")} sub={t("contact_sub")} />
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="premium-card h-full p-7 sm:p-8">
              <Row icon={Mail} label={t("personal_email")}>
                <a href={`mailto:${CONTACT.email}`} className="link-arrow">{CONTACT.email}</a>
              </Row>
              <Row icon={Building2} label={t("business_email")}>
                <a href={`mailto:${CONTACT.businessEmail}`} className="link-arrow">{CONTACT.businessEmail}</a>
              </Row>
              <Row icon={MessageCircle} label={`WhatsApp / ${t("call_now")}`}>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  {CONTACT.phoneDisplay}
                </a>
              </Row>
              <Row icon={Phone} label="Mobile">
                <a href={CONTACT.phoneHref} className="link-arrow">{CONTACT.phoneDisplay}</a>
              </Row>
              <Row icon={MapPin} label={t("location")}>
                {CONTACT.location}
              </Row>
              <div className="mt-5 border-t border-dashed border-neutral-300 pt-5">
                <div className="text-sm font-extrabold">{t("hire_platforms")}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    { label: "Fiverr Pro", href: "https://pro.fiverr.com/s/wbbB20r" },
                    { label: "Contra", href: "https://contra.com/ceylon_technology_ao16fx0l/work" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/ceylon-technology" },
                  ].map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-ink px-3.5 py-1.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-deep"
                    >
                      {p.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="premium-card h-full p-7 sm:p-8">
              <h3 className="font-display text-xl font-extrabold">{t("form_title")}</h3>
              <p className="mt-1 text-sm font-medium text-neutral-700">{t("form_note")}</p>
              <div className="mt-5 grid gap-3">
                <label htmlFor="contact-name" className="sr-only">
                  {t("ph_name")}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder={t("ph_name")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={input}
                  autoComplete="name"
                />
                <label htmlFor="contact-email" className="sr-only">
                  {t("ph_email")}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  placeholder={t("ph_email")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={input}
                  autoComplete="email"
                />
                <label htmlFor="contact-subject" className="sr-only">
                  {t("ph_subject")}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  placeholder={t("ph_subject")}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={input}
                />
                <label htmlFor="contact-message" className="sr-only">
                  {t("ph_msg")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t("ph_msg")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${input} resize-y`}
                />
              </div>
              <button type="submit" className="btn-red mt-5 w-full">
                <Send className="h-4 w-4" aria-hidden="true" />
                {t("form_send")}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
