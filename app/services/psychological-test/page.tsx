"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
 

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
  ? "1150px"
  : "900px",
    display: "flex",
    alignItems: isMobile ? "flex-start" : "center",
    overflow: "hidden",
  }}
>
  {/* BACKGROUND IMAGE */}
  <Image
  src={
    isMobile
      ? "/hero-psy.png"
      : "/hero-psy.png"
  }
  alt="Psychological Assessment"
  fill
  priority
  style={{
    objectFit: "cover",
    objectPosition: isMobile
  ? "70% 12%"
  : "center center",
  }}
/>
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
            rgba(2,6,23,.20) 0%,
            rgba(2,6,23,.45) 35%,
            rgba(2,6,23,.75) 60%,
            rgba(2,6,23,.92) 80%,
            rgba(2,6,23,1) 100%
          )
        `
        : `
          linear-gradient(
            90deg,
            rgba(2,6,23,.95) 0%,
            rgba(2,6,23,.82) 35%,
            rgba(2,6,23,.55) 65%,
            rgba(2,6,23,.25) 100%
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

  {/* CONTENT */}
  <div
  style={{
    position: "relative",
    zIndex: 3,

    width: "100%",

    maxWidth: "1400px",

    margin: "0 auto",

   padding: isMobile
  ? "20px 24px 40px"
  : "0 60px",

    display: "flex",

    alignItems: isMobile
      ? "flex-start"
      : "center",

    minHeight: isMobile
      ? "100vh"
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
            ? "28px"
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

      fontSize: isMobile ? "42px" : "72px",
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

    fontSize: isMobile
      ? "15px"
      : "21px",

    maxWidth: isMobile
      ? "300px"
      : "620px",

    marginTop: 0,

    marginBottom: isMobile
      ? "24px"
      : "32px",
  }}
>
  Structured psychological evaluation,
  aptitude testing, and professional
  consulting services designed to help
  organizations reduce hiring risks and
  understand candidate potential more
  deeply.
</p>

      {/* FEATURE CHIPS */}
      <div
  style={{
    display: "grid",

    gridTemplateColumns:
  isMobile
    ? "repeat(2,1fr)"
    : "repeat(3,auto)",

    gap: "10px",

    marginBottom: "24px",
    height: isMobile ? "110px" : "auto",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    maxWidth: isMobile
      ? "340px"
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

              gap: "8px",

              padding: isMobile
                ? "12px 14px"
                : "14px 18px",

              borderRadius: "18px",

              background:
                "rgba(255,255,255,.05)",

              border:
                "1px solid rgba(255,255,255,.08)",

              color: "#fff",

              fontSize: isMobile
                ? "14px"
                : "15px",
            }}
          >
            ✅ {item}
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
              ? "20px"
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
          

          gap: "16px",

          padding: isMobile
            ? "18px"
            : "22px",

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
    margin: "0 auto",
    padding: "0 20px 100px"
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(320px,1fr))",

      gap: "28px"
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
          width: "60px",
          height: "60px",
          borderRadius: "18px",

          background:
            "linear-gradient(135deg,#22c55e,#16a34a)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: "28px",

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
          fontSize: "12px"
        }}
      >
        Psychological Consulting
      </div>

      <h2
        style={{
          fontSize: "30px",
          marginBottom: "16px"
        }}
      >
        Psychological Test
      </h2>

      <p
        style={{
          color: "#94a3b8",
          lineHeight: "1.8",
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
            marginBottom: "14px"
          }}
        >
          <span style={{ color: "#22c55e" }}>
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
            fontSize: "38px",
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
            fontSize: "38px",
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
              fontSize: "42px",
              marginBottom: "20px"
            }}
          >
            Why Companies Use
            Our Assessment
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
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",

              gap: "24px"
            }}
          >
            {[
              "More accurate hiring decisions",
              "Reduce employee turnover risk",
              "Understand personality & work style",
              "Identify leadership potential",
              "Measure aptitude & cognitive ability",
              "Improve team compatibility"
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "22px",
                  borderRadius: "18px",

                  background:
                    "#111827",

                  border:
                    "1px solid rgba(127,29,29,0.25)",

                  display: "flex",
                  gap: "14px",
                  alignItems: "center",

                  transition:
                    "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px)";

                  e.currentTarget.style.background =
                    "#1F2937";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.background =
                    "#111827";
                }}
              >
                <span
                  style={{
                    color: "#22c55e",
                    fontSize: "22px"
                  }}
                >
                  ✔
                </span>

                <span
                  style={{
                    color: "#e2e8f0"
                  }}
                >
                  {item}
                </span>
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
              fontSize: "36px",
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
                fontSize: "48px",
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

              padding: "12px 22px",

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
            style={{
              display: "inline-block",
              height: isMobile ? "60px" : "68px",
              fontSize: isMobile ? "18px" : "18px",
              width: "100%",
              marginTop: "30px",

              padding: "16px 30px",

              borderRadius: "999px",

              background:
                "linear-gradient(135deg,#22c55e,#16a34a)",

              color: "#fff",

              textDecoration: "none",

              fontWeight: 600,

              boxShadow:
                "0 0 30px rgba(34,197,94,0.35)",

              transition:
                "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "scale(1.05)";

              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(34,197,94,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "scale(1)";

              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(34,197,94,0.35)";
            }}
          >
            Book Consultation →
          </a>
        </div>
      </section>
    </main>
  );
}