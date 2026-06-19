"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Page() {
  
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const headingXL = isMobile ? "42px" : "72px";
  const headingL = isMobile ? "30px" : "56px";
  const headingM = isMobile ? "24px" : "40px";

  const bodyLarge = isMobile ? "16px" : "20px";
  const body = isMobile ? "14px" : "18px";
  const bodySmall = isMobile ? "13px" : "15px";
 

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () =>
    window.removeEventListener(
      "resize",
      handleResize
    );
}, []);
  return (
    <main
      style={{
      minHeight: isMobile
      ? "1150px"
      : "900px",       
        background:
          "radial-gradient(circle at top,#1e293b,#0f172a)",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden"
      }}
    >
     {/* HERO */}
<section
  style={{
    position: "relative",
   minHeight: isMobile
  ? "auto"
  : "900px",
    display: "flex",
    alignItems: isMobile ? "flex-start" : "center",
    overflow: "hidden",
  }}
>
  {/* BACKGROUND IMAGE */}
  {!isMobile && (
  <Image
    src="/hero-psy.png"
    alt="Psychological Assessment"
    fill
    priority
    style={{
      objectFit: "cover",
      objectPosition: "center center",
    }}
  />
)}
  {/* OVERLAY */}
<div
  style={{
    position: "absolute",
    inset: 0,
    zIndex: 2,

    background: isMobile
      ? `
        linear-gradient(
          180deg,
          rgba(2,6,23,.03) 0%,
          rgba(2,6,23,.12) 30%,
          rgba(2,6,23,.35) 55%,
          rgba(2,6,23,.65) 80%,
          rgba(2,6,23,.92) 100%
        )
      `
      : `
        linear-gradient(
          90deg,
          rgba(2,6,23,.82) 0%,
          rgba(2,6,23,.65) 30%,
          rgba(2,6,23,.35) 60%,
          rgba(2,6,23,.10) 100%
        )
      `,
  }}
/>

  {/* GREEN GLOW */}
  <div
    style={{
      position: "absolute",
      right: isMobile ? "-120px" : "-180px",
      bottom: isMobile ? "140px" : "100px",

      width: isMobile ? "260px" : "500px",
      height: isMobile ? "260px" : "500px",

      borderRadius: "50%",

      background:
        "radial-gradient(circle, rgba(74,222,128,.18), transparent 70%)",

      filter: "blur(80px)",

      zIndex: 2,
    }}
  />
{isMobile && (
  <div
    style={{
      position: "absolute",
      top: "100px",
      left: 0,

      width: "100%",
      height: "auto",

      zIndex: 1,
    }}
  >
    <img
      src="/psy-hero-mobile.png"
      alt="Psychological Assessment"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />

    {/* Fade Bottom */}
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,

        height: "180px",

        background: `
          linear-gradient(
            to bottom,
            rgba(2,6,23,0) 0%,
            rgba(2,6,23,.6) 40%,
            rgba(2,6,23,.95) 80%,
            rgba(2,6,23,1) 100%
          )
        `,
      }}
    />
  </div>
)}
  {/* CONTENT */}
  <div
  style={{
    position: "relative",
    zIndex: 3,

    width: "100%",

    maxWidth: "1400px",

    margin: "0 auto",

  padding: isMobile
  ? "90px 24px 20px"
  : "0 60px",

    display: "flex",

    alignItems: isMobile
      ? "flex-start"
      : "center",

    minHeight: isMobile
  ? "auto"
  : "900px",
  }}
>
    <div
      style={{
        maxWidth: isMobile
          ? "100%"
          : "680px",

        marginTop: isMobile
  ? "0"
  : "0",
      }}
    >
      {/* BADGE */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",

          padding: isMobile
            ? "18px 14px"
            : "12px 20px",

          borderRadius: "999px",

          background:
            "rgba(34,197,94,.08)",

          border:
            "1px solid rgba(74,222,128,.25)",
          marginTop: isMobile ? "12px" : "140px",
          marginBottom: isMobile
            ? "16px"
            : "36px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#4ADE80",
          }}
        />

        <span
          style={{
            color: "#4ADE80",
            fontWeight: 700,
            letterSpacing: "1px",

            fontSize: isMobile
              ? "10px"
              : "13px",
          }}
        >
          PSYCHOLOGICAL CONSULTING & ASSESSMENT
        </span>
      </div>

      {/* TITLE */}
<div
  style={{
    marginBottom: isMobile ? "28px" : "40px",
  }}
