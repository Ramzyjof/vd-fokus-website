"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems: { name: string; id: string }[] = [
  { name: "Home", id: "cas-hero" },
  { name: "Problem", id: "cas-problem" },
  { name: "Why Us", id: "cas-why" },
  { name: "Process", id: "cas-process" },
  { name: "Package", id: "cas-package" },
  { name: "Visit", id: "cas-visit" }
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -100;
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  
  
}, []);

  return (
    <main
  style={{
    position: "relative", // 🔥 added
    overflow: "hidden",   // 🔥 added
    fontFamily: "Inter, sans-serif",
    background: "radial-gradient(circle at top, #1e293b, #0f172a)",
    color: "#fff",
    minHeight: "100vh"
    
  }}
>
<header
  style={{
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    background: "rgba(11,18,32,0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(127,29,29,0.2)",
    transition: "all 0.3s ease",
    padding: scrolled ? "10px 0" : "16px 0"
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    {/* LOGO */}
    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer"
  }}
  onClick={() => {
  window.location.href = "https://vdfokus.co.id/";
}}
>
  <Image
    src="/logo.png"
    alt="VD Fokus"
    width={32}
    height={32}
    style={{
      objectFit: "contain"
    }}
  />

  <span style={{ fontWeight: 600 }}>
    VD Fokus
  </span>
</div>

    {/* DESKTOP MENU */}
    <nav
      style={{
        display: isMobile ? "none" : "flex",
        gap: "18px",
        fontSize: scrolled ? "13px" : "14px"
      }}
    >
      {menuItems.map((item, i) => (
        <span
          key={i}
          onClick={() => scrollToSection(item.id)}
          style={{ cursor: "pointer", color: "#94a3b8" }}
        >
          {item.name}
        </span>
      ))}
    </nav>

    {/* HAMBURGER */}
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      style={{
        display: isMobile ? "block" : "none",
        cursor: "pointer",
        fontSize: "20px"
      }}
    >
      ☰
    </div>
  </div>

  {/* MOBILE DROPDOWN */}
  <div
    style={{
      maxHeight: menuOpen ? "300px" : "0px",
      overflow: "hidden",
      transition: "all 0.3s ease",
      background: "rgba(11,18,32,0.98)",
      borderTop: "1px solid rgba(127,29,29,0.2)"
    }}
  >
    {menuItems.map((item, i) => (
      <div
        key={i}
        onClick={() => {
          scrollToSection(item.id);
          setMenuOpen(false);
        }}
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          cursor: "pointer",
          color: "#94a3b8"
        }}
      >
        {item.name}
      </div>
    ))}
  </div>

  {/* RED ACCENT */}
  <div
    style={{
      height: "2px",
      background:
        "linear-gradient(to right, transparent, #7F1D1D, transparent)",
      opacity: 0.6
    }}
  />
</header>
      {/* HERO */}
      <section
  id="cas-hero"
  style={{
    position: "relative", // REQUIRED for watermark
    textAlign: "center",
    paddingTop: isMobile ? "140px" : "180px",
    paddingBottom: isMobile ? "60px" : "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: "all 1s ease"
  }}
>

  {/* TITLE */}
  <h1
    style={{
      position: "relative",
      zIndex: 1,
      fontSize: isMobile ? "26px" : "48px",
      fontWeight: 600,
      letterSpacing: "-1px"
    }}
  >
    Get Selected — Not Just Interviewed
  </h1>

  {/* SUBTITLE */}
  <p
    style={{
      position: "relative",
      zIndex: 1,
      marginTop: "16px",
      color: "#94a3b8",
      fontSize: "18px"
    }}
  >
    We help professionals pass HR screening and interviews using real hiring insights.
  </p>

