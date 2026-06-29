"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  
  const [visible, setVisible] = useState(false);
  const [openDetails, setOpenDetails] = useState<
    "psychological" | "talent" | "role" | null
  >(null);
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
    "Psychological Assessment",
    "Talent & Career Interest",
    "Job Role Suitability",
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

flexDirection: isMobile
  ? "row"
  : "column",

gap: isMobile
  ? "10px"
  : "12px",

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
            borderRadius: "999px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            textDecoration: "none",

            background:
              "linear-gradient(90deg,#22C55E,#4ADE80)",

            color: "#fff",

            fontWeight: 700,

            height: isMobile
            ? "52px"
            : "68px",

          width: isMobile
            ? "50%"
            : "100%",

          fontSize: isMobile
            ? "14px"
            : "18px",

            boxShadow:
              "0 15px 40px rgba(34,197,94,.25)",
          }}
        >
          <FaWhatsapp
  size={22}
  style={{ marginRight: "8px" }}
/>
<span>Consult Your Needs</span>
        </a>

        <a
          href="#services"
          style={{
          
            height: isMobile
            ? "52px"
            : "68px",

          width: isMobile
            ? "50%"
            : "100%",

          fontSize: isMobile
            ? "14px"
            : "18px",
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
      ? "34px"
      : "52px",

    lineHeight: 1.05,

    fontWeight: 800,

    color: "#fff",

    marginBottom: "20px",
  }}
>
  Why Us?
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
      {/* WHO IS THIS FOR */}
<section
  style={{
    maxWidth: "1200px",
    margin: isMobile ? "80px auto" : "120px auto",
    padding: isMobile ? "0 16px" : "0 20px",
  }}