>
  <h1
    style={{
      margin: 0,

      fontWeight: 800,

      fontSize: headingXL,
      lineHeight: isMobile ? "0.95" : "0.92",
      letterSpacing: isMobile ? "-1px" : "-3px",

      color: "#fff",
    }}
  >
    Better Hiring
  </h1>

  <h1
    style={{
      margin: 0,

      fontWeight: 800,

      fontSize: isMobile ? "42px" : "72px",
      lineHeight: isMobile ? "0.95" : "0.92",
      letterSpacing: isMobile ? "-1px" : "-3px",

      background:
        "linear-gradient(180deg,#7EE787,#4ADE80)",

      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    Through
    <br />
    Assessment
  </h1>
</div>

      {/* DESCRIPTION */}
      <p
  style={{
    color: "#CBD5E1",

    lineHeight: 1.75,

    fontSize: bodyLarge,

    maxWidth: isMobile
      ? "300px"
      : "620px",

    marginTop: 0,

    marginBottom: isMobile
      ? "24px"
      : "32px",
  }}
>
Psychological assessment and aptitude
 testing designed to improve hiring 
 decisions and reduce recruitment risks.
</p>

      {/* FEATURE CHIPS */}
      <div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(3,auto)",

    gap: "12px",

    marginBottom: "28px",

    maxWidth: isMobile
      ? "320px"
      : "100%",
  }}
>
  {[
    "Personality Test",
    "Aptitude Assessment",
    "Hiring Recommendation",
  ].map((item) => (
    <div
      key={item}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",

        padding: "12px 16px",

        borderRadius: "14px",

        background:
          "rgba(255,255,255,.04)",

        border:
          "1px solid rgba(74,222,128,.12)",

        color: "#E2E8F0",

        fontSize: bodySmall,

        fontWeight: 500,
      }}
    >
      <CheckCircle2
        size={18}
        color="#4ADE80"
      />

      <span>{item}</span>
    </div>
  ))}
</div>

      {/* BUTTONS */}
      <div
  style={{
    display: "flex",

    flexDirection: "column",

    gap: "12px",

    width: isMobile
      ? "100%"
      : "520px",

    marginBottom: "24px",
  }}
>
        <a
          href="https://wa.me/6285121305329"
          target="_blank"
          style={{
            height: "68px",

            borderRadius: "999px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            textDecoration: "none",

            background:
              "linear-gradient(90deg,#22C55E,#4ADE80)",

            color: "#fff",

            fontWeight: 700,

            fontSize: isMobile
            ? "18px"
            : "18px",

            boxShadow:
              "0 15px 40px rgba(34,197,94,.25)",
          }}
        >
          💬 Book Consultation
        </a>

        <a
          href="#services"
          style={{
          
            height: isMobile ? "60px" : "68px",
            fontSize: isMobile ? "18px" : "18px",
            width: "100%",
            borderRadius: "999px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            textDecoration: "none",

            border:
              "1px solid rgba(255,255,255,.15)",

            background:
              "rgba(255,255,255,.03)",

            color: "#fff",

            fontWeight: 600,

          }}
        >
          Learn More →
        </a>
      </div>

      {/* TRUST CARD */}
      <div
        style={{
          maxWidth: isMobile
            ? "100%"
            : "620px",
          flexDirection: isMobile
            ? "column"
            : "row",
            alignItems: isMobile
            ? "flex-start"
            : "center",
          display: "flex",
          

          gap: "20px",

          padding: isMobile
            ? "20px"
            : "28px",

          borderRadius: "24px",

          background:
            "rgba(255,255,255,.05)",

          border:
            "1px solid rgba(74,222,128,.15)",

          backdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            width: "62px",
            height: "62px",

            borderRadius: "18px",

            background:
              "rgba(34,197,94,.10)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "28px",
          }}
        >
          🛡️
        </div>

        <div>
          <div
            style={{
              color: "#4ADE80",

              fontWeight: 700,

              fontSize: isMobile
                ? "16px"
                : "20px",

              marginBottom: "4px",
            }}
          >
            Recruitment • Promotion • Talent Mapping
          </div>

          <div
            style={{
              color: "#CBD5E1",
              lineHeight: 1.6,
            }}
          >
            Professional assessment services
            for organizations and individuals.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SERVICES */}
<section
  style={{
    maxWidth: "1200px",

    margin: isMobile
      ? "80px auto 0"
      : "140px auto 0",

    padding: isMobile
      ? "0 16px 80px"
      : "0 20px 120px",
  }}
>
  <div
  style={{
    textAlign: "center",
    marginBottom: isMobile
      ? "40px"
      : "70px",
  }}
