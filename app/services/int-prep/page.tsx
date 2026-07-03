"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";
import { translations } from "../../translations";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  CheckCircle2,
  Users,
  TrendingUp,
  Briefcase,
  Award,
  MessageCircle
} from "lucide-react";

export default function Page() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

const testimonials = [
  {
    quote:
      "After applying the changes, I finally started getting interview calls within 2 weeks.",
    name: "Senior Candidate",
    role: "Operations Manager",
    image: "/testimonial-1.png",
  },
  {
    quote:
      "The interview preparation completely changed how I present myself. I felt much more confident.",
    name: "Mid-Level Professional",
    role: "Finance Analyst",
    image: "/testimonial-2.png",
  },
  {
    quote:
      "This helped me understand what hiring managers actually look for. Huge difference.",
    name: "Job Seeker",
    role: "Business Analyst",
    image: "/testimonial-3.png",
  },

];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial(
      (prev) => (prev + 1) % testimonials.length
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();

  window.addEventListener("resize", checkMobile);

  return () =>
    window.removeEventListener(
      "resize",
      checkMobile
    );
}, []);
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems: { name: string; id: string }[] = [
  { name: "Home", id: "cas-hero" },
  { name: "Problem", id: "cas-problem" },
  { name: "Why Us", id: "cas-why" },
  { name: "Process", id: "cas-process" },
  { name: "Package", id: "cas-package" },
  { name: "Visit", id: "cas-visit" }
];
const { language } = useLanguage();

const t =
  translations[
    language as keyof typeof translations
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

     {/* HERO */}
<section
  id="cas-hero"
  style={{
    position: "relative",

    minHeight: isMobile
      ? "720px"
      : "620px",

    display: "flex",
    alignItems: "center",

    overflow: "hidden",
    borderRadius: "24px",

    marginBottom: isMobile
      ? "0px"
      : "20px",
  }}
>
  {/* Background Image */}
  <img
  src={isMobile ? "/cas-hero-mobile.png" : "/cas-hero.png"}
  alt="Career Acceleration Services"
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

  {/* Dark Overlay */}
  <div
  style={{
    position: "absolute",
    inset: 0,
    background: isMobile
      ? `
      linear-gradient(
      90deg,
      rgba(2,6,23,0.96) 0%,
      rgba(2,6,23,0.88) 45%,
      rgba(2,6,23,0.55) 100%
      )
    `
      : `
      linear-gradient(
      90deg,
      rgba(2,6,23,0.9) 0%,
      rgba(2,6,23,0.7) 45%,
      rgba(2,6,23,0.35) 100%
      )
    `,
    zIndex: 1,
  }}
/>

  {/* Content */}
  <div
  style={{
    position: "relative",
    zIndex: 2,
    maxWidth: "540px",

    padding: isMobile
      ? "90px 28px 40px"
      : "160px 60px 60px",
  }}
>
  
    {/* Badge */}
    <div
  style={{
    color: "#5B8CFF",
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: "2px",
    marginBottom: "10px",
  }}
>
  CAREER ACCELERATION SERVICES
</div>

   <h1
  style={{
    fontSize: isMobile ? "48px" : "72px",
    lineHeight: "0.95",
    fontWeight: 700,
    marginBottom: "8px",
  }}
>
  Get Selected,
</h1>

<div
  style={{
    fontSize: isMobile ? "38px" : "72px",
    lineHeight: "0.95",
    fontWeight: 700,
    background:
      "linear-gradient(90deg,#5B8CFF,#B08BFF,#FF6B81)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
    marginBottom: "24px",
  }}
>
  Not Just
  <br />
  Interviewed
</div>

   <p
  style={{
    color: "#E2E8F0",
    fontSize: isMobile ? "15px" : "18px",
    lineHeight: "1.7",
    marginBottom: "10px",
  }}
>
  Professional coaching and real hiring
  insights to help you pass interviews
  and land the right opportunity.
</p>
{/* Trust Points */}
   <div
  style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",

    marginBottom: isMobile
      ? "32px"
      : "40px",
  }}
>
  {[
    {
      icon: CheckCircle2,
      title: "Hiring Insights",
    },
    {
      icon: Users,
      title: "Mock Interview",
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

          background: "rgba(255,255,255,0.05)",

          border: "1px solid rgba(255,255,255,0.1)",

          backdropFilter: "blur(10px)",

          whiteSpace: "nowrap",
        }}
      >
        <Icon
          size={16}
          color="#5B8CFF"
        />

        <span
          style={{
            fontSize: "11px",
            fontWeight: 500,
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
    gap: "16px",
    flexWrap: "wrap",

    marginBottom: isMobile
      ? "32px"
      : "40px",
  }}
>
    <a
  href="https://wa.me/6285121305329"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",

    width: isMobile ? "100%" : "280px",
    height: isMobile ? "58px" : "62px",

    borderRadius: "18px",

    background:
      "linear-gradient(135deg,#25D366 0%,#16A34A 100%)",

    border: "1px solid rgba(255,255,255,0.15)",

    color: "#fff",
    fontSize: isMobile ? "17px" : "18px",
    fontWeight: 700,
    textDecoration: "none",

    boxShadow:
      "0 10px 30px rgba(37,211,102,.35)",

    transition: "all .3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-3px)";
    e.currentTarget.style.boxShadow =
      "0 15px 40px rgba(37,211,102,.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 10px 30px rgba(37,211,102,.35)";
  }}
