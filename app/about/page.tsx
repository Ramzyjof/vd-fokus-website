"use client";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Building2,
  Users,
  FileText,
  Phone,
  MapPin,
  Target,
  Search,
  UserCheck,
  GraduationCap,
  Rocket,
  Flag,
  Factory,
  ShoppingCart,
  Laptop,
  Truck,
  HeartPulse,
  Landmark,
  Hotel,
  Building,
  Zap,
  Award,
  ShieldCheck,
  Briefcase,
  Clock3,
  Gem,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function Page() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [counts, setCounts] = useState({
    industries: 0,
    clients: 0,
    cv: 0,
    talents: 0,
    years: 0
  });

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "Story", id: "story" },
    { name: "Track Record", id: "stats" },
    { name: "Why Us", id: "why" },
    { name: "Industries", id: "industries" },
    { name: "Visit", id: "visit" }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const yOffset = -90;

      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections =
      document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id =
              entry.target.getAttribute("data-animate");

            if (id) {
              setVisibleSections((prev) => [
                ...new Set([...prev, id])
              ]);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 5;

      setCounts({
        industries: Math.min(
          Math.floor(start / 4),
          20
        ),
        clients: Math.min(start * 2, 500),
        cv: Math.min(start * 400, 100000),
        talents: Math.min(start * 200, 50000),
        years: Math.min(
          Math.floor(start / 5),
          23
        )
      });

      if (start >= 250) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const getAnimation = (id: string) => ({
    opacity: visibleSections.includes(id) ? 1 : 0,
    transform: visibleSections.includes(id)
      ? "translateY(0)"
      : "translateY(40px)",
    transition: "all 0.8s ease"
  });

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(127,29,29,0.18)",
          filter: "blur(120px)",
          top: "-120px",
          right: "-150px",
          borderRadius: "999px"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(59,130,246,0.12)",
          filter: "blur(120px)",
          bottom: "200px",
          left: "-120px",
          borderRadius: "999px"
        }}
      />


      {/* HERO */}
<section
  id="hero"
  style={{
    position: "relative",
    minHeight: isMobile ? "600px" : "760px",
    display: "flex",
    alignItems: isMobile ? "flex-start" : "center",
    overflow: "hidden",
    borderRadius: "24px",
    marginBottom: "10px",
    
  }}
>
  {/* BACKGROUND IMAGE */}
  <img
    src={
      isMobile
        ? "hero-mobile.png"
        : "hero.png"
    }
    alt="About VD Fokus"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: isMobile
        ? "70% center"
        : "center center",
    }}
  />

  {/* OVERLAY */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: isMobile
        ? `
          linear-gradient(
            90deg,
            rgba(2,6,23,.96) 0%,
            rgba(2,6,23,.88) 45%,
            rgba(2,6,23,.55) 100%
          )
        `
        : `
          linear-gradient(
            90deg,
            rgba(2,6,23,.92) 0%,
            rgba(2,6,23,.72) 45%,
            rgba(2,6,23,.25) 100%
          )
        `,
      zIndex: 1,
    }}
  />

  {/* CONTENT */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "650px",
      padding: isMobile
        ? "40px 28px"
        : "60px",
    }}
  >
    {/* BADGE */}
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 18px",
        borderRadius: "999px",
        background:
          "rgba(255,255,255,.06)",
        border:
          "1px solid rgba(255,255,255,.08)",
        marginBottom: "20px",
      }}
    >
      <Building2
        size={16}
        color="#60A5FA"
      />

      <span
        style={{
          color: "#CBD5E1",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "1px",
        }}
      >
        ESTABLISHED SINCE 2003
      </span>
    </div>

    {/* HEADLINE */}
    <h1
      style={{
        fontSize: isMobile
          ? "48px"
          : "76px",

        lineHeight: "0.95",

        fontWeight: 700,

        marginBottom: "10px",
      }}
    >
      Building Better
    </h1>

    <div
      style={{
        fontSize: isMobile
          ? "38px"
          : "76px",

        lineHeight: "0.95",

        fontWeight: 700,

        background:
          "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",

        WebkitBackgroundClip: "text",
        WebkitTextFillColor:
          "transparent",

        display: "inline-block",

        marginBottom: "20px",
      }}
    >
      Teams Since 2003
    </div>

    {/* DESCRIPTION */}
    <p
      style={{
        color: "#E2E8F0",

        fontSize: isMobile
          ? "15px"
          : "19px",

        lineHeight: 1.8,

        marginBottom: "20px",

        maxWidth: "560px",
      }}
    >
      VD Fokus helps organizations
      identify, evaluate, and place
      exceptional talent through
      executive search expertise,
      structured assessment, and
      practical HR solutions.
    </p>

    {/* TRUST BADGES */}
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "nowrap",
        marginBottom: "20px",
      }}
    >
      {[
        {
          icon: Briefcase,
          title: "Executive Search",
        },
        {
          icon: Users,
          title: "500+ Clients",
        },
        {
          icon: Award,
          title: "20+ Years",
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",

              padding: "8px 10px",

              borderRadius: "12px",

              background:
                "rgba(255,255,255,.05)",

              border:
                "1px solid rgba(255,255,255,.1)",

              backdropFilter:
                "blur(10px)",

              whiteSpace:
                "nowrap",
            }}
          >
            <Icon
              size={16}
              color="#60A5FA"
            />

            <span
              style={{
                fontSize: "11px",
                color: "#fff",
              }}
            >
              {item.title}
            </span>
          </div>
        );
      })}
    </div>

   {/* CTA */}