>
  {/* Header */}
  <div
    style={{
      textAlign: "center",
      marginBottom: isMobile ? "40px" : "70px",
    }}
  >
    <div
      style={{
        display: "inline-block",
        padding: "6px 16px",
        borderRadius: "999px",
        background: "rgba(74,222,128,.08)",
        border: "1px solid rgba(74,222,128,.18)",
        color: "#4ADE80",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "2px",
        marginBottom: "18px",
      }}
    >
      WHO WE SERVE
    </div>

    <h2
      style={{
        fontSize: headingL,
        fontWeight: 800,
        lineHeight: 1.05,
        color: "#fff",
        marginBottom: "20px",
      }}
    >
      Who Is This Assessment For?
    </h2>

    <p
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        color: "#94A3B8",
        fontSize: body,
        lineHeight: 1.8,
      }}
    >
      Our psychological assessment services are designed for both
      organizations and individuals seeking objective insights to make
      better hiring, promotion, career, and talent development decisions.
    </p>
  </div>

  {/* Cards */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(2,minmax(0,1fr))",
      gap: isMobile ? "18px" : "24px",
    }}
  >
    {[
      {
        icon: "👔",
        title: "HR & Recruitment",
        desc:
          "Improve hiring quality through objective psychological assessments that reduce recruitment risks and identify candidates with the highest potential.",
      },
      {
        icon: "🏢",
        title: "Organizations",
        desc:
          "Support promotion decisions, leadership development, succession planning, and internal talent mapping with reliable assessment data.",
      },
      {
        icon: "🎓",
        title: "Individuals",
        desc:
          "Understand your strengths, personality, career interests, and work preferences to make more informed career decisions.",
      },
      {
        icon: "🚀",
        title: "Leadership Development",
        desc:
          "Identify leadership potential, cognitive ability, and behavioral competencies for future management and executive roles.",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          padding: isMobile ? "24px" : "30px",

          borderRadius: "26px",

          background:
            "linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.02))",

          border:
            "1px solid rgba(255,255,255,.08)",

          backdropFilter: "blur(18px)",

          transition: "all .35s ease",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform =
              "translateY(-6px)";
            e.currentTarget.style.border =
              "1px solid rgba(74,222,128,.22)";
            e.currentTarget.style.boxShadow =
              "0 18px 40px rgba(74,222,128,.08)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0)";
          e.currentTarget.style.border =
            "1px solid rgba(255,255,255,.08)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div
          style={{
            width: "58px",
            height: "58px",

            borderRadius: "18px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "28px",

            background:
              "rgba(74,222,128,.10)",

            marginBottom: "22px",
          }}
        >
          {item.icon}
        </div>

        <h3
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: isMobile ? "20px" : "24px",
            marginBottom: "14px",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "#94A3B8",
            fontSize: bodySmall,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {item.desc}
        </p>
      </div>
    ))}
  </div>

  {/* Bottom Highlight */}
  <div
    style={{
      marginTop: isMobile ? "22px" : "36px",

      padding: isMobile ? "24px" : "34px",

      borderRadius: "28px",

      background:
        "linear-gradient(145deg,rgba(34,197,94,.08),rgba(255,255,255,.03))",

      border:
        "1px solid rgba(74,222,128,.18)",

      backdropFilter: "blur(20px)",

      display: "flex",

      flexDirection: isMobile
        ? "column"
        : "row",

      alignItems: isMobile
        ? "flex-start"
        : "center",

      gap: "22px",
    }}
  >
    <div
      style={{
        width: "68px",
        height: "68px",

        borderRadius: "20px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        fontSize: "34px",

        background:
          "rgba(74,222,128,.10)",

        flexShrink: 0,
      }}
    >
      🎯
    </div>

    <div>
      <h3
        style={{
          margin: "0 0 10px",

          color: "#4ADE80",

          fontWeight: 700,

          fontSize: isMobile
            ? "22px"
            : "28px",
        }}
      >
        One Assessment. Multiple Business Applications.
      </h3>

      <p
        style={{
          margin: 0,

          color: "#CBD5E1",

          lineHeight: 1.8,

          fontSize: body,
        }}
      >
        Our assessment solutions support recruitment, promotion,
        succession planning, talent mapping, career development,
        leadership identification, and organizational growth through
        structured psychological evaluation and professional
        recommendations.
      </p>
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
      ? "0 16px 36px"
      : "0 20px 58px",
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
        padding: isMobile ? "24px" : "32px",
        minWidth: 0,
        borderRadius: "30px",

        background:
          "linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))",

        border:
          "1px solid rgba(134,239,172,0.24)",

        backdropFilter: "blur(20px)",

        transition: "all 0.35s ease",

        boxShadow:
          "0 28px 70px rgba(2,6,23,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
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
          "0 28px 70px rgba(2,6,23,0.5), inset 0 1px 0 rgba(255,255,255,0.06)";
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
        Psychological Assessment
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
        A comprehensive assessment of cognitive ability,
        personality, and work behavior, supported by a
        professional interview and recommendation.
      </p>

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
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#f8fafc"
          }}
        >
          IDR 500K
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

      <button
        type="button"
        aria-expanded={openDetails === "psychological"}
        onClick={() => setOpenDetails(openDetails === "psychological" ? null : "psychological")}
        style={{
          width: "100%",
          boxSizing: "border-box",
          minHeight: isMobile ? "48px" : "52px",
          marginTop: "22px",
          padding: "0 18px",
          borderRadius: "16px",
          border: "1px solid rgba(134,239,172,0.2)",
          background: "rgba(34,197,94,0.07)",
          color: "#dcfce7",
          fontSize: isMobile ? "14px" : "15px",
          fontWeight: 650,
          cursor: "pointer",
          transition: "background .3s ease, border-color .3s ease, transform .3s ease"
        }}
      >
        {openDetails === "psychological" ? "Hide Assessment Details" : "See More Details"}
      </button>

      <div
        style={{
          maxHeight: openDetails === "psychological" ? "360px" : "0px",
          opacity: openDetails === "psychological" ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .45s ease, opacity .3s ease, margin .45s ease",
          marginTop: openDetails === "psychological" ? "14px" : "0px"
        }}
      >
        <div style={{ padding: isMobile ? "18px" : "20px", borderRadius: "18px", background: "rgba(2,6,23,0.42)", border: "1px solid rgba(255,255,255,0.07)" }}>
          {["IQ Assessment", "Personality Assessment", "Work Behavior Analysis", "Professional Interview", "Assessment Recommendation"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "11px", marginBottom: "12px", color: "#cbd5e1", fontSize: isMobile ? "14px" : "15px", lineHeight: 1.5 }}>
              <CheckCircle2 size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://wa.me/628161387821?text=Hi%20Im%20interested%20on%20Psychological%20Assessment"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", boxSizing: "border-box", minHeight: isMobile ? "52px" : "56px", marginTop: "16px", padding: "0 22px", borderRadius: "16px", background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#fff", textDecoration: "none", fontWeight: 750, boxShadow: "0 12px 30px rgba(34,197,94,0.22)", transition: "transform .3s ease, box-shadow .3s ease" }}
      >
        Book Assessment
      </a>
    </div>

    {/* APTITUDE TEST */}
    <div
      style={{
        padding: isMobile ? "24px" : "32px",
        minWidth: 0,
        borderRadius: "30px",

        background:
          "linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))",

        border:
          "1px solid rgba(147,197,253,0.22)",

        backdropFilter: "blur(20px)",

        transition: "all 0.35s ease",

        boxShadow:
          "0 28px 70px rgba(2,6,23,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
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
          "0 28px 70px rgba(2,6,23,0.5), inset 0 1px 0 rgba(255,255,255,0.06)";
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
        Talent & Career Interest Assessment
      </h2>

      <p
        style={{
          color: "#94a3b8",
          lineHeight: "1.8",
          marginBottom: "28px"
        }}
      >
        Discover talent, career interests, personality,
        and leadership potential through a structured
        assessment and professional interview.
      </p>

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
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#f8fafc"
          }}
        >
          IDR 500K
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

      <button
        type="button"
        aria-expanded={openDetails === "talent"}
        onClick={() => setOpenDetails(openDetails === "talent" ? null : "talent")}
        style={{ width: "100%", boxSizing: "border-box", minHeight: isMobile ? "48px" : "52px", marginTop: "22px", padding: "0 18px", borderRadius: "16px", border: "1px solid rgba(147,197,253,0.2)", background: "rgba(59,130,246,0.07)", color: "#dbeafe", fontSize: isMobile ? "14px" : "15px", fontWeight: 650, cursor: "pointer", transition: "background .3s ease, border-color .3s ease, transform .3s ease" }}
      >
        {openDetails === "talent" ? "Hide Assessment Details" : "See More Details"}
      </button>

      <div style={{ maxHeight: openDetails === "talent" ? "360px" : "0px", opacity: openDetails === "talent" ? 1 : 0, overflow: "hidden", transition: "max-height .45s ease, opacity .3s ease, margin .45s ease", marginTop: openDetails === "talent" ? "14px" : "0px" }}>
        <div style={{ padding: isMobile ? "18px" : "20px", borderRadius: "18px", background: "rgba(2,6,23,0.42)", border: "1px solid rgba(255,255,255,0.07)" }}>
          {["Talent & Interest Test", "Personality Assessment", "Leadership Potential Assessment", "Professional Interview", "Assessment Recommendation"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "11px", marginBottom: "12px", color: "#cbd5e1", fontSize: isMobile ? "14px" : "15px", lineHeight: 1.5 }}>
              <CheckCircle2 size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://wa.me/628161387821?text=Hi%20Im%20interested%20on%20Talent%20and%20Career%20Interest%20Assessment"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", boxSizing: "border-box", minHeight: isMobile ? "52px" : "56px", marginTop: "16px", padding: "0 22px", borderRadius: "16px", background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#fff", textDecoration: "none", fontWeight: 750, boxShadow: "0 12px 30px rgba(34,197,94,0.22)", transition: "transform .3s ease, box-shadow .3s ease" }}
      >
        Book Assessment
      </a>
    </div>

  </div>
