
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function Page() {

  /* =========================================================
     RESPONSIVE STATE
  ========================================================= */

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);


  /* =========================================================
     PAGE STATE
  ========================================================= */

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  /* =========================================================
     NAVIGATION
  ========================================================= */

  const menuItems = [
    {
      name: "Home",
      id: "risk-hero",
    },
    {
      name: "Services",
      id: "risk-services",
    },
    {
      name: "Methodology",
      id: "risk-methodology",
    },
    {
      name: "Deliverables",
      id: "risk-deliverables",
    },
    {
      name: "Industries",
      id: "risk-industries",
    },
    {
      name: "Contact",
      id: "risk-contact",
    },
  ];


  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  const scrollToSection = (id: string) => {

    const element = document.getElementById(id);

    if (!element) return;

    const yOffset = -90;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };


  /* =========================================================
     RESPONSIVE DESIGN VALUES
  ========================================================= */

  const headingXL = isMobile ? "42px" : "72px";
  const headingL = isMobile ? "32px" : "56px";
  const headingM = isMobile ? "24px" : "40px";

  const bodyLarge = isMobile ? "16px" : "20px";
  const body = isMobile ? "14px" : "18px";

  const sectionPadding = isMobile
    ? "60px 20px"
    : "120px 40px";

  const cardPadding = isMobile
    ? "24px"
    : "40px";

  const borderRadius = isMobile
    ? "20px"
    : "32px";


  /* =========================================================
     PAGE
  ========================================================= */

  return (

    <main
      style={{
        position: "relative",
        overflow: "hidden",

        fontFamily: "Inter, sans-serif",

        background:
          "radial-gradient(circle at top, #1e293b, #020617)",

        color: "#fff",

        minHeight: "100vh",
      }}
    >

    


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {isMobile && menuOpen && (

        <div
          style={{
            position: "fixed",

            top: "70px",
            left: 0,
            right: 0,

            zIndex: 999,

            padding:
              "16px 20px 22px",

            background:
              "rgba(2,6,23,0.97)",

            borderBottom:
              "1px solid rgba(255,255,255,.08)",

            backdropFilter:
              "blur(20px)",
          }}
        >

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >

            {menuItems.map((item) => (

              <button
                key={item.id}

                onClick={() =>
                  scrollToSection(item.id)
                }

                style={{
                  textAlign: "left",

                  padding:
                    "14px 12px",

                  borderRadius:
                    "12px",

                  border: "none",

                  background:
                    "transparent",

                  color: "#CBD5E1",

                  fontSize: "14px",

                  cursor: "pointer",
                }}
              >
                {item.name}
              </button>

            ))}

          </div>

        </div>

      )}


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        id="risk-hero"

        style={{
          position: "relative",

          minHeight:
            isMobile
              ? "760px"
              : "680px",

          display: "flex",
          alignItems: "center",

          overflow: "hidden",

          borderRadius: "24px",

          marginBottom:
            isMobile
              ? "0px"
              : "20px",

          background:
            "radial-gradient(circle at 80% 20%, rgba(79,141,255,0.18), transparent 35%), linear-gradient(135deg,#020617 0%,#07152E 55%,#03143B 100%)",
        }}
      >


        {/* =================================================
            HERO BACKGROUND GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",

            right:
              isMobile
                ? "-180px"
                : "-120px",

            top:
              isMobile
                ? "80px"
                : "40px",

            width:
              isMobile
                ? "420px"
                : "620px",

            height:
              isMobile
                ? "420px"
                : "620px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(79,141,255,0.22) 0%, rgba(79,141,255,0.08) 38%, transparent 70%)",

            filter: "blur(10px)",

            zIndex: 0,

            pointerEvents: "none",
          }}
        />


        {/* SECONDARY GLOW */}

        <div
          style={{
            position: "absolute",

            left:
              isMobile
                ? "-180px"
                : "-220px",

            bottom: "-220px",

            width: "500px",
            height: "500px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)",

            filter: "blur(30px)",

            zIndex: 0,

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            ABSTRACT RISK NETWORK
        ================================================= */}

        <div
          style={{
            position: "absolute",

            right:
              isMobile
                ? "-30px"
                : "40px",

            top: "50%",

            transform:
              "translateY(-50%)",

            width:
              isMobile
                ? "330px"
                : "560px",

            height:
              isMobile
                ? "330px"
                : "560px",

            opacity:
              isMobile
                ? 0.55
                : 0.85,

            zIndex: 1,

            pointerEvents: "none",
          }}
        >


          {/* OUTER CIRCLE */}

          <div
            style={{
              position: "absolute",

              inset: "8%",

              borderRadius: "50%",

              border:
                "1px solid rgba(96,165,250,0.18)",

              boxShadow:
                "0 0 80px rgba(79,141,255,0.08)",
            }}
          />


          {/* MIDDLE CIRCLE */}

          <div
            style={{
              position: "absolute",

              inset: "22%",

              borderRadius: "50%",

              border:
                "1px solid rgba(96,165,250,0.22)",
            }}
          />


          {/* INNER CIRCLE */}

          <div
            style={{
              position: "absolute",

              inset: "36%",

              borderRadius: "50%",

              border:
                "1px solid rgba(96,165,250,0.28)",

              background:
                "radial-gradient(circle, rgba(79,141,255,0.16), rgba(79,141,255,0.03) 65%, transparent)",

              boxShadow:
                "0 0 50px rgba(79,141,255,0.18)",
            }}
          />


          {/* CONNECTION LINE 1 */}

          <div
            style={{
              position: "absolute",

              width: "70%",
              height: "1px",

              background:
                "linear-gradient(90deg, transparent, rgba(96,165,250,0.3), transparent)",

              top: "50%",
              left: "15%",

              transform:
                "rotate(30deg)",
            }}
          />


          {/* CONNECTION LINE 2 */}

          <div
            style={{
              position: "absolute",

              width: "70%",
              height: "1px",

              background:
                "linear-gradient(90deg, transparent, rgba(96,165,250,0.25), transparent)",

              top: "50%",
              left: "15%",

              transform:
                "rotate(-30deg)",
            }}
          />


          {/* CONNECTION LINE 3 */}

          <div
            style={{
              position: "absolute",

              width: "70%",
              height: "1px",

              background:
                "linear-gradient(90deg, transparent, rgba(96,165,250,0.2), transparent)",

              top: "50%",
              left: "15%",

              transform:
                "rotate(90deg)",
            }}
          />


          {/* =================================================
              RISK NODES
          ================================================= */}

          {[
            {
              top: "12%",
              left: "50%",
              label: "STRATEGIC",
            },
            {
              top: "34%",
              left: "14%",
              label: "OPERATIONAL",
            },
            {
              top: "70%",
              left: "18%",
              label: "FINANCIAL",
            },
            {
              top: "72%",
              left: "70%",
              label: "COMPLIANCE",
            },
            {
              top: "32%",
              left: "76%",
              label: "IT",
            },
          ].map((node, index) => (

            <div
              key={index}

              style={{
                position: "absolute",

                top: node.top,
                left: node.left,

                transform:
                  "translate(-50%, -50%)",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                width:
                  isMobile
                    ? "76px"
                    : "94px",

                height:
                  isMobile
                    ? "76px"
                    : "94px",

                borderRadius: "50%",

                background:
                  "rgba(15,23,42,0.75)",

                border:
                  "1px solid rgba(96,165,250,0.22)",

                backdropFilter:
                  "blur(12px)",

                boxShadow:
                  "0 0 25px rgba(79,141,255,0.08)",
              }}
            >

              <span
                style={{
                  color: "#94A3B8",

                  fontSize:
                    isMobile
                      ? "7px"
                      : "9px",

                  letterSpacing:
                    "1px",

                  fontWeight: 600,

                  textAlign:
                    "center",
                }}
              >
                {node.label}
              </span>

            </div>

          ))}


          {/* =================================================
              CENTRAL SHIELD
          ================================================= */}

          <div
            style={{
              position: "absolute",

              top: "50%",
              left: "50%",

              transform:
                "translate(-50%, -50%)",

              width:
                isMobile
                  ? "110px"
                  : "150px",

              height:
                isMobile
                  ? "110px"
                  : "150px",

              borderRadius: "50%",

              background:
                "radial-gradient(circle, rgba(79,141,255,0.22), rgba(79,141,255,0.08) 65%, transparent)",

              border:
                "1px solid rgba(96,165,250,0.25)",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              boxShadow:
                "0 0 60px rgba(79,141,255,0.18)",
            }}
          >

            <div
              style={{
                width:
                  isMobile
                    ? "68px"
                    : "88px",

                height:
                  isMobile
                    ? "68px"
                    : "88px",

                borderRadius: "24px",

                background:
                  "linear-gradient(135deg,#2563EB,#4F8DFF)",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                boxShadow:
                  "0 15px 40px rgba(37,99,235,0.35)",
              }}
            >

              <ShieldCheck
                size={
                  isMobile
                    ? 34
                    : 46
                }

                color="#fff"

                strokeWidth={1.6}
              />

            </div>

          </div>

        </div>


        {/* =================================================
            HERO DARK OVERLAY
        ================================================= */}

        <div
          style={{
            position: "absolute",

            inset: 0,

            background:
              isMobile
                ? `
                  linear-gradient(
                    90deg,
                    rgba(2,6,23,0.98) 0%,
                    rgba(2,6,23,0.94) 48%,
                    rgba(2,6,23,0.45) 100%
                  )
                `
                : `
                  linear-gradient(
                    90deg,
                    rgba(2,6,23,0.98) 0%,
                    rgba(2,6,23,0.88) 38%,
                    rgba(2,6,23,0.45) 68%,
                    rgba(2,6,23,0.18) 100%
                  )
                `,

            zIndex: 2,

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          style={{
            position: "relative",

            zIndex: 3,

            maxWidth: "650px",

            padding:
              isMobile
                ? "120px 28px 50px"
                : "150px 60px 70px",
          }}
        >


          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding:
                "9px 16px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.10)",

              border:
                "1px solid rgba(96,165,250,0.18)",

              color: "#6EA8FF",

              fontSize: "13px",

              fontWeight: 600,

              letterSpacing:
                "2px",

              marginBottom:
                "20px",

              backdropFilter:
                "blur(10px)",
            }}
          >

            🛡️ RISK MANAGEMENT CONSULTING

          </div>


          {/* MAIN HEADING */}

          <h1
            style={{
              fontSize:
                isMobile
                  ? "46px"
                  : "72px",

              lineHeight:
                "0.98",

              fontWeight: 750,

              letterSpacing:
                "-3px",

              margin:
                "0 0 8px 0",

              color:
                "#FFFFFF",
            }}
          >
            Manage Risk.
          </h1>


          {/* GRADIENT HEADING */}

          <div
            style={{
              fontSize:
                isMobile
                  ? "44px"
                  : "72px",

              lineHeight:
                "0.98",

              fontWeight: 750,

              letterSpacing:
                "-3px",

              background:
                "linear-gradient(90deg,#5B8CFF,#8BB8FF,#B08BFF)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent",

              backgroundClip:
                "text",

              display:
                "inline-block",

              marginBottom:
                "24px",
            }}
          >
            Protect Growth.
          </div>


          {/* DESCRIPTION */}

          <p
            style={{
              color:
                "#CBD5E1",

              fontSize:
                isMobile
                  ? "15px"
                  : "19px",

              lineHeight:
                "1.75",

              maxWidth:
                "570px",

              marginBottom:
                isMobile
                  ? "28px"
                  : "34px",
            }}
          >
            Helping companies identify, assess,
            control, and monitor risks so management
            can make better decisions and achieve
            business objectives with greater confidence.
          </p>


          {/* =================================================
              TRUST POINTS
          ================================================= */}

          <div
            style={{
              display: "flex",

              gap: "10px",

              flexWrap: "wrap",

              marginBottom:
                isMobile
                  ? "32px"
                  : "40px",
            }}
          >

            {[
              "Enterprise Risk Management",
              "Risk Assessment",
              "Risk Monitoring",
            ].map((item, index) => (

              <div
                key={index}

                style={{
                  display: "flex",

                  alignItems: "center",

                  gap: "7px",

                  padding:
                    "8px 12px",

                  borderRadius:
                    "12px",

                  background:
                    "rgba(255,255,255,0.045)",

                  border:
                    "1px solid rgba(255,255,255,0.09)",

                  backdropFilter:
                    "blur(10px)",

                  whiteSpace:
                    "nowrap",
                }}
              >

                <span
                  style={{
                    color:
                      "#6EA8FF",

                    fontSize:
                      "13px",

                    fontWeight:
                      700,
                  }}
                >
                  ✓
                </span>

                <span
                  style={{
                    color:
                      "#E2E8F0",

                    fontSize:
                      "11px",

                    fontWeight:
                      500,
                  }}
                >
                  {item}
                </span>

              </div>

            ))}

          </div>


          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div
            style={{
              display: "flex",

              gap: "14px",

              flexWrap: "wrap",

              marginBottom:
                isMobile
                  ? "30px"
                  : "38px",
            }}
          >


            {/* PRIMARY CTA */}

            <a
              href="https://wa.me/6285121305329"

              target="_blank"

              rel="noopener noreferrer"

              style={{
                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap: "10px",

                width:
                  isMobile
                    ? "100%"
                    : "250px",

                height:
                  isMobile
                    ? "58px"
                    : "62px",

                borderRadius:
                  "18px",

                background:
                  "linear-gradient(135deg,#2563EB 0%,#4F8DFF 100%)",

                border:
                  "1px solid rgba(255,255,255,0.15)",

                color:
                  "#FFFFFF",

                fontSize:
                  isMobile
                    ? "16px"
                    : "17px",

                fontWeight:
                  700,

                textDecoration:
                  "none",

                boxShadow:
                  "0 12px 35px rgba(37,99,235,.30)",

                transition:
                  "all .3s ease",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-3px)";

                e.currentTarget.style.boxShadow =
                  "0 18px 45px rgba(37,99,235,.42)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(37,99,235,.30)";

              }}
            >

              <MessageCircle
                size={20}
              />

              Discuss Your Risk

            </a>


            {/* SECONDARY CTA */}

            <Link
              href="/services/business_management_consultancy"

              style={{
                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap: "10px",

                width:
                  isMobile
                    ? "100%"
                    : "max-content",

                height:
                  isMobile
                    ? "58px"
                    : "62px",

                borderRadius:
                  "18px",

                background:
                  "rgba(255,255,255,0.04)",

                backdropFilter:
                  "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.12)",

                color:
                  "#FFFFFF",

                textDecoration:
                  "none",

                fontWeight:
                  600,

                fontSize:
                  "16px",

                transition:
                  "all .3s ease",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.background =
                  "rgba(255,255,255,0.08)";

                e.currentTarget.style.transform =
                  "translateY(-3px)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.background =
                  "rgba(255,255,255,0.04)";

                e.currentTarget.style.transform =
                  "translateY(0)";

              }}
            >

              Explore Other Business & Management Consultancy

              <span
                style={{
                  fontSize:
                    "18px",
                }}
              >
                →
              </span>

            </Link>

          </div>


          {/* =================================================
              TRUST / POSITIONING BOX
          ================================================= */}

          <div
            style={{
              display: "flex",

              alignItems:
                "center",

              gap: "14px",

              padding:
                "16px 18px",

              maxWidth:
                "540px",

              borderRadius:
                "18px",

              background:
                "rgba(15,23,42,0.55)",

              border:
                "1px solid rgba(96,165,250,0.12)",

              backdropFilter:
                "blur(15px)",
            }}
          >

            <div
              style={{
                width:
                  "42px",

                height:
                  "42px",

                minWidth:
                  "42px",

                borderRadius:
                  "50%",

                background:
                  "rgba(79,141,255,0.12)",

                border:
                  "1px solid rgba(96,165,250,0.18)",

                display:
                  "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                color:
                  "#6EA8FF",

                fontSize:
                  "18px",
              }}
            >
              ✓
            </div>


            <div>

              <div
                style={{
                  color:
                    "#FFFFFF",

                  fontSize:
                    isMobile
                      ? "13px"
                      : "14px",

                  fontWeight:
                    700,

                  marginBottom:
                    "4px",
                }}
              >
                Practical. Business-Oriented. Measurable.
              </div>


              <div
                style={{
                  color:
                    "#94A3B8",

                  fontSize:
                    isMobile
                      ? "11px"
                      : "12px",

                  lineHeight:
                    1.5,
                }}
              >
                From risk identification to treatment,
                monitoring, and continuous improvement.
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* =====================================================
          SECTION 2 — THE RISK CHALLENGE
      ===================================================== */}

      <section
        id="risk-challenge"
        style={{
          position: "relative",
          padding: isMobile
            ? "70px 20px 80px"
            : "110px 40px 120px",

          background:
            "linear-gradient(180deg,#020617 0%,#030712 100%)",

          overflow: "hidden",
        }}
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",
            left: "-180px",
            top: "120px",

            width: "420px",
            height: "420px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(239,68,68,0.10), transparent 70%)",

            filter: "blur(50px)",

            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-180px",
            bottom: "50px",

            width: "420px",
            height: "420px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(79,141,255,0.10), transparent 70%)",

            filter: "blur(50px)",

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          style={{
            position: "relative",
            zIndex: 2,

            maxWidth: "900px",

            margin:
              "0 auto",

            textAlign:
              "center",

            marginBottom:
              isMobile
                ? "45px"
                : "65px",
          }}
        >

          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems:
                "center",

              gap: "8px",

              padding:
                "8px 16px",

              borderRadius:
                "999px",

              background:
                "rgba(239,68,68,0.08)",

              border:
                "1px solid rgba(239,68,68,0.20)",

              color:
                "#F87171",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "20px",
            }}
          >

            ⚠ THE RISK CHALLENGE

          </div>


          {/* HEADING */}

          <h2
            style={{
              fontSize:
                isMobile
                  ? "38px"
                  : "58px",

              lineHeight:
                "0.98",

              fontWeight:
                750,

              letterSpacing:
                "-2.5px",

              margin:
                "0 0 20px",

              color:
                "#FFFFFF",
            }}
          >

            Risk Doesn't Always
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#F87171,#FB7185,#B08BFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",

                backgroundClip:
                  "text",
              }}
            >
              Look Like a Crisis.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p
            style={{
              maxWidth:
                "720px",

              margin:
                "0 auto",

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "15px"
                  : "18px",

              lineHeight:
                "1.75",
            }}
          >

            Some risks are visible.
            Others remain hidden until they
            affect your business, people,
            operations, or financial performance.

          </p>

        </div>


        {/* =================================================
            MAIN CHALLENGE PANEL
        ================================================= */}

        <div
          style={{
            position: "relative",
            zIndex: 2,

            maxWidth:
              "1280px",

            margin:
              "0 auto",

            display:
              "flex",

            flexDirection:
              isMobile
                ? "column"
                : "row",

            gap:
              isMobile
                ? "20px"
                : "30px",

            alignItems:
              "stretch",
          }}
        >


          {/* =================================================
              LEFT — MAIN RISK MESSAGE
          ================================================= */}

          <div
            style={{
              flex:
                isMobile
                  ? "none"
                  : "0.85",

              width:
                isMobile
                  ? "100%"
                  : "auto",

              minHeight:
                isMobile
                  ? "360px"
                  : "560px",

              position:
                "relative",

              overflow:
                "hidden",

              borderRadius:
                "24px",

              border:
                "1px solid rgba(239,68,68,0.20)",

              background:
                "linear-gradient(135deg,#020617 0%,#12040A 100%)",

              padding:
                isMobile
                  ? "30px"
                  : "42px",

              display:
                "flex",

              flexDirection:
                "column",

              justifyContent:
                "space-between",

              boxSizing:
                "border-box",
            }}
          >

            {/* RED GLOW */}

            <div
              style={{
                position:
                  "absolute",

                right:
                  "-120px",

                top:
                  "-100px",

                width:
                  "350px",

                height:
                  "350px",

                borderRadius:
                  "50%",

                background:
                  "radial-gradient(circle, rgba(239,68,68,0.18), transparent 70%)",

                filter:
                  "blur(35px)",

                pointerEvents:
                  "none",
              }}
            />


            {/* RISK ICON */}

            <div
              style={{
                position:
                  "relative",

                zIndex:
                  2,

                width:
                  isMobile
                    ? "58px"
                    : "68px",

                height:
                  isMobile
                    ? "58px"
                    : "68px",

                borderRadius:
                  "20px",

                background:
                  "rgba(239,68,68,0.10)",

                border:
                  "1px solid rgba(239,68,68,0.22)",

                display:
                  "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                fontSize:
                  isMobile
                    ? "25px"
                    : "30px",

                marginBottom:
                  "30px",
              }}
            >
              ⚠
            </div>


            {/* CONTENT */}

            <div
              style={{
                position:
                  "relative",

                zIndex:
                  2,
              }}
            >

              <div
                style={{
                  color:
                    "#F87171",

                  fontSize:
                    "12px",

                  fontWeight:
                    700,

                  letterSpacing:
                    "2px",

                  marginBottom:
                    "18px",
                }}
              >
                WHEN RISK IS NOT MANAGED
              </div>


              <h3
                style={{
                  fontSize:
                    isMobile
                      ? "32px"
                      : "46px",

                  lineHeight:
                    "1.02",

                  letterSpacing:
                    "-1.8px",

                  fontWeight:
                    750,

                  color:
                    "#FFFFFF",

                  margin:
                    "0 0 22px",
                }}
              >

                Small Gaps
                <br />

                Can Become
                <br />

                <span
                  style={{
                    color:
                      "#F87171",
                  }}
                >
                  Business Losses.
                </span>

              </h3>


              <p
                style={{
                  color:
                    "#94A3B8",

                  fontSize:
                    isMobile
                      ? "14px"
                      : "16px",

                  lineHeight:
                    "1.75",

                  margin:
                    0,

                  maxWidth:
                    "430px",
                }}
              >

                Unidentified and unmanaged risks
                can develop into operational losses,
                fraud, compliance issues, project
                disruption, and other business impacts.

              </p>

            </div>


            {/* BOTTOM STATEMENT */}

            <div
              style={{
                position:
                  "relative",

                zIndex:
                  2,

                marginTop:
                  "35px",

                padding:
                  "16px 18px",

                borderRadius:
                  "16px",

                background:
                  "rgba(239,68,68,0.06)",

                border:
                  "1px solid rgba(239,68,68,0.12)",
              }}
            >

              <div
                style={{
                  color:
                    "#FCA5A5",

                  fontSize:
                    isMobile
                      ? "12px"
                      : "13px",

                  lineHeight:
                    "1.6",

                  fontWeight:
                    600,
                }}
              >

                The question is not whether
                your business has risks.

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — RISK CATEGORIES
          ================================================= */}

          <div
            style={{
              flex:
                isMobile
                  ? "none"
                  : "1.45",

              width:
                isMobile
                  ? "100%"
                  : "auto",

              display:
                "grid",

              gridTemplateColumns:
                isMobile
                  ? "1fr"
                  : "repeat(2, 1fr)",

              gap:
                isMobile
                  ? "14px"
                  : "18px",
            }}
          >

            {[
              {
                number: "01",
                title: "Strategic Risk",
                description:
                  "Risks that may affect business objectives and strategic decisions.",
                icon: "◇",
              },
              {
                number: "02",
                title: "Financial Risk",
                description:
                  "Risks that may result in financial loss or cost exposure.",
                icon: "$",
              },
              {
                number: "03",
                title: "Operational Risk",
                description:
                  "Process weaknesses, human error, and operational disruption.",
                icon: "⚙",
              },
              {
                number: "04",
                title: "Compliance Risk",
                description:
                  "Risks arising from regulatory or policy non-compliance.",
                icon: "✓",
              },
              {
                number: "05",
                title: "Fraud Risk",
                description:
                  "Exposure to fraud, misuse, or weaknesses in internal controls.",
                icon: "!",
              },
              {
                number: "06",
                title: "IT Risk",
                description:
                  "Risks related to systems, technology, information, and data.",
                icon: "⌘",
              },
              {
                number: "07",
                title: "People Risk",
                description:
                  "Risks related to people, capability, dependency, and key personnel.",
                icon: "●",
              },
              {
                number: "08",
                title: "Reputational Risk",
                description:
                  "Risks that may negatively affect stakeholder trust and company reputation.",
                icon: "◆",
              },
            ].map((risk, index) => (

              <div
                key={risk.number}

                style={{
                  position:
                    "relative",

                  minHeight:
                    isMobile
                      ? "170px"
                      : "250px",

                  padding:
                    isMobile
                      ? "22px"
                      : "28px",

                  borderRadius:
                    "20px",

                  background:
                    "linear-gradient(135deg,rgba(15,23,42,0.90),rgba(7,15,30,0.96))",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  backdropFilter:
                    "blur(14px)",

                  boxSizing:
                    "border-box",

                  transition:
                    "all .3s ease",

                  overflow:
                    "hidden",
                }}

                onMouseEnter={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(-4px)";

                  e.currentTarget.style.borderColor =
                    "rgba(248,113,113,0.30)";

                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0,0,0,0.25)";

                }}

                onMouseLeave={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.08)";

                  e.currentTarget.style.boxShadow =
                    "none";

                }}
              >

                {/* CARD GLOW */}

                <div
                  style={{
                    position:
                      "absolute",

                    right:
                      "-40px",

                    top:
                      "-40px",

                    width:
                      "120px",

                    height:
                      "120px",

                    borderRadius:
                      "50%",

                    background:
                      "radial-gradient(circle, rgba(239,68,68,0.10), transparent 70%)",

                    pointerEvents:
                      "none",
                  }}
                />


                {/* NUMBER */}

                <div
                  style={{
                    position:
                      "relative",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "space-between",

                    marginBottom:
                      "20px",
                  }}
                >

                  <div
                    style={{
                      width:
                        "40px",

                      height:
                        "40px",

                      borderRadius:
                        "12px",

                      background:
                        "rgba(239,68,68,0.08)",

                      border:
                        "1px solid rgba(239,68,68,0.16)",

                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      color:
                        "#F87171",

                      fontWeight:
                        700,

                      fontSize:
                        "15px",
                    }}
                  >
                    {risk.icon}
                  </div>


                  <span
                    style={{
                      color:
                        "#475569",

                      fontSize:
                        "11px",

                      fontWeight:
                        700,

                      letterSpacing:
                        "1px",
                    }}
                  >
                    {risk.number}
                  </span>

                </div>


                {/* TITLE */}

                <h4
                  style={{
                    position:
                      "relative",

                    margin:
                      "0 0 10px",

                    color:
                      "#F8FAFC",

                    fontSize:
                      isMobile
                        ? "17px"
                        : "19px",

                    fontWeight:
                      700,
                  }}
                >
                  {risk.title}
                </h4>


                {/* DESCRIPTION */}

                <p
                  style={{
                    position:
                      "relative",

                    margin:
                      0,

                    color:
                      "#94A3B8",

                    fontSize:
                      isMobile
                        ? "12px"
                        : "13px",

                    lineHeight:
                      "1.65",
                  }}
                >
                  {risk.description}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "850px",

            margin:
              isMobile
                ? "45px auto 0"
                : "60px auto 0",

            textAlign:
              "center",

            padding:
              isMobile
                ? "22px 20px"
                : "28px 36px",

            borderRadius:
              "18px",

            background:
              "rgba(79,141,255,0.05)",

            border:
              "1px solid rgba(79,141,255,0.12)",

            backdropFilter:
              "blur(12px)",
          }}
        >

          <p
            style={{
              margin:
                0,

              color:
                "#CBD5E1",

              fontSize:
                isMobile
                  ? "14px"
                  : "17px",

              lineHeight:
                "1.7",
            }}
          >

            The question is not whether your business
            has risks.{" "}

            <span
              style={{
                color:
                  "#6EA8FF",

                fontWeight:
                  700,
              }}
            >
              The question is whether you can see,
              assess, and manage them before they
              become losses.
            </span>

          </p>

        </div>

      </section>
            {/* =====================================================
          SECTION 3 — WHAT WE DO
      ===================================================== */}

      <section
        id="risk-services"
        style={{
          position: "relative",

          padding: isMobile
            ? "75px 20px 90px"
            : "120px 40px 130px",

          background:
            "linear-gradient(180deg,#020617 0%,#03143B 50%,#020617 100%)",

          overflow: "hidden",
        }}
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",

            top: "80px",
            left: "-180px",

            width: "420px",
            height: "420px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(79,141,255,0.12),transparent 70%)",

            filter: "blur(50px)",

            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",

            right: "-180px",
            bottom: "80px",

            width: "450px",
            height: "450px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(139,92,246,0.10),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          style={{
            position: "relative",

            zIndex: 2,

            maxWidth: "900px",

            margin: "0 auto",

            textAlign: "center",

            marginBottom:
              isMobile
                ? "45px"
                : "65px",
          }}
        >

          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding:
                "9px 17px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.10)",

              border:
                "1px solid rgba(79,141,255,0.20)",

              color:
                "#6EA8FF",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "20px",
            }}
          >

            🛡️ WHAT WE DO

          </div>


          {/* HEADING */}

          <h2
            style={{
              margin: "0 0 20px",

              fontSize:
                isMobile
                  ? "38px"
                  : "58px",

              lineHeight:
                "1.02",

              fontWeight:
                750,

              letterSpacing:
                "-2.5px",

              color:
                "#FFFFFF",
            }}
          >

            From Risk Identification
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#5B8CFF,#8BB8FF,#B08BFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",

                backgroundClip:
                  "text",
              }}
            >
              to Risk Control.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p
            style={{
              maxWidth:
                "760px",

              margin:
                "0 auto",

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "15px"
                  : "18px",

              lineHeight:
                "1.75",
            }}
          >

            VD Fokus helps organizations build practical,
            measurable Risk Management programs that support
            better management decision-making.

          </p>

        </div>


        {/* =================================================
            SERVICE GRID
        ================================================= */}

        <div
          style={{
            position: "relative",

            zIndex: 2,

            maxWidth:
              "1280px",

            margin:
              "0 auto",

            display:
              "grid",

            gridTemplateColumns:
              isMobile
                ? "1fr"
                : "repeat(2, 1fr)",

            gap:
              isMobile
                ? "16px"
                : "22px",
          }}
        >

          {[
            {
              number: "01",
              title: "Enterprise Risk Management",
              short: "ERM",
              description:
                "Build a Risk Management framework aligned with the organization’s objectives and business processes.",
              points: [
                "Risk Governance",
                "Risk Framework",
                "Risk Process",
              ],
            },

            {
              number: "02",
              title: "Risk Assessment",
              short: "ASSESS",
              description:
                "Identify and assess risks based on likelihood and impact to determine their risk levels.",
              points: [
                "Likelihood",
                "Impact",
                "Risk Rating",
              ],
            },

            {
              number: "03",
              title: "Risk Register Development",
              short: "REGISTER",
              description:
                "Develop a structured Risk Register documenting risks, causes, impacts, and responses.",
              points: [
                "Risk Identification",
                "Risk Owner",
                "Risk Treatment",
              ],
            },

            {
              number: "04",
              title: "Risk Appetite & Risk Tolerance",
              short: "APPETITE",
              description:
                "Help organizations define acceptable risk boundaries while pursuing their business objectives.",
              points: [
                "Risk Appetite",
                "Risk Tolerance",
                "Management Alignment",
              ],
            },

            {
              number: "05",
              title: "Risk Monitoring",
              short: "MONITOR",
              description:
                "Establish monitoring mechanisms to track risk changes and developments regularly.",
              points: [
                "Risk Review",
                "Risk Reporting",
                "Monitoring Mechanism",
              ],
            },

            {
              number: "06",
              title: "Key Risk Indicator",
              short: "KRI",
              description:
                "Develop indicators that help management detect rising risk exposure early.",
              points: [
                "Risk Indicators",
                "Threshold",
                "Early Warning",
              ],
            },

            {
              number: "07",
              title: "Risk Workshop",
              short: "WORKSHOP",
              description:
                "Conduct workshops with management, key stakeholders, and process owners to understand and identify risks.",
              points: [
                "Risk Identification",
                "Risk Discussion",
                "Risk Prioritization",
              ],
            },

            {
              number: "08",
              title: "Risk Awareness Training",
              short: "AWARENESS",
              description:
                "Improve employees’ understanding of and awareness of risk in their day-to-day activities.",
              points: [
                "Risk Awareness",
                "Risk Culture",
                "Practical Understanding",
              ],
            },

            {
              number: "09",
              title: "ISO 31000 Implementation",
              short: "ISO 31000",
              description:
                "Support the adoption of Risk Management principles and frameworks in line with ISO 31000.",
              points: [
                "Framework",
                "Risk Process",
                "Implementation",
              ],
            },

            {
              number: "10",
              title: "Risk Maturity Assessment",
              short: "MATURITY",
              description:
                "Assess the organization’s Risk Management maturity and identify areas for improvement.",
              points: [
                "Maturity Assessment",
                "Gap Analysis",
                "Improvement Roadmap",
              ],
            },

          ].map((service, index) => (

            <div
              key={service.number}

              style={{
                position:
                  "relative",

                minHeight:
                  isMobile
                    ? "285px"
                    : "315px",

                padding:
                  isMobile
                    ? "26px"
                    : "32px",

                borderRadius:
                  isMobile
                    ? "20px"
                    : "24px",

                background:
                  "linear-gradient(145deg,rgba(15,23,42,0.96),rgba(3,20,59,0.90))",

                border:
                  "1px solid rgba(79,141,255,0.13)",

                backdropFilter:
                  "blur(20px)",

                boxShadow:
                  "0 15px 45px rgba(0,0,0,0.16)",

                overflow:
                  "hidden",

                transition:
                  "all .3s ease",

                boxSizing:
                  "border-box",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-5px)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.38)";

                e.currentTarget.style.boxShadow =
                  "0 20px 55px rgba(37,99,235,0.15)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.13)";

                e.currentTarget.style.boxShadow =
                  "0 15px 45px rgba(0,0,0,0.16)";

              }}
            >

              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "-80px",

                  top:
                    "-80px",

                  width:
                    "220px",

                  height:
                    "220px",

                  borderRadius:
                    "50%",

                  background:
                    "radial-gradient(circle,rgba(79,141,255,0.12),transparent 70%)",

                  filter:
                    "blur(15px)",

                  pointerEvents:
                    "none",
                }}
              />


              {/* =================================================
                  TOP ROW
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "space-between",

                  marginBottom:
                    "25px",
                }}
              >

                {/* ICON */}

                <div
                  style={{
                    width:
                      isMobile
                        ? "50px"
                        : "56px",

                    height:
                      isMobile
                        ? "50px"
                        : "56px",

                    borderRadius:
                      "16px",

                    background:
                      "linear-gradient(135deg,rgba(37,99,235,0.20),rgba(79,141,255,0.08))",

                    border:
                      "1px solid rgba(79,141,255,0.20)",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color:
                      "#6EA8FF",

                    fontSize:
                      isMobile
                        ? "18px"
                        : "20px",

                    fontWeight:
                      800,
                  }}
                >

                  {service.number}

                </div>


                {/* LABEL */}

                <div
                  style={{
                    padding:
                      "6px 10px",

                    borderRadius:
                      "8px",

                    background:
                      "rgba(79,141,255,0.06)",

                    border:
                      "1px solid rgba(79,141,255,0.10)",

                    color:
                      "#64748B",

                    fontSize:
                      "9px",

                    fontWeight:
                      700,

                    letterSpacing:
                      "1px",
                  }}
                >

                  {service.short}

                </div>

              </div>


              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  margin:
                    "0 0 12px",

                  color:
                    "#FFFFFF",

                  fontSize:
                    isMobile
                      ? "20px"
                      : "23px",

                  lineHeight:
                    "1.2",

                  fontWeight:
                    700,

                  letterSpacing:
                    "-0.5px",
                }}
              >

                {service.title}

              </h3>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  margin:
                    "0 0 22px",

                  color:
                    "#94A3B8",

                  fontSize:
                    isMobile
                      ? "13px"
                      : "14px",

                  lineHeight:
                    "1.7",
                }}
              >

                {service.description}

              </p>


              {/* =================================================
                  SERVICE POINTS
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  display:
                    "flex",

                  flexWrap:
                    "wrap",

                  gap:
                    "8px",
                }}
              >

                {service.points.map(
                  (point, pointIndex) => (

                    <div
                      key={pointIndex}

                      style={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap:
                          "6px",

                        padding:
                          "7px 10px",

                        borderRadius:
                          "10px",

                        background:
                          "rgba(255,255,255,0.035)",

                        border:
                          "1px solid rgba(255,255,255,0.07)",

                        color:
                          "#CBD5E1",

                        fontSize:
                          "10px",

                        fontWeight:
                          500,
                      }}
                    >

                      <span
                        style={{
                          color:
                            "#5B8CFF",

                          fontWeight:
                            800,
                        }}
                      >
                        ✓
                      </span>

                      {point}

                    </div>

                  )
                )}

              </div>


              {/* =================================================
                  CARD NUMBER WATERMARK
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "20px",

                  bottom:
                    "-15px",

                  fontSize:
                    isMobile
                      ? "80px"
                      : "100px",

                  lineHeight:
                    1,

                  fontWeight:
                    800,

                  color:
                    "rgba(79,141,255,0.035)",

                  pointerEvents:
                    "none",

                  userSelect:
                    "none",
                }}
              >

                {service.number}

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            BOTTOM TRANSITION
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "850px",

            margin:
              isMobile
                ? "45px auto 0"
                : "60px auto 0",

            textAlign:
              "center",
          }}
        >

          <p
            style={{
              margin:
                0,

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "13px"
                  : "16px",

              lineHeight:
                "1.7",
            }}
          >

            Our approach is designed to move beyond
            documentation — from identifying risks
            to building practical controls and
            monitoring mechanisms.

          </p>


          <div
            style={{
              marginTop:
                "22px",

              display:
                "inline-flex",

              alignItems:
                "center",

              gap:
                "10px",

              padding:
                "10px 18px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.06)",

              border:
                "1px solid rgba(79,141,255,0.12)",

              color:
                "#6EA8FF",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                600,
            }}
          >

            Risk Identification

            <span>→</span>

            Risk Assessment

            <span>→</span>

            Risk Treatment

            <span>→</span>

            Monitoring

          </div>

        </div>

      </section>
            {/* =====================================================
          SECTION 4 — OUR APPROACH
      ===================================================== */}

      <section
        id="risk-methodology"
        style={{
          position: "relative",
          padding: isMobile
            ? "75px 20px 90px"
            : "120px 40px 130px",

          background:
            "linear-gradient(180deg,#020617 0%,#07152E 48%,#020617 100%)",

          overflow: "hidden",
        }}
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",
            left: "-180px",
            top: "180px",

            width: "420px",
            height: "420px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(79,141,255,0.11),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-180px",
            bottom: "120px",

            width: "450px",
            height: "450px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(139,92,246,0.09),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          style={{
            position: "relative",
            zIndex: 2,

            maxWidth: "900px",

            margin: "0 auto",

            textAlign: "center",

            marginBottom:
              isMobile
                ? "50px"
                : "70px",
          }}
        >

          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding:
                "9px 17px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.10)",

              border:
                "1px solid rgba(79,141,255,0.20)",

              color:
                "#6EA8FF",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "20px",
            }}
          >

            ◈ OUR APPROACH

          </div>


          {/* HEADING */}

          <h2
            style={{
              margin:
                "0 0 20px",

              fontSize:
                isMobile
                  ? "38px"
                  : "58px",

              lineHeight:
                "1.02",

              fontWeight:
                750,

              letterSpacing:
                "-2.5px",

              color:
                "#FFFFFF",
            }}
          >

            A Structured Approach
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#5B8CFF,#8BB8FF,#B08BFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",

                backgroundClip:
                  "text",
              }}
            >
              to Managing Risk.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p
            style={{
              maxWidth:
                "760px",

              margin:
                "0 auto",

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "15px"
                  : "18px",

              lineHeight:
                "1.75",
            }}
          >

            We use a structured approach to understand the business,
            identify risks, set priorities, develop treatment plans,
            and ensure risks are monitored continuously.

          </p>

        </div>


        {/* =================================================
            METHODOLOGY FLOW
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1200px",

            margin:
              "0 auto",
          }}
        >


          {/* =================================================
              DESKTOP CONNECTOR
          ================================================= */}

          {!isMobile && (

            <div
              style={{
                position:
                  "absolute",

                top:
                  "76px",

                left:
                  "8%",

                right:
                  "8%",

                height:
                  "1px",

                background:
                  "linear-gradient(90deg,transparent,rgba(79,141,255,0.35),rgba(139,92,246,0.35),transparent)",

                zIndex:
                  0,
              }}
            />

          )}


          {/* =================================================
              METHODOLOGY CARDS
          ================================================= */}

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                isMobile
                  ? "1fr"
                  : "repeat(4,1fr)",

              gap:
                isMobile
                  ? "16px"
                  : "18px",
            }}
          >

            {[
              {
                number: "01",
                title: "Business Understanding",
                description:
                  "Understand business objectives, processes, the organization, and its context before conducting a risk assessment.",
                output:
                  "Business Context",
              },

              {
                number: "02",
                title: "Risk Identification",
                description:
                  "Identify risks with key stakeholders and process owners based on business activities and objectives.",
                output:
                  "Risk Universe",
              },

              {
                number: "03",
                title: "Risk Assessment",
                description:
                  "Analyze likelihood and impact to determine risk scores, ratings, and exposure levels.",
                output:
                  "Risk Score & Matrix",
              },

              {
                number: "04",
                title: "Risk Evaluation",
                description:
                  "Compare assessment results with risk criteria to prioritize risks.",
                output:
                  "Risk Priority",
              },

              {
                number: "05",
                title: "Risk Treatment",
                description:
                  "Select a risk response—avoid, reduce, transfer, or accept—and develop a mitigation plan.",
                output:
                  "Treatment Plan",
              },

              {
                number: "06",
                title: "Monitoring",
                description:
                  "Monitor risk developments through KRIs, risk reviews, dashboards, and reporting mechanisms.",
                output:
                  "Risk Monitoring",
              },

              {
                number: "07",
                title: "Continuous Improvement",
                description:
                  "Review and improve Risk Management to keep it relevant as the business changes.",
                output:
                  "Improvement Roadmap",
              },

            ].map((step, index) => (

              <div
                key={step.number}

                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  gridColumn:
                    !isMobile &&
                    index === 4
                      ? "2"
                      : undefined,

                  minHeight:
                    isMobile
                      ? "250px"
                      : "275px",

                  padding:
                    isMobile
                      ? "24px"
                      : "27px",

                  borderRadius:
                    isMobile
                      ? "20px"
                      : "24px",

                  background:
                    "linear-gradient(145deg,rgba(15,23,42,0.96),rgba(3,20,59,0.90))",

                  border:
                    "1px solid rgba(79,141,255,0.13)",

                  backdropFilter:
                    "blur(20px)",

                  boxShadow:
                    "0 15px 45px rgba(0,0,0,0.16)",

                  overflow:
                    "hidden",

                  boxSizing:
                    "border-box",

                  transition:
                    "all .3s ease",
                }}

                onMouseEnter={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(-5px)";

                  e.currentTarget.style.borderColor =
                    "rgba(79,141,255,0.38)";

                  e.currentTarget.style.boxShadow =
                    "0 20px 55px rgba(37,99,235,0.14)";

                }}

                onMouseLeave={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.borderColor =
                    "rgba(79,141,255,0.13)";

                  e.currentTarget.style.boxShadow =
                    "0 15px 45px rgba(0,0,0,0.16)";

                }}
              >

                {/* =================================================
                    CARD GLOW
                ================================================= */}

                <div
                  style={{
                    position:
                      "absolute",

                    right:
                      "-70px",

                    top:
                      "-70px",

                    width:
                      "190px",

                    height:
                      "190px",

                    borderRadius:
                      "50%",

                    background:
                      "radial-gradient(circle,rgba(79,141,255,0.12),transparent 70%)",

                    filter:
                      "blur(10px)",

                    pointerEvents:
                      "none",
                  }}
                />


                {/* =================================================
                    STEP NUMBER
                ================================================= */}

                <div
                  style={{
                    position:
                      "relative",

                    zIndex:
                      2,

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "space-between",

                    marginBottom:
                      "22px",
                  }}
                >

                  <div
                    style={{
                      width:
                        isMobile
                          ? "48px"
                          : "54px",

                      height:
                        isMobile
                          ? "48px"
                          : "54px",

                      borderRadius:
                        "16px",

                      background:
                        "linear-gradient(135deg,#2563EB,#4F8DFF)",

                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      color:
                        "#FFFFFF",

                      fontSize:
                        isMobile
                          ? "15px"
                          : "17px",

                      fontWeight:
                        800,

                      boxShadow:
                        "0 10px 25px rgba(37,99,235,0.22)",
                    }}
                  >

                    {step.number}

                  </div>


                  <span
                    style={{
                      color:
                        "#334155",

                      fontSize:
                        "10px",

                      fontWeight:
                        700,

                      letterSpacing:
                        "1.5px",
                    }}
                  >
                    STEP
                  </span>

                </div>


                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  style={{
                    position:
                      "relative",

                    zIndex:
                      2,

                    margin:
                      "0 0 12px",

                    color:
                      "#FFFFFF",

                    fontSize:
                      isMobile
                        ? "19px"
                        : "21px",

                    lineHeight:
                      "1.2",

                    fontWeight:
                      700,

                    letterSpacing:
                      "-0.4px",
                  }}
                >

                  {step.title}

                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  style={{
                    position:
                      "relative",

                    zIndex:
                      2,

                    margin:
                      "0 0 20px",

                    color:
                      "#94A3B8",

                    fontSize:
                      isMobile
                        ? "13px"
                        : "13px",

                    lineHeight:
                      "1.65",
                  }}
                >

                  {step.description}

                </p>


                {/* =================================================
                    OUTPUT
                ================================================= */}

                <div
                  style={{
                    position:
                      "relative",

                    zIndex:
                      2,

                    display:
                      "inline-flex",

                    alignItems:
                      "center",

                    gap:
                      "7px",

                    padding:
                      "7px 10px",

                    borderRadius:
                      "9px",

                    background:
                      "rgba(79,141,255,0.06)",

                    border:
                      "1px solid rgba(79,141,255,0.12)",

                    color:
                      "#6EA8FF",

                    fontSize:
                      "10px",

                    fontWeight:
                      600,
                  }}
                >

                  <span
                    style={{
                      fontSize:
                        "9px",
                    }}
                  >
                    ✓
                  </span>

                  {step.output}

                </div>


                {/* WATERMARK */}

                <div
                  style={{
                    position:
                      "absolute",

                    right:
                      "15px",

                    bottom:
                      "-12px",

                    fontSize:
                      isMobile
                        ? "80px"
                        : "90px",

                    lineHeight:
                      1,

                    fontWeight:
                      800,

                    color:
                      "rgba(79,141,255,0.035)",

                    pointerEvents:
                      "none",

                    userSelect:
                      "none",
                  }}
                >

                  {step.number}

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            PROCESS FLOW SUMMARY
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1050px",

            margin:
              isMobile
                ? "50px auto 0"
                : "70px auto 0",

            padding:
              isMobile
                ? "24px 18px"
                : "28px 30px",

            borderRadius:
              isMobile
                ? "18px"
                : "22px",

            background:
              "linear-gradient(135deg,rgba(79,141,255,0.07),rgba(139,92,246,0.05))",

            border:
              "1px solid rgba(79,141,255,0.14)",

            backdropFilter:
              "blur(15px)",
          }}
        >

          <div
            style={{
              textAlign:
                "center",

              color:
                "#64748B",

              fontSize:
                "10px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "18px",
            }}
          >

            OUR RISK MANAGEMENT CYCLE

          </div>


          <div
            style={{
              display:
                "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              flexWrap:
                "wrap",

              gap:
                isMobile
                  ? "8px"
                  : "12px",
            }}
          >

            {[
              "Understand",
              "Identify",
              "Assess",
              "Evaluate",
              "Treat",
              "Monitor",
              "Improve",
            ].map((item, index) => (

              <React.Fragment key={item}>

                <div
                  style={{
                    padding:
                      isMobile
                        ? "8px 10px"
                        : "9px 13px",

                    borderRadius:
                      "10px",

                    background:
                      "rgba(255,255,255,0.035)",

                    border:
                      "1px solid rgba(255,255,255,0.07)",

                    color:
                      "#CBD5E1",

                    fontSize:
                      isMobile
                        ? "10px"
                        : "11px",

                    fontWeight:
                      600,
                  }}
                >

                  {item}

                </div>


                {index < 6 && (

                  <span
                    style={{
                      color:
                        "#4F8DFF",

                      fontSize:
                        "13px",

                      fontWeight:
                        700,
                    }}
                  >
                    →
                  </span>

                )}

              </React.Fragment>

            ))}

          </div>

        </div>


        {/* =================================================
            CLOSING MESSAGE
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "760px",

            margin:
              isMobile
                ? "42px auto 0"
                : "55px auto 0",

            textAlign:
              "center",
          }}
        >

          <p
            style={{
              margin:
                0,

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "13px"
                  : "16px",

              lineHeight:
                "1.75",
            }}
          >

            Risk Management is not a one-time exercise.
            It is a continuous process that evolves
            together with the business.

          </p>

        </div>

      </section>
            {/* =====================================================
          SECTION 5 — DELIVERABLES
      ===================================================== */}

      <section
        id="risk-deliverables"
        style={{
          position: "relative",

          padding: isMobile
            ? "75px 20px 90px"
            : "120px 40px 130px",

          background:
            "linear-gradient(180deg,#020617 0%,#03143B 50%,#020617 100%)",

          overflow: "hidden",
        }}
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",

            top: "80px",
            right: "-180px",

            width: "430px",
            height: "430px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(79,141,255,0.12),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",

            bottom: "80px",
            left: "-180px",

            width: "420px",
            height: "420px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(139,92,246,0.09),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          style={{
            position: "relative",

            zIndex: 2,

            maxWidth: "900px",

            margin: "0 auto",

            textAlign: "center",

            marginBottom:
              isMobile
                ? "48px"
                : "68px",
          }}
        >

          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding:
                "9px 17px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.10)",

              border:
                "1px solid rgba(79,141,255,0.20)",

              color:
                "#6EA8FF",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "20px",
            }}
          >

            ◈ DELIVERABLES

          </div>


          {/* HEADING */}

          <h2
            style={{
              margin:
                "0 0 20px",

              fontSize:
                isMobile
                  ? "38px"
                  : "58px",

              lineHeight:
                "1.02",

              fontWeight:
                750,

              letterSpacing:
                "-2.5px",

              color:
                "#FFFFFF",
            }}
          >

            Turning Risk Analysis
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#5B8CFF,#8BB8FF,#B08BFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",

                backgroundClip:
                  "text",
              }}
            >
              Into Actionable Outputs.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p
            style={{
              maxWidth:
                "760px",

              margin:
                "0 auto",

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "15px"
                  : "18px",

              lineHeight:
                "1.75",
            }}
          >

            Each engagement produces practical outputs that help
            management understand risk exposure, set priorities,
            and take appropriate action.

          </p>

        </div>


        {/* =================================================
            MAIN DELIVERABLE GRID
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1200px",

            margin:
              "0 auto",

            display:
              "grid",

            gridTemplateColumns:
              isMobile
                ? "1fr"
                : "repeat(4, 1fr)",

            gap:
              isMobile
                ? "16px"
                : "18px",
          }}
        >

          {[
            {
              number: "01",
              title: "Risk Register",
              description:
                "A structured document recording risks, causes, impacts, risk owners, and treatments.",
              category:
                "IDENTIFICATION",
              icon:
                "▤",
            },

            {
              number: "02",
              title: "Risk Matrix",
              description:
                "A likelihood and impact matrix for determining risk scores and ratings.",
              category:
                "ASSESSMENT",
              icon:
                "▦",
            },

            {
              number: "03",
              title: "Risk Profile",
              description:
                "An overview of the organization’s risk exposure based on assessment results and risk priorities.",
              category:
                "RISK PROFILE",
              icon:
                "◈",
            },

            {
              number: "04",
              title: "Risk Heat Map",
              description:
                "A visual representation of risk levels that helps management see concentrations and priorities.",
              category:
                "VISUALIZATION",
              icon:
                "▥",
            },

            {
              number: "05",
              title: "Risk Dashboard",
              description:
                "A dashboard that presents concise risk information and supports ongoing monitoring.",
              category:
                "MONITORING",
              icon:
                "▰",
            },

            {
              number: "06",
              title: "Mitigation Plan",
              description:
                "An action plan to reduce, control, transfer, or accept risks.",
              category:
                "TREATMENT",
              icon:
                "✓",
            },

            {
              number: "07",
              title: "Risk Report",
              description:
                "A report summarizing risk conditions, developments, exposure, and recommendations.",
              category:
                "REPORTING",
              icon:
                "▤",
            },

            {
              number: "08",
              title: "Risk Policy",
              description:
                "Guidelines and policies that provide a foundation for Risk Management across the organization.",
              category:
                "GOVERNANCE",
              icon:
                "◇",
            },

          ].map((item) => (

            <div
              key={item.number}

              style={{
                position:
                  "relative",

                minHeight:
                  isMobile
                    ? "255px"
                    : "290px",

                padding:
                  isMobile
                    ? "24px"
                    : "28px",

                borderRadius:
                  isMobile
                    ? "20px"
                    : "24px",

                background:
                  "linear-gradient(145deg,rgba(15,23,42,0.96),rgba(3,20,59,0.90))",

                border:
                  "1px solid rgba(79,141,255,0.13)",

                backdropFilter:
                  "blur(20px)",

                boxShadow:
                  "0 15px 45px rgba(0,0,0,0.16)",

                overflow:
                  "hidden",

                boxSizing:
                  "border-box",

                transition:
                  "all .3s ease",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-5px)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.38)";

                e.currentTarget.style.boxShadow =
                  "0 20px 55px rgba(37,99,235,0.15)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.13)";

                e.currentTarget.style.boxShadow =
                  "0 15px 45px rgba(0,0,0,0.16)";

              }}
            >

              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "-70px",

                  top:
                    "-70px",

                  width:
                    "190px",

                  height:
                    "190px",

                  borderRadius:
                    "50%",

                  background:
                    "radial-gradient(circle,rgba(79,141,255,0.12),transparent 70%)",

                  filter:
                    "blur(10px)",

                  pointerEvents:
                    "none",
                }}
              />


              {/* =================================================
                  TOP ROW
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "space-between",

                  marginBottom:
                    "24px",
                }}
              >

                {/* ICON */}

                <div
                  style={{
                    width:
                      isMobile
                        ? "50px"
                        : "54px",

                    height:
                      isMobile
                        ? "50px"
                        : "54px",

                    borderRadius:
                      "16px",

                    background:
                      "linear-gradient(135deg,rgba(37,99,235,0.20),rgba(79,141,255,0.08))",

                    border:
                      "1px solid rgba(79,141,255,0.20)",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color:
                      "#6EA8FF",

                    fontSize:
                      isMobile
                        ? "19px"
                        : "21px",

                    fontWeight:
                      800,
                  }}
                >

                  {item.icon}

                </div>


                {/* NUMBER */}

                <span
                  style={{
                    color:
                      "#334155",

                    fontSize:
                      "11px",

                    fontWeight:
                      700,

                    letterSpacing:
                      "1.5px",
                  }}
                >
                  {item.number}
                </span>

              </div>


              {/* =================================================
                  CATEGORY
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  color:
                    "#6EA8FF",

                  fontSize:
                    "9px",

                  fontWeight:
                    700,

                  letterSpacing:
                    "1.5px",

                  marginBottom:
                    "9px",
                }}
              >

                {item.category}

              </div>


              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  margin:
                    "0 0 12px",

                  color:
                    "#FFFFFF",

                  fontSize:
                    isMobile
                      ? "19px"
                      : "21px",

                  lineHeight:
                    "1.2",

                  fontWeight:
                    700,

                  letterSpacing:
                    "-0.4px",
                }}
              >

                {item.title}

              </h3>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  margin:
                    0,

                  color:
                    "#94A3B8",

                  fontSize:
                    isMobile
                      ? "12px"
                      : "13px",

                  lineHeight:
                    "1.7",
                }}
              >

                {item.description}

              </p>


              {/* =================================================
                  WATERMARK
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "12px",

                  bottom:
                    "-18px",

                  fontSize:
                    isMobile
                      ? "82px"
                      : "100px",

                  lineHeight:
                    1,

                  fontWeight:
                    800,

                  color:
                    "rgba(79,141,255,0.035)",

                  pointerEvents:
                    "none",

                  userSelect:
                    "none",
                }}
              >

                {item.number}

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            OUTPUT FLOW
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1050px",

            margin:
              isMobile
                ? "50px auto 0"
                : "65px auto 0",

            padding:
              isMobile
                ? "24px 18px"
                : "28px 32px",

            borderRadius:
              isMobile
                ? "18px"
                : "22px",

            background:
              "linear-gradient(135deg,rgba(79,141,255,0.07),rgba(139,92,246,0.05))",

            border:
              "1px solid rgba(79,141,255,0.14)",

            backdropFilter:
              "blur(15px)",
          }}
        >

          <div
            style={{
              textAlign:
                "center",

              color:
                "#64748B",

              fontSize:
                "10px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "18px",
            }}
          >

            FROM RISK ASSESSMENT TO MANAGEMENT ACTION

          </div>


          <div
            style={{
              display:
                "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              flexWrap:
                "wrap",

              gap:
                isMobile
                  ? "8px"
                  : "12px",
            }}
          >

            {[
              "Risk Register",
              "Risk Matrix",
              "Risk Profile",
              "Mitigation Plan",
              "Risk Dashboard",
              "Risk Report",
            ].map((item, index) => (

              <React.Fragment key={item}>

                <div
                  style={{
                    padding:
                      isMobile
                        ? "8px 10px"
                        : "9px 13px",

                    borderRadius:
                      "10px",

                    background:
                      "rgba(255,255,255,0.035)",

                    border:
                      "1px solid rgba(255,255,255,0.07)",

                    color:
                      "#CBD5E1",

                    fontSize:
                      isMobile
                        ? "10px"
                        : "11px",

                    fontWeight:
                      600,
                  }}
                >

                  {item}

                </div>


                {index < 5 && (

                  <span
                    style={{
                      color:
                        "#4F8DFF",

                      fontSize:
                        "13px",

                      fontWeight:
                        700,
                    }}
                  >
                    →
                  </span>

                )}

              </React.Fragment>

            ))}

          </div>

        </div>


        {/* =================================================
            CLOSING MESSAGE
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "760px",

            margin:
              isMobile
                ? "42px auto 0"
                : "55px auto 0",

            textAlign:
              "center",
          }}
        >

          <p
            style={{
              margin:
                0,

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "13px"
                  : "16px",

              lineHeight:
                "1.75",
            }}
          >

            The goal is not to create more documents.
            The goal is to create outputs that help
            management make better risk decisions.

          </p>

        </div>

      </section>
            {/* =====================================================
          SECTION 6 — BUSINESS BENEFITS
      ===================================================== */}

      <section
        id="risk-benefits"
        style={{
          position: "relative",

          padding: isMobile
            ? "75px 20px 90px"
            : "120px 40px 130px",

          background:
            "linear-gradient(180deg,#020617 0%,#07152E 50%,#020617 100%)",

          overflow: "hidden",
        }}
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",

            left: "-180px",
            top: "100px",

            width: "430px",
            height: "430px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(79,141,255,0.12),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",

            right: "-180px",
            bottom: "60px",

            width: "430px",
            height: "430px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(139,92,246,0.10),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          style={{
            position: "relative",

            zIndex: 2,

            maxWidth: "900px",

            margin: "0 auto",

            textAlign: "center",

            marginBottom:
              isMobile
                ? "48px"
                : "65px",
          }}
        >

          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding:
                "9px 17px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.10)",

              border:
                "1px solid rgba(79,141,255,0.20)",

              color:
                "#6EA8FF",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "20px",
            }}
          >

            ✓ BUSINESS BENEFITS

          </div>


          {/* HEADING */}

          <h2
            style={{
              margin:
                "0 0 20px",

              fontSize:
                isMobile
                  ? "38px"
                  : "58px",

              lineHeight:
                "1.02",

              fontWeight:
                750,

              letterSpacing:
                "-2.5px",

              color:
                "#FFFFFF",
            }}
          >

            Better Risk Management.
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#5B8CFF,#8BB8FF,#B08BFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",

                backgroundClip:
                  "text",
              }}
            >
              Better Business Decisions.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p
            style={{
              maxWidth:
                "760px",

              margin:
                "0 auto",

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "15px"
                  : "18px",

              lineHeight:
                "1.75",
            }}
          >

            Risk Management is about more than creating
            documents. It helps organizations reduce exposure,
            strengthen governance, and support better
            management decisions.

          </p>

        </div>


        {/* =================================================
            BENEFIT GRID
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1180px",

            margin:
              "0 auto",

            display:
              "grid",

            gridTemplateColumns:
              isMobile
                ? "1fr"
                : "repeat(3, 1fr)",

            gap:
              isMobile
                ? "16px"
                : "20px",
          }}
        >

          {[
            {
              number: "01",
              icon: "↓",
              title: "Reduce Business Losses",
              description:
                "Help organizations identify and address risks before they develop into business losses.",
              highlight:
                "Reduce Loss Exposure",
            },

            {
              number: "02",
              icon: "↗",
              title: "Improve Decision-Making",
              description:
                "Give management clearer risk information to support business decisions.",
              highlight:
                "Better Decisions",
            },

            {
              number: "03",
              icon: "✓",
              title: "Meet Regulatory Requirements",
              description:
                "Help organizations meet relevant regulatory, policy, and compliance requirements.",
              highlight:
                "Regulatory Readiness",
            },

            {
              number: "04",
              icon: "⌕",
              title: "Support Audits",
              description:
                "Provide documentation, risk assessments, and monitoring to support audit processes.",
              highlight:
                "Audit Support",
            },

            {
              number: "05",
              icon: "◇",
              title: "Strengthen Corporate Governance",
              description:
                "Strengthen governance through risk ownership, accountability, monitoring, and reporting.",
              highlight:
                "Stronger Governance",
            },

          ].map((benefit, index) => (

            <div
              key={benefit.number}

              style={{
                position:
                  "relative",

                minHeight:
                  isMobile
                    ? "245px"
                    : "280px",

                padding:
                  isMobile
                    ? "26px"
                    : "30px",

                borderRadius:
                  isMobile
                    ? "20px"
                    : "24px",

                background:
                  "linear-gradient(145deg,rgba(15,23,42,0.96),rgba(3,20,59,0.90))",

                border:
                  "1px solid rgba(79,141,255,0.14)",

                backdropFilter:
                  "blur(20px)",

                boxShadow:
                  "0 15px 45px rgba(0,0,0,0.16)",

                overflow:
                  "hidden",

                boxSizing:
                  "border-box",

                transition:
                  "all .3s ease",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-6px)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.40)";

                e.currentTarget.style.boxShadow =
                  "0 22px 55px rgba(37,99,235,0.16)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.14)";

                e.currentTarget.style.boxShadow =
                  "0 15px 45px rgba(0,0,0,0.16)";

              }}
            >

              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "-60px",

                  top:
                    "-60px",

                  width:
                    "180px",

                  height:
                    "180px",

                  borderRadius:
                    "50%",

                  background:
                    "radial-gradient(circle,rgba(79,141,255,0.13),transparent 70%)",

                  filter:
                    "blur(12px)",

                  pointerEvents:
                    "none",
                }}
              />


              {/* =================================================
                  TOP ROW
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "space-between",

                  marginBottom:
                    "24px",
                }}
              >

                {/* ICON */}

                <div
                  style={{
                    width:
                      isMobile
                        ? "52px"
                        : "58px",

                    height:
                      isMobile
                        ? "52px"
                        : "58px",

                    borderRadius:
                      "17px",

                    background:
                      "linear-gradient(135deg,rgba(37,99,235,0.20),rgba(79,141,255,0.08))",

                    border:
                      "1px solid rgba(79,141,255,0.20)",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color:
                      "#6EA8FF",

                    fontSize:
                      isMobile
                        ? "22px"
                        : "24px",

                    fontWeight:
                      800,
                  }}
                >

                  {benefit.icon}

                </div>


                {/* NUMBER */}

                <span
                  style={{
                    color:
                      "#334155",

                    fontSize:
                      "11px",

                    fontWeight:
                      700,

                    letterSpacing:
                      "1.5px",
                  }}
                >

                  {benefit.number}

                </span>

              </div>


              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  margin:
                    "0 0 12px",

                  color:
                    "#FFFFFF",

                  fontSize:
                    isMobile
                      ? "19px"
                      : "21px",

                  lineHeight:
                    "1.2",

                  fontWeight:
                    700,

                  letterSpacing:
                    "-0.4px",
                }}
              >

                {benefit.title}

              </h3>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  margin:
                    "0 0 22px",

                  color:
                    "#94A3B8",

                  fontSize:
                    isMobile
                      ? "13px"
                      : "14px",

                  lineHeight:
                    "1.7",
                }}
              >

                {benefit.description}

              </p>


              {/* =================================================
                  HIGHLIGHT
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  display:
                    "inline-flex",

                  alignItems:
                    "center",

                  gap:
                    "7px",

                  padding:
                    "7px 11px",

                  borderRadius:
                    "9px",

                  background:
                    "rgba(79,141,255,0.06)",

                  border:
                    "1px solid rgba(79,141,255,0.12)",

                  color:
                    "#6EA8FF",

                  fontSize:
                    "10px",

                  fontWeight:
                    600,

                  letterSpacing:
                    "0.4px",
                }}
              >

                <span>
                  ✓
                </span>

                {benefit.highlight}

              </div>


              {/* =================================================
                  WATERMARK
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "12px",

                  bottom:
                    "-18px",

                  fontSize:
                    isMobile
                      ? "82px"
                      : "100px",

                  lineHeight:
                    1,

                  fontWeight:
                    800,

                  color:
                    "rgba(79,141,255,0.035)",

                  pointerEvents:
                    "none",

                  userSelect:
                    "none",
                }}
              >

                {benefit.number}

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            MANAGEMENT IMPACT PANEL
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1050px",

            margin:
              isMobile
                ? "45px auto 0"
                : "65px auto 0",

            padding:
              isMobile
                ? "26px 20px"
                : "32px 38px",

            borderRadius:
              isMobile
                ? "20px"
                : "24px",

            background:
              "linear-gradient(135deg,rgba(79,141,255,0.08),rgba(139,92,246,0.05))",

            border:
              "1px solid rgba(79,141,255,0.16)",

            backdropFilter:
              "blur(18px)",
          }}
        >

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                isMobile
                  ? "1fr"
                  : "0.8fr 1.2fr",

              gap:
                isMobile
                  ? "20px"
                  : "40px",

              alignItems:
                "center",
            }}
          >

            {/* LEFT */}

            <div>

              <div
                style={{
                  color:
                    "#6EA8FF",

                  fontSize:
                    "10px",

                  fontWeight:
                    700,

                  letterSpacing:
                    "2px",

                  marginBottom:
                    "10px",
                }}
              >

                MANAGEMENT IMPACT

              </div>

              <h3
                style={{
                  margin:
                    0,

                  color:
                    "#FFFFFF",

                  fontSize:
                    isMobile
                      ? "25px"
                      : "32px",

                  lineHeight:
                    "1.15",

                  fontWeight:
                    750,

                  letterSpacing:
                    "-1px",
                }}
              >

                From Risk Visibility
                <br />

                <span
                  style={{
                    color:
                      "#6EA8FF",
                  }}
                >
                  to Better Decisions.
                </span>

              </h3>

            </div>


            {/* RIGHT */}

            <div
              style={{
                display:
                  "flex",

                flexDirection:
                  "column",

                gap:
                  "13px",
              }}
            >

              {[
                "Management sees risk exposure more clearly.",
                "Risk priorities become easier to communicate.",
                "Controls and mitigation actions become more structured.",
                "Risk information supports business decision making.",
              ].map((item, index) => (

                <div
                  key={index}

                  style={{
                    display:
                      "flex",

                    alignItems:
                      "flex-start",

                    gap:
                      "10px",

                    color:
                      "#CBD5E1",

                    fontSize:
                      isMobile
                        ? "12px"
                        : "14px",

                    lineHeight:
                      "1.55",
                  }}
                >

                  <span
                    style={{
                      color:
                        "#5B8CFF",

                      fontWeight:
                        800,

                      fontSize:
                        "15px",

                      lineHeight:
                        1.3,
                    }}
                  >
                    ✓
                  </span>

                  <span>
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* =================================================
            CLOSING MESSAGE
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "760px",

            margin:
              isMobile
                ? "40px auto 0"
                : "52px auto 0",

            textAlign:
              "center",
          }}
        >

          <p
            style={{
              margin:
                0,

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "13px"
                  : "16px",

              lineHeight:
                "1.75",
            }}
          >

            Effective Risk Management helps transform
            risk information into management action.

          </p>

        </div>

      </section>
            {/* =====================================================
          SECTION 7 — INDUSTRIES WE SERVE
      ===================================================== */}

      <section
        id="risk-industries"
        style={{
          position: "relative",

          padding: isMobile
            ? "75px 20px 90px"
            : "120px 40px 130px",

          background:
            "linear-gradient(180deg,#020617 0%,#03143B 50%,#020617 100%)",

          overflow: "hidden",
        }}
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",

            top: "100px",
            left: "-190px",

            width: "450px",
            height: "450px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(79,141,255,0.12),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",

            right: "-180px",
            bottom: "80px",

            width: "430px",
            height: "430px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(139,92,246,0.09),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          style={{
            position: "relative",

            zIndex: 2,

            maxWidth: "900px",

            margin: "0 auto",

            textAlign: "center",

            marginBottom:
              isMobile
                ? "48px"
                : "65px",
          }}
        >

          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding:
                "9px 17px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.10)",

              border:
                "1px solid rgba(79,141,255,0.20)",

              color:
                "#6EA8FF",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "20px",
            }}
          >

            ◈ INDUSTRIES WE SERVE

          </div>


          {/* HEADING */}

          <h2
            style={{
              margin:
                "0 0 20px",

              fontSize:
                isMobile
                  ? "38px"
                  : "58px",

              lineHeight:
                "1.02",

              fontWeight:
                750,

              letterSpacing:
                "-2.5px",

              color:
                "#FFFFFF",
            }}
          >

            Risk Management
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#5B8CFF,#8BB8FF,#B08BFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",

                backgroundClip:
                  "text",
              }}
            >
              Across Different Industries.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p
            style={{
              maxWidth:
                "760px",

              margin:
                "0 auto",

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "15px"
                  : "18px",

              lineHeight:
                "1.75",
            }}
          >

            Every industry has distinct characteristics,
            processes, regulatory environments, and risk
            exposures. Risk Management is tailored to each
            organization’s business context.

          </p>

        </div>


        {/* =================================================
            INDUSTRY GRID
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1200px",

            margin:
              "0 auto",

            display:
              "grid",

            gridTemplateColumns:
              isMobile
                ? "repeat(2,1fr)"
                : "repeat(5,1fr)",

            gap:
              isMobile
                ? "12px"
                : "16px",
          }}
        >

          {[
            {
              number: "01",
              name: "Manufacturing",
              icon: "⚙",
              focus:
                "Operational & Process Risk",
            },

            {
              number: "02",
              name: "Food & Beverage",
              icon: "◇",
              focus:
                "Quality & Operational Risk",
            },

            {
              number: "03",
              name: "Healthcare",
              icon: "✚",
              focus:
                "Compliance & Operational Risk",
            },

            {
              number: "04",
              name: "Medical Devices",
              icon: "⌁",
              focus:
                "Regulatory & Supply Risk",
            },

            {
              number: "05",
              name: "Distribution",
              icon: "▣",
              focus:
                "Supply Chain & Operational Risk",
            },

            {
              number: "06",
              name: "Retail",
              icon: "□",
              focus:
                "Sales & Operational Risk",
            },

            {
              number: "07",
              name: "Logistics",
              icon: "→",
              focus:
                "Supply Chain & Delivery Risk",
            },

            {
              number: "08",
              name: "Construction",
              icon: "⌂",
              focus:
                "Project & Safety Risk",
            },

            {
              number: "09",
              name: "Property",
              icon: "◇",
              focus:
                "Project & Financial Risk",
            },

            {
              number: "10",
              name: "Financial Services",
              icon: "$",
              focus:
                "Financial & Compliance Risk",
            },

            {
              number: "11",
              name: "Insurance",
              icon: "◈",
              focus:
                "Financial & Regulatory Risk",
            },

            {
              number: "12",
              name: "Technology",
              icon: "⌘",
              focus:
                "IT & Cyber Risk",
            },

            {
              number: "13",
              name: "Education",
              icon: "◇",
              focus:
                "Operational & Governance Risk",
            },

            {
              number: "14",
              name: "Agribusiness",
              icon: "◌",
              focus:
                "Operational & Supply Risk",
            },

            {
              number: "15",
              name: "Oil & Gas",
              icon: "◉",
              focus:
                "Operational & Safety Risk",
            },

          ].map((industry, index) => (

            <div
              key={industry.number}

              style={{
                position:
                  "relative",

                minHeight:
                  isMobile
                    ? "175px"
                    : "205px",

                padding:
                  isMobile
                    ? "18px"
                    : "22px",

                borderRadius:
                  isMobile
                    ? "18px"
                    : "20px",

                background:
                  "linear-gradient(145deg,rgba(15,23,42,0.96),rgba(3,20,59,0.90))",

                border:
                  "1px solid rgba(79,141,255,0.13)",

                backdropFilter:
                  "blur(18px)",

                boxShadow:
                  "0 12px 35px rgba(0,0,0,0.14)",

                overflow:
                  "hidden",

                boxSizing:
                  "border-box",

                transition:
                  "all .3s ease",

                display:
                  "flex",

                flexDirection:
                  "column",

                justifyContent:
                  "space-between",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-5px)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.40)";

                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(37,99,235,0.15)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.13)";

                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(0,0,0,0.14)";

              }}
            >

              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "-55px",

                  top:
                    "-55px",

                  width:
                    "150px",

                  height:
                    "150px",

                  borderRadius:
                    "50%",

                  background:
                    "radial-gradient(circle,rgba(79,141,255,0.13),transparent 70%)",

                  filter:
                    "blur(10px)",

                  pointerEvents:
                    "none",
                }}
              />


              {/* =================================================
                  TOP
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "space-between",

                  marginBottom:
                    "18px",
                }}
              >

                {/* ICON */}

                <div
                  style={{
                    width:
                      isMobile
                        ? "42px"
                        : "48px",

                    height:
                      isMobile
                        ? "42px"
                        : "48px",

                    borderRadius:
                      "14px",

                    background:
                      "linear-gradient(135deg,rgba(37,99,235,0.20),rgba(79,141,255,0.07))",

                    border:
                      "1px solid rgba(79,141,255,0.20)",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color:
                      "#6EA8FF",

                    fontSize:
                      isMobile
                        ? "17px"
                        : "19px",

                    fontWeight:
                      800,
                  }}
                >

                  {industry.icon}

                </div>


                {/* NUMBER */}

                <span
                  style={{
                    color:
                      "#334155",

                    fontSize:
                      "9px",

                    fontWeight:
                      700,

                    letterSpacing:
                      "1px",
                  }}
                >

                  {industry.number}

                </span>

              </div>


              {/* =================================================
                  INDUSTRY NAME
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  marginBottom:
                    "7px",

                  color:
                    "#FFFFFF",

                  fontSize:
                    isMobile
                      ? "14px"
                      : "16px",

                  lineHeight:
                    "1.25",

                  fontWeight:
                    700,

                  letterSpacing:
                    "-0.2px",
                }}
              >

                {industry.name}

              </div>


              {/* =================================================
                  FOCUS
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  color:
                    "#64748B",

                  fontSize:
                    isMobile
                      ? "9px"
                      : "10px",

                  lineHeight:
                    "1.5",
                }}
              >

                {industry.focus}

              </div>


              {/* =================================================
                  WATERMARK
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "8px",

                  bottom:
                    "-20px",

                  fontSize:
                    isMobile
                      ? "70px"
                      : "85px",

                  lineHeight:
                    1,

                  fontWeight:
                    800,

                  color:
                    "rgba(79,141,255,0.035)",

                  pointerEvents:
                    "none",

                  userSelect:
                    "none",
                }}
              >

                {industry.number}

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            INDUSTRY NOTE
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "950px",

            margin:
              isMobile
                ? "45px auto 0"
                : "60px auto 0",

            padding:
              isMobile
                ? "24px 20px"
                : "30px 36px",

            borderRadius:
              isMobile
                ? "18px"
                : "22px",

            background:
              "linear-gradient(135deg,rgba(79,141,255,0.07),rgba(139,92,246,0.05))",

            border:
              "1px solid rgba(79,141,255,0.14)",

            backdropFilter:
              "blur(15px)",

            textAlign:
              "center",
          }}
        >

          <div
            style={{
              color:
                "#6EA8FF",

              fontSize:
                "10px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "12px",
            }}
          >

            INDUSTRY-SPECIFIC APPROACH

          </div>


          <p
            style={{
              margin:
                0,

              color:
                "#CBD5E1",

              fontSize:
                isMobile
                  ? "13px"
                  : "16px",

              lineHeight:
                "1.75",
            }}
          >

            We do not use a one-size-fits-all approach.
            Risk Management is tailored to{" "}

            <span
              style={{
                color:
                  "#FFFFFF",

                fontWeight:
                  700,
              }}
            >
              industry, size, business model,
              and organizational structure,
            </span>{" "}

            as well as existing operating conditions.

          </p>

        </div>


        {/* =================================================
            CLOSING MESSAGE
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "760px",

            margin:
              isMobile
                ? "40px auto 0"
                : "52px auto 0",

            textAlign:
              "center",
          }}
        >

          <p
            style={{
              margin:
                0,

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "13px"
                  : "16px",

              lineHeight:
                "1.75",
            }}
          >

            Different industries. Different risks.
            One structured approach to better risk decisions.

          </p>

        </div>

      </section>
            {/* =====================================================
          SECTION 8 — WHY VD FOKUS
      ===================================================== */}

      <section
        id="why-vd-fokus"
        style={{
          position: "relative",

          padding: isMobile
            ? "75px 20px 90px"
            : "120px 40px 130px",

          background:
            "linear-gradient(180deg,#020617 0%,#07152E 50%,#020617 100%)",

          overflow: "hidden",
        }}
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",

            left: "-180px",
            top: "120px",

            width: "430px",
            height: "430px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(79,141,255,0.12),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",

            right: "-180px",
            bottom: "100px",

            width: "450px",
            height: "450px",

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(139,92,246,0.10),transparent 70%)",

            filter: "blur(55px)",

            pointerEvents: "none",
          }}
        />


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          style={{
            position: "relative",

            zIndex: 2,

            maxWidth: "900px",

            margin: "0 auto",

            textAlign: "center",

            marginBottom:
              isMobile
                ? "48px"
                : "65px",
          }}
        >

          {/* BADGE */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding:
                "9px 17px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.10)",

              border:
                "1px solid rgba(79,141,255,0.20)",

              color:
                "#6EA8FF",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "20px",
            }}
          >

            ✦ WHY VD FOKUS

          </div>


          {/* HEADING */}

          <h2
            style={{
              margin:
                "0 0 20px",

              fontSize:
                isMobile
                  ? "38px"
                  : "58px",

              lineHeight:
                "1.02",

              fontWeight:
                750,

              letterSpacing:
                "-2.5px",

              color:
                "#FFFFFF",
            }}
          >

            Risk Management That
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#5B8CFF,#8BB8FF,#B08BFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",

                backgroundClip:
                  "text",
              }}
            >
              Works for Your Business.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p
            style={{
              maxWidth:
                "760px",

              margin:
                "0 auto",

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "15px"
                  : "18px",

              lineHeight:
                "1.75",
            }}
          >

            Our work goes beyond assessment and documentation.
            VD Fokus designs Risk Management programs to be
            understood, used, and aligned with management needs.

          </p>

        </div>


        {/* =================================================
            DIFFERENTIATORS GRID
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1180px",

            margin:
              "0 auto",

            display:
              "grid",

            gridTemplateColumns:
              isMobile
                ? "1fr"
                : "repeat(3,1fr)",

            gap:
              isMobile
                ? "16px"
                : "20px",
          }}
        >

          {[
            {
              number: "01",
              title: "Business-Oriented",
              description:
                "Risk Management is designed around the organization’s objectives, processes, and business needs.",
              tag:
                "Aligned with Business",
              icon:
                "↗",
            },

            {
              number: "02",
              title: "Practical",
              description:
                "We prioritize solutions that can be implemented and used in day-to-day operations.",
              tag:
                "Practical Solutions",
              icon:
                "✓",
            },

            {
              number: "03",
              title: "Customized Solution",
              description:
                "Our approach is tailored to the organization’s industry, size, business model, structure, and operating conditions.",
              tag:
                "Tailored Approach",
              icon:
                "◇",
            },

            {
              number: "04",
              title: "Integrated Approach",
              description:
                "Risk Management is connected to business processes, governance, internal controls, and management needs.",
              tag:
                "Integrated Risk View",
              icon:
                "◎",
            },

            {
              number: "05",
              title: "From Assessment to Implementation",
              description:
                "Our support continues beyond risk identification to treatment, monitoring, and improvement.",
              tag:
                "End-to-End Support",
              icon:
                "→",
            },

            {
              number: "06",
              title: "Management-Friendly",
              description:
                "Outputs are concise, clear, and easy for the Board of Directors, management, risk managers, Finance, Operations, HR, and Internal Audit to use in decision-making.",
              tag:
                "Management Ready",
              icon:
                "◆",
            },

          ].map((item) => (

            <div
              key={item.number}

              style={{
                position:
                  "relative",

                minHeight:
                  isMobile
                    ? "275px"
                    : "305px",

                padding:
                  isMobile
                    ? "26px"
                    : "30px",

                borderRadius:
                  isMobile
                    ? "20px"
                    : "24px",

                background:
                  "linear-gradient(145deg,rgba(15,23,42,0.96),rgba(3,20,59,0.90))",

                border:
                  "1px solid rgba(79,141,255,0.14)",

                backdropFilter:
                  "blur(20px)",

                boxShadow:
                  "0 15px 45px rgba(0,0,0,0.16)",

                overflow:
                  "hidden",

                boxSizing:
                  "border-box",

                transition:
                  "all .3s ease",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-6px)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.40)";

                e.currentTarget.style.boxShadow =
                  "0 22px 55px rgba(37,99,235,0.16)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.14)";

                e.currentTarget.style.boxShadow =
                  "0 15px 45px rgba(0,0,0,0.16)";

              }}
            >

              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "-65px",

                  top:
                    "-65px",

                  width:
                    "190px",

                  height:
                    "190px",

                  borderRadius:
                    "50%",

                  background:
                    "radial-gradient(circle,rgba(79,141,255,0.13),transparent 70%)",

                  filter:
                    "blur(12px)",

                  pointerEvents:
                    "none",
                }}
              />


              {/* =================================================
                  TOP ROW
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "space-between",

                  marginBottom:
                    "25px",
                }}
              >

                {/* ICON */}

                <div
                  style={{
                    width:
                      isMobile
                        ? "52px"
                        : "58px",

                    height:
                      isMobile
                        ? "52px"
                        : "58px",

                    borderRadius:
                      "17px",

                    background:
                      "linear-gradient(135deg,rgba(37,99,235,0.20),rgba(79,141,255,0.08))",

                    border:
                      "1px solid rgba(79,141,255,0.20)",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color:
                      "#6EA8FF",

                    fontSize:
                      isMobile
                        ? "22px"
                        : "24px",

                    fontWeight:
                      800,
                  }}
                >

                  {item.icon}

                </div>


                {/* NUMBER */}

                <span
                  style={{
                    color:
                      "#334155",

                    fontSize:
                      "11px",

                    fontWeight:
                      700,

                    letterSpacing:
                      "1.5px",
                  }}
                >

                  {item.number}

                </span>

              </div>


              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  margin:
                    "0 0 12px",

                  color:
                    "#FFFFFF",

                  fontSize:
                    isMobile
                      ? "20px"
                      : "22px",

                  lineHeight:
                    "1.2",

                  fontWeight:
                    700,

                  letterSpacing:
                    "-0.4px",
                }}
              >

                {item.title}

              </h3>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  margin:
                    "0 0 22px",

                  color:
                    "#94A3B8",

                  fontSize:
                    isMobile
                      ? "13px"
                      : "14px",

                  lineHeight:
                    "1.7",
                }}
              >

                {item.description}

              </p>


              {/* =================================================
                  TAG
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  zIndex:
                    2,

                  display:
                    "inline-flex",

                  alignItems:
                    "center",

                  gap:
                    "7px",

                  padding:
                    "7px 11px",

                  borderRadius:
                    "9px",

                  background:
                    "rgba(79,141,255,0.06)",

                  border:
                    "1px solid rgba(79,141,255,0.12)",

                  color:
                    "#6EA8FF",

                  fontSize:
                    "10px",

                  fontWeight:
                    600,

                  letterSpacing:
                    "0.4px",
                }}
              >

                <span>
                  ✓
                </span>

                {item.tag}

              </div>


              {/* =================================================
                  WATERMARK
              ================================================= */}

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "12px",

                  bottom:
                    "-18px",

                  fontSize:
                    isMobile
                      ? "85px"
                      : "105px",

                  lineHeight:
                    1,

                  fontWeight:
                    800,

                  color:
                    "rgba(79,141,255,0.035)",

                  pointerEvents:
                    "none",

                  userSelect:
                    "none",
                }}
              >

                {item.number}

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            DIFFERENTIATOR SUMMARY
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1050px",

            margin:
              isMobile
                ? "50px auto 0"
                : "65px auto 0",

            padding:
              isMobile
                ? "26px 20px"
                : "32px 38px",

            borderRadius:
              isMobile
                ? "20px"
                : "24px",

            background:
              "linear-gradient(135deg,rgba(79,141,255,0.08),rgba(139,92,246,0.05))",

            border:
              "1px solid rgba(79,141,255,0.16)",

            backdropFilter:
              "blur(18px)",
          }}
        >

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                isMobile
                  ? "1fr"
                  : "1fr 1.5fr",

              gap:
                isMobile
                  ? "20px"
                  : "40px",

              alignItems:
                "center",
            }}
          >

            {/* LEFT */}

            <div>

              <div
                style={{
                  color:
                    "#6EA8FF",

                  fontSize:
                    "10px",

                  fontWeight:
                    700,

                  letterSpacing:
                    "2px",

                  marginBottom:
                    "10px",
                }}
              >

                THE VD FOKUS APPROACH

              </div>

              <h3
                style={{
                  margin:
                    0,

                  color:
                    "#FFFFFF",

                  fontSize:
                    isMobile
                      ? "25px"
                      : "32px",

                  lineHeight:
                    "1.15",

                  fontWeight:
                    750,

                  letterSpacing:
                    "-1px",
                }}
              >

                Not Just
                <br />

                <span
                  style={{
                    color:
                      "#6EA8FF",
                  }}
                >
                  Risk Documentation.
                </span>

              </h3>

            </div>


            {/* RIGHT */}

            <div>

              <p
                style={{
                  margin:
                    "0 0 18px",

                  color:
                    "#CBD5E1",

                  fontSize:
                    isMobile
                      ? "13px"
                      : "15px",

                  lineHeight:
                    "1.7",
                }}
              >

                We help organizations build Risk Management
                programs that support business processes
                and management decision-making.

              </p>


              <div
                style={{
                  display:
                    "flex",

                  flexWrap:
                    "wrap",

                  gap:
                    "8px",
                }}
              >

                {[
                  "Business-Oriented",
                  "Practical",
                  "Customized",
                  "Integrated",
                  "End-to-End",
                  "Management-Friendly",
                ].map((item) => (

                  <span
                    key={item}

                    style={{
                      padding:
                        "7px 10px",

                      borderRadius:
                        "9px",

                      background:
                        "rgba(255,255,255,0.035)",

                      border:
                        "1px solid rgba(255,255,255,0.07)",

                      color:
                        "#CBD5E1",

                      fontSize:
                        "10px",

                      fontWeight:
                        500,
                    }}
                  >

                    ✓ {item}

                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            CLOSING MESSAGE
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "760px",

            margin:
              isMobile
                ? "42px auto 0"
                : "55px auto 0",

            textAlign:
              "center",
          }}
        >

          <p
            style={{
              margin:
                0,

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "13px"
                  : "16px",

              lineHeight:
                "1.75",
            }}
          >

            Practical Risk Management.
            Built around your business.

          </p>

        </div>

      </section>
            {/* =====================================================
          SECTION 9 — CTA / CONSULTATION
      ===================================================== */}

      <section
        id="risk-consultation"
        style={{
          position: "relative",

          padding: isMobile
            ? "80px 20px 90px"
            : "120px 40px 130px",

          background:
            "linear-gradient(180deg,#020617 0%,#03143B 45%,#020617 100%)",

          overflow: "hidden",
        }}
      >

        {/* =================================================
            LARGE BLUE GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",

            left: "50%",
            top: "50%",

            transform:
              "translate(-50%,-50%)",

            width:
              isMobile
                ? "520px"
                : "850px",

            height:
              isMobile
                ? "520px"
                : "850px",

            borderRadius:
              "50%",

            background:
              "radial-gradient(circle,rgba(79,141,255,0.18) 0%,rgba(79,141,255,0.06) 38%,transparent 70%)",

            filter:
              "blur(20px)",

            pointerEvents:
              "none",
          }}
        />


        {/* =================================================
            SECONDARY PURPLE GLOW
        ================================================= */}

        <div
          style={{
            position: "absolute",

            right: "-180px",
            bottom: "-160px",

            width: "450px",
            height: "450px",

            borderRadius:
              "50%",

            background:
              "radial-gradient(circle,rgba(139,92,246,0.12),transparent 70%)",

            filter:
              "blur(55px)",

            pointerEvents:
              "none",
          }}
        />


        {/* =================================================
            MAIN CTA CONTAINER
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "1100px",

            margin:
              "0 auto",

            padding:
              isMobile
                ? "38px 24px 32px"
                : "65px 70px 58px",

            borderRadius:
              isMobile
                ? "26px"
                : "32px",

            background:
              "linear-gradient(145deg,rgba(15,23,42,0.94),rgba(3,20,59,0.90))",

            border:
              "1px solid rgba(79,141,255,0.24)",

            backdropFilter:
              "blur(24px)",

            boxShadow:
              "0 30px 90px rgba(0,0,0,0.35)",

            overflow:
              "hidden",

            textAlign:
              "center",
          }}
        >

          {/* =================================================
              INNER GLOW
          ================================================= */}

          <div
            style={{
              position:
                "absolute",

              top:
                "-160px",

              left:
                "50%",

              transform:
                "translateX(-50%)",

              width:
                "500px",

              height:
                "300px",

              borderRadius:
                "50%",

              background:
                "radial-gradient(circle,rgba(79,141,255,0.16),transparent 70%)",

              filter:
                "blur(35px)",

              pointerEvents:
                "none",
            }}
          />


          {/* =================================================
              BADGE
          ================================================= */}

          <div
            style={{
              position:
                "relative",

              zIndex:
                2,

              display:
                "inline-flex",

              alignItems:
                "center",

              gap:
                "8px",

              padding:
                "9px 17px",

              borderRadius:
                "999px",

              background:
                "rgba(79,141,255,0.10)",

              border:
                "1px solid rgba(79,141,255,0.20)",

              color:
                "#6EA8FF",

              fontSize:
                isMobile
                  ? "11px"
                  : "13px",

              fontWeight:
                700,

              letterSpacing:
                "2px",

              marginBottom:
                "22px",
            }}
          >

            ◈ LET'S TALK ABOUT YOUR RISK

          </div>


          {/* =================================================
              HEADLINE
          ================================================= */}

          <h2
            style={{
              position:
                "relative",

              zIndex:
                2,

              margin:
                "0 0 20px",

              color:
                "#FFFFFF",

              fontSize:
                isMobile
                  ? "38px"
                  : "58px",

              lineHeight:
                "1.02",

              fontWeight:
                750,

              letterSpacing:
                "-2.5px",
            }}
          >

            Not Sure Where
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#5B8CFF,#8BB8FF,#B08BFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",

                backgroundClip:
                  "text",
              }}
            >
              to Start?
            </span>

          </h2>


          {/* =================================================
              SUB HEADLINE
          ================================================= */}

          <p
            style={{
              position:
                "relative",

              zIndex:
                2,

              maxWidth:
                "700px",

              margin:
                "0 auto",

              color:
                "#CBD5E1",

              fontSize:
                isMobile
                  ? "15px"
                  : "19px",

              lineHeight:
                "1.75",
            }}
          >

            Let's identify your business risks
            and management needs together.

          </p>


          {/* =================================================
              SUPPORTING TEXT
          ================================================= */}

          <p
            style={{
              position:
                "relative",

              zIndex:
                2,

              maxWidth:
                "650px",

              margin:
                isMobile
                  ? "14px auto 28px"
                  : "16px auto 35px",

              color:
                "#94A3B8",

              fontSize:
                isMobile
                  ? "13px"
                  : "15px",

              lineHeight:
                "1.7",
            }}
          >

            We can start with an initial discussion to understand
            your key risks, Risk Management needs, and areas
            that require attention.

          </p>


          {/* =================================================
              CONSULTATION TOPICS
          ================================================= */}

          <div
            style={{
              position:
                "relative",

              zIndex:
                2,

              display:
                "flex",

              justifyContent:
                "center",

              flexWrap:
                "wrap",

              gap:
                "9px",

              marginBottom:
                isMobile
                  ? "30px"
                  : "38px",
            }}
          >

            {[
              "Risk Assessment",
              "Risk Register",
              "Risk Management Framework",
              "Risk Monitoring",
              "Risk Maturity",
            ].map((item) => (

              <div
                key={item}

                style={{
                  display:
                    "inline-flex",

                  alignItems:
                    "center",

                  gap:
                    "6px",

                  padding:
                    isMobile
                      ? "8px 10px"
                      : "9px 12px",

                  borderRadius:
                    "10px",

                  background:
                    "rgba(255,255,255,0.035)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  color:
                    "#CBD5E1",

                  fontSize:
                    isMobile
                      ? "10px"
                      : "11px",

                  fontWeight:
                    500,

                  whiteSpace:
                    "nowrap",
                }}
              >

                <span
                  style={{
                    color:
                      "#5B8CFF",

                    fontWeight:
                      800,
                  }}
                >
                  ✓
                </span>

                {item}

              </div>

            ))}

          </div>


          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div
            style={{
              position:
                "relative",

              zIndex:
                2,

              display:
                "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              gap:
                "14px",

              flexWrap:
                "wrap",

              marginBottom:
                isMobile
                  ? "32px"
                  : "40px",
            }}
          >

            {/* =================================================
                PRIMARY — WHATSAPP
            ================================================= */}

            <a
              href="https://wa.me/6285121305329"
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display:
                  "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap:
                  "10px",

                width:
                  isMobile
                    ? "100%"
                    : "280px",

                height:
                  isMobile
                    ? "58px"
                    : "62px",

                borderRadius:
                  "18px",

                background:
                  "linear-gradient(135deg,#25D366 0%,#16A34A 100%)",

                border:
                  "1px solid rgba(255,255,255,0.15)",

                color:
                  "#FFFFFF",

                fontSize:
                  isMobile
                    ? "16px"
                    : "17px",

                fontWeight:
                  700,

                textDecoration:
                  "none",

                boxShadow:
                  "0 10px 30px rgba(37,211,102,.30)",

                transition:
                  "all .3s ease",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-3px)";

                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(37,211,102,.42)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(37,211,102,.30)";

              }}
            >

              <MessageCircle
                size={
                  isMobile
                    ? 19
                    : 20
                }
              />

              Book a Consultation

            </a>


            {/* =================================================
                SECONDARY — BACK TO SERVICES
            ================================================= */}

            <a
              href="#risk-services"

              style={{
                display:
                  "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap:
                  "9px",

                width:
                  isMobile
                    ? "100%"
                    : "220px",

                height:
                  isMobile
                    ? "58px"
                    : "62px",

                borderRadius:
                  "18px",

                background:
                  "rgba(255,255,255,0.04)",

                backdropFilter:
                  "blur(20px)",

                border:
                  "1px solid rgba(255,255,255,0.12)",

                color:
                  "#FFFFFF",

                textDecoration:
                  "none",

                fontWeight:
                  600,

                fontSize:
                  isMobile
                    ? "14px"
                    : "15px",

                transition:
                  "all .3s ease",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.background =
                  "rgba(255,255,255,0.08)";

                e.currentTarget.style.borderColor =
                  "rgba(79,141,255,0.30)";

                e.currentTarget.style.transform =
                  "translateY(-3px)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.background =
                  "rgba(255,255,255,0.04)";

                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.12)";

                e.currentTarget.style.transform =
                  "translateY(0)";

              }}
            >

              Explore Our Services

              <span
                style={{
                  fontSize:
                    "18px",
                }}
              >
                →
              </span>

            </a>

          </div>


          {/* =================================================
              TRUST LINE
          ================================================= */}

          <div
            style={{
              position:
                "relative",

              zIndex:
                2,

              display:
                "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              gap:
                "8px",

              color:
                "#64748B",

              fontSize:
                isMobile
                  ? "10px"
                  : "12px",

              lineHeight:
                "1.5",
            }}
          >

            <span
              style={{
                color:
                  "#5B8CFF",

                fontSize:
                  "13px",
              }}
            >
              ✓
            </span>

            An initial discussion to understand
            your business needs

          </div>

        </div>


        {/* =================================================
            BOTTOM CLOSING
        ================================================= */}

        <div
          style={{
            position:
              "relative",

            zIndex:
              2,

            maxWidth:
              "760px",

            margin:
              isMobile
                ? "38px auto 0"
                : "50px auto 0",

            textAlign:
              "center",
          }}
        >

          <p
            style={{
              margin:
                0,

              color:
                "#64748B",

              fontSize:
                isMobile
                  ? "12px"
                  : "14px",

              lineHeight:
                "1.7",
            }}
          >

            Risk Management starts with understanding
            where your business stands today.

          </p>

        </div>

      </section>
    </main>
  );
}