>
  <div
    style={{
      color: "#4ADE80",
      fontSize: "13px",
      letterSpacing: "3px",
      fontWeight: 700,
      marginBottom: "14px",
    }}
  >
    ASSESSMENT SERVICES
  </div>

  <h2
    style={{
     fontSize: headingL,

      lineHeight: 1.05,

      fontWeight: 800,

      marginBottom: "20px",
    }}
  >
    Assessment Packages
  </h2>

  <p
    style={{
      color: "#94A3B8",

      maxWidth: "700px",

      margin: "0 auto",

      fontSize: body,

      lineHeight: 1.8,
    }}
  >
    Professional psychological and aptitude
    assessments designed to improve hiring
    decisions, identify potential, and reduce
    recruitment risks.
  </p>
</div>
  <div
    style={{
      display: "grid",

gridTemplateColumns:
  isMobile
    ? "1fr"
    : "repeat(2,minmax(0,1fr))",

gap: isMobile
  ? "18px"
  : "28px",
    }}
  >

    {/* PSYCHOLOGICAL TEST */}
    <div
      style={{
        padding: "32px",
        borderRadius: "28px",

        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(34,197,94,0.18)",

        backdropFilter: "blur(12px)",

        transition: "all 0.35s ease",

        boxShadow:
          "0 25px 60px rgba(0,0,0,0.35)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-10px)";

        e.currentTarget.style.boxShadow =
          "0 30px 70px rgba(34,197,94,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px)";

        e.currentTarget.style.boxShadow =
          "0 25px 60px rgba(0,0,0,0.35)";
      }}
    >
      {/* ICON */}
      <div
        style={{
         
          borderRadius: "18px",

          background:
            "linear-gradient(135deg,#22c55e,#16a34a)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          width: isMobile ? "52px" : "64px",
          height: isMobile ? "52px" : "64px",

          fontSize: isMobile
            ? "22px"
            : "28px",

          marginBottom: "24px"
        }}
      >
        🧠
      </div>

      <div
        style={{
          display: "inline-block",
          marginBottom: "18px",

          padding: "6px 14px",

          borderRadius: "999px",

          background:
            "rgba(34,197,94,0.12)",

          color: "#86efac",
                fontSize: isMobile
          ? "11px"
          : "12px",
        }}
      >
        Psychological Consulting
      </div>

      <h2
        style={{
          fontSize: isMobile
  ? "24px"
  : "32px",
          marginBottom: "16px"
        }}
      >
        Psychological Test
      </h2>

      <p
        style={{
          color: "#94a3b8",
        fontSize: isMobile
        ? "14px"
        : "16px",
        lineHeight: 1.7,
          marginBottom: "28px"
        }}
      >
        Structured psychological evaluation to
        assess personality, emotional stability,
        leadership potential, work attitude,
        and behavioral compatibility.
      </p>

      {/* FEATURES */}
      {[
        "Personality Assessment",
        "Behavioral Evaluation",
        "Leadership Potential Analysis",
        "Work Attitude Evaluation",
        "Professional Assessment Report",
        "HR Recommendation"
      ].map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: isMobile
            ? "10px"
            : "14px"
          }}
        >
          <span style={{ color: "#CBD5E1", fontSize: isMobile
              ? "14px"
              : "16px", }}>
            ✔
          </span>

          <span style={{ color: "#CBD5E1", fontSize: isMobile
              ? "14px"
              : "16px",}}>
            {item}
          </span>
        </div>
      ))}

      {/* PRICE */}
      <div
        style={{
          marginTop: "30px",
          paddingTop: "24px",

          borderTop:
            "1px solid rgba(255,255,255,0.08)"
        }}
      >
        <div
          style={{
            fontSize: isMobile
            ? "28px"
            : "42px",
            fontWeight: 700
          }}
        >
          IDR 699K
        </div>

        <div
          style={{
            color: "#64748b",
            marginTop: "6px"
          }}
        >
          Per assessment package
        </div>
      </div>
    </div>

    {/* APTITUDE TEST */}
    <div
      style={{
        padding: "32px",
        borderRadius: "28px",

        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(59,130,246,0.2)",

        backdropFilter: "blur(12px)",

        transition: "all 0.35s ease",

        boxShadow:
          "0 25px 60px rgba(0,0,0,0.35)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-10px)";

        e.currentTarget.style.boxShadow =
          "0 30px 70px rgba(59,130,246,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px)";

        e.currentTarget.style.boxShadow =
          "0 25px 60px rgba(0,0,0,0.35)";
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "18px",

          background:
            "linear-gradient(135deg,#3B82F6,#2563eb)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: "28px",

          marginBottom: "24px"
        }}
      >
        📊
      </div>

      <div
        style={{
          display: "inline-block",
          marginBottom: "18px",

          padding: "6px 14px",

          borderRadius: "999px",

          background:
            "rgba(59,130,246,0.12)",

          color: "#93c5fd",
          fontSize: "12px"
        }}
      >
        Talent Mapping
      </div>

      <h2
        style={{
          fontSize: "30px",
          marginBottom: "16px"
        }}
      >
        Aptitude & Interest Test
      </h2>

      <p
        style={{
          color: "#94a3b8",
          lineHeight: "1.8",
          marginBottom: "28px"
        }}
      >
        Identify candidate strengths, cognitive
        ability, career interests, learning
        potential, and role compatibility through
        structured aptitude assessment.
      </p>

      {/* FEATURES */}
      {[
        "Cognitive Ability Test",
        "Aptitude Mapping",
        "Career Interest Analysis",
        "Learning Capability Evaluation",
        "Talent Compatibility Review",
        "Development Recommendation"
      ].map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "14px"
          }}
        >
          <span style={{ color: "#3B82F6" }}>
            ✔
          </span>

          <span style={{ color: "#e2e8f0" }}>
            {item}
          </span>
        </div>
      ))}

      {/* PRICE */}
      <div
        style={{
          marginTop: "30px",
          paddingTop: "24px",

          borderTop:
            "1px solid rgba(255,255,255,0.08)"
        }}
      >
        <div
          style={{
            fontSize: isMobile
            ? "28px"
            : "32px",
            fontWeight: 700
          }}
        >
          IDR 499K
        </div>

        <div
          style={{
            color: "#64748b",
            marginTop: "6px"
          }}
        >
          Per assessment package
        </div>
      </div>
    </div>

  </div>