>
  <FaWhatsapp size={20} />
  Book Consultation
</a>

      <a
  href="#cas-package"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",

    width: isMobile ? "100%" : "220px",
    height: isMobile ? "58px" : "62px",

    borderRadius: "18px",

    background:
      "rgba(255,255,255,0.04)",

    backdropFilter: "blur(20px)",

    border:
      "1px solid rgba(255,255,255,0.12)",

    color: "#fff",
    textDecoration: "none",

    fontWeight: 600,
    fontSize: "16px",

    transition: "all .3s ease",
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
  Learn More

  <span
    style={{
      fontSize: "18px",
    }}
  >
    →
  </span>
</a>
    </div>
<div
  style={{
    padding: "18px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,193,7,0.25)",
    backdropFilter: "blur(10px)",
  }}
>
  <div
    style={{
      color: "#FBBF24",
      fontWeight: 700,
      marginBottom: "6px",
    }}
  >
    This Week Offer — Limited 5 Slots!
  </div>

  <div
    style={{
      color: "#CBD5E1",
      fontSize: "14px",
    }}
  >
    Secure your slot before it's full.
  </div>
</div>

  </div>
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
    maxWidth: "1400px",
    margin: "0 auto",
    padding: isMobile ? "0 12px 40px" : "0 40px 60px",
  }}
>
  {/* PROBLEM VS SOLUTION */}
  <div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "20px" : "32px",
    width: "100%",
    marginBottom: "20px",
  }}
>

     
    {/* PROBLEM CARD */}
    <div
  style={{
  flex: 1,
  border: "1px solid rgba(239,68,68,0.2)",
  position: "relative",
  minHeight: "520px",
  borderRadius: "24px",
  overflow: "hidden",
  background: "linear-gradient(135deg,#020617,#12040a)",
}}
>
      {/* IMAGE */}
    <div
  style={{
    position: "absolute",
    right: isMobile ? "-20px" : "0",
    top: isMobile ? "0px" : "-25px",

    width: isMobile ? "52%" : "65%",
    height: isMobile ? "280px" : "100%",

    zIndex: 2,
  }}
>
     <Image
  src="/problem-candidate.png"
  alt="Problem Candidate"
  fill
  style={{
    objectFit: "contain",
    objectPosition: "right top",

    opacity: 0.95,

    transform: isMobile
      ? "scale(0.95)"
      : "scale(0.78)",
  }}
/>
    </div>

      {/* OVERLAY */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: isMobile
  ? `
    linear-gradient(
      90deg,
      rgba(2,6,23,0.98) 0%,
      rgba(2,6,23,0.92) 55%,
      rgba(2,6,23,0.55) 100%
    )
  `
  : `
    linear-gradient(
      90deg,
      rgba(2,6,23,0.97) 35%,
      rgba(2,6,23,0.7) 70%,
      rgba(127,29,29,0.15) 100%
    )
  `,
      }}
    />

      <div
  style={{
    position: "relative",
    zIndex: 3,

    width: isMobile ? "100%" : "52%",

    padding: isMobile
      ? "32px 28px"
      : "42px",
  }}
