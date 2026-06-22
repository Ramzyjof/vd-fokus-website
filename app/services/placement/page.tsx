"use client";

import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  BadgeDollarSign,
  Clock3,
  FileCheck2,
  Users,
  Briefcase,
  Search,
  UserCheck,
  MessagesSquare,
  TrendingUp
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionPadding = isMobile
  ? "60px 20px"
  : "90px 40px";

const cardPadding = isMobile
  ? "18px"
  : "28px";

const cardRadius = isMobile
  ? "16px"
  : "24px";

const headingXL = isMobile
  ? "38px"
  : "64px";

const headingL = isMobile
  ? "32px"
  : "58px";

const body = isMobile
  ? "14px"
  : "18px";

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "Problem", id: "problem" },
    { name: "Why Us", id: "why" },
    { name: "Process", id: "process" },
    { name: "Testimonial", id: "testimonial" },
    { name: "Visit", id: "visit" }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

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
        position: "relative",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "#fff",
        minHeight: "100vh"
      }}
    >
      

{/* HERO */}

<section
  style={{
    position: "relative",
    minHeight: isMobile ? "700px" : "800px",

    display: "flex",
    alignItems: "center",

    paddingTop: isMobile ? "20px" : "90px",
    paddingBottom: isMobile ? "30px" : "50px",

    overflow: "hidden",

    backgroundImage: isMobile
  ? "url('/hero-mobile.png')"
  : "url('/hero.png')",

    backgroundSize: "cover",
    backgroundPosition: isMobile
  ? "center top"
  : "center center",
  }}
>
  {/* DARK OVERLAY */}

  <div
    style={{
      position: "absolute",
      inset: 0,

      background:
        "linear-gradient(90deg, rgba(2,6,23,.95) 0%, rgba(2,6,23,.78) 45%, rgba(2,6,23,.55) 100%)",
    }}
  />

  {/* BLUE GLOW */}

  <div
    style={{
      position: "absolute",

      top: "-200px",
      left: "-150px",

      width: "600px",
      height: "600px",

      borderRadius: "50%",

      background:
        "radial-gradient(circle, rgba(79,141,255,.18), transparent)",

      filter: "blur(100px)",
    }}
  />

  <div
    style={{
      position: "relative",

      maxWidth: "1400px",

      margin: "0 auto",

      width: "100%",

      paddingLeft: isMobile ? "24px" : "60px",
      paddingRight: isMobile ? "24px" : "60px",
    }}
  >
    {/* BADGE */}

    <div
      style={{
        display: "inline-flex",

        alignItems: "center",

        padding: isMobile
          ? "8px 16px"
          : "10px 18px",

        borderRadius: "999px",

        background:
          "rgba(79,141,255,.15)",

        border:
          "1px solid rgba(79,141,255,.15)",

        color: "#6EA8FF",

        fontWeight: 700,

        fontSize: isMobile
          ? "12px"
          : "14px",

        marginBottom: "10px",
      }}
    >
      ✓ EMPLOYEE PLACEMENT SERVICE
    </div>

    {/* TITLE */}

    <h1
      style={{
        maxWidth: "900px",

        fontSize: isMobile
          ? "38px"
          : "72px",

        lineHeight: isMobile
          ? "0.95"
          : "0.9",

        fontWeight: 800,

        letterSpacing: "-3px",

        margin: 0,
      }}
    >
      Building Better
      <br />

      <span
        style={{
          background:
            "linear-gradient(90deg,#5B8CFF,#B08BFF,#FF6B81)",

          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Teams Since 2003
      </span>
    </h1>

    {/* DESCRIPTION */}

    <p
      style={{
        maxWidth: "760px",

        marginTop: "30px",
        marginBottom: isMobile
      ? "46px"
      : "50px",

        color: "#CBD5E1",

        lineHeight: 1.8,

        fontSize: isMobile
          ? "16px"
          : "22px",
      }}
    >
      VD Fokus helps organizations identify,
      evaluate, and place exceptional talent
      through executive search expertise,
      structured assessment, and practical HR
      solutions.
    </p>

   {/* BUTTONS */}
<div
  style={{
    display: "flex",

    flexDirection: "row",

    gap: isMobile
      ? "10px"
      : "16px",

    marginTop: isMobile
      ? "42px"
      : "56px",

    marginBottom: isMobile
      ? "28px"
      : "40px",

    width: "100%",

    maxWidth: isMobile
      ? "380px"
      : "620px",
  }}
>
  {/* PRIMARY CTA */}
  <a
    href="https://wa.me/6285121305329"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      flex: 1,

      height: isMobile
        ? "54px"
        : "68px",

      borderRadius: "999px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textDecoration: "none",

      background:
        "linear-gradient(135deg,#2563EB,#60A5FA)",

      color: "#fff",

      fontWeight: 700,

      fontSize: isMobile
        ? "14px"
        : "18px",

      boxShadow:
        "0 15px 40px rgba(37,99,235,.35)",

      transition: "all .25s ease",
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform =
          "translateY(-2px)";
      }
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        "translateY(0)";
    }}
  >
    {isMobile
      ? "Contact Us"
      : "💬 Discuss Hiring Needs"}
  </a>

  {/* SECONDARY CTA */}
  <a
    href="#services"
    style={{
      flex: 1,

      height: isMobile
        ? "54px"
        : "68px",

      borderRadius: "999px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textDecoration: "none",

      background:
        "rgba(255,255,255,.04)",

      backdropFilter: "blur(20px)",

      border:
        "1px solid rgba(255,255,255,.12)",

      color: "#fff",

      fontWeight: 600,

      fontSize: isMobile
        ? "14px"
        : "18px",

      transition: "all .25s ease",
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.currentTarget.style.background =
          "rgba(255,255,255,.08)";
      }
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background =
        "rgba(255,255,255,.04)";
    }}
  >
    {isMobile
      ? "Learn More"
      : "Explore Services →"}
  </a>
