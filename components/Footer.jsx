import { CONTACT, SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/60 py-10 backdrop-blur-xl">
      <div className="container-x flex flex-col items-center gap-5 text-center">
        <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient text-xs font-black text-white shadow-card">
            SN
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            S.Nilan
            <small className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-600">
              {CONTACT.brand}
            </small>
          </span>
        </a>
        <nav className="flex flex-wrap justify-center gap-2" aria-label="Social">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-300 bg-white px-3.5 py-1.5 text-[13px] font-bold shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <p className="text-sm font-medium text-neutral-700">
          © 2026 S.Nilan — Ceyteq (Ceylon Technology), Sri Lanka. Digital Strategist, Web Developer &amp;
          Brand Builder — working worldwide.
        </p>
      </div>
    </footer>
  );
}