</section>

      {/* DIVIDER */}
      <div
        style={{
          width: "60%",
          margin: "0 auto 40px",
          borderTop: "1px solid rgba(127,29,29,0.2)",
          borderBottom: "1px solid rgba(127,29,29,0.2)"
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: isMobile ? "20px 16px" : "40px 20px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(60px)",
          transition: "all 1s ease 0.2s"
        }}
      >
        {/* WHY FAIL */}
        <div id="cas-problem" style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "12px", scrollMarginTop: "100px" }}>
            Why You Keep Failing Interviews
          </h2>

          <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
            Most candidates don’t fail because they lack experience — they fail because they present it poorly.
          </p>

          <ul style={{ lineHeight: "2", color: "#e2e8f0" }}>
            <li>❌ No structured interview preparation</li>
            <li>❌ Lack of real feedback or practice</li>
            <li>❌ Weak communication & body language</li>
          </ul>
        </div>
        
{/* WHY VD FOKUS */}
<div id="cas-why"
  style={{
    marginBottom: "60px",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(60px)",
    transition: "all 1s ease 0.3s",
    scrollMarginTop: "100px"
  }}
>
  <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
    Why VD Fokus?
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
    We know what hiring managers actually look for — because we’ve been on the other side.
  </p>

  <ul style={{ lineHeight: "2", color: "#e2e8f0" }}>
    <li>✅ 20+ years of Executive Search experience</li>
    <li>✅ Direct insight into hiring decisions</li>
    <li>✅ Proven strategies to get shortlisted</li>
    <li>✅ Focused on real outcomes: interviews & offers</li>
  </ul>
</div>
{/* TESTIMONIALS */}
<div id="cas-testimonials" style={{ marginBottom: "60px" }}>
  <h2 style={{ fontSize: "22px", marginBottom: "20px", scrollMarginTop: "100px" }}>
    What Professionals Say
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px"
    }}
  >
    {[
      {
        text: "After applying the changes, I finally started getting interview calls within 2 weeks.",
        name: "Senior Candidate",
        role: "Operations Manager"
      },
      {
        text: "The interview preparation completely changed how I present myself. I felt much more confident.",
        name: "Mid-Level Professional",
        role: "Finance Executive"
      },
      {
        text: "This helped me understand what hiring managers actually look for. Huge difference.",
        name: "Job Seeker",
        role: "Business Analyst"
      }
    ].map((t, i) => (
      <div
        key={i}
        style={{
          padding: "20px",
          borderRadius: "16px",
          background: "#1F2937",
          border: "1px solid rgba(127,29,29,0.25)",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-5px)";
  e.currentTarget.style.background = "#2A1A1A";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.background = "#1F2937";
}}
      >
        <p style={{ color: "#e2e8f0", marginBottom: "12px", lineHeight: "1.6" }}>
          “{t.text}”
        </p>

        <div style={{ fontSize: "13px", color: "#94a3b8" }}>
          <strong style={{ color: "#fff" }}>{t.name}</strong> — {t.role}
        </div>
      </div>
    ))}
  </div>
</div>
<div
  id="cas-process"
  style={{
    marginBottom: "80px",
    scrollMarginTop: "100px"
  }}
>
  <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>
    How It Works
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: "20px"
    }}
  >
    {[
      {
        step: "01",
        title: "Book Your Session",
        desc: "Contact us via WhatsApp to secure your slot. Limited sessions available each week."
      },
      {
        step: "02",
        title: "Get Personalized Strategy",
        desc: "We review your CV, experience, and target role to identify what’s holding you back."
      },
      {
        step: "03",
        title: "Practice & Improve",
        desc: "Go through mock interviews, structured answers, and real feedback to boost your performance."
      }
    ].map((item, i) => (
      <div
        key={i}
        style={{
          padding: "24px",
          borderRadius: "16px",
          background: "#1F2937",
          border: "1px solid rgba(127,29,29,0.25)",
          transition: "all 0.3s ease",
          position: "relative"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.background = "#2A1A1A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "#1F2937";
        }}
      >
        {/* STEP NUMBER */}
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#7F1D1D",
            marginBottom: "8px"
          }}
        >
          STEP {item.step}
        </div>

        {/* TITLE */}
        <h3 style={{ marginBottom: "10px" }}>
          {item.title}
        </h3>

        {/* DESC */}
        <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>
       {/* PACKAGE */}
<div id="cas-package"
  tabIndex={0}
  style={{
    padding: isMobile ? "20px" : "32px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
    outline: "none",
    marginTop: "40px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
    scrollMarginTop: "100px"
  }}

  // 🖱 HOVER
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.6)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  }}

  // ⌨ FOCUS (TAB)
  onFocus={(e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.6)";
  }}

  onBlur={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  }}