</div>

    {/* HIRING PROCESS */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: isMobile ? "8px" : "14px",

    marginTop: "28px",
    marginBottom: "24px",

    flexWrap: "wrap",

    maxWidth: "650px",
  }}
>
  {[
    "Requirement",
    "Assessment",
    "Placement",
  ].map((item, index) => (
    <React.Fragment key={item}>
      <div
        style={{
          padding: isMobile
            ? "10px 14px"
            : "14px 22px",

          borderRadius: "999px",

          background:
            "rgba(255,255,255,.04)",

          border:
            "1px solid rgba(255,255,255,.08)",

          backdropFilter: "blur(20px)",

          color: "#E2E8F0",

          fontWeight: 600,

          fontSize: isMobile
            ? "12px"
            : "15px",
        }}
      >
        {item}
      </div>

      {index < 2 && (
        <div
          style={{
            color: "#60A5FA",

            fontSize: isMobile
              ? "16px"
              : "20px",

            fontWeight: 700,
          }}
        >
          →
        </div>
      )}
    </React.Fragment>
  ))}
</div>

{/* TRUST BOX */}
<div
  style={{
    display: "grid",

    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(2,1fr)",

    gap: "12px",

    maxWidth: "700px",

    padding: isMobile
      ? "18px"
      : "24px",

    borderRadius: "28px",

    background:
      "linear-gradient(180deg, rgba(15,23,42,.85), rgba(15,23,42,.65))",

    border:
      "1px solid rgba(255,255,255,.08)",

    backdropFilter: "blur(25px)",

    boxShadow:
      "0 25px 60px rgba(0,0,0,.25)",
  }}
>
  {[
    "Executive Search Specialist",
    "20+ Years Recruitment Experience",
    "Trusted by 500+ Organizations",
    "30+ Industries Served",
  ].map((item) => (
    <div
      key={item}
      style={{
        display: "flex",
        alignItems: "center",

        gap: "10px",

        color: "#E2E8F0",

        fontSize: isMobile
          ? "14px"
          : "15px",

        fontWeight: 500,
      }}
    >
      <span
        style={{
          color: "#60A5FA",
          fontSize: "18px",
        }}
      >
        ✓
      </span>

      {item}
    </div>
  ))}
</div>
  </div>
</section>
      {/* PROBLEMS*/}
<div
  style={{
    paddingTop: isMobile ? "40px" : "60px",
    textAlign: "center",
    marginBottom: "40px",
  }}
