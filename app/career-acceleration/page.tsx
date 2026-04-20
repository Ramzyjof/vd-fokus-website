"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <main
      style={{
        fontFamily: "Inter, sans-serif",
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "#fff",
        minHeight: "100vh"
      }}
    ><style>
{`
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(34,197,94, 0.6); }
  70% { box-shadow: 0 0 0 15px rgba(34,197,94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94, 0); }
}
`}
</style>
<div
  style={{
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    marginBottom: "20px"
  }}
/>
{/* NAVBAR */}
<header
  style={{
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(11,18,32,0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(127,29,29,0.2)"
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >

    {/* LOGO */}
    <a
  href="/"
  style={{
    display: "flex",
    alignItems: "center"
  }}
>
  <div
    style={{
      padding: "8px 14px", // 🔥 bigger box
      borderRadius: "12px",

      // 🔥 MORE WHITE (contrast boost)
      background: "rgba(255,255,255,0.08)",

      border: "1px solid rgba(255,255,255,0.15)",

      display: "flex",
      alignItems: "center"
    }}
  >
    <Image
      src="/logo.png"
      alt="VD Fokus"
      width={180}
      height={60}
      style={{
        height: "60px", // 🔥 BIGGER LOGO
        width: "auto",
        objectFit: "contain",

        // 🔥 subtle pop
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))"
      }}
    />
  </div>
</a>

    {/* MENU */}
    <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      {[
        { name: "Home", link: "/" },
        { name: "Career Acceleration", link: "/career-acceleration" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94a3b8";
          }}
        >
          {item.name}
        </a>
      ))}

      {/* CTA */}
      <a
        href="https://wa.me/6281212940797"
        style={{
          padding: "10px 18px",
          borderRadius: "999px",
          background: "#3B82F6",
          border: "1px solid #7F1D1D",
          color: "#fff",
          textDecoration: "none",
          fontSize: "14px",
          transition: "0.3s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#7F1D1D";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#3B82F6";
        }}
      >
        Talk to Us
      </a>
    </nav>
  </div>

  {/* RED ACCENT LINE */}
  <div
    style={{
      height: "2px",
      background: "linear-gradient(to right, transparent, #7F1D1D, transparent)",
      opacity: 0.6
    }}
  />
</header>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: isMobile ? "50px 16px" :"80px 20px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease"
        }}
      >
        <h1 style={{ fontSize: isMobile ? "26px" : "48px", fontWeight: 600, letterSpacing: "-1px" }}>
          Get Selected — Not Just Interviewed
        </h1>

        <p style={{ marginTop: "16px", color: "#94a3b8", fontSize: "18px" }}>
          We help professionals pass HR screening and interviews using real hiring insights.
        </p>
      </section>

      {/* DIVIDER */}
      <div
        style={{
          width: "60%",
          margin: "0 auto 40px",
          borderTop: "1px solid rgba(255,255,255,0.1)"
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
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
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
<div
  style={{
    marginBottom: "60px",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(60px)",
    transition: "all 1s ease 0.3s"
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
<div style={{ marginBottom: "60px" }}>
  <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>
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
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
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
<div style={{ marginBottom: "60px" }}>
  <h2 style={{ fontSize: "22px", marginBottom: "16px" }}>
    How It Works
  </h2>

  {[
    "Book via WhatsApp",
    "Fill short form",
    "Join session & improve"
  ].map((step, i) => (
    <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <span>👉</span>
      <span>{step}</span>
    </div>
  ))}
</div>
       {/* PACKAGE */}
<div
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
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)"
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
      borderTop: "1px solid rgba(255,255,255,0.1)",
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
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
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
  background: "#22c55e",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 500,
  animation: "pulse 1.5s"
}}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow = "0 0 25px rgba(34,197,94,0.8)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(34,197,94,0.3)";
  }}
>
  Book via WhatsApp
</a>
</div>
      </div>
    </main>
  );
}