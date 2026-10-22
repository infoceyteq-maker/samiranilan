"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { translate } from "@/lib/translations";

const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  // Restore saved language after first paint (avoids hydration mismatch)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("snilan-lang");
      if (saved && ["en", "fr", "hi", "ar", "zh", "ja"].includes(saved)) setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("snilan-lang", lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((code) => setLangState(code), []);
  const t = useCallback((key) => translate(lang, key), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
