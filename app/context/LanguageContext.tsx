"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Language = "en" | "id";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
} | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] =
    useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}