</section>

      {/* BENEFITS */}
      <section
        style={{
          padding: "100px 20px",
          background:
            "rgba(255,255,255,0.02)",

          borderTop:
            "1px solid rgba(255,255,255,0.06)",

          borderBottom:
            "1px solid rgba(255,255,255,0.06)"
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          <h2
  style={{
    textAlign: "center",

    fontSize: isMobile
      ? "28px"
      : "34px",

    lineHeight: 1.05,

    fontWeight: 800,

    color: "#fff",

    marginBottom: "20px",
  }}
>
  Why Organizations Choose
  <br />
  Our Assessment Services
</h2>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              maxWidth: "700px",
              margin:
                "0 auto 60px",
              lineHeight: "1.8"
            }}
          >
            Reduce hiring uncertainty and gain
            deeper insight into candidate capability,
            personality, and long-term fit.
          </p>

          <div
  style={{
    display: "grid",

    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(3,minmax(0,1fr))",

    gap: isMobile
      ? "16px"
      : "24px",
  }}
>
  {[
    {
      icon: "🎯",
      title: "Better Hiring Decisions",
      desc: "Reduce guesswork and make more informed recruitment decisions."
    },
    {
      icon: "📉",
      title: "Lower Turnover Risk",
      desc: "Identify candidates who are more likely to succeed long-term."
    },
    {
      icon: "🧠",
      title: "Deeper Candidate Insight",
      desc: "Understand personality, motivation, and work behavior."
    },
    {
      icon: "🚀",
      title: "Leadership Potential",
      desc: "Identify future leaders and high-potential talent."
    },
    {
      icon: "📊",
      title: "Aptitude Evaluation",
      desc: "Measure cognitive ability and learning capability."
    },
    {
      icon: "🤝",
      title: "Team Compatibility",
      desc: "Improve team fit and workplace collaboration."
    },
  ].map((item, i) => (
    <div
      key={i}
      style={{
        padding: isMobile
          ? "22px"
          : "28px",

        borderRadius: "24px",

        background:
          "rgba(255,255,255,0.04)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        backdropFilter: "blur(16px)",

        transition: "all .3s ease",
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform =
            "translateY(-6px)";

          e.currentTarget.style.border =
            "1px solid rgba(74,222,128,.25)";

          e.currentTarget.style.boxShadow =
            "0 20px 40px rgba(74,222,128,.08)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px)";

        e.currentTarget.style.border =
          "1px solid rgba(255,255,255,0.08)";

        e.currentTarget.style.boxShadow =
          "none";
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",

          borderRadius: "16px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: "28px",

          background:
            "rgba(74,222,128,.10)",

          marginBottom: "18px",
        }}
      >
        {item.icon}
      </div>

      <h3
        style={{
          fontSize: isMobile
            ? "18px"
            : "20px",

          fontWeight: 700,

          marginBottom: "10px",

          color: "#fff",
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          color: "#94A3B8",

          lineHeight: 1.7,

          fontSize: isMobile
            ? "14px"
            : "15px",
        }}
      >
        {item.desc}
      </p>
    </div>
  ))}