</section>

      

      {/* PACKAGE */}
      <section
        style={{
          padding: isMobile ? "22px 16px 80px" : "36px 20px 100px"
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",

            padding: isMobile ? "24px" : "40px",

            borderRadius: "30px",

            background:
              "linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))",

            border:
              "1px solid rgba(134,239,172,0.2)",

            backdropFilter: "blur(20px)",

            boxShadow:
              "0 32px 85px rgba(2,6,23,0.52), inset 0 1px 0 rgba(255,255,255,0.06)"
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
            Role Fit Assessment
          </div>

          <h2
            style={{
              fontSize: "28px",
              marginBottom: "14px"
            }}
          >
            Job Role Suitability Assessment
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
              marginBottom: "30px"
            }}
          >
            Evaluate how well a candidate&apos;s capabilities,
            personality, and work endurance align with the
            responsibilities of a specific job level.
          </p>

          {/* PRICING */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(3,minmax(0,1fr))",
              gap: "14px",
              marginBottom: "30px"
            }}
          >
            {[
              ["Staff", "IDR 275K"],
              ["Supervisor", "IDR 550K"],
              ["Manager & Above", "IDR 850K"]
            ].map(([role, price]) => (
              <div
                key={role}
                style={{
                  padding: isMobile ? "18px" : "22px",
                  borderRadius: "20px",
                  background: "linear-gradient(145deg,rgba(15,23,42,0.72),rgba(15,23,42,0.45))",
                  border: "1px solid rgba(134,239,172,0.12)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)"
                }}
              >
                <div style={{ color: "#94a3b8", marginBottom: "8px" }}>
                  {role}
                </div>
                <div style={{ fontSize: isMobile ? "24px" : "27px", fontWeight: 800, letterSpacing: "-0.7px" }}>
                  {price}
                </div>
              </div>
            ))}
          </div>

          {/* DETAILS */}
          <button
            type="button"
            aria-expanded={openDetails === "role"}
            onClick={() => setOpenDetails(openDetails === "role" ? null : "role")}
            style={{
              width: "100%",
              boxSizing: "border-box",
              marginTop: "4px",

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

              borderRadius: "16px",

              background: "rgba(34,197,94,0.07)",

              border:
                "1px solid rgba(134,239,172,0.2)",

              color: "#fff",

              cursor: "pointer",

              transition:
                "all 0.3s ease"
            }}
          >
            {openDetails === "role"
              ? "Hide Assessment Details"
              : "See More Details"}
          </button>

          <div
            style={{
              maxHeight:
                openDetails === "role"
                  ? "360px"
                  : "0px",

              overflow: "hidden",

              opacity:
                openDetails === "role" ? 1 : 0,

              marginTop: openDetails === "role" ? "14px" : "0px",

              transition:
                "all 0.5s ease"
            }}
          >
            <div
              style={{
                padding: isMobile ? "18px" : "20px",
                borderRadius: "18px",

                background:
                  "rgba(2,6,23,0.42)",

                border:
                  "1px solid rgba(255,255,255,0.07)"
              }}
            >
              <h3
                style={{
                  marginBottom: "16px"
                }}
              >
                Assessment Includes
              </h3>

              {["Professional Interview", "Psychogram Analysis", "Work Endurance Assessment", "Personality Assessment", "Assessment Recommendation"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "11px", marginBottom: "12px", color: "#cbd5e1", fontSize: isMobile ? "14px" : "15px", lineHeight: 1.5 }}>
                  <CheckCircle2 size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
  href="https://wa.me/628161387821?text=Hi%20Im%20interested%20on%20Job%20Role%20Suitability%20Assessment"
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
  Book Assessment