>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "999px",
            background: "rgba(255,80,80,.12)",
            color: "#f87171",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom:"10px"
          }}
        >
          ✕ THE PROBLEM
         </div>

      <h2
        style={{
          fontSize: isMobile ? "26px" : "40px",
          lineHeight: "0.95",
          fontWeight: 700,
          marginBottom: "20px",
          letterSpacing: "-2px",
        }}
      >
        Why You Keep
        <br />
        <span style={{ color: "#fb7185" }}>
          Failing Interviews
        </span>
      </h2>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "15px",
          lineHeight: 1.7,
          marginBottom: "42px",
        }}
      >
        Most candidates don't fail
        because they lack experience.
        They fail because they present
        it poorly.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "14px" : "18px",
        }}
      >
        {[
          "No structured interview preparation",
          "Lack of real feedback or practice",
          "Weak communication & body language",
        ].map((item, index) => (
          <div
            key={`problem-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border:
                  "2px solid #fb7185",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fb7185",
                fontWeight: 700,
              }}
            >
              ✕
            </div>

            <span
              style={{
                fontSize: "15px",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>

    {/* SOLUTION CARD */}
    <div
    style={{
  flex: 1,
  border: "1px solid rgba(110,168,255,.45)",
  position: "relative",
  minHeight: "520px",
  borderRadius: "24px",
  overflow: "hidden",
  background: "linear-gradient(135deg,#102A5C 0%, #071428 100%)",
}}
  >
     <div
      style={{
        position: "absolute",
        right: isMobile ? "-20px" : "-50px",
        top: isMobile ? "30px" : "0",
        width: isMobile ? "52%" : "65%",
        height: isMobile ? "280px" : "100%"
      }}
    >
      <Image
        src="/solution-candidate1.png"
        alt="Solution Candidate"
        fill
        style={{
          objectFit: "contain",
          objectPosition: "right bottom",
          opacity: 0.95,
         transform: isMobile
          ? "scale(0.95)"
          : "scale(0.99)",
        }}
      />
    </div>

     <div
  style={{
    position: "absolute",
    right: "-100px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(79, 141, 255, 0.66) 0%, transparent 70%)",
    filter: "blur(60px)",
    zIndex: 1,
  }}
/>

       {/* CONTENT */}
    <div
      style={{
        position: "relative",
        zIndex: 3,
        width: isMobile ? "100%" : "48%",
        padding: isMobile
  ? "28px 28px 20px"
  : "42px",
paddingRight: isMobile ? "180px" : "42px",
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          borderRadius: "999px",
          background:
            "rgba(59,130,246,0.12)",
          color: "#60A5FA",
          fontWeight: 600,
          fontSize: "13px",
          marginBottom: "30px",
        }}
      >
        ✓ THE SOLUTION
      </div>

        <h2
        style={{
          fontSize: isMobile ? "26px" : "40px",
          lineHeight: "0.95",
          fontWeight: 700,
          marginBottom: "28px",
          letterSpacing: "-2px",
        }}
      >
        Why VD Fokus
        <br />
        <span style={{ color: "#60A5FA" }}>
          Gets You Selected
        </span>
      </h2>

      <p
  style={{
    color: "#94A3B8",
    fontSize: "15px",
    lineHeight: 1.8,
    marginBottom: isMobile ? "28px" : "42px",
  }}
>
  {isMobile ? (
    <>
      We know what hiring managers
      <br />
      actually look for because
      <br />
      we've been on the other side.
    </>
  ) : (
    <>
      We know what hiring managers actually look for because
      <br />
      we've been on the other side.
    </>
  )}
</p>

        <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {[
          "20+ years of Executive Search experience",
          "Direct insight into hiring decisions",
          "Proven strategies to get shortlisted",
          "Focused on real outcomes: interviews & offers",
        ].map((item, index) => (
          <div
            key={`solution-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "14px" : "22px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background:
                  "rgba(59,130,246,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#60A5FA",
                fontWeight: 700,
              }}
            >
              ✓
            </div>

           <span
              style={{
               fontSize: isMobile ? "15px" : "18px",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

 {/* STATISTICS */}
<div
  style={{
    marginTop: isMobile ? "16px" : "80px",
    borderRadius: "24px",
    padding: isMobile ? "40px 24px" : "50px",
    background:
      "linear-gradient(180deg,#03143B,#020617)",
    border:
      "1px solid rgba(79,141,255,.15)",
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: isMobile ? "36px" : "50px",
    }}
  >
    <div
      style={{
        color: "#4F8DFF",
        letterSpacing: isMobile ? "3px" : "4px",
        fontSize: isMobile ? "14px" : "20px",
        fontWeight: 500,
        marginBottom: "14px",
        textTransform: "uppercase",
      }}
    >
      20+ Years of Executive Search Experience
    </div>

    <h2
  style={{
    fontSize: isMobile ? "30px" : "50px",
    lineHeight: isMobile ? "1" : "1.1",
    fontWeight: 700,
    margin: 0,
  }}
>
      Real Insights.
      <br />
      Real Results.
    </h2>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr 1fr"
        : "repeat(4,1fr)",
      gap: isMobile ? "16px" : "30px",
    }}
  >
    {[
      ["20+", "Years Experience"],
      ["1000+", "Candidates Evaluated"],
      ["500+", "Successful Placements"],
      ["30+", "Industries Served"],
    ].map(([value, label], index) => (
      <div
        key={`${value}-${index}`}
        style={{
          textAlign: "center",
          padding: isMobile ? "20px 12px" : "0",
          borderRadius: isMobile ? "16px" : "0",
          background: isMobile
            ? "rgba(255,255,255,0.03)"
            : "transparent",
          border: isMobile
            ? "1px solid rgba(255,255,255,0.08)"
            : "none",
        }}
      >
        <div
          style={{
            fontSize: isMobile ? "36px" : "48px",
            fontWeight: 700,
            color: "#6EA8FF",
            lineHeight: 1,
            marginBottom: "10px",
          }}
        >
          {value}
        </div>

        <div
          style={{
            color: "#94A3B8",
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: 1.35,
          }}
        >
          {label}
        </div>
      </div>
    ))}
  </div>
</div>

{/* SUCCESS STORIES */}

<div
  style={{
    marginTop: isMobile ? "40px" : "60px",
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: isMobile ? "28px" : "40px",
    }}
  >
    <div
      style={{
        color: "#F87171",
        fontSize: isMobile ? "12px" : "14px",
        letterSpacing: "2px",
        fontWeight: 600,
        marginBottom: "12px",
      }}
    >
      WHAT PROFESSIONALS SAY
    </div>

    <h2
      style={{
        fontSize: isMobile ? "28px" : "54px",
        fontWeight: 700,
        margin: 0,
        color: "#FFFFFF",
        lineHeight: 1.1,
      }}
    >
      Real Stories. Real Impact.
    </h2>
  </div>
{isMobile ? (
  <>
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,.95), rgba(2,6,23,.95))",
        border: "1px solid rgba(79,141,255,.15)",
        borderRadius: "16px",
        padding: "16px",
        minHeight: "140px",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          color: "#FF6B81",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        ❝
      </div>

      <p
        style={{
          color: "#E2E8F0",
          fontSize: "13px",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {testimonials[activeTestimonial].quote}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "12px",
        }}
      >
        <img
          src={testimonials[activeTestimonial].image}
          alt={testimonials[activeTestimonial].name}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "999px",
            objectFit: "cover",
          }}
        />

        <div>
          <div
            style={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "13px",
            }}
          >
            {testimonials[activeTestimonial].name}
          </div>

          <div
            style={{
              color: "#4F8DFF",
              fontSize: "11px",
            }}
          >
            {testimonials[activeTestimonial].role}
          </div>
        </div>
      </div>
    </div>

    {/* Dots */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginTop: "16px",
      }}
    >
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveTestimonial(index)}
          style={{
            width:
              activeTestimonial === index
                ? "24px"
                : "8px",
            height: "8px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            transition: "all .3s ease",
            background:
              activeTestimonial === index
                ? "#4F8DFF"
                : "rgba(255,255,255,.2)",
          }}
        />
      ))}
    </div>
  </>
) : (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px",
    }}
  >
    {testimonials.map((item, index) => (
      <div
        key={index}
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,.95), rgba(2,6,23,.95))",
          border: "1px solid rgba(79,141,255,.15)",
          borderRadius: "24px",
          padding: "32px",
          minHeight: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backdropFilter: "blur(20px)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "40px",
              color: "#FF6B81",
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            ❝
          </div>

          <p
            style={{
              color: "#E2E8F0",
              fontSize: "20px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {item.quote}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginTop: "28px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "999px",
              objectFit: "cover",
            }}
          />

          <div>
            <div
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              {item.name}
            </div>

            <div
              style={{
                color: "#4F8DFF",
                fontSize: "15px",
              }}
            >
              {item.role}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

 <div
  style={{
    textAlign: "center",
    marginTop: isMobile ? "16px" : "24px",
    marginBottom: isMobile ? "48px" : "80px",
    color: "#94A3B8",
    fontSize: isMobile ? "11px" : "14px",
    lineHeight: 1.5,
  }}
>
  * Results may vary. We provide strategies and guidance based on real hiring insights.
</div>
</div>
  {/* HIW */}
  <div
    style={{
      textAlign: "center",
      marginBottom: "60px"
    }}
  >
    <div
      style={{
        color: "#FF6B81",
        letterSpacing: "4px",
        fontSize: "14px",
        fontWeight: 600,
        marginBottom: "12px"
      }}
    >
      HOW IT WORKS
    </div>

    <h2
      style={{
        fontSize: isMobile ? "42px" : "64px",
        fontWeight: 700,
        lineHeight: 1.1,
        margin: 0
      }}
    >
      Simple Steps. Real Results.
    </h2>

    <p
      style={{
        color: "#94A3B8",
        marginTop: "16px",
        fontSize: "18px"
      }}
    >
      A proven process designed to help you get selected.
    </p>
  </div>

  {/* STEPS */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr auto 1fr",
      gap: "20px",
      alignItems: "center"
    }}
  >
    {/* STEP 1 */}
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
        border: "1px solid rgba(79,141,255,0.15)",
        borderRadius: "28px",
        padding: isMobile ? "20px" : "40px 30px",
        minHeight: isMobile ? "220px" : "380px",
        position: "relative"
      }}
    >
      <div
        style={{
          color: "#FF6B81",
          fontSize: isMobile ? "24px" : "38px",
          marginBottom: isMobile ? "12px" : "30px",
          fontWeight: 700,
          
        }}
      >
        01
      </div>

      <div
  style={{
    width: isMobile ? "72px" : "110px",
    height: isMobile ? "72px" : "110px",
    margin: isMobile ? "0 auto 16px" : "0 auto 30px",
    borderRadius: "999px",
    background:
      "radial-gradient(circle, rgba(79,141,255,0.20) 0%, rgba(79,141,255,0.08) 70%, transparent 100%)",
    border: "1px solid rgba(79,141,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 0 30px rgba(79,141,255,0.15)"
  }}