>
  <div
    style={{
      color: "#FF6B81",
      letterSpacing: "3px",
      fontWeight: 600,
      fontSize: isMobile ? "12px" : "14px",
      marginBottom: "14px",
    }}
  >
    THE CHALLENGE
  </div>

  <h2
    style={{
      fontSize: isMobile ? "36px" : "58px",
      lineHeight: 1.05,
      margin: 0,
      fontWeight: 800,
    }}
  >
    Why Hiring
    <br />
    <span
      style={{
        background:
          "linear-gradient(90deg,#5B8CFF,#B08BFF,#FF6B81)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Often Fails
    </span>
  </h2>

  <p
    style={{
      color: "#94A3B8",
      maxWidth: "760px",
      margin: "24px auto 0",
      lineHeight: 1.8,
      fontSize: isMobile ? "14px" : "18px",
    }}
  >
    Many companies struggle because recruitment is treated as a transactional process instead of a strategic one.
  </p>
</div>
{/* PROBLEMS GRID */}

<div
  style={{
    display: "grid",

    gridTemplateColumns: isMobile
      ? "repeat(2,minmax(0,1fr))"
      : "repeat(3,minmax(0,1fr))",

    gap: isMobile ? "12px" : "18px",
  }}
>
  {[
    "Long hiring cycles delay business growth",
    "High turnover increases recruitment costs",
    "Difficulty finding qualified candidates",
    "Inconsistent screening and evaluation",
    "Limited access to executive-level talent",
    "Poor candidate experience impacts employer branding",
    "Hiring decisions based on incomplete data",
    "Internal HR resources stretched too thin",
  ].map((problem, index) => (
    <div
      key={index}
      style={{
        position: "relative",
        overflow: "hidden",

        background:
          "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",

        border:
          "1px solid rgba(255,255,255,.08)",

        backdropFilter: "blur(18px)",

        borderRadius: isMobile
          ? "16px"
          : "20px",

        padding: isMobile
          ? "12px"
          : "16px",

        minHeight: isMobile
          ? "88px"
          : "96px",

        boxShadow:
          "0 10px 30px rgba(0,0,0,.18)",
      }}
    >
      {/* GLOW */}

      <div
        style={{
          position: "absolute",
          width: "90px",
          height: "90px",

          right: "-30px",
          bottom: "-30px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(59,130,246,.12), transparent)",

          filter: "blur(30px)",

          pointerEvents: "none",
        }}
      />

      {/* ICON */}

      <div
        style={{
          width: isMobile ? "32px" : "36px",
          height: isMobile ? "32px" : "36px",

          borderRadius: "10px",

          background:
            "rgba(239,68,68,.10)",

          border:
            "1px solid rgba(239,68,68,.15)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          marginBottom: "8px",

          fontSize: isMobile
            ? "14px"
            : "16px",
        }}
      >
        ❌
      </div>

      <div
        style={{
          color: "#FFFFFF",

          fontWeight: 600,

          lineHeight: 1.45,

          fontSize: isMobile
            ? "13px"
            : "17px",
        }}
      >
        {problem}
      </div>
    </div>
  ))}
</div>
{/* PREMIUM SECTION SEPARATOR */}

<div
  style={{
    display: "flex",
    justifyContent: "center",
    padding: isMobile ? "10px 20px 40px" : "20px 20px 60px",
  }}
>
  <div
    style={{
      width: isMobile ? "120px" : "220px",
      height: "2px",

      background:
        "linear-gradient(90deg, transparent, #FF6B81, #FF6B81, transparent)",

      boxShadow:
        "0 0 20px rgba(255,107,129,.5)",

      borderRadius: "999px",
    }}
  />
</div>
      {/* WHY US */}
      <div
  style={{
    textAlign: "center",
    marginBottom: "50px",
  }}
>
  <div
    style={{
      color: "#6EA8FF",
      letterSpacing: "3px",
      fontWeight: 600,
      fontSize: isMobile ? "12px" : "14px",
      marginBottom: "14px",
    }}
  >
    WHY VD FOKUS
  </div>

  <h2
    style={{
      fontSize: isMobile ? "36px" : "58px",
      lineHeight: 1.05,
      margin: 0,
      fontWeight: 800,
    }}
  >
    Why Companies
    <br />
    <span
      style={{
        background:
          "linear-gradient(90deg,#5B8CFF,#B08BFF,#FF6B81)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Trust Us
    </span>
  </h2>

  <p
    style={{
      color: "#94A3B8",
      maxWidth: "800px",
      margin: "24px auto 0",
      lineHeight: 1.8,
      fontSize: isMobile ? "14px" : "18px",
    }}
  >
    Our approach goes beyond sending CVs. We provide real hiring insight, strategic candidate evaluation, and active communication throughout the recruitment process.
  </p>
</div>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(2,minmax(0,1fr))"
      : "repeat(3,minmax(0,1fr))",

    gap: isMobile ? "14px" : "24px",
  }}
>
  {[
    {
      title: "Candidate Quality Assessment",
      desc: "We evaluate capability, cultural fit, communication style, and long-term potential to identify candidates who can contribute beyond immediate hiring needs.",
      icon: "🎯",
      color: "#60A5FA",
    },
    {
      title: "Executive Search Experience",
      desc: "Built from years of recruitment and executive search experience across industries.",
      icon: "🏆",
      color: "#A78BFA",
    },
    {
      title: "Transparent Communication",
      desc: "Both companies and candidates stay informed throughout the hiring journey.",
      icon: "💬",
      color: "#34D399",
    },
    {
      title: "Quality Over Quantity",
      desc: "We focus on presenting the right candidates, not just more candidates.",
      icon: "⭐",
      color: "#FBBF24",
    },
    {
      title: "Success Fee Based",
      desc: "No upfront payment required. Clients only pay after successful candidate placement.",
      icon: "💰",
      color: "#F472B6",
    },
    {
      title: "3-Month Replacement Guarantee",
      desc: "If the placed candidate does not perform within the guarantee period, we provide free replacement support.",
      icon: "🛡️",
      color: "#818CF8",
    },
    {
  title: "Time Efficiency",
  desc: "Reduce recruitment timelines through targeted sourcing, screening, and candidate shortlisting processes.",
  icon: "⏱️",
  color: "#F59E0B",
},
{
  title: "Strategic Talent Acquisition",
  desc: "Access high-performing passive candidates who may not be actively seeking new opportunities through targeted executive search and market mapping.",
  icon: "🤝",
  color: "#22C55E",
},
{
  title: "Referral Verification",
  desc: "Professional referral and background verification to reduce hiring risks and improve hiring confidence.",
  icon: "🛡️",
  color: "#06B6D4",
},
  ].map((item, i) => (
    <div
      key={i}
      style={{
        position: "relative",
        overflow: "hidden",

        padding: isMobile
          ? "16px"
          : "24px",

        borderRadius: isMobile
          ? "18px"
          : "24px",

        minHeight: isMobile
          ? "180px"
          : "240px",

        background:
          "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",

        border: `1px solid ${item.color}25`,

        backdropFilter: "blur(20px)",

        transition: "all .3s ease",
      }}
    >
      {/* Glow */}

      <div
        style={{
          position: "absolute",
          right: "-40px",
          bottom: "-40px",

          width: "120px",
          height: "120px",

          borderRadius: "50%",

          background: `radial-gradient(circle, ${item.color}20, transparent)`,

          filter: "blur(40px)",
        }}
      />

      {/* Icon */}

      <div
        style={{
          width: isMobile ? "46px" : "60px",
          height: isMobile ? "46px" : "60px",

          borderRadius: "16px",

          background: `${item.color}15`,

          border: `1px solid ${item.color}25`,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: isMobile ? "20px" : "26px",

          marginBottom: "16px",
        }}
      >
        {item.icon}
      </div>

      <h3
        style={{
          marginTop: 0,

          marginBottom: "12px",

          fontSize: isMobile
            ? "15px"
            : "22px",

          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          color: "#94A3B8",

          lineHeight: 1.7,

          margin: 0,

          fontSize: isMobile
            ? "12px"
            : "15px",
        }}
      >
        {item.desc}
      </p>
    </div>
  ))}
</div>

      {/* PROCESS */}
      <section
  id="process"
  style={{
    maxWidth: "1000px",
    margin: "auto",
    padding: isMobile
      ? "60px 20px 40px"
      : "80px 20px 50px"
  }}
>
        <h2 style={{ fontSize: "30px", marginBottom: "18px" }}>
          Our Placement Process
        </h2>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "1.8",
            maxWidth: "760px",
            marginBottom: "40px"
          }}
        >
          We focus on efficient hiring with structured evaluation, targeted candidate selection, and transparent communication throughout the recruitment process.
        </p>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(2,minmax(0,1fr))"
      : "repeat(3,minmax(0,1fr))",
    gap: "20px",
  }}