</a>
        </div>
      </section>
      <div
  style={{
    width: isMobile ? "85%" : "60%",
    margin: "0 auto",
    borderTop: "1px solid rgba(255,255,255,.08)",
  }}
/>
      {/* FINAL CTA */}
<section
  style={{
    position: "relative",
    overflow: "hidden",

    marginTop: isMobile ? "40px" : "80px",

    padding: isMobile
      ? "80px 16px 90px"
      : "120px 20px 140px",
  }}
>
  {/* Green Glow */}
  <div
    style={{
      position: "absolute",

      width: isMobile ? "260px" : "520px",
      height: isMobile ? "260px" : "520px",

      left: "50%",
      top: "50%",

      transform: "translate(-50%,-50%)",

      borderRadius: "50%",

      background:
        "radial-gradient(circle, rgba(74,222,128,.15), transparent 70%)",

      filter: "blur(90px)",

      zIndex: 0,
    }}
  />

  <div
    style={{
      position: "relative",
      zIndex: 2,

      maxWidth: "980px",

      margin: "0 auto",

      padding: isMobile
        ? "36px 24px"
        : "56px",

      borderRadius: "32px",

      background:
        "linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.025))",

      border:
        "1px solid rgba(74,222,128,.16)",

      backdropFilter: "blur(24px)",

      textAlign: "center",

      boxShadow:
        "0 35px 80px rgba(2,6,23,.45)",
    }}
  >
    {/* Badge */}
    <div
      style={{
        display: "inline-flex",

        alignItems: "center",

        gap: "10px",

        padding: "8px 18px",

        borderRadius: "999px",

        background:
          "rgba(74,222,128,.08)",

        border:
          "1px solid rgba(74,222,128,.18)",

        marginBottom: "26px",
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

          letterSpacing: "2px",

          fontSize: "12px",
        }}
      >
        READY TO GET STARTED?
      </span>
    </div>

    {/* Heading */}
    <h2
      style={{
        fontSize: headingL,

        fontWeight: 800,

        lineHeight: 1.05,

        color: "#fff",

        marginBottom: "20px",
      }}
    >
      Make Better Hiring Decisions
      <br />
      With Professional Assessment
    </h2>

    {/* Description */}
    <p
      style={{
        maxWidth: "700px",

        margin: "0 auto",

        color: "#CBD5E1",

        fontSize: body,

        lineHeight: 1.8,

        marginBottom: "36px",
      }}
    >
      Whether you're hiring new employees, evaluating internal talent,
      planning promotions, or identifying future leaders, our structured
      psychological assessments provide objective insights that support
      confident, data-driven decisions.
    </p>

    {/* Buttons */}
    <div
      style={{
        display: "flex",

        flexDirection: isMobile
          ? "column"
          : "row",

        justifyContent: "center",

        gap: "16px",

        marginBottom: "34px",
      }}
    >
      <a
        href="https://wa.me/628161387821?text=Hi%20I'm%20interested%20in%20your%20Psychological%20Assessment%20service."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: isMobile ? undefined : 1,

          maxWidth: isMobile
            ? "100%"
            : "300px",

          height: isMobile
            ? "58px"
            : "64px",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textDecoration: "none",

          borderRadius: "999px",

          background:
            "linear-gradient(135deg,#22C55E,#16A34A)",

          color: "#fff",

          fontWeight: 700,

          fontSize: isMobile
            ? "16px"
            : "17px",

          boxShadow:
            "0 18px 40px rgba(34,197,94,.25)",

          transition: "all .3s ease",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform =
              "translateY(-3px)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0)";
        }}
      >
        <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <FaWhatsapp size={22} />
  <span>Consult Your Needs</span>