>
  <svg
   width={isMobile ? 32 : 50}
height={isMobile ? 32 : 50}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FF6B81"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 10h18" />
  </svg>
</div>

      <h3
        style={{
          fontSize: isMobile ? "22px" : "34px",
          marginBottom: isMobile ? "10px" : "20px",
          lineHeight: 1.1,
        }}
      >
        Book Your Session
      </h3>

      <p
        style={{
          color: "#94A3B8",
         fontSize: isMobile ? "14px" : "17px",
        lineHeight: isMobile ? 1.6 : 1.8,
        }}
      >
        Contact us via WhatsApp to secure your slot.
        Limited sessions available each week.
      </p>
    </div>

    {!isMobile ? (
  <div
    style={{
      width: "52px",
      height: "52px",
      borderRadius: "999px",
      background: "rgba(79,141,255,.08)",
      border: "1px solid rgba(79,141,255,.18)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#6EA8FF",
      backdropFilter: "blur(10px)",
    }}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  </div>
) : (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      margin: "-4px 0",
    }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6EA8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12l7 7 7-7" />
    </svg>
  </div>
)}

    {/* STEP 2 */}
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
        border: "1px solid rgba(79,141,255,0.15)",
        borderRadius: "28px",
        padding: isMobile ? "20px" : "40px 30px",
        minHeight: isMobile ? "220px" : "380px",
        position: "relative"
      }}
    >
      <div
        style={{
          color: "#FF6B81",
          fontSize: isMobile ? "24px" : "38px",
          marginBottom: isMobile ? "12px" : "30px",
          fontWeight: 700,
          
        }}
      >
        02
      </div>

      <div
  style={{
    width: isMobile ? "72px" : "110px",
    height: isMobile ? "72px" : "110px",
    margin: isMobile ? "0 auto 16px" : "0 auto 30px",
    borderRadius: "999px",
    background:
      "radial-gradient(circle, rgba(79,141,255,0.20) 0%, rgba(79,141,255,0.08) 70%, transparent 100%)",
    border: "1px solid rgba(79,141,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 0 30px rgba(79,141,255,0.15)"
  }}
