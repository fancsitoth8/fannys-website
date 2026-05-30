import React, { createContext, useContext, useEffect, useState } from "react";
import en from "./en";
import hu from "./hu";

type Lang = "en" | "hu";

type Labels = typeof en;

interface I18nContextValue {
  language: Lang;
  setLanguage: (l: Lang) => void;
  labels: Labels;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("language");
      if (stored === "en" || stored === "hu") return stored;
    } catch (e) {
      // ignore
    }
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch (e) {
      // ignore
    }
  }, [language]);

  const labels = language === "hu" ? hu : en;

  const setLanguage = (l: Lang) => setLanguageState(l);

  return (
    <I18nContext.Provider value={{ language, setLanguage, labels }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
