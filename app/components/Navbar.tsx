"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { translations } from "../translations";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();

  window.addEventListener(
    "resize",
    handleResize
  );

  return () =>
    window.removeEventListener(
      "resize",
      handleResize
    );
}, []);
  const { language } = useLanguage();

const t =
  translations[
    language as keyof typeof translations
  ];

  const pathname = usePathname();

 const links = [
  { name: t.navbar.home, href: "/" },
  { name: t.navbar.about, href: "/about" },
  { name: t.navbar.services, href: "/services" },
  { name: t.navbar.insights, href: "/insights" },
  {
    name: t.navbar.careerAcceleration,
    href: "/services/int-prep",
  },
  {
    name: t.navbar.contact,
    href: "/contact",
  },
];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "92%" : "95%",
          maxWidth: "1450px",
          zIndex: 1000,

          backdropFilter: "blur(18px)",
          background:
            "rgba(2,6,23,0.72)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          borderBottom:
            "1px solid rgba(127,29,29,0.55)",

          borderRadius: "24px",

          boxShadow:
            "0 10px 40px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: isMobile
            ? "10px 16px"
            : "16px 30px",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LOGO */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none",
            }}
          >
            <img
             src="/logo.png"
              alt="VD Fokus"
              width={50}
              height={50}
              style={{
                filter: `
                  drop-shadow(0 0 3px rgba(255,255,255,.9))
                  drop-shadow(0 0 10px rgba(255,255,255,.4))
                `,
              }}
            />

           <div
  className="notranslate"
  translate="no"
>
  <div
    style={{
      color: "#fff",
      fontSize: isMobile
  ? "16px"
  : "20px",
      fontWeight: 700,
    }}
  >
    VD Fokus
  </div>

  <div
    style={{
      color: "#94a3b8",
      fontSize: isMobile
  ? "11px"
  : "13px"
    }}
  >
    Talent & HR Solutions
  </div>
</div>
          </a>

          {/* NAVIGATION */}
         {isMobile ? (
  <button
    onClick={() =>
      setMenuOpen(!menuOpen)
    }
    style={{
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: "30px",
      cursor: "pointer",
    }}
  >
    ☰
  </button>
) : (
  <nav
    style={{
      display: "flex",
      alignItems: "center",
      gap: "32px",
    }}
  >
            
            {links.map((link, i) => {
              const active =
                pathname === link.href;

              return (
                <a
                  key={i}
                  href={link.href}
                  style={{
                    color: active
                      ? "#fff"
                      : "#cbd5e1",

                    textDecoration: "none",

                    fontSize: "15px",
                    fontWeight: active
                      ? 600
                      : 500,

                    position: "relative",

                    textShadow: active
                      ? "0 0 18px rgba(96,165,250,0.7)"
                      : "none",

                    transition:
                      "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "#fff";

                    e.currentTarget.style.textShadow =
                      "0 0 16px rgba(96,165,250,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color =
                        "#cbd5e1";

                      e.currentTarget.style.textShadow =
                        "none";
                    }
                  }}
                >
                  
                  {link.name}

                  {/* ACTIVE UNDERLINE */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "-8px",

                      width: active
                        ? "100%"
                        : "0%",

                      height: "2px",

                      background:
                        "linear-gradient(90deg,#3B82F6,#7F1D1D)",

                      transition:
                        "0.3s ease",
                    }}
                  />
                </a>
              );
            })}
<LanguageSwitcher />
            {/* CTA */}
            <a
  href="https://wa.me/6285121305329?text=Hello%20VD%20Fokus,%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    padding: "14px 24px",
    borderRadius: "999px",

    background:
      "linear-gradient(135deg,#3B82F6,#7F1D1D)",

    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,

    boxShadow:
      "0 8px 30px rgba(96,165,250,0.45)",

    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-2px) scale(1.03)";

    e.currentTarget.style.boxShadow =
      "0 0 30px rgba(34,197,94,0.75)";

    e.currentTarget.style.background =
      "linear-gradient(135deg,#22c55e,#16a34a)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0px) scale(1)";

    e.currentTarget.style.boxShadow =
      "0 8px 30px rgba(96,165,250,0.45)";

    e.currentTarget.style.background =
      "linear-gradient(135deg,#3B82F6,#7F1D1D)";
  }}
  onMouseDown={(e) => {
    e.currentTarget.style.transform =
      "scale(0.97)";

    e.currentTarget.style.boxShadow =
      "0 0 40px rgba(34,197,94,0.95)";
  }}
  onMouseUp={(e) => {
    e.currentTarget.style.transform =
      "translateY(-2px) scale(1.03)";
  }}
>
   {t.navbar.talkToUs}
</a>
      

          </nav>
)}
        </div>
        {isMobile && menuOpen && (
  <div
    style={{
      padding: "25px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      borderTop:
        "1px solid rgba(255,255,255,.08)",
    }}
  >
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={() =>
          setMenuOpen(false)
        }
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        {link.name}
      </a>
    ))}

    <LanguageSwitcher />

    <a
      href="https://wa.me/6285121305329"
      style={{
        textAlign: "center",
        padding: "14px",
        borderRadius: "999px",
        background:
          "linear-gradient(135deg,#3B82F6,#7F1D1D)",
        color: "#fff",
        textDecoration: "none",
        fontWeight: 600,
      }}
    >
      {t.navbar.talkToUs}
    </a>
  </div>
)}
      </header>
    </>
  );
}