"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
function changeLanguage(lang: string) {
  const interval = setInterval(() => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (select) {
      select.value = lang;
      select.dispatchEvent(
        new Event("change")
      );
      clearInterval(interval);
    }
  }, 500);
}

export default function LanguageSwitcher() {
  const { language, setLanguage } =
    useLanguage();

  const isEnglish =
    language === "en";

  return (
    <div
      onClick={() => {
  const newLang =
    isEnglish ? "id" : "en";

  setLanguage(newLang);

  changeLanguage(newLang);
}}
      style={{
        position: "relative",
        width: "90px",
        height: "42px",
        borderRadius: "999px",
        background:
          "rgba(255,255,255,0.06)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "4px",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* Sliding Knob */}
      <div
  style={{
    position: "absolute",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: isEnglish
      ? "linear-gradient(135deg,#3B82F6,#60A5FA)"
      : "linear-gradient(135deg,#DC2626,#EF4444)",
    transform: isEnglish
      ? "translateX(0px)"
      : "translateX(48px)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  }}
>
  <Image
    src={
      isEnglish
        ? "/flags/gb.png"
        : "/flags/id.png"
    }
    alt="language"
    width={20}
    height={15}
  />
</div>

     <div
  style={{
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.4,
    zIndex: 2,
  }}
>
  <Image
    src="/flags/gb.png"
    alt="English"
    width={20}
    height={14}
    
  />
</div>

<div
  style={{
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    opacity: 0.4,
  }}
>
  <Image
    src="/flags/id.png"
    alt="Indonesia"
    width={20}
    height={14}
  />
</div>
    </div>
  );
}