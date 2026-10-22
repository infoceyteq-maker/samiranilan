"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Code2,
  FileText,
  FolderOpen,
  Megaphone,
  Palette,
  Play,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { BUSINESS_STAGE, DRIVE_LIBRARY_URL, WORK_MEDIA, WORK_TABS } from "@/lib/data";

const ICONS = { Code2, Palette, Briefcase, Megaphone };

const driveView = (id) => `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const driveEmbed = (id) => `https://drive.google.com/file/d/${id}/preview`;
const driveThumb = (id, size = 1000) => `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;

/* ---------------- Video card: click-to-play (fast page, Drive embeds on demand) ---------------- */
function VideoCard({ item, gradient, visitUrl }) {
  const [playing, setPlaying] = useState(false);
  const [thumbErr, setThumbErr] = useState(false);

  return (
    <article className="premium-card group flex flex-col overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {!item.driveId ? (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-3 text-white"
            style={{ background: gradient }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/50">
              <Play className="ml-1 h-6 w-6 fill-white" aria-hidden="true" />
            </span>
            <span className="px-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-white/90">
              Video uploading — coming soon
            </span>
          </div>
        ) : playing ? (
          <iframe
            src={driveEmbed(item.driveId)}
            title={`Video: ${item.title}`}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group/play relative block h-full w-full cursor-pointer"
            aria-label={`Play video: ${item.title}`}
          >
            {!thumbErr ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={driveThumb(item.driveId, 1000)}
                alt={item.title}
                loading="lazy"
                decoding="async"
                onError={() => setThumbErr(true)}
                className="h-full w-full object-cover opacity-90 transition duration-300 group-hover/play:opacity-100"
              />
            ) : (
              <span className="block h-full w-full" style={{ background: gradient }} />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/45 ring-1 ring-white/60 backdrop-blur transition duration-300 group-hover/play:scale-110">
                <Play className="ml-1 h-7 w-7 fill-white text-white" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-5">
        <h4 className="line-clamp-2 font-display text-[15px] font-extrabold leading-snug">{item.title}</h4>
        <a
          href={item.driveId ? driveView(item.driveId) : visitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red shrink-0 !px-4 !py-2 text-[13px]"
        >
          Visit
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

/* ---------------- Image / flyer card ---------------- */
function ImageCard({ item }) {
  const [err, setErr] = useState(false);
  return (
    <article className="premium-card flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        {!err ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={driveThumb(item.driveId, 800)}
            alt={item.title}
            loading="lazy"
            decoding="async"
            onError={() => setErr(true)}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-xs font-black uppercase tracking-[0.15em] text-neutral-500">
            Preview loading…
          </div>
        )}
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-4">
        <h4 className="line-clamp-2 font-display text-sm font-extrabold leading-snug">{item.title}</h4>
        <a
          href={driveView(item.driveId)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red shrink-0 !px-4 !py-2 text-[13px]"
        >
          Visit
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}


/* ---------------- Business Stage: E-Proposals block ---------------- */
function BusinessStageBlock() {
  return (
    <div className="mb-12">
      <div className="premium-card p-7 sm:p-9">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-card">
          <FileText className="h-4 w-4" aria-hidden="true" />
          {BUSINESS_STAGE.badge}
        </span>
        <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight">{BUSINESS_STAGE.heading}</h3>
        <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-neutral-900">{BUSINESS_STAGE.desc}</p>
        <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {BUSINESS_STAGE.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 font-semibold">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden="true" />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <details className="mt-5 rounded-2xl bg-ash-100 p-4">
          <summary className="cursor-pointer font-display text-[15px] font-extrabold">
            සිංහල විස්තරය කියවන්න
          </summary>
          <p className="mt-2 leading-relaxed text-neutral-900">{BUSINESS_STAGE.descSi}</p>
        </details>
        <div className="mt-6">
          <a href="#contact" className="btn-olive">
            Get My E-Proposal
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <h3 className="mb-5 mt-10 font-display text-2xl font-extrabold tracking-tight">
        E-Proposal Samples by Ceyteq
      </h3>
      <div className="grid gap-5 md:grid-cols-3">
        {BUSINESS_STAGE.samples.map((x) => (
          <article key={x.title} className="premium-card flex flex-col overflow-hidden">
            <div className="flex items-center gap-3 p-5 text-white" style={{ background: x.gradient }}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/40">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="text-[13px] font-black uppercase leading-tight tracking-[0.08em]">{x.tag}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="font-display text-lg font-extrabold leading-snug">{x.title}</h4>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-neutral-800">{x.desc}</p>
              <div className="mt-5">
                <a href={x.url} target="_blank" rel="noopener noreferrer" className="btn-red !px-6 !py-2.5 text-sm">
                  Visit Proposal
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Works gallery with 4 tabs, grouped by Drive subfolder ---------------- */
export default function WorksGallery() {
  const [active, setActive] = useState(WORK_TABS[0].id);
  const activeTab = WORK_TABS.find((tb) => tb.id === active) ?? WORK_TABS[0];

  const counts = useMemo(() => {
    const c = {};
    for (const tb of WORK_TABS)
      c[tb.id] = WORK_MEDIA.filter((m) => m.tab === tb.id && m.driveId).length;
    c["business-stage"] = BUSINESS_STAGE.samples.length;
    return c;
  }, []);

  const groups = useMemo(() => {
    const map = [];
    for (const item of WORK_MEDIA.filter((m) => m.tab === active)) {
      let g = map.find((x) => x.name === item.group);
      if (!g) {
        g = { name: item.group, items: [] };
        map.push(g);
      }
      g.items.push(item);
    }
    return map;
  }, [active]);

  return (
    <section id="works" className="scroll-mt-24 py-20">
      <div className="container-x">
        <SectionHeading
          kicker="My Works"
          title="Work Videos & Files"
          sub="Everything I have built over the years — organised into four crafts. Pick a tab, press play on any video, and use the Visit button beside each work to open the full file."
        />

        {/* ---- 4 Tabs ---- */}
        <Reveal className="mb-5 flex flex-wrap justify-center gap-2">
          {WORK_TABS.map((tb) => {
            const Icon = ICONS[tb.icon] ?? Play;
            const isActive = tb.id === active;
            return (
              <button
                key={tb.id}
                type="button"
                onClick={() => setActive(tb.id)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-extrabold text-white shadow-card"
                    : "inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-extrabold shadow-sm transition hover:border-emerald-300 hover:shadow-card"
                }
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {tb.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-black ${
                    isActive ? "bg-white/25 text-white" : "bg-ash-100 text-neutral-700"
                  }`}
                >
                  {counts[tb.id] > 0 ? counts[tb.id] : "Soon"}
                </span>
              </button>
            );
          })}
        </Reveal>

        <Reveal className="mb-10 text-center">
          <a href={activeTab.drive} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5 text-sm">
            <FolderOpen className="h-4 w-4 text-brand-deep" aria-hidden="true" />
            Open the full “{activeTab.label}” folder on Google Drive
          </a>
        </Reveal>

        {/* ---- Groups inside the active tab ---- */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {active === "business-stage" && <BusinessStageBlock />}
          {groups.map((g) => {
            const isVideoGroup = g.items[0]?.kind === "video";
            return (
              <div key={g.name} className="mb-12">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight">{g.name}</h3>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-neutral-700 shadow-sm ring-1 ring-neutral-200">
                    {g.items.length} {g.items.length === 1 ? "file" : "files"}
                  </span>
                  <span className="hidden h-px flex-1 bg-white/50 sm:block" aria-hidden="true" />
                </div>
                <div
                  className={
                    isVideoGroup
                      ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  }
                >
                  {g.items.map((item) =>
                    item.kind === "video" ? (
                      <VideoCard
                        key={`${item.title}-${item.driveId ?? "soon"}`}
                        item={item}
                        gradient={activeTab.gradient}
                        visitUrl={activeTab.drive}
                      />
                    ) : (
                      <ImageCard key={`${item.title}-${item.driveId}`} item={item} />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>

        <Reveal>
          <div className="glass mx-auto mt-2 max-w-3xl rounded-3xl px-6 py-6 text-center font-bold">
            This is my complete work library — every video, flyer and design file lives in my
            Google Drive collection.{" "}
            <a
              href={DRIVE_LIBRARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-deep underline-offset-4 hover:underline"
            >
              Open the full Drive library →
            </a>{" "}
            Want work like this?{" "}
            <a href="#contact" className="text-brand-olive underline-offset-4 hover:underline">
              Start a project →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