>
  <svg
   width={isMobile ? 32 : 50}
height={isMobile ? 32 : 50}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FF6B81"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 10h18" />
  </svg>
</div>

      <h3
        style={{
          fontSize: isMobile ? "22px" : "34px",
          marginBottom: isMobile ? "10px" : "20px",
          lineHeight: 1.1,
        }}
      >
        Get Personalized Strategy
      </h3>

       <p
        style={{
          color: "#94A3B8",
         fontSize: isMobile ? "14px" : "17px",
        lineHeight: isMobile ? 1.6 : 1.8,
        }}
      >
        Contact us via WhatsApp to secure your slot.
        Limited sessions available each week.
      </p>
    </div>

    {/* ARROW */}
    {!isMobile ? (
  <div
    style={{
      width: "52px",
      height: "52px",
      borderRadius: "999px",
      background: "rgba(79,141,255,.08)",
      border: "1px solid rgba(79,141,255,.18)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#6EA8FF",
      backdropFilter: "blur(10px)",
    }}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  </div>
) : (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      margin: "-4px 0",
    }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6EA8FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12l7 7 7-7" />
    </svg>
  </div>
)}

    {/* STEP 3 */}
     <div
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
        border: "1px solid rgba(79,141,255,0.15)",
        borderRadius: "28px",
        padding: isMobile ? "20px" : "40px 30px",
        minHeight: isMobile ? "220px" : "380px",
        position: "relative"
      }}
    >
      <div
        style={{
          color: "#FF6B81",
          fontSize: isMobile ? "24px" : "38px",
          marginBottom: isMobile ? "12px" : "30px",
          fontWeight: 700,
          
        }}
      >
        03
      </div>

     <div
  style={{
    width: isMobile ? "72px" : "110px",
    height: isMobile ? "72px" : "110px",
    margin: isMobile ? "0 auto 16px" : "0 auto 30px",
    borderRadius: "999px",
    background:
      "radial-gradient(circle, rgba(79,141,255,0.20) 0%, rgba(79,141,255,0.08) 70%, transparent 100%)",
    border: "1px solid rgba(79,141,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 0 30px rgba(79,141,255,0.15)"
  }}
>
  <svg
   width={isMobile ? 32 : 50}
height={isMobile ? 32 : 50}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FF6B81"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 10h18" />
  </svg>
</div>

      <h3
        style={{
          fontSize: isMobile ? "22px" : "34px",
          marginBottom: isMobile ? "10px" : "20px",
          lineHeight: 1.1,
        }}
      >
        Practice & Improve
      </h3>

      <p
        style={{
          color: "#94A3B8",
          lineHeight: 1.8,
          fontSize: "17px"
        }}
      >
        Go through mock interviews, structured answers,
        and real feedback to boost your performance.
      </p>
    </div>
  </div>
</div>
       {/* PACKAGE */}
<div
  id="cas-package"
  style={{
    maxWidth: "1400px",
    margin: isMobile ? "40px auto" : "120px auto",
    padding: isMobile ? "0 12px" : "0 40px",
    marginBottom: isMobile ? "14px" : "100px",
  }}
>
  <div
  style={{
    background:
      "linear-gradient(180deg,#03143B,#020617)",
    border: "1px solid rgba(79,141,255,.15)",
    borderRadius: isMobile ? "20px" : "28px",
    overflow: "hidden",
    boxShadow:
      "0 0 40px rgba(79,141,255,.08)",

    width: isMobile
      ? "100%"
      : showDetails
      ? "100%"
      : "720px",

    margin: isMobile
      ? "0"
      : "0 auto",

    transition: "all .4s ease",
  }}
>
    {/* HEADER */}
    <div
      style={{
        padding:
  isMobile
    ? "24px 18px"
    : showDetails
    ? "60px"
    : "50px 60px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 18px",
          borderRadius: "999px",
          background:
            "rgba(79,141,255,.12)",
          color: "#6EA8FF",
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "24px",
        }}
      >
        🚀 CAREER ACCELERATION SERVICE
      </div>

      <h2
        style={{
          margin: 0,
          fontSize: isMobile ? "28px" : "40px",
          lineHeight: 1.1,
          color: "#fff",
        }}
      >
        Career Acceleration
        <br />
        Services Package
      </h2>

      <p
        style={{
          color: "#94A3B8",
          fontSize: isMobile ? "14px" : "20px",
          marginTop: isMobile ? "14px" : "24px",
          maxWidth:
  isMobile
    ? "100%"
    : showDetails
    ? "700px"
    : "560px",
          lineHeight: 1.7,
        }}
      >
        Everything you need to get
        shortlisted, perform confidently,
        and secure job offers.
      </p>

      {/* PRICE */}
      <div
        style={{
          marginTop: isMobile ? "20px" : "35px",
          gap: isMobile ? "10px" : "18px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            textDecoration: "line-through",
            color: "#64748B",
            fontSize: isMobile ? "13px" : "20px",
          }}
        >
          IDR 400K
        </span>

        <span
          style={{
            color: "#fff",
            fontSize: isMobile ? "28px" : "30px",
            fontWeight: 800,
          }}
        >
          IDR 299K
        </span>
      </div>

      {/* OFFER */}