<div
  style={{
    display: "flex",
    gap: isMobile ? "10px" : "16px",
    flexWrap: "nowrap",
    marginBottom: isMobile ? "24px" : "36px",
    width: "100%",
    maxWidth: isMobile ? "100%" : "520px",
  }}
>
  <a
    href="https://wa.me/6285121305329"
    style={{
      flex: 1,
      height: isMobile ? "52px" : "64px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      borderRadius: "999px",

      background:
        "linear-gradient(135deg,#16A34A,#22C55E)",

      color: "#fff",

      fontWeight: 700,

      fontSize: isMobile ? "14px" : "17px",

      textDecoration: "none",

      boxShadow:
        "0 10px 30px rgba(34,197,94,.25)",
    }}
  >
    WhatsApp Us
  </a>

  <a
    href="#story"
    style={{
      flex: 1,

      height: isMobile ? "52px" : "64px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      borderRadius: "999px",

      border:
        "1px solid rgba(255,255,255,.15)",

      background:
        "rgba(255,255,255,.04)",

      backdropFilter: "blur(10px)",

      color: "#fff",

      fontWeight: 600,

      fontSize: isMobile ? "14px" : "17px",

      textDecoration: "none",
    }}
  >
    Our Story
  </a>
</div>

    {/* STATS CARD */}
    {/* STATS CARD */}
<div
  style={{
    maxWidth: isMobile ? "100%" : "620px",

    padding: isMobile ? "14px" : "22px",

    borderRadius: isMobile ? "18px" : "22px",

    background:
      "linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04))",

    border:
      "1px solid rgba(255,255,255,.08)",

    backdropFilter: "blur(20px)",

    boxShadow:
      "0 15px 40px rgba(0,0,0,.25)",
  }}
>
  <div
    style={{
      display: "grid",

      gridTemplateColumns:
        "repeat(3,1fr)",

      gap: isMobile ? "10px" : "24px",
    }}
  >
    {[
      ["20+", "Years Experience"],
      ["500+", "Clients Served"],
      ["30+", "Industries"],
    ].map(([value, label]) => (
      <div
        key={value}
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            color: "#60A5FA",

            fontWeight: 800,

            fontSize: isMobile
              ? "24px"
              : "34px",

            lineHeight: 1,
          }}
        >
          {value}
        </div>

        <div
          style={{
            marginTop: "6px",

            color: "#CBD5E1",

            fontSize: isMobile
              ? "11px"
              : "14px",

            fontWeight: 500,
          }}
        >
          {label}
        </div>
      </div>
    ))}
  </div>
</div>
  </div>
