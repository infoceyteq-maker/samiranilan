"use client";

import { Globe } from "lucide-react";
import { LANGUAGES } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function LanguageDropdown() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white py-1.5 pl-3 pr-2 shadow-card"
      title="Language / Langue / भाषा / اللغة / 语言 / 言語"
    >
      <Globe className="h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        aria-label="Select language"
        className="max-w-[150px] cursor-pointer bg-transparent text-[13px] font-extrabold text-ink outline-none sm:max-w-[170px] sm:text-sm"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