>
  <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
    Career Acceleration Services Package
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
    Everything you need to get shortlisted, perform confidently, and secure job offers.
  </p>

  {/* PRICE */}
  <div style={{ marginBottom: "20px" }}>
    <span
      style={{
        textDecoration: "line-through",
        color: "#64748b",
        marginRight: "10px",
        fontSize: "22px"
      }}
    >
      IDR 400K
    </span>

    <span
      style={{
        fontSize: "24px",
        fontWeight: 600
      }}
    >
      IDR 299K
    </span>
  </div>

  <p style={{ color: "#facc15", fontSize: "14px", marginBottom: "20px" }}>
    🚀 Launch Offer — Only 5 slots available
  </p>

  <div
    style={{
      borderTop: "1px solid rgba(127,29,29,0.2)",
      borderBottom: "1px solid rgba(127,29,29,0.2)",
      margin: "20px 0"
    }}
  />
<button
  onClick={() => setShowDetails(!showDetails)}
  style={{
    marginBottom: "20px",
    padding: "10px 20px",
    borderRadius: "999px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }}
>
  {showDetails ? "Hide Details" : "See Full Details"}
</button>
<div
  style={{
    maxHeight: showDetails ? "none" : "0px",
    overflow: "hidden",
    transition: "all 0.5s ease",
    opacity: showDetails ? 1 : 0,
    transform: showDetails ? "translateY(0)" : "translateY(-10px)"
  }}
>
  {/* DROPDOWN DETAIL */}
  <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
    What you will gain from this session:
  </p>

  {/* ITEM */}
  {[
    {
      title: "Clarity on What Interviewers Want",
      desc: "Understand how hiring managers evaluate candidates and what makes them select or reject."
    },
    {
      title: "Structured Answer Framework",
      desc: "Learn how to answer questions clearly, professionally, and with strong impact."
    },
    {
      title: "Realistic Mock Interview",
      desc: "Practice in a real interview simulation so you’re fully prepared for the actual situation."
    },
    {
      title: "Personalized Feedback",
      desc: "Get direct, actionable feedback on what to improve and how to fix it immediately."
    },
    {
      title: "Confidence & Communication Upgrade",
      desc: "Improve how you speak, present yourself, and handle pressure during interviews."
    },
    {
      title: "Real Interview Readiness",
      desc: "Walk into interviews with clarity, confidence, and a much higher chance of success."
    }
  ].map((item, i) => (
    <div
      key={i}
      style={{
        marginBottom: isMobile ? "14px" : "18px",
        maxHeight: showDetails ? (isMobile ? "1500px" : "1200px") : "0px",
        padding: isMobile ? "14px" : "16px",
        borderRadius: "12px",
        background: "#1F2937",
        border: "1px solid rgba(127,29,29,0.25)",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: "6px" }}>
        {item.title}
      </div>
      <div style={{ color: "#94a3b8", fontSize: "14px" }}>
        {item.desc}
      </div>
    </div>
  ))}

  {/* OUTCOME BOX */}
  <div
    style={{
      marginTop: "20px",
      padding: "18px",
      borderRadius: "14px",
      background: "rgba(34,197,94,0.1)",
      border: "1px solid rgba(34,197,94,0.3)"
    }}
  >
    <div style={{ fontWeight: 600, marginBottom: "6px" }}>
      🎯 Final Outcome
    </div>
    <div style={{ color: "#bbf7d0" }}>
      Higher chance of passing interviews and securing job offers.
    </div>
  </div>
   {/* SESSION DETAILS */}
<div
  style={{
    marginTop: "20px",
    marginBottom: "30px" ,
    padding: "18px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)"
  }}
>
  <div style={{ fontWeight: 600, marginBottom: "10px" }}>
    📌 Session Details
  </div>

  <div style={{ color: "#cbd5f5", lineHeight: "1.8", fontSize: "14px" }}>
    • Each session is designed as a focused 90-minute deep-dive to maximize results.<br />
    • Additional time can be arranged if needed (+IDR 100K per hour).<br />
    • We recommend conducting the session in person at our office for maximum results.<br />
    • Online sessions are also available via Google Meet or Microsoft Teams.
  </div>
</div>
</div>

  {/* FEATURES */}
  {[
    "CV Optimization",
    "Interview Preparation",
    "Mock Interview Session + Feedback",
    "🎁 Get a free follow-up interview preparation session when you land your first interview",
    "⏱ Optional extension: +IDR 100K / hour"
  ].map((item, i) => (
    <div
      key={i}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px"
      }}
    >
      <span style={{ color: "#22c55e" }}>✔</span>
      <span style={{ color: "#cbd5f5" }}>{item}</span>
    </div>
  ))}

  {/* BUTTON */}
  <a
  href="https://wa.me/6285121305329?text=Hi%20VD%20Fokus,%20I'm%20interested%20in%20your%20Career%20Acceleration%20Service.%20Can%20you%20guide%20me?"
  style={{
  display: "inline-block",
  marginTop: "20px",
  padding: isMobile ? "12px 20px" : "10px 20px",
width: isMobile ? "100%" : "auto",
textAlign: "center",
  borderRadius: "999px",
  background: "#3B82F6",
  border: "1px solid #7F1D1D",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 500,
  animation: "pulse 1.5s"
  
}}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow = "0 0 25px rgba(34,197,94,0.8)";
    e.currentTarget.style.background = "#7F1D1D";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(34,197,94,0.3)";
    e.currentTarget.style.background = "#3B82F6";
  }}
  