<div
  style={{
    marginTop: "24px",
    color: "#FACC15",
    fontSize: isMobile ? "14px" : "18px",
    fontWeight: 600,
  }}
>
  🚀 This week Offer (Only 5 slots available)
</div>

{/* PACKAGE BENEFITS */}
<div
  style={{
    marginTop: "28px",
    marginBottom: "34px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }}
>
  {[
    "CV Optimization",
    "Interview Preparation",
    "Mock Interview Session + Feedback",
    "🎁 Free follow-up interview preparation when you receive your first interview call",
    "⏱ Optional extension: +IDR 100K / hour",
  ].map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
      }}
    >
      <span
        style={{
          color: "#5DD46B",
          fontSize: isMobile ? "20px" : "24px",
          lineHeight: 1,
        }}
      >
        ✓
      </span>

      <span
        style={{
          color: "#CBD5E1",
          fontSize: isMobile ? "15px" : "18px",
          lineHeight: 1.5,
        }}
      >
        {item}
      </span>
    </div>
  ))}
</div>

{/* BUTTONS */}
<div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: isMobile ? "20px" : "40px",
        }}
      >
        <button
          onClick={() =>
            setShowDetails(!showDetails)
          }
          style={{
            padding: isMobile ? "12px 18px" : "16px 28px",
            width: isMobile ? "100%" : "auto",
            justifyContent: "center",
            fontSize: isMobile ? "14px" : "16px",
            borderRadius: "999px",
            background: "transparent",
            border:
              "1px solid rgba(255,255,255,.15)",
            color: "#fff",
            cursor: "pointer",
            
          }}
        >
          {showDetails
            ? "Hide Details"
            : "See Full Details"}
        </button>

        <a
  href="https://wa.me/6285121305329"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    textDecoration: "none",
  }}
>
  <button
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "16px 28px",
      borderRadius: "999px",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "16px",
      color: "#fff",
      background:
        "linear-gradient(135deg,#25D366,#128C7E)",
      boxShadow:
        "0 0 25px rgba(37,211,102,.25)",
      transition: "all .3s ease",
    }}
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16.01 3C8.84 3 3 8.72 3 15.77c0 2.49.73 4.91 2.1 7L3.5 29l6.44-1.68a13.2 13.2 0 006.07 1.46C23.16 28.78 29 23.06 29 16.01S23.16 3 16.01 3zm0 23.48c-1.87 0-3.7-.5-5.3-1.46l-.38-.23-3.82 1 1.02-3.7-.25-.39a10.3 10.3 0 01-1.63-5.59c0-5.69 4.67-10.31 10.4-10.31 5.73 0 10.39 4.62 10.39 10.31s-4.66 10.37-10.43 10.37zm5.7-7.76c-.31-.15-1.83-.89-2.11-.99-.28-.1-.49-.15-.7.15-.2.3-.8.99-.98 1.19-.18.2-.36.23-.67.08-.31-.15-1.3-.47-2.48-1.5-.91-.8-1.53-1.79-1.71-2.09-.18-.3-.02-.46.13-.61.13-.13.31-.33.46-.49.15-.17.2-.28.31-.48.1-.2.05-.38-.03-.53-.08-.15-.7-1.69-.96-2.31-.25-.61-.51-.53-.7-.54h-.6c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.98 1.25 3.19c.15.2 2.16 3.29 5.24 4.61.73.31 1.3.5 1.75.64.73.23 1.39.2 1.91.12.58-.09 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.2-.59-.35z" />
    </svg>

    Book Now
  </button>
