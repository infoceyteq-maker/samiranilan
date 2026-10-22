# S.Nilan — Personal Profile (Next.js)

Migrated from the original single-file HTML profile into a modern
**Next.js (App Router) + Tailwind CSS + Framer Motion** application.
Same content, same professional design system (Dark Ash Grey background,
black typography, emerald accents, Red + Olive highlight buttons,
6-language dropdown: EN / FR / HI / AR / ZH / JA) — rebuilt as an
enterprise-grade "Super UI": premium agency hero with real photography,
glassmorphism cards, scroll-reveal animation and modular components.

## Folder structure

```
s-nilan-nextjs/
├── app/
│   ├── globals.css        — Tailwind + design-system utilities (glass, buttons, gradient text)
│   ├── layout.js          — Root layout: fonts (Inter + Manrope), SEO metadata, Navbar/Footer
│   └── page.js            — Home: composes all sections
├── components/
│   ├── LanguageProvider.jsx  — i18n context (6 languages, localStorage, Arabic RTL)
│   ├── LanguageDropdown.jsx  — Sticky language <select> (EN/FR/HI/AR/ZH/JA)
│   ├── Navbar.jsx            — Glass sticky nav + mobile menu
│   ├── Reveal.jsx            — Framer-Motion scroll-reveal wrapper
│   ├── SectionHeading.jsx    — Kicker + title + subtitle block
│   ├── Hero.jsx              — NEW enterprise hero: photo collage, floating cards, stats, CTAs
│   ├── TrustBar.jsx          — Certification badges strip
│   ├── About.jsx             — "One person. The full digital team."
│   ├── Services.jsx          — 6 services (Lucide icons)
│   ├── WorksGallery.jsx      — NEW: My Works — 4 tabs (Software & Web / Design / Business Stage / Marketing & Advertising), video cards with Visit buttons
│   ├── CreativeLab.jsx       — Ceyteq + 3D/creative projects
│   ├── Profiles.jsx          — 12 of my own profiles & platforms
│   ├── ProcessSkills.jsx     — 5-step process + skill chips
│   ├── Contact.jsx           — Contact card + mailto form (+ WhatsApp / phone)
│   └── Footer.jsx
├── lib/
│   ├── data.js            — All content (services, creative projects, profiles, contact…)
│   └── translations.js    — UI strings for 6 languages
├── public/
│   └── images/            — hero photography (hero-main / hero-meeting / hero-strategy)
├── tailwind.config.js     — Ash/Emerald/Red/Olive palette, premium shadows, fonts
├── next.config.mjs
└── package.json
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Deploy

- **Vercel (recommended):** push this folder to GitHub → "Import" in Vercel → done.
- **Netlify:** New site from Git, build command `npm run build`, publish `.next` (Next plugin auto-applies).

## Customer content removed (2026-10-22)

At S.Nilan's request this personal profile no longer features any
customers — the 9 client websites, the 16-brand client wall and the
Facebook client-page cards were removed from both this Next.js site and
the older HTML build. The removed artwork is preserved in
`/_removed_customers_backup/2026-10-22/` in the workspace, so any of it
can be restored in minutes if ever needed again.

## Notes

- Hero photos are professional stock placeholders — replace
  `public/images/hero-*.jpg` with your own office/team photos any time.
- Your personal Facebook profile is intentionally **not** linked anywhere
  (only business/brand pages, per your instruction).

## Adding work videos (the 4 tabs)

Edit `WORK_MEDIA` in `lib/data.js`. For each video set:
- `embed`: `https://www.youtube.com/embed/VIDEO_ID` or
  `https://drive.google.com/file/d/FILE_ID/preview` (Drive files must be
  shared as "Anyone with the link"), or `videoSrc` for a direct .mp4 link.
- `visitUrl`: where the red **Visit** button beside the video should go.
Cards without a link yet automatically show a "Video uploading" placeholder.