</div>
</div>
      </section>

      {/* PACKAGE */}
      <section
        style={{
          padding: "100px 20px"
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",

            padding: "40px",

            borderRadius: "28px",

            background:
              "rgba(255,255,255,0.05)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            backdropFilter: "blur(12px)",

            boxShadow:
              "0 30px 80px rgba(0,0,0,0.5)"
          }}
        >
          <div
            style={{
              display: "inline-block",
              marginBottom: "18px",

              padding: "6px 14px",

              borderRadius: "999px",

              background:
                "rgba(250,204,21,0.12)",

              color: "#facc15",
              fontSize: "13px"
            }}
          >
            Corporate Assessment Package
          </div>

          <h2
            style={{
              fontSize: "28px",
              marginBottom: "14px"
            }}
          >
            Psychological Test Package
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
              marginBottom: "30px"
            }}
          >
            Professional assessment and consulting
            designed for recruitment, promotion,
            talent mapping, and organizational
            development.
          </p>

          {/* PRICE */}
          <div
            style={{
              marginBottom: "30px"
            }}
          >
            <span
              style={{
                fontSize: isMobile
                ? "28px"
                : "36px",
                fontWeight: 700
              }}
            >
              Start From IDR 499K
            </span>

            <div
              style={{
                color: "#64748b",
                marginTop: "10px"
              }}
            >
              Pricing depends on assessment scope
              and participant quantity.
            </div>
          </div>

          {/* FEATURES */}
          {[
            "Psychological test report",
            "Aptitude & interest analysis",
            "Candidate personality evaluation",
            "Recruitment recommendation",
            "Professional consultation",
            "Online & offline assessment available"
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "14px"
              }}
            >
              <span
                style={{
                  color: "#22c55e"
                }}
              >
                ✔
              </span>

              <span
                style={{
                  color: "#cbd5e1"
                }}
              >
                {item}
              </span>
            </div>
          ))}

          {/* DETAILS */}
          <button
            onClick={() =>
              setShowDetails(!showDetails)
            }
            style={{
              marginTop: "24px",
              marginBottom: "20px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              height: isMobile ? "50px" : "56px",

              padding: isMobile
                ? "0 18px"
                : "0 24px",

              fontSize: isMobile
                ? "14px"
                : "15px",

              fontWeight: 600,

              borderRadius: "999px",

              background: "transparent",

              border:
                "1px solid rgba(255,255,255,0.15)",

              color: "#fff",

              cursor: "pointer",

              transition:
                "all 0.3s ease"
            }}
          >
            {showDetails
              ? "Hide Details"
              : "See Full Details"}
          </button>

          <div
            style={{
              maxHeight:
                showDetails
                  ? "1200px"
                  : "0px",

              overflow: "hidden",

              opacity:
                showDetails ? 1 : 0,

              transition:
                "all 0.5s ease"
            }}
          >
            <div
              style={{
                padding: "24px",
                borderRadius: "18px",

                background:
                  "#111827",

                border:
                  "1px solid rgba(127,29,29,0.25)"
              }}
            >
              <h3
                style={{
                  marginBottom: "16px"
                }}
              >
                Assessment Includes
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.9"
                }}
              >
                • Personality assessment
                <br />
                • Cognitive ability testing
                <br />
                • Aptitude & interest mapping
                <br />
                • Leadership potential analysis
                <br />
                • Work attitude evaluation
                <br />
                • Professional recommendation report
                <br />
                • HR consultation session
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
  href="https://wa.me/6285121305329?text=Hi%20VD%20Fokus,%20I%20am%20interested%20in%20your%20Psychological%20Assessment%20Service."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginTop: "30px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: isMobile ? "100%" : "auto",
    height: isMobile ? "58px" : "68px",

    borderRadius: "999px",

    background:
      "linear-gradient(135deg,#22C55E,#16A34A)",

    color: "#fff",
    textDecoration: "none",

    fontWeight: 700,
    fontSize: isMobile ? "16px" : "18px",

    boxShadow:
      "0 10px 30px rgba(34,197,94,.25)",

    transition: "all .3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-2px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0)";
  }}
>
  💬 Book Consultation
</a>
        </div>
      </section>
    </main>
  );
}