</div>
</a>

      <a
        href="tel:+628161387821"
        style={{
          flex: isMobile ? undefined : 1,

          maxWidth: isMobile
            ? "100%"
            : "300px",

          height: isMobile
            ? "58px"
            : "64px",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textDecoration: "none",

          borderRadius: "999px",

          border:
            "1px solid rgba(255,255,255,.15)",

          background:
            "rgba(255,255,255,.03)",

          color: "#fff",

          fontWeight: 600,

          fontSize: isMobile
            ? "16px"
            : "17px",

          transition: "all .3s ease",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.background =
              "rgba(255,255,255,.06)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "rgba(255,255,255,.03)";
        }}
      >
        📞 Contact Consultant
      </a>
    </div>

    {/* Bottom Trust */}
    <div
      style={{
        display: "flex",

        flexDirection: isMobile
          ? "column"
          : "row",

        justifyContent: "center",

        alignItems: "center",

        gap: isMobile ? "10px" : "24px",

        color: "#94A3B8",

        fontSize: bodySmall,

        borderTop:
          "1px solid rgba(255,255,255,.08)",

        paddingTop: "28px",
      }}
    >
      <span>✓ Professional Psychologists</span>

      <span>✓ Objective Assessment</span>

      <span>✓ Comprehensive Report</span>
    </div>
  </div>
</section>
    </main>
  );
}