</a>
      </div>
    </div>

    {/* EXPANDABLE DETAILS */}
    {showDetails && (
      <div
        style={{
          borderTop:
            "1px solid rgba(255,255,255,.08)",
          padding: isMobile ? "30px" : "50px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
       {/* BENEFITS */}
<div>
  <h3
    style={{
      color: "#fff",
      marginBottom: isMobile ? "20px" : "25px",
      textAlign: "center",
      fontSize: isMobile ? "24px" : "32px",
      lineHeight: 1.1,
    }}
  >
    What You Will Gain
  </h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
      ? "1fr 1fr"
      : "repeat(3, minmax(0, 1fr))",

    gap: isMobile ? "12px" : "18px",
    alignItems: "start",
    }}
  >
    {[
      {
        title:
          "Clarity on What Interviewers Want",
        desc:
          "Understand how hiring managers evaluate candidates and what makes them select or reject.",
      },
      {
        title:
          "Structured Answer Framework",
        desc:
          "Learn how to answer questions clearly, professionally, and with strong impact.",
      },
      {
        title:
          "Realistic Mock Interview",
        desc:
          "Practice in a real interview simulation so you're fully prepared.",
      },
      {
        title:
          "Personalized Feedback",
        desc:
          "Get direct actionable feedback on what to improve and how to fix it immediately.",
      },
      {
        title:
          "Confidence & Communication Upgrade",
        desc:
          "Improve how you speak, present yourself, and handle pressure during interviews.",
      },
      {
        title:
          "Real Interview Readiness",
        desc:
          "Walk into interviews with clarity, confidence, and a much higher chance of success.",
      },
    ].map((item) => (
      <div
        key={item.title}
        style={{
        background:
          "linear-gradient(180deg,#0B1736,#091224)",
        border:
          "1px solid rgba(79,141,255,.15)",
        borderRadius: isMobile ? "16px" : "20px",
        padding: isMobile ? "14px" : "20px",

        minHeight: isMobile ? "145px" : "unset",

        display: "flex",
        flexDirection: "column",
      }}
      >
        <div
          style={{
            fontSize: isMobile ? "18px" : "22px",
            marginBottom: isMobile ? "8px" : "10px",
          }}
        >
          ✨
        </div>

        <h4
          style={{
            color: "#fff",
            marginBottom: isMobile ? "8px" : "8px",
            marginTop: 0,
            fontSize: isMobile ? "13px" : "20px",
            lineHeight: 1.3,
            fontWeight: 600,
          }}
        >
          {item.title}
        </h4>

        <p
          style={{
            color: "#94A3B8",
            lineHeight: isMobile ? 1.45 : 1.7,
            margin: 0,
            fontSize: isMobile ? "11px" : "15px",
          }}
        >
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>
        {/* FINAL OUTCOME */}
<div
  style={{
    background:
      "linear-gradient(180deg,#143A2F,#0D1E19)",
    border:
      "1px solid rgba(34,197,94,.25)",
    borderRadius: isMobile ? "18px" : "24px",
    padding: isMobile ? "22px" : "35px",
    textAlign: "center",
  }}
>
  <div
    style={{
      color: "#22C55E",
      letterSpacing: "2px",
      fontSize: isMobile ? "11px" : "13px",
      marginBottom: isMobile ? "8px" : "12px",
      fontWeight: 600,
    }}
  >
    FINAL OUTCOME
  </div>

  <h3
  style={{
    margin: 0,
    color: "#fff",
    fontSize: isMobile ? "22px" : "40px",
    lineHeight: isMobile ? 1.2 : 1,
    whiteSpace: isMobile ? "normal" : "nowrap",
  }}
>
  {isMobile ? (
    <>
      🚀 Higher Chance of
      <br />
      Passing Interviews
    </>
  ) : (
    <>🚀 Higher Chance of Passing Interviews</>
  )}
</h3>

  <p
    style={{
      color: "#D1FAE5",
      marginTop: isMobile ? "10px" : "15px",
      marginBottom: 0,
      fontSize: isMobile ? "13px" : "16px",
      lineHeight: 1.6,
    }}
  >
    Higher chance of passing interviews
    and securing job offers.
  </p>
</div>

<div
  style={{
    display: "grid",
    gap: isMobile ? "12px" : "16px",
    color: "#CBD5E1",
    fontSize: isMobile ? "13px" : "16px",
    lineHeight: isMobile ? 1.5 : 1.7,
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
    }}
  >
    <span style={{ fontSize: "18px" }}>⏱️</span>
    <span>
      Each session is designed as a focused
      60-minute deep-dive to maximize results.
    </span>
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
    }}
  >
    <span style={{ fontSize: "18px" }}>➕</span>
    <span>
      Additional time can be arranged if
      needed (+IDR 100K per hour).
    </span>
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
    }}
  >
    <span style={{ fontSize: "18px" }}>🏢</span>
    <span>
      We recommend conducting the session
      in person at our office for maximum
      results.
    </span>
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
    }}
  >
    <span style={{ fontSize: "18px" }}>💻</span>
    <span>
      Online sessions are also available
      via Google Meet or Microsoft Teams.
    </span>
  </div>
</div>
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  }}
>
  <a
    href="https://wa.me/6285121305329"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: "none",
    }}
  >
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "18px 36px",
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: "18px",
        color: "#fff",
        background:
          "linear-gradient(135deg,#25D366,#128C7E)",
        boxShadow:
          "0 0 30px rgba(37,211,102,.25)",
        transition: "all .3s ease",
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16.01 3C8.84 3 3 8.72 3 15.77c0 2.49.73 4.91 2.1 7L3.5 29l6.44-1.68a13.2 13.2 0 006.07 1.46C23.16 28.78 29 23.06 29 16.01S23.16 3 16.01 3zm0 23.48c-1.87 0-3.7-.5-5.3-1.46l-.38-.23-3.82 1 1.02-3.7-.25-.39a10.3 10.3 0 01-1.63-5.59c0-5.69 4.67-10.31 10.4-10.31 5.73 0 10.39 4.62 10.39 10.31s-4.66 10.37-10.43 10.37zm5.7-7.76c-.31-.15-1.83-.89-2.11-.99-.28-.1-.49-.15-.7.15-.2.3-.8.99-.98 1.19-.18.2-.36.23-.67.08-.31-.15-1.3-.47-2.48-1.5-.91-.8-1.53-1.79-1.71-2.09-.18-.3-.02-.46.13-.61.13-.13.31-.33.46-.49.15-.17.2-.28.31-.48.1-.2.05-.38-.03-.53-.08-.15-.7-1.69-.96-2.31-.25-.61-.51-.53-.7-.54h-.6c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.98 1.25 3.19c.15.2 2.16 3.29 5.24 4.61.73.31 1.3.5 1.75.64.73.23 1.39.2 1.91.12.58-.09 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.2-.59-.35z" />
      </svg>

      Book Now
    </button>
  </a>