>
  Book via WhatsApp
</a>
</div>
<section
  id="cas-contact"
  style={{
    padding: "100px 20px",
    background: "rgba(255,255,255,0.02)",
    borderTop: "1px solid rgba(127,29,29,0.2)",
    borderBottom: "1px solid rgba(127,29,29,0.2)",
    textAlign: "center",
    scrollMarginTop: "100px"
  }}
>
  <div style={{ maxWidth: "700px", margin: "0 auto" }}>
    
    {/* TITLE */}
    <div id="cas-visit" style={{ marginBottom: "20px" }}>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: 600,
          color: "#e5e7eb"
        }}
      >
        Visit Us
      </h2>
    </div>

    {/* SUBTITLE */}
    <p
      style={{
        color: "#94a3b8",
        marginBottom: "30px",
        fontSize: "16px"
      }}
    >
      Come visit our office in West Java
    </p>

    {/* LOGO (REPLACES COMPANY NAME) */}
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  }}
>
  <Image
    src="/logo.png"
    alt="VD Fokus"
    width={80}
    height={80}
    style={{
      filter: "drop-shadow(0 0 10px rgba(127,29,29,0.6))"
    }}
  />
</div>

    {/* ADDRESS */}
    <p
      style={{
        fontSize: "15px",
        color: "#94a3b8",
        marginBottom: "30px",
        lineHeight: "1.6"
      }}
    >
      Jl. Raya Bogor KM 30, Cimanggis, Depok, West Java, Indonesia
    </p>

    {/* BUTTON */}
    <a
      href="https://www.google.com/maps?q=-6.3836475,106.9248334"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        marginBottom: "40px",
        padding: "12px 24px",
        borderRadius: "999px",
        background: "#3B82F6",
        border: "1px solid #7F1D1D",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 500,
        textDecoration: "none",
        boxShadow: "0 0 20px rgba(127,29,29,0.4)",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      Get Directions →
    </a>

    {/* MAP */}
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(127,29,29,0.25)"
      }}
    >
      <iframe
        src="https://www.google.com/maps?q=-6.3836475,106.9248334&z=15&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>

  </div>
</section>
      </div> 
</main>
  );
}