</section>
{/* VISION & MISSION */}
<section
  style={{
    padding: isMobile ? "80px 20px" : "140px 40px",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* BACKGROUND GLOW */}
  <div
    style={{
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "1000px",
      height: "500px",
      background:
        "radial-gradient(circle, rgba(91,140,255,0.15) 0%, transparent 70%)",
      filter: "blur(120px)",
      pointerEvents: "none",
    }}
  />

  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    }}
  >
    {/* HEADER */}
    <div
      style={{
        textAlign: "center",
        marginBottom: isMobile ? "50px" : "80px",
      }}
    >
      <div
        style={{
          color: "#7C8BFF",
          fontSize: "18px",
          letterSpacing: "4px",
          fontWeight: 600,
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        OUR PURPOSE
      </div>

      <h2
        style={{
          fontSize: isMobile ? "38px" : "55px",
          fontWeight: 800,
          lineHeight: 1,
          marginBottom: "24px",
          letterSpacing: "-3px",
        }}
      >
        Vision &{" "}
        <span
          style={{
            background:
              "linear-gradient(90deg,#5B8CFF,#B08BFF,#FF6B81)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mission
        </span>
      </h2>

      <p
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          color: "#CBD5E1",
          lineHeight: 1.8,
          fontSize: isMobile ? "15px" : "22px",
        }}
      >
        We are committed to empowering organizations
        through people, driving sustainable growth and
        long-term success.
      </p>
    </div>

    {/* CARDS */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "1fr 1.15fr",
        gap: "30px",
      }}
    >
      {/* VISION */}
      <div
        style={{
          borderRadius: "32px",
          padding: isMobile ? "28px" : "40px",
          background:
            "linear-gradient(180deg,rgba(91,140,255,0.12),rgba(15,23,42,0.9))",
          border: "1px solid rgba(91,140,255,0.25)",
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "999px",
            border: "1px solid rgba(176,139,255,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "42px",
            marginBottom: "30px",
            color: "#B08BFF",
            background:
              "rgba(176,139,255,0.08)",
          }}
        >
          🚩
        </div>

        <div
          style={{
            color: "#B08BFF",
            letterSpacing: "4px",
            fontWeight: 700,
            marginBottom: "18px",
          }}
        >
          OUR VISION
        </div>

        <h3
          style={{
            fontSize: isMobile ? "36px" : "58px",
            lineHeight: 1.1,
            marginBottom: "30px",
          }}
        >
          To be a trusted partner
          <br />
          in advancing Human
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg,#5B8CFF,#B08BFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Potential.
          </span>
        </h3>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: isMobile ? "15px" : "20px",
            lineHeight: 1.9,
          }}
        >
          To contribute to the advancement of Human
          Resources development by delivering strategic
          talent solutions, workforce support, and
          professional career services that create
          long-term value for organizations and
          individuals.
        </p>

        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(176,139,255,0.25), transparent)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* MISSION */}
      <div
        style={{
          borderRadius: "32px",
          padding: isMobile ? "32px" : "50px",
          background:
            "linear-gradient(180deg,rgba(255,107,129,0.08),rgba(15,23,42,0.9))",
          border: "1px solid rgba(255,107,129,0.2)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "999px",
            border: "1px solid rgba(255,107,129,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "42px",
            marginBottom: "30px",
            color: "#FF6B81",
            background:
              "rgba(255,107,129,0.08)",
          }}
        >
          🚀
        </div>

        <div
          style={{
            color: "#FF6B81",
            letterSpacing: "4px",
            fontWeight: 700,
            marginBottom: "18px",
          }}
        >
          OUR MISSION
        </div>

        <h3
          style={{
            fontSize: isMobile ? "42px" : "64px",
            marginBottom: "15px",
          }}
        >
          Our Mission
        </h3>

        {[
          "Support organizations in identifying and attracting the right candidates based on workforce needs.",
          "Deliver structured employee assessment and HR processes aligned with client expectations.",
          "Contribute to productive, professional, and engaged work environments.",
          "Provide practical HR solutions that drive performance and business success.",
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: isMobile ? "18px" : "24px",
              marginBottom: "10px",
              borderRadius: "20px",
              background:
                "rgba(255,255,255,0.04)",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                minWidth: isMobile ? "58px" : "72px",
                height: isMobile ? "58px" : "72px",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg,#5B8CFF,#B08BFF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "24px" : "32px",
                fontWeight: 800,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div
              style={{
                color: "#E2E8F0",
                lineHeight: 1.8,
                fontSize: isMobile ? "14px" : "18px",
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      

      {/* WHY VD FOKUS */}

<div
  style={{
    marginTop: isMobile ? "80px" : "140px",
  }}
>
  {/* HEADER */}

  <div
    style={{
      textAlign: "center",
      marginBottom: isMobile ? "40px" : "70px",
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
        fontSize: isMobile ? "42px" : "72px",
        lineHeight: 1,
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
        Choose Us
      </span>
    </h2>
  </div>

  {/* GRID */}

  <div
    style={{
      display: "grid",

      gridTemplateColumns:
        isMobile
          ? "1fr 1fr"
          : "1fr 1fr",

      gap: isMobile ? "14px" : "28px",
    }}
  >
    {[
      {
        icon: Briefcase,
        title: "Real Hiring Experience",
        desc:
          "Built from years of practical recruitment and workforce management experience.",
      },

      {
        icon: ShieldCheck,
        title: "Structured Evaluation",
        desc:
          "Professional screening and assessment processes that reduce hiring risk and improve hiring quality.",
      },

      {
        icon: Users,
        title: "Fast Response Time",
        desc:
          "Responsive support and efficient execution to meet urgent hiring and business requirements.",
      },

      {
        icon: GraduationCap,
        title: "Professional Standards",
        desc:
          "Confidential, ethical, and quality-driven services designed for long-term partnerships.",
      },
    ].map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          style={{
            position: "relative",

            overflow: "hidden",

            borderRadius: isMobile
              ? "20px"
              : "32px",

            padding: isMobile
              ? "18px"
              : "44px",

            minHeight: isMobile
              ? "220px"
              : "300px",

            background:
              "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",

            border:
              "1px solid rgba(255,255,255,.08)",

            backdropFilter: "blur(20px)",
          }}
        >
          {/* GLOW */}

          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",

              width: "180px",
              height: "180px",

              borderRadius: "50%",

              background:
                "radial-gradient(circle, rgba(96,165,250,.12), transparent)",

              filter: "blur(60px)",
            }}
          />

          {/* ICON */}

          <div
            style={{
              width: isMobile
                ? "58px"
                : "86px",

              height: isMobile
                ? "58px"
                : "86px",

              borderRadius: isMobile
                ? "18px"
                : "24px",

              background:
                "rgba(96,165,250,.10)",

              border:
                "1px solid rgba(96,165,250,.12)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              marginBottom: isMobile
                ? "18px"
                : "30px",
            }}
          >
            <Icon
              size={isMobile ? 28 : 42}
              color="#7DA2FF"
            />
          </div>

          {/* TITLE */}

          <h3
            style={{
              fontSize: isMobile
                ? "18px"
                : "30px",

              fontWeight: 700,

              lineHeight: 1.2,

              marginBottom: isMobile
                ? "12px"
                : "22px",

              color: "#FFFFFF",
            }}
          >
            {item.title}
          </h3>

          {/* DESC */}

          <p
            style={{
              color: "#94A3B8",

              lineHeight: 1.8,

              fontSize: isMobile
                ? "13px"
                : "18px",

              margin: 0,
            }}
          >
            {item.desc}
          </p>
        </div>
      );
    })}
  </div>
</div>

      {/* HOW WE WORK */}
<section
  id="process"
  data-animate="process"
  style={{
    ...getAnimation("process"),

    padding: isMobile
      ? "60px 20px"
      : "90px 40px",

    position: "relative",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >
    {/* HEADER */}
    <div
      style={{
        textAlign: "center",

        marginBottom:
          isMobile
            ? "30px"
            : "50px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",

          gap: "10px",

          padding: "10px 18px",

          borderRadius: "999px",

          background:
            "rgba(255,255,255,.04)",

          border:
            "1px solid rgba(255,255,255,.08)",

          marginBottom: "20px",
        }}
      >
        <img
          src="/Logo.png"
          alt="VD Fokus"
          style={{
            width: "22px",
            height: "22px",
            objectFit: "contain",
          }}
        />

        <span
          style={{
            color: "#CBD5E1",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          HOW WE WORK
        </span>
      </div>

      <h2
        style={{
          fontSize:
            isMobile
              ? "34px"
              : "58px",

          fontWeight: 700,

          lineHeight: 1.05,

          marginBottom: "16px",
        }}
      >
        Structured &
        <br />

        <span
          style={{
            background:
              "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",

            WebkitBackgroundClip:
              "text",

            WebkitTextFillColor:
              "transparent",
          }}
        >
          Outcome Focused
        </span>
      </h2>

      <p
        style={{
          maxWidth: "720px",

          margin: "0 auto",

          color: "#94A3B8",

          fontSize:
            isMobile
              ? "14px"
              : "18px",

          lineHeight: 1.8,
        }}
      >
        Every engagement follows a
        structured methodology designed
        to reduce risk, improve hiring
        quality, and deliver measurable
        business results.
      </p>
    </div>

    {/* STEPS */}
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          isMobile
            ? "1fr"
            : "repeat(4,minmax(0,1fr))",

        gap:
          isMobile
            ? "16px"
            : "24px",
      }}
    >
      {[
        {
          step: "01",
          title:
            "Understand Business Needs",

          icon: Search,

          description:
            "We begin by understanding your organization, culture, and workforce requirements.",
        },

        {
          step: "02",
          title:
            "Evaluate Talent & Risk",

          icon: UserCheck,

          description:
            "Structured assessments and screening processes ensure candidate suitability.",
        },

        {
          step: "03",
          title:
            "Deliver Strategic Solutions",

          icon: GraduationCap,

          description:
            "We provide tailored recommendations and talent solutions aligned with your objectives.",
        },

        {
          step: "04",
          title:
            "Support Long-Term Growth",

          icon: Rocket,

          description:
            "Our partnership continues beyond placement to help sustain long-term success.",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.step}
            style={{
              position: "relative",

              background:
                "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",

              border:
                "1px solid rgba(255,255,255,.08)",

              backdropFilter:
                "blur(16px)",

              borderRadius:
                isMobile
                  ? "18px"
                  : "24px",

              padding:
                isMobile
                  ? "22px"
                  : "30px",
            }}
          >
            {/* STEP NUMBER */}
            <div
              style={{
                position: "absolute",

                top: "20px",
                right: "20px",

                color:
                  "rgba(96,165,250,.25)",

                fontSize:
                  isMobile
                    ? "24px"
                    : "34px",

                fontWeight: 800,
              }}
            >
              {item.step}
            </div>

            {/* ICON */}
            <div
              style={{
                width:
                  isMobile
                    ? "52px"
                    : "64px",

                height:
                  isMobile
                    ? "52px"
                    : "64px",

                display: "flex",
                alignItems: "center",
                justifyContent:
                  "center",

                borderRadius:
                  "16px",

                background:
                  "rgba(96,165,250,.12)",

                marginBottom:
                  "20px",
              }}
            >
              <Icon
                size={
                  isMobile
                    ? 24
                    : 30
                }
                color="#60A5FA"
              />
            </div>

            <h3
              style={{
                fontSize:
                  isMobile
                    ? "20px"
                    : "24px",

                fontWeight: 700,

                marginBottom:
                  "12px",

                lineHeight: 1.3,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#94A3B8",

                fontSize:
                  isMobile
                    ? "13px"
                    : "15px",

                lineHeight: 1.8,
              }}
            >
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* VISIT US */}
<section
  id="visit"
  data-animate="visit"
  style={{
    ...getAnimation("visit"),

    padding: isMobile
      ? "60px 20px"
      : "90px 40px",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",

      padding: isMobile
        ? "30px 20px"
        : "70px",

      borderRadius:
        isMobile
          ? "24px"
          : "36px",

      background:
        "linear-gradient(135deg,#0B1D4A 0%, #061127 100%)",

      border:
        "1px solid rgba(96,165,250,.25)",

      boxShadow:
        "0 0 80px rgba(37,99,235,.12)",

      overflow: "hidden",
    }}
  >
    {/* BADGE */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",

        marginBottom:
          isMobile
            ? "30px"
            : "50px",
      }}
    >
      <div
        style={{
          borderRadius: "999px",

          background:
            "rgba(79,141,255,.15)",

          color: "#6EA8FF",

          fontWeight: 700,

          padding:
            isMobile
              ? "7px 12px"
              : "10px 18px",

          fontSize:
            isMobile
              ? "11px"
              : "14px",
        }}
      >
        📍 VISIT US
      </div>
    </div>

    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          isMobile
            ? "1fr"
            : "0.9fr 1.1fr",

       gap:
  isMobile
    ? "16px"
    : "24px",

        alignItems: "center",
      }}
    >
      {/* LEFT */}
      <div>
        <h2
          style={{
            fontSize:
              isMobile
                ? "36px"
                : "58px",

            lineHeight: "0.95",

            fontWeight: 800,

            margin: "0 0 20px 0",

            letterSpacing:
              isMobile
                ? "-1px"
                : "-2px",
          }}
        >
          Let’s Work
          <br />

          <span
            style={{
              color: "#6EA8FF",
            }}
          >
            Together
          </span>
        </h2>

        <p
          style={{
            fontSize:
              isMobile
                ? "15px"
                : "20px",

            lineHeight: 1.7,

            color: "#94A3B8",

            marginBottom:
              isMobile
                ? "28px"
                : "40px",
          }}
        >
          Visit our office to discuss
          recruitment, assessment,
          outsourcing, and HR consulting
          solutions tailored to your
          organization.
        </p>

        {/* INFO ITEMS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            gap:
              isMobile
                ? "16px"
                : "25px",
          }}
        >
          {/* OFFICE */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width:
                  isMobile
                    ? "44px"
                    : "56px",

                height:
                  isMobile
                    ? "44px"
                    : "56px",

                borderRadius: "50%",

                background:
                  "rgba(79,141,255,.15)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Building2
                size={24}
                color="#6EA8FF"
              />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 700,

                  fontSize:
                    isMobile
                      ? "16px"
                      : "20px",
                }}
              >
                PT Vera Diana Fokus
              </div>

              <div
                style={{
                  color: "#94A3B8",

                  fontSize:
                    isMobile
                      ? "13px"
                      : "16px",

                  lineHeight: 1.5,
                }}
              >
                City Walk 07
                <br />
                Citra Gran Cibubur
                <br />
                Bekasi, West Java
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width:
                  isMobile
                    ? "44px"
                    : "56px",

                height:
                  isMobile
                    ? "44px"
                    : "56px",

                borderRadius: "50%",

                background:
                  "rgba(79,141,255,.15)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Phone
                size={24}
                color="#6EA8FF"
              />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 700,
                }}
              >
                WhatsApp
              </div>

              <div
                style={{
                  color: "#94A3B8",
                }}
              >
                +62 851 2130 5329
              </div>
            </div>
          </div>

          {/* HOURS */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width:
                  isMobile
                    ? "44px"
                    : "56px",

                height:
                  isMobile
                    ? "44px"
                    : "56px",

                borderRadius: "50%",

                background:
                  "rgba(79,141,255,.15)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Clock3
                size={24}
                color="#6EA8FF"
              />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 700,
                }}
              >
                Business Hours
              </div>

              <div
                style={{
                  color: "#94A3B8",
                }}
              >
                Mon - Fri, 09:00 - 17:00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <div
          style={{
            borderRadius:
              isMobile
                ? "20px"
                : "28px",

            overflow: "hidden",

            border:
              "1px solid rgba(96,165,250,.2)",

            height:
              isMobile
                ? "260px"
                : "420px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0802198288106!2d106.9222584752398!3d-6.383647493606722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eca6f3044d57%3A0xc450d917c4dc0083!2sPT%20Vera%20Diana%20Fokus!5e0!3m2!1sen!2sid!4v1781247224592!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* DIRECTIONS BUTTON */}
        <a
          href="https://maps.app.goo.gl/9xvMcERRXxtgFLat5"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: "10px",

            marginTop: "18px",

            height:
              isMobile
                ? "52px"
                : "60px",

            borderRadius: "999px",

            background:
              "linear-gradient(135deg,#2563EB,#60A5FA)",

            color: "#fff",

            textDecoration: "none",

            fontWeight: 700,

            fontSize:
              isMobile
                ? "14px"
                : "16px",

            boxShadow:
              "0 10px 30px rgba(37,99,235,.25)",
          }}
        >
          <MapPin size={18} />
          Get Directions
        </a>
      </div>
    </div>
  </div>
</section>
<style jsx>{`
  @keyframes floatLogo {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-12px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`}</style>
    </main>
  );
}