</div>
      </div>
    )}
  </div>
</div>
{/* VISIT US */}
<div
  style={{
    marginTop: isMobile ? "60px" : "120px",
    padding: isMobile ? "30px 20px" : "70px",
    borderRadius: isMobile ? "24px" : "36px",
    background:
      "linear-gradient(135deg,#0B1D4A 0%, #061127 100%)",
    border: "1px solid rgba(96,165,250,.25)",
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
      marginBottom: isMobile ? "30px" : "50px",
    }}
  >
    <div
      style={{
        borderRadius: "999px",
        background: "rgba(79,141,255,.15)",
        color: "#6EA8FF",
        fontWeight: 700,
        padding: isMobile ? "7px 12px" : "10px 18px",
        fontSize: isMobile ? "11px" : "14px",
      }}
    >
      📍 VISIT US
    </div>
  </div>

  {/* MAIN CONTENT */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        isMobile ? "1fr" : "0.9fr 1.1fr",
      gap: isMobile ? "36px" : "60px",
      alignItems: "center",
    }}
  >
    {/* LEFT SIDE */}
    <div>
      <h2
        style={{
          fontSize: isMobile ? "36px" : "58px",
          lineHeight: "0.95",
          fontWeight: 800,
          margin: "0 0 20px 0",
          letterSpacing: isMobile ? "-1px" : "-2px",
        }}
      >
        Let’s Meet
        <br />
        <span
          style={{
            color: "#6EA8FF",
          }}
        >
          In Person
        </span>
      </h2>

      <p
        style={{
          fontSize: isMobile ? "15px" : "20px",
          lineHeight: 1.7,
          color: "#94A3B8",
          marginBottom: isMobile ? "28px" : "40px",
        }}
      >
        For maximum impact, we recommend
        conducting your Career Acceleration
        Session directly at our office.
      </p>

      {/* OFFICE INFO */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "16px" : "25px",
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
              width: isMobile ? "44px" : "56px",
              height: isMobile ? "44px" : "56px",
              borderRadius: "50%",
              background:
                "rgba(79,141,255,.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "18px" : "24px",
            }}
          >
            🏢
          </div>

          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
              Vera Diana Fokus
            </div>

            <div
              style={{
                color: "#94A3B8",
                fontSize: isMobile ? "13px" : "16px",
                lineHeight: 1.5,
              }}
            >
              City Walk 07, Citra Gran Jl.
              Alternatif Cibubur No.12
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
              width: isMobile ? "44px" : "56px",
              height: isMobile ? "44px" : "56px",
              borderRadius: "50%",
              background:
                "rgba(79,141,255,.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "18px" : "24px",
            }}
          >
            🕒
          </div>

          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
              By Appointment Only
            </div>

            <div
              style={{
                color: "#94A3B8",
                fontSize: isMobile ? "13px" : "16px",
              }}
            >
              Monday - Friday
            </div>
          </div>
        </div>

        {/* PARKING */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: isMobile ? "44px" : "56px",
              height: isMobile ? "44px" : "56px",
              borderRadius: "50%",
              background:
                "rgba(79,141,255,.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "18px" : "24px",
            }}
          >
            🚗
          </div>

          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
              Easy To Reach
            </div>

            <div
              style={{
                color: "#94A3B8",
                fontSize: isMobile ? "13px" : "16px",
              }}
            >
              Easy parking access available
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div>
      <div
        style={{
          overflow: "hidden",
          borderRadius: isMobile ? "18px" : "28px",
          border:
            "1px solid rgba(96,165,250,.2)",
          height: isMobile ? "280px" : "450px",
          marginBottom: "20px",
        }}
      >
        <iframe
          src="https://www.google.com/maps?q=-6.3836475,106.9248334&z=15&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
          loading="lazy"
        />
      </div>

      {/* BUTTONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "12px" : "20px",
        }}
      >
        <a
          href="https://maps.google.com/?q=-6.3836475,106.9248334"
          target="_blank"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              height: isMobile ? "56px" : "78px",
              borderRadius:
                isMobile ? "16px" : "22px",
              background:
                "rgba(79,141,255,.08)",
              border:
                "1px solid rgba(79,141,255,.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              color: "#fff",
              fontSize: isMobile ? "14px" : "18px",
              fontWeight: 700,
            }}
          >
            🧭 Get Directions
          </div>
        </a>

        <a
          href="https://wa.me/6285121305329"
          target="_blank"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              height: isMobile ? "56px" : "78px",
              borderRadius:
                isMobile ? "16px" : "22px",
              background:
                "linear-gradient(90deg,#16A34A,#22C55E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              color: "#fff",
              fontSize: isMobile ? "14px" : "18px",
              fontWeight: 700,
            }}
          >
            💬 Chat via WhatsApp
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
      
</main>
  );
}