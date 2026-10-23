// Central content model — S.Nilan personal profile.
// NOTE: All customer/client content was removed on 2026-10-22 at S.Nilan's
// request — this is a personal profile, so it features only him, his own
// company (Ceyteq), his services, his own profiles and his skills.
// (The removed customer artwork is preserved in /_removed_customers_backup/2026-10-22.)

export const CONTACT = {
  name: "S.Nilan",
  fullName: "S M S N Udayanga",
  brand: "Ceyteq — Ceylon Technology",
  phoneDisplay: "+94 788 607 143",
  phoneHref: "tel:+94788607143",
  whatsapp: "https://wa.me/94788607143",
  whatsappProject:
    "https://wa.me/94788607143?text=Hello%20S.Nilan%2C%20I%20saw%20your%20profile%20and%20I%20would%20like%20to%20discuss%20a%20project.",
  email: "samiranilan@gmail.com",
  businessEmail: "info.ceyteq@gmail.com",
  location: "Sri Lanka — working worldwide (remote)",
};

export const SOCIALS = [
  { label: "Fiverr Pro", href: "https://pro.fiverr.com/s/wbbB20r" },
  { label: "Contra", href: "https://contra.com/ceylon_technology_ao16fx0l/work" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ceylon-technology" },
  { label: "Facebook", href: "https://www.facebook.com/people/Ceyteq/61588447667695/" },
  { label: "Instagram", href: "https://www.instagram.com/ceyteq/" },
  { label: "YouTube", href: "https://youtube.com/@ceylontechnology-ceyteq" },
  { label: "TikTok", href: "https://www.tiktok.com/@ceyteq" },
  { label: "GitHub", href: "https://github.com/infoceyteq-maker" },
  { label: "X", href: "https://x.com/CeylonTech22598" },
];

export const TRUST_ITEMS = [
  "Google & Meta Certified",
  "Fiverr Pro",
  "Contra — Identity Verified",
  "Next.js / React",
  "AI Video & Ads",
];

export const HERO_STATS = [
  { value: "6", label: "Core digital services" },
  { value: "27", label: "Skills & tools mastered" },
  { value: "12", label: "Profiles & platforms" },
  { value: "24h", label: "Typical first reply" },
];

export const WHAT_I_DO = [
  "Next.js, React & modern web development",
  "AI-driven performance marketing — Meta & Google Ads",
  "Brand identity, graphic design & AI video",
  "SEO — technical, on-page & content",
  "Hospitality ecosystems & OTA / booking optimisation",
  "Custom ERP / CRM systems & workflow automation",
  "Social media management — Facebook, Instagram, TikTok, LinkedIn, YouTube",
  "Premium printing, packaging & signage (via Ceyteq)",
];

export const SERVICES = [
  {
    icon: "Globe",
    title: "Web & E-Commerce",
    desc: "Mobile-first, lightning-fast websites and online stores built with Next.js / React — designed to convert visitors into customers.",
    meta: "Next.js • React • TypeScript • Vercel",
  },
  {
    icon: "Target",
    title: "Ads & Performance Marketing",
    desc: "Google Ads, Meta (Facebook/Instagram), TikTok, LinkedIn and YouTube campaigns managed for ROI — tracked from click to sale.",
    meta: "Google Ads • Meta Ads • GA4",
  },
  {
    icon: "Sparkles",
    title: "Brand Identity & Design",
    desc: "Logos, complete brand systems, social media design and print-ready creative that makes your business instantly recognisable.",
    meta: "Logo • Branding • Canva • Adobe",
  },
  {
    icon: "Search",
    title: "SEO & Content",
    desc: "Keyword research, technical and on-page SEO and content that ranks — and turns Google searches into enquiries.",
    meta: "SEO • Search Console • Content",
  },
  {
    icon: "Bot",
    title: "AI, CRM & Automation",
    desc: "AI customer-care, CRM workflows, custom ERP systems and smart automation that save your team hours every week.",
    meta: "AI Chat • CRM • ERP • Gemini",
  },
  {
    icon: "Clapperboard",
    title: "Creative Media & Video",
    desc: "AI video production, video editing, motion & 3D design, photography direction — content built to stop the scroll.",
    meta: "AI Video • Blender • Cinema 4D",
  },
];

// My own company + my personal creative projects (not customer work)
export const CREATIVE_PROJECTS = [
  {
    gradient: "linear-gradient(120deg,#111111,#059669)",
    badge: "C",
    header: "Ceyteq",
    title: "Ceyteq — Ceylon Technology",
    desc: "My company website: web & e-commerce, digital marketing, advertising, printing, creative media and AI/ERP solutions.",
    links: [
      { label: "Visit Website", href: "https://www.ceyteq.linkpc.net/" },
      { label: "Portfolio Page", href: "https://www.ceyteq.linkpc.net/portfolio.html" },
    ],
  },
  {
    gradient: "linear-gradient(120deg,#1f2937,#65a30d)",
    badge: "3D",
    header: "Interactive 3D",
    title: "Interactive 3D Soundwave Experience",
    desc: "An immersive interactive 3D soundwave and studio hero experience — creative technology beyond standard templates.",
    links: [
      { label: "View Project", href: "https://contra.com/p/MRPPQE2M-interactive-3-d-soundwave-and-studio-hero-experience" },
    ],
  },
  {
    gradient: "linear-gradient(120deg,#111111,#dc2626)",
    badge: "3D",
    header: "Motion Design",
    title: "Microvascular Histology — 3D Motion",
    desc: "Procedural 3D tissue visualisation and motion design in Blender / Cinema 4D for scientific storytelling.",
    links: [
      { label: "View Project", href: "https://contra.com/p/mMBP2kmM-microvascular-histology-3-d-procedural-tissue-and-motion-design" },
    ],
  },
];

// ---------------------------------------------------------------------------
// MY WORKS — Videos & Files (4 tabs)
// S.Nilan uploads his work videos (YouTube / Google Drive) and sends the links
// separately. To publish one, just fill an item below:
//   embed  : playable embed URL
//            YouTube -> https://www.youtube.com/embed/VIDEO_ID
//            Drive   -> https://drive.google.com/file/d/FILE_ID/preview
//            (Drive files must be shared as "Anyone with the link")
//   videoSrc: direct .mp4 URL instead of an embed (optional)
//   websiteUrl: related live website shown beside the video and opened by Visit Website
// Until a link is filled, the card shows a clean "uploading" placeholder.
// ---------------------------------------------------------------------------
export const DRIVE_LIBRARY_URL =
  "https://drive.google.com/drive/folders/1lLinBwJIKtNYX9TDBdR5-C-MTHy9zR-e?usp=sharing";

export const WORK_TABS = [
  { id: "software-web", label: "Software & Web Development", icon: "Code2", gradient: "linear-gradient(120deg,#111111,#059669)", drive: "https://drive.google.com/drive/folders/185qYHaaJOHLeVbyS4fnsvtiQqCuPGKHl?usp=sharing" },
  { id: "design", label: "Design", icon: "Palette", gradient: "linear-gradient(120deg,#111111,#dc2626)", drive: "https://drive.google.com/drive/folders/18jXcTEn4Jy08UguH-2dDmhOYxe8tMOgZ?usp=sharing" },
  { id: "business-stage", label: "Business Stage", icon: "Briefcase", gradient: "linear-gradient(120deg,#374151,#65a30d)", drive: "https://drive.google.com/drive/folders/1dk7aOdry9K-1Y3pAX-2UTsGH0F0c3Toy?usp=sharing" },
  { id: "marketing-advertising", label: "Marketing & Advertising", icon: "Megaphone", gradient: "linear-gradient(120deg,#064e3b,#dc2626)", drive: "https://drive.google.com/drive/folders/1aMZp-vm4KV8pIUx8xNLLmV9dsnzX71Dn?usp=sharing" },
];

export const WORK_MEDIA = [
  // software-web — Business Place Websites
  { tab: "software-web", group: "Business Place Websites", kind: "video", title: "Website UI advertisement creation", driveId: "1RVKlgFI7bB73oGZM3VnzcxbYxOJsDeUU" },
  { tab: "software-web", group: "Business Place Websites", kind: "video", title: "Website UI Design Advertisement", driveId: "14G2wGxhbCejQtEsZMHrRFUqWSG-Cyi8q" },
  { tab: "software-web", group: "Business Place Websites", kind: "video", title: "Website UI design advertisement", driveId: "14urIeTlNVRswd5vOBH5-yd1FOfbAs0pG" },
  // software-web — E-Commerce Websites
  { tab: "software-web", group: "E-Commerce Websites", kind: "video", title: "Website UI advertisement showcase", driveId: "1Gr0criiIdTWzrrvLhClQoh6BqEWhBVzn" },
  { tab: "software-web", group: "E-Commerce Websites", kind: "video", title: "Website UI advertisement video", driveId: "1vXA8vfSfuBjvsJAYGICwlpjPi3tC_rQx" },
  // software-web — Management Systems
  { tab: "software-web", group: "Management Systems", kind: "video", title: "Ceylon GIMMS website promotion (1)", driveId: "15zEGVlm5nWCBwbbInKQqvS7i0JM8TcSG" },
  { tab: "software-web", group: "Management Systems", kind: "video", title: "Educational web dashboard displa", driveId: "10V7QFKWG_7GsxtLGS_An3c4W0SG9FvMV" },
  { tab: "software-web", group: "Management Systems", kind: "video", title: "Management Systems 01", driveId: "1wSLZI1YuyRJIw2C5Qv7jLcNkY59LbH0e" },
  // software-web — Mobile Applications
  { tab: "software-web", group: "Mobile Applications", kind: "video", title: "Base44 (1)", driveId: "1xeYrdQmczMGic0dst__dmf-cIOhhmiIX" },
  { tab: "software-web", group: "Mobile Applications", kind: "video", title: "Website UI motion design adverti", driveId: "1TXsZJ3pAml0twD309QuW9gLo4HARilZ3" },
  // software-web — Personal Branding
  { tab: "software-web", group: "Personal Branding", kind: "video", title: "Website interface 3D advertiseme", driveId: "1Vsm8jKmHC4l-HGUXoaxOwOu9oOBd7fG6" },
  { tab: "software-web", group: "Personal Branding", kind: "video", title: "Website UI design advertisement", driveId: "13RthE6NrG4Orh4xpc3zkcHPEgriosGhu" },
  // design — Videos — 16:9 Landscape
  { tab: "design", group: "Videos — 16:9 Landscape", kind: "video", title: "Trio standing on stage victoriously", driveId: "1b4Kvn-Bb4E_eWEWl2FjGrJTFsbdFUAGR" },
  { tab: "design", group: "Videos — 16:9 Landscape", kind: "video", title: "Landscape Video 01", driveId: "10wvLDB-1APJW8PVvy9GO7GyKD9qGJxET" },
  // design — Videos — 9:16 Vertical / Reels
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 01", driveId: "1RblVyRIl9BAU_2t9gjCRA6ZXug_WJ0wz" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 02", driveId: "1xfdGgQSbH5sLN9OTSR2AOe2WAahZF7a8" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 03", driveId: "1Hv-q8UFGuuQKCImJUmKgiRS5cg-AEd8z" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 04", driveId: "1yjTMimTDiqiNasrbLM_Ug7W9-BPhC9Q1" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 05", driveId: "138CeqmL-8l8XQ0ZeuV0L9mJiuUsSLEfZ" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 06", driveId: "1rnuw7uZlI7Rxn-JJBI3JFM0x3IdLHBWt" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 07", driveId: "1ukPI5vz-yuvn7bXeWC0fgBaoXBILi63o" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 08", driveId: "1TxXFUq1dRkoTQkWIMXrFr8HCrGcKKNd9" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 09", driveId: "1B7QTyOrH2CNVg4mxse9TMBtzj_cHmHuR" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 10", driveId: "13gt-ZjAv7ACpQsmDX5Zb_pn7yZlgBjyY" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 11", driveId: "1xC30fjIHIAWEYUAgD4StePSUoZ8eYhV9" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 12", driveId: "1IrQHfAaxdptJjJb7nlbFI07IhcilHidj" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 13", driveId: "1z2gS3WvlwngKcWFia1cGm0En8GKnF24F" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 14", driveId: "1ucD3YMNbfCL3MgakPCaUlEQnwU47MRi1" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 15", driveId: "1_A9EQbzNyhEAfoUn0hEOM6HbJo7u64Lu" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 16", driveId: "1LpAZRwI3ZcIjwgg1MYOT-waDTvIpdImy" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 17", driveId: "1FW1WeDwR1T3hiHf8hiakDwN9R0MXrSvw" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "Vertical Reel 18", driveId: "1qBwWZM2LrDWmroK6w4FGFwj6F-1BPAbC" },
  { tab: "design", group: "Videos — 9:16 Vertical / Reels", kind: "video", title: "🌐 hotelmate.co.uk (2)", driveId: "1v5LYgSFro0iZ0dsb7Ci5hAsGRR2aR8Fq", websiteName: "Hotel Mate", websiteUrl: "https://hotelmate.co.uk/" },
  // design — Animation
  { tab: "design", group: "Animation", kind: "video", title: "CEYTEQ logo animation sequence", driveId: "1JbKFr_ljAo3_Or7oVx1H8Y6QjOofJIUv" },
  { tab: "design", group: "Animation", kind: "video", title: "CEYTEQ logo forming animation", driveId: "1po2Gl97-s1VUzv8AS_3Lwl1s4BSPSJeA" },
  { tab: "design", group: "Animation", kind: "video", title: "Animation 01", driveId: "1EQ8_1B_I5hd5wURSr4PQ_wLOJgfEYUEt" },
  { tab: "design", group: "Animation", kind: "video", title: "Animation 02", driveId: "17e4lhwY4AAVhwYYCsP8sO8qNN5lNSQeA" },
  // design — Flyer Designs
  { tab: "design", group: "Flyer Designs", kind: "image", title: "+94 777 320 184 (Facebook Ad)", driveId: "1EWiF9xbfqjOXdq6MEhU6kW0trVuZxTZw" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 01", driveId: "1GufRabUO1ErIFOygI_AjeQH7d_a0Xf7S" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 02", driveId: "1GaDF8WL4A53nQMbqGXjgsx_zDc2aA5ih" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 03", driveId: "1UcaoMb6EeyHWe4VaSFb0yC4p2ZPeF-n9" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 04", driveId: "14EXg3_4dYChGeQ1O9VYxwltzj1UG8ID4" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 05", driveId: "1JtnyZs01JHg5Y0qaeReH5VIdZY38b84h" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 06", driveId: "1Xnbr4pKHauqGS_YxKN-xkpBCdAcznlj8" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 07", driveId: "1MUgaMZDFI4J5hioDT22BwEg_VEaA9cxF" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 08", driveId: "1ZDOMCdPaIHxyxE0Lc67NizU8yDSAK7_2" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 09", driveId: "1x7qcESMe4V_hr4pu1Qlhn29He5OiTXBK" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 10", driveId: "1licwnQbwESSALxmHqXNlh9Q32PsaIG_C" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 11", driveId: "1iz694yCiZnu4EgtR6w-98MQovtrSyr3n" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "CEYTEQ commercial banner design", driveId: "1A5fnBI7BH8Cmb2R_kbioX3mCXnpe47y_" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "CEYTEQ digital marketing promoti", driveId: "1VxJHms526XAVa9SMFaFEBayulMiiMkRg" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 12", driveId: "1APCw_Y5GhJrntjXe447Etz9vto5w1JEe" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 13", driveId: "1LEMNCXCGQfcyvcb_uolOOQxRl-7bYXMM" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 14", driveId: "1DgzD4_AegGbbEe2Sa9wPqjn3TbAoL_-0" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 15", driveId: "1-0awedcRJuYk-OAkG1Ep08nu-QPfMY2l" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 16", driveId: "1JdNZyCESRESD_FSuqBijx6KQJMTs1a6g" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 17", driveId: "1XGBU3YZRKexP7i7yKZY_LtQc89x8AQUO" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 18", driveId: "1JRLCh-AT8th6_AzM-EiKl9fvujT5fdbQ" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 19", driveId: "12YJGOWEZ3Nr03ZYS4TD8wpl_rL77_wAw" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 20", driveId: "1PRBf3JtJwgDQuI_n3qB5rDRqeBxthReH" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 21", driveId: "1y4BYcQgUJb0FW8PII8EwvVuKAGXn6eye" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 22", driveId: "1M3uhhgc0xibOdO7xGMPb0aa1LQTdAXb7" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 23", driveId: "1ToIMxitofLEKM-CwvVhKVA0MqK7o_jOk" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Software dashboard on floating", driveId: "1Wwwl65zghmxnu5eyHdJlfbHZTczmgqdT" },
  { tab: "design", group: "Flyer Designs", kind: "image", title: "Flyer Design 24", driveId: "1IM7epzyPsZcWPYx26RwOTRQDIItGyO8J" },
  // design — Logo Designs
  { tab: "design", group: "Logo Designs", kind: "image", title: "Logo Design 01", driveId: "1qDOGm76qYCGkvUgG1Ws-1y41les9htSj" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Logo Design 02", driveId: "11uPzxTBAmTbFVEKfIPmYtqfNOYw3Qr6H" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Logo Design 03", driveId: "1tgyoxvvBQTjNeyzoA6phwZhnH14pY6-0" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Logo Design 04", driveId: "1KCVBwFlo1eyS2KRNYdUykbpQJEOUVJZd" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Logo Design 05", driveId: "1XIr7Ezs_qjTrhLQJlVc7qjPpnX-8peeq" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Logo Design 06", driveId: "101C-EbcKxkoBnk-E_QHJcWHWkFbJUaWs" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Logo Design 07", driveId: "1MEREWBOObLPLcAxtB2jE-hZS9oOWc_3E" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Aqua3", driveId: "1SOyvcDIilQrjrtB60sO7VRj3zFeNEBLw" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Beige Flat Illustrative Bicycle Team Logo", driveId: "1yFa5_Wty-_VoyuACiVdoBHU9ODLNvsMS" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Logo Design 08", driveId: "198LFgZVZD-OK71lxWZk6Qt-7ofI6lqKp" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Green Simple Illustration Hotel Logo", driveId: "13advF5f6LaShf7-LaS9ex3oJsE0AmOUi" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Iris1", driveId: "1GS-h5sk1AN3LS2DA23aDsC0STCiCrbNH" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Iris2", driveId: "1WLc6_6FmFFURijq7W8GAMA0BOz1fUD-7" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Iris3", driveId: "1n3Y-DEVJqXOyvw3yapC0kR-iwttSntnH" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Mandakini (1)", driveId: "1kLaLTzfyyxDazYXVU0CeSEej0FMWzba_" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Mandakini", driveId: "1LA7phnFPw2QP7fssgjZagcdNHltECoeD" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Minimalist Orange Shopping Bag Market Logo (1)", driveId: "1g_jURhq7zXaEuQO_VrlBOUwAqIKCDWSu" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Minimalist Orange Shopping Bag Market Logo", driveId: "1y-WdlMPXtdYM_kb0hE2a4D8x0IYCvmAg" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Posidon1", driveId: "1HoNCtDHWVH0JAq1VLhNbJIKFqTZBdGFX" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Posidon4", driveId: "1v77UDFmJAKlNDtF5jK9zyxXDhYTsE23D" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Posidon5", driveId: "1Dszec3HfGBnw90DLEQ_dqsOf0UI_HKvA" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Resize image and create logo", driveId: "1ZL_WFFsMp09XBng_WRpcBW1LWmJJCw_X" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Sithumi", driveId: "1gE2izMZUbwHutfm_bt-ACuC5DiNvyGam" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Steps", driveId: "1OuHjBrsd_l1hJJL5F28Xz4t0fzw7YaMg" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Tip7", driveId: "1ZBZVnOottzCkiNdIIqNB37qXPVmw6FAQ" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Vylos", driveId: "1bhpDPTpnlB-Ht-RI5Zdz2FfoMvXSHn4B" },
  { tab: "design", group: "Logo Designs", kind: "image", title: "Vylos2", driveId: "1Ruk_yVluWb56PW0uWq8ayrOobBKSd-jY" },
  // marketing-advertising — Video Ads
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "CEYTEQ", driveId: "1lwGZD4T6mBbgF1btj29pBr6JiUR2s77x", websiteName: "Ceyteq", websiteUrl: "https://www.ceyteq.linkpc.net/" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Create CEYTEQ landscape advertis", driveId: "1ozdWudtkj-eS-uc06qUc79rZT2tUYfzt", websiteName: "Ceyteq", websiteUrl: "https://www.ceyteq.linkpc.net/" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Hotel automation promo video cre", driveId: "1ZX1ZjtgTe4QwjEb8Qs_Vd_InUs4zdXtT", websiteName: "Hotel Mate", websiteUrl: "https://hotelmate.co.uk/" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Hotel management system commerci", driveId: "1aocmriGEbduvE10AjZdQ5OHq7XL7soJ_", websiteName: "Hotel Mate", websiteUrl: "https://hotelmate.co.uk/" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 01", driveId: "14VQdhbZpOZ3p5HBw3j2hlzPAPd_S5PJF" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 02", driveId: "1wxlN-X7AXdy8qnm3_FfQGMwChcIQXNyb" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 03", driveId: "1Wav412_4AvSiH2xV7rHLNMmz-IZ58oED" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 04", driveId: "1DfM8Hgq6a4ENa8sOngz0AJNr4QJE44sE" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 05", driveId: "1zohzZumzonbiW4zHSDP1GLls3fOLGxDB" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 06", driveId: "197sVJerlXYx4oluXmfLmb3vn27GebvVq" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 07", driveId: "1TNjpmPFfBShROvrF5_r2YiGTBQDZSGMd" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 08", driveId: "1upemn9c8LuuzZ014m4rhH1jsvVxxOzpz" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 09", driveId: "1KC-zrOoZ3Dv0KbCFIc3AJ6RAZgni7jvU" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 10", driveId: "16kYCR--TPnvi0WMUR36I9t4MlIvTeFvJ" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 11", driveId: "1V5ROij7t98b3PY539UeKDHpsFIDl0K_I" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Video Ad 12", driveId: "1TInZchzFHaD3M-9ttFgKU8OovUInMtCK" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Wingame Full", driveId: "1aIqUGXoFzF_LgXs7X7NimoktKdBkx3ak" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "Winwin", driveId: "1UAbWPbxfftbAwKnGMiYeBZ-tD-GnMZK2" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "🌐 hotelmate.co.uk (2)", driveId: "11UglMc6tDlZ1NtX3hztgaDuCsdnalTso", websiteName: "Hotel Mate", websiteUrl: "https://hotelmate.co.uk/" },
  { tab: "marketing-advertising", group: "Video Ads", kind: "video", title: "🌐 hotelmate.co.uk", driveId: "1ZOYBFmw93jhHxRZ3HzZyJ0jECrtjqEAZ", websiteName: "Hotel Mate", websiteUrl: "https://hotelmate.co.uk/" },
  // marketing-advertising — Flyer Ads — Ceyteq
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Nfsdfsdf", driveId: "1J26-x4vgNF-XUFnl53AOPqPcSzYWh2pf" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Nff", driveId: "1xB1f1WdTzMX_e6JSbp5hbHI-uvuf7nui" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 01", driveId: "1Z6hOPVVxhPvhP4GsjpGwA6OG1V2V5S-q" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ndasfdadf", driveId: "1C63Iwpw_x7GrkbYu7FDi_41WwEwRNv0o" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Nvdfdf", driveId: "1KXoGKQsZUss1k-8btSlUxqvbEaVuT5Ka" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 02", driveId: "1vSXakhGPMkSr8iJ6gb_vTZ_EZwBIST6Q" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 03", driveId: "175uH4K1eVcfaeyO3kdpa5Dnp2YXZrrRq" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 04", driveId: "1jsHzGp5g5VT0JpwsrrCcm-lQ0JdDATXQ" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 05", driveId: "1LAtItzN3-A07F3qaJsJSfAihjFCZm2eu" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 06", driveId: "1mtQ_wChnD-paNtGZjYYV_2a1cDyOshLA" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 07", driveId: "17A2hiPNMT5tDNVfQywX4gUMkXoi0NHac" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 08", driveId: "1ApKzsNFpwJ-I7PzJOqaZoZl78nOxyJ1t" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 09", driveId: "1DVVwCOCz6Fzg-7EQI5dzq9wR8QG1dQku" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 10", driveId: "14T5hdYzzKjOv6FAlKyLkQ0_wAwkWWyxQ" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 11", driveId: "1zoVmnNYhxsmChzrIJRMAT466gpYhJlCh" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 12", driveId: "1tZWCV-AZsh8WIJTiVWwDfnbAUqaazQEp" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 13", driveId: "1ZYj9YCnRItJm3ahxh7TZ_IPKT8phEF2x" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 14", driveId: "1uD6EvaPIBosySQ45sVKjn1oj_rFJZKEg" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 15", driveId: "1canS_hW00jwsb23s6vrgqPTCLj-SuZiH" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 16", driveId: "1Wqj9lpHf-CMarkVqZmiSA8KWzwJ5aiHL" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 17", driveId: "1m55WPj61y1dmAAhZfBVkP7zqX_hE3_I8" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 18", driveId: "1T7Qx2M1QTM9beKErF7TJfJW_h4-YsMby" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 19", driveId: "10XwSVYJKBHT9fP6Yw1z0r2j8Vof3Uado" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 20", driveId: "1_LruCH3SEtdiCKWc_AdQaJ-tPp4Z6Fea" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 21", driveId: "1NNrR2goOgHsbqsFaRW1aMYPXOFzJKrZH" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 22", driveId: "1Lo3R1xiAa4d3G43b1R0PWCpCyAbqWsH0" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 23", driveId: "1_SvoQHtD40syyOoqLVQFANugjzX199YZ" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 24", driveId: "1htBqx8GxdHl4J74hmtnKnmkNoR-N9HgG" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 25", driveId: "1YYSbECuw18VBHq5uCXykLW071MGgNvxO" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 26", driveId: "1COYIKtynQTgrzgL0gDpUxwTLadvwbSZN" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 27", driveId: "1LcQsKoOvEbH8hlDspjH6t-mA2vY_P0qZ" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 28", driveId: "1FbdbrWwJHwkzf0ra4kLz-NyeheWDwQav" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 29", driveId: "1C7DwqEcn5oOCSY0wvCFYwuvUW8D7R1HW" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 30", driveId: "1T8oJJA8FjwLBis3C8m8-9uF6UIB_xHfH" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 31", driveId: "1I8Ycs1xSmvdt0anA0H2bIB0k-yznytI4" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 32", driveId: "1QPdccBu-9YGPTDsYQI1gCh1-WjlJUr0K" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 33", driveId: "1V1OB_SUhjjuYnlpqNqBzC0kvFcHzDlCy" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 34", driveId: "14OQetTZNLj14PmMicp_M4oYzOmX71Qtr" },
  { tab: "marketing-advertising", group: "Flyer Ads — Ceyteq", kind: "image", title: "Ceyteq Ad Flyer 35", driveId: "1Ebf2Oppn7_ZI1S-g-d4_QjrBKoTU2DAM" },
  // marketing-advertising — Flyer Ads — Hotel Mate
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Hotel Mate Ad Flyer 01", driveId: "1lML7eDyLDFIUUAlXYjWxIG9pz3bLIwP0" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Hotel Mate Ad Flyer 02", driveId: "1OwJbDnjnCgcGgYltU2F8apP6-UWooAFj" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Hotel Mate Ad Flyer 03", driveId: "1yduVyk53SmRNbfLxgW3lVoNvnZbSvv8j" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Hotel Mate Ad Flyer 04", driveId: "1vSoEWFGvYOzhnsN82oN0Xg_3yzkAArkK" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Hotel Mate Ad Flyer 05", driveId: "15dwXLKPNEtOwC-no-8KD8Ubuu3mCWsyG" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Hotel Mate Ad Flyer 06", driveId: "1CAuf2MuWRwWwcYc_ksr42sPgNJilqK4l" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Smarter Hotel. system. (1)", driveId: "1FHb0VYrSYdQllJ8yH4UbwFNT5KG54IqN" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Smarter Hotel. system. (2)", driveId: "1wEuzO38zRLofilVgWTEVcUNG1MYBZwIR" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Smarter Hotel. system. (3)", driveId: "1iMXPIqYl5r6B25kMXkqTWGdIPm2-5kPW" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Smarter Hotel. system. (4)", driveId: "1xPY7gAetpQtC5ak1WwjsEKBPi2rIAvTX" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Smarter Hotel. system. (5)", driveId: "19xn8d97XB4ldtT531q6HPIgGApLXeTjr" },
  { tab: "marketing-advertising", group: "Flyer Ads — Hotel Mate", kind: "image", title: "Smarter Hotel. system.", driveId: "1Iopu55ItYPXQ9LRPyBnWjtePvQJqRKXF" },
  // marketing-advertising — Flyer Ads — Kemin Export
  { tab: "marketing-advertising", group: "Flyer Ads — Kemin Export", kind: "image", title: "Kemin Export Flyer 01", driveId: "1Orxz0kPifmBLpIuypnk5Mal0dhLpwQl8" },
  { tab: "marketing-advertising", group: "Flyer Ads — Kemin Export", kind: "image", title: "Kemin Export Flyer 02", driveId: "1Pvdy99vwDpRmr4sBIQ2VqzWEtStwFES8" },
  { tab: "marketing-advertising", group: "Flyer Ads — Kemin Export", kind: "image", title: "Kemin Export Flyer 03", driveId: "1f33x0k1_EVbCrPdaubQRD9c8oxdY0dqg" },
  { tab: "marketing-advertising", group: "Flyer Ads — Kemin Export", kind: "image", title: "Kemin Export Flyer 04", driveId: "12aTlhUDUBHDRy0uOtXUb2dbrooRAcOvh" },
  { tab: "marketing-advertising", group: "Flyer Ads — Kemin Export", kind: "image", title: "Kemin Export Flyer 05", driveId: "1GPOh_x_JRM0TENP2OVDWcOjYMV9ty2LC" },
  { tab: "marketing-advertising", group: "Flyer Ads — Kemin Export", kind: "image", title: "Kemin Export Flyer 06", driveId: "1AO9NjoN1aGw3zY-AxVFEb37aGsA2yCNJ" },
];


// --- Business Stage tab: E-Proposals (Web-Based Proposal Module) ---
export const BUSINESS_STAGE = {
  badge: "First time in Sri Lanka",
  heading: "E-Proposals — Web-Based Proposal Module",
  desc: "Introducing Sri Lanka's first E-Proposals system — a Web-Based Proposal Module by Ceyteq. When you start a brand-new business (Total Business), everything you need lives inside one complete digital proposal: all the required information, step-by-step business guidelines and our full support. Going beyond the traditional paper proposal, this Web-Based Proposal Module presents your business idea in a far more attractive, professional and convincing way — as a modern website anyone can open from a single link.",
  descSi: "ලංකාවේ ප්‍රථම වතාවට අප විසින් හඳුන්වා දෙන නවතම E-Proposals (Web-based Proposal Module) පද්ධතිය මෙන්න. නව ව්‍යාපාරයක් (Total Business) ආරම්භ කිරීමේදී අවශ්‍ය වන සියලුම තොරතුරු, ව්‍යාපාරික මාර්ගෝපදේශ (Guidelines) සහ පූර්ණ සහාය (Support) ඇතුළත් සම්පූර්ණ ඩිජිටල් ව්‍යාපෘති යෝජනාවලියක් ලෙස මෙය ක්‍රියාත්මක වේ. සාම්ප්‍රදායික ක්‍රමයෙන් ඔබ්බට ගොස්, ඔබේ ව්‍යාපාරික අදහස වඩාත් ආකර්ෂණීයව ඉදිරිපත් කිරීමට මෙම Web-based Proposal Module එක හරහා අප සහාය ලබා දෙන්නෙමු.",
  features: [
    "Complete digital business proposal — shared as one simple web link",
    "All information needed to start a Total Business, in one place",
    "Business guidelines with full support from Ceyteq",
    "Present your idea far more attractively than a traditional paper proposal",
  ],
  samples: [
    {
      tag: "Digital Web Business Proposal",
      title: "Bottled Drinking Water Plant",
      desc: "A complete web-based project proposal for a bottled drinking-water factory — project details, investment and the full business plan presented as an interactive website.",
      url: "https://infoceyteq-maker.github.io/waterbottelsprojects/",
      gradient: "linear-gradient(120deg,#111111,#059669)",
    },
    {
      tag: "Bank Loan Proposal",
      title: "Gamage Groups (PVT) LTD",
      desc: "A web-based bank-loan proposal presenting the company, the project and its financial case in a modern digital format that can be opened on any device.",
      url: "https://infoceyteq-maker.github.io/gamagegroup-/",
      gradient: "linear-gradient(120deg,#374151,#65a30d)",
    },
    {
      tag: "PR & Personal Brand Proposal",
      title: "Mr. Tony Robbins",
      desc: "A strategic PR & personal-brand proposal positioning a four-time entrepreneur and consumer-health CEO as a nationally recognised voice in entrepreneurship, innovation and leadership.",
      url: "https://tonyrobbins-nine.vercel.app/",
      gradient: "linear-gradient(120deg,#111111,#dc2626)",
    },
  ],
};

export const PLATFORMS = [
  { badge: "Fi", name: "Fiverr Pro", handle: "Hire me for projects", href: "https://pro.fiverr.com/s/wbbB20r" },
  { badge: "Co", name: "Contra", handle: "@ceylon_technology — Work & Services", href: "https://contra.com/ceylon_technology_ao16fx0l/work" },
  { badge: "in", name: "LinkedIn", handle: "Ceylon Technology", href: "https://www.linkedin.com/in/ceylon-technology" },
  { badge: "f", name: "Facebook — Ceyteq Page", handle: "Ceyteq | Ceylon Technology", href: "https://www.facebook.com/people/Ceyteq/61588447667695/" },
  { badge: "Ig", name: "Instagram", handle: "@ceyteq", href: "https://www.instagram.com/ceyteq/" },
  { badge: "Yt", name: "YouTube", handle: "@ceylontechnology-ceyteq", href: "https://youtube.com/@ceylontechnology-ceyteq" },
  { badge: "Tk", name: "TikTok", handle: "@ceyteq", href: "https://www.tiktok.com/@ceyteq" },
  { badge: "Gh", name: "GitHub", handle: "@infoceyteq-maker", href: "https://github.com/infoceyteq-maker" },
  { badge: "X", name: "X (Twitter)", handle: "@CeylonTech22598", href: "https://x.com/CeylonTech22598" },
  { badge: "Pn", name: "Pinterest", handle: "@infoceyteq", href: "https://www.pinterest.com/infoceyteq/" },
  { badge: "W", name: "Ceyteq Website", handle: "ceyteq.linkpc.net", href: "https://www.ceyteq.linkpc.net/" },
  { badge: "Wa", name: "WhatsApp", handle: "+94 788 607 143 — fastest reply", href: "https://wa.me/94788607143" },
];

export const PROCESS = [
  { title: "Discover", desc: "Your goals, customers and competitors." },
  { title: "Design", desc: "Brand & page designs you approve first." },
  { title: "Build", desc: "Fast website / funnel, fully tracked." },
  { title: "Grow", desc: "Ads, SEO & content that bring traffic." },
  { title: "Measure", desc: "GA4 reports: leads, cost, what’s next." },
];

export const SKILLS = [
  "Next.js", "React", "TypeScript", "JavaScript", "Vercel", "GitHub",
  "Google Ads", "Meta / Facebook Ads", "TikTok Ads", "YouTube Ads",
  "SEO", "GA4 & Analytics", "Brand Identity", "Logo Design", "UI Design",
  "AI Video", "Video Editing", "Blender", "Cinema 4D", "Google Gemini",
  "ChatGPT", "AI Chatbots", "CRM / ERP Automation", "E-Commerce",
  "OTA / Booking Optimisation", "Social Media Management", "Printing & Signage",
];