>
          {[
  {
    step: "01",
    title: "Understand Business Needs",
    desc: "We identify the position requirements, company culture, and hiring expectations."
  },
  {
    step: "02",
    title: "Agreement & Hiring Alignment",
    desc: "We align on recruitment expectations, placement fee structure, guarantee terms, and service agreement before the search begins."
  },
  {
    step: "03",
    title: "Talent Mapping & Screening",
    desc: "We shortlist only 2–3 highly relevant CVs per position to maintain quality and hiring efficiency."
  },
  {
    step: "04",
    title: "Strategic Candidate Briefing",
    desc: "Candidates receive preparation and guidance before entering the interview process."
  },
  {
    step: "05",
    title: "Interview Coordination",
    desc: "We maintain active communication between client and candidate during recruitment."
  },
  {
    step: "06",
    title: "Placement & Follow Up",
    desc: "We provide post-placement follow-up and a 3-month replacement guarantee for additional hiring confidence."
  }
].map((item, i) => (
  <div
    key={i}
    style={{
      position: "relative",

      padding: isMobile
        ? "18px"
        : "22px",

      borderRadius: isMobile
        ? "18px"
        : "22px",

      minHeight: isMobile
        ? "165px"
        : "210px",

      background:
        "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",

      border:
        "1px solid rgba(255,255,255,.08)",

      backdropFilter: "blur(18px)",

      overflow: "hidden",

      transition: "all .3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform =
        "translateY(-6px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        "translateY(0)";
    }}
  >
    {/* GLOW */}

    <div
      style={{
        position: "absolute",
        top: "-30px",
        right: "-30px",

        width: "100px",
        height: "100px",

        borderRadius: "50%",

        background:
          "radial-gradient(circle, rgba(59,130,246,.15), transparent)",

        filter: "blur(40px)",
      }}
    />

    {/* STEP */}

    <div
      style={{
        color: "#60A5FA",

        fontWeight: 800,

        fontSize: isMobile
          ? "28px"
          : "22px",

        marginBottom: "10px",

        letterSpacing: "-1px",
      }}
    >
      {item.step}
    </div>

    {/* TITLE */}

    <h3
      style={{
        margin: 0,

        marginBottom: "10px",

        color: "#FFFFFF",

        lineHeight: 1.25,

        fontSize: isMobile
          ? "20px"
          : "24px",
      }}
    >
      {item.title}
    </h3>

    {/* DESCRIPTION */}

    <p
      style={{
        margin: 0,

        color: "#94A3B8",

        lineHeight: 1.6,

        fontSize: isMobile
          ? "12px"
          : "15px",
      }}
    >
      {item.desc}
    </p>
  </div>
))}
        </div>
      </section>

      {/* BENEFITS */}
<section
  id="benefits"
  style={{
    maxWidth: "1000px",
    margin: "auto",
    padding: isMobile
      ? "40px 20px 70px"
      : "50px 20px 90px"
  }}
>
  <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
    Benefits For Your Company
  </h2>

  <p
    style={{
      color: "#94a3b8",
      lineHeight: "1.8",
      maxWidth: "760px",
      marginBottom: "40px"
    }}
  >
    Our recruitment model is designed to reduce hiring risk,
    improve efficiency, and deliver higher-quality candidate placement.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
  isMobile
    ? "repeat(2,minmax(0,1fr))"
    : "repeat(3,minmax(0,1fr))",
      gap: "20px"
    }}
  >
    {[
      {
        title: "No Upfront Payment",
        icon: BadgeDollarSign,
        desc: "Using a success fee model, clients only pay after successful placement."
      },
      {
        title: "Competitive Placement Fee",
        icon: Briefcase,
        desc: "Professional recruitment support with cost-efficient and competitive pricing."
      },
      {
        title: "2 Weeks Initial CV Delivery",
        icon: Clock3,
        desc: "Qualified candidate CVs are typically delivered within approximately 2 weeks."
      },
      {
        title: "Focused Candidate Selection",
        icon: FileCheck2,
        desc: "Only 2–3 highly relevant CVs are submitted per position to maintain hiring quality."
      },
      {
        title: "3-Month Guarantee",
        icon: ShieldCheck,
        desc: "Free candidate replacement support if performance expectations are not met during the guarantee period."
      },
      {
        title: "Strategic Hiring Insight",
        icon: TrendingUp,
        desc: "We provide recruitment insight and communication support throughout the hiring process."
      },
      {
        title: "Structured Candidate Screening",
        icon: Search,
        desc: "Candidates go through structured evaluation and communication assessment before submission."
      },
      {
        title: "Active Communication Support",
        icon: MessagesSquare,
        desc: "We maintain active coordination between company and candidate during the process."
      },
      {
        title: "Higher Quality Shortlisting",
        icon: UserCheck,
        desc: "Focused shortlisting helps companies save time and interview more suitable candidates."
      },
      {
        title: "Long-Term Hiring Partnership",
        icon: Users,
        desc: "We aim to become a reliable long-term recruitment and talent partner for your business."
      }
    ].map((item, i) => {
      const Icon = item.icon;

      return (
        <div
          key={i}
          style={{
            padding:
            isMobile
              ? "18px"
              : "24px",
            borderRadius: "18px",
            background: "#1F2937",
            border: "1px solid rgba(127,29,29,0.25)",
            transition: "all 0.3s ease"
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <Icon size={32} color="#3B82F6" />
          </div>

          <h3 style={{ marginBottom: "12px" }}>
            {item.title}
          </h3>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.7"
            }}
          >
            {item.desc}
          </p>
        </div>
      );
    })}
  </div>
</section>

      <section
        id="testimonial"
        style={{
          padding: "100px 20px",
          background: "rgba(255,255,255,0.03)",
          borderTop: "1px solid rgba(127,29,29,0.2)",
          borderBottom: "1px solid rgba(127,29,29,0.2)"
        }}
      >
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
            What Candidates Say
          </h2>

          <p
            style={{
              color: "#94a3b8",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: "1.8"
            }}
          >
            Candidates often describe our process as more than recruitment — they feel guided throughout the hiring journey.
          </p>

          <div
            style={{
              padding:
              isMobile
                ? "20px"
                : "40px",
              borderRadius: "24px",
              background: "#111827",
              border: "1px solid rgba(127,29,29,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
            }}
          >
            <p
              style={{
                fontSize:
                isMobile
                  ? "16px"
                  : "24px",
                lineHeight: "1.9",
                color: "#e2e8f0",
                fontStyle: "italic"
              }}
            >
              “It feels like I had someone inside the company. I was guided through the process, understood what to do next, and experienced a level of support I never received from other recruiters.”
            </p>

            <div style={{ marginTop: "24px", color: "#94a3b8" }}>
              Senior Professional Candidate
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section
        id="visit"
        style={{
          padding: "100px 20px",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <Image
            src="/logo.png"
            alt="VD Fokus"
            width={80}
            height={80}
            style={{
              marginBottom: "20px",
              filter: "drop-shadow(0 0 10px rgba(127,29,29,0.6))"
            }}
          />

          <h2 style={{ fontSize: "34px", marginBottom: "12px" }}>
            Build Your Team With Confidence
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
              marginBottom: "30px"
            }}
          >
            Partner with VD Fokus to find talent that truly fits your business goals and organizational culture.
          </p>

          <a
            href="https://wa.me/6281212940797"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              borderRadius: "999px",
              background: "#3B82F6",
              border: "1px solid #7F1D1D",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500
            }}
          >
            Talk to VD Fokus
          </a>

          <div
            style={{
              marginTop: "50px",
              borderRadius: "18px",
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
    </main>
  );
}
