"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Users,
  Briefcase,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Search,
  UserCheck,
  Building2,
  GraduationCap
} from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    const sections =
      document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id =
              entry.target.getAttribute(
                "data-animate"
              );

            if (id) {
              setVisibleSections((prev) => [
                ...new Set([...prev, id])
              ]);
            }
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  const getAnimation = (id: string) => ({
    opacity: visibleSections.includes(id)
      ? 1
      : 0,
    transform: visibleSections.includes(id)
      ? "translateY(0)"
      : "translateY(40px)",
    transition: "all 0.8s ease"
  });

  const services = [
    {
      title: "HR Solutions",
      link: "/services/hr_solution",
      icon: Users,
      desc: "Recruitment, workforce and talent solutions.",
      features: [
        "Employee Placement",
        "Executive Search",
        "Outsourcing",
        "Psychological Assessment",
      ],
      linkText: "Explore HR Solutions",
    },
    {
      title: "Business / Management Consultancy",
      link: "/services/business_management_consultancy",
      icon: ShieldCheck,
      desc: "Identify risk, strengthen controls and improve business decisions.",
      features: [
        "Risk Management",
        "Investigative Audit",
        "SOP Development",
        "Data Analytics",
      ],
      linkText: "Explore Consultancy Services",
    },
    {
      title: "Career Acceleration Service",
      link: "/services/int-prep",
      icon: Rocket,
      desc: "Build a stronger CV, improve interview skills and accelerate your career.",
      features: [
        "CV Optimization",
        "Interview Preparation",
        "Mock Interview",
      ],
      linkText: "Explore Career Services",
      type: "highlight",
    },
  ];

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
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
          background:
            "rgba(127,29,29,0.15)",
          filter: "blur(120px)",
          top: "-120px",
          right: "-150px",
          borderRadius: "999px"
        }}
      />
      

      {/* HERO */}
      <section
        data-animate="hero"
        style={{
          ...getAnimation("hero"),
          paddingTop: isMobile
          ? "110px"
          : "190px",

        paddingBottom: isMobile
          ? "60px"
          : "120px",
          paddingLeft: "20px",
          paddingRight: "20px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "auto"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "26px"
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(127,29,29,0.2)"
              }}
            >
              <Building2 size={16} color="#3B82F6" />
              <span style={{ fontSize: "13px", color: "#cbd5e1" }}>
                Professional HR &amp; Talent Solutions
              </span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(127,29,29,0.2)"
              }}
            >
              <Briefcase size={16} color="#A78BFA" />
              <span style={{ fontSize: "13px", color: "#cbd5e1" }}>
                Business &amp; Management Consultancy
              </span>
            </div>
          </div>

          <h1
            style={{
              fontSize: isMobile
            ? "36px"
            : "68px",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              marginBottom: "26px"
            }}
          >
            Our Services
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: isMobile
              ? "15px"
              : "18px",
              lineHeight: "1.8",
              maxWidth: "760px",
              margin: "auto"
            }}
          >
            Comprehensive talent,
            workforce, and business
            solutions designed to help
            organizations grow with
            confidence and efficiency.
          </p>
        </div>
      </section>

      {/* SERVICES */}
<section
  data-animate="services"
  style={{
    ...getAnimation("services"),
    padding: "0 20px 120px"
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr)",
      gap: "12px",
      width: "100%",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    {services.map((service) => {
      const Icon = service.icon;
      const isFeatured = service.type === "highlight";

      return (
        <div
          key={service.title}
          style={{
            boxSizing: "border-box",
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            background: isFeatured ? "#203A5F" : "#19263A",
            border: "1px solid #3B485B",
            color: "#F8FAFC",
            transition: "border-color .2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#60A5FA";
            router.prefetch(service.link);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#3B485B";
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                minWidth: "52px",
                borderRadius: "9px",
                background: "#2B3E5A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={23} color="#60A5FA" />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                  margin: "3px 0 4px",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    color: "#F8FAFC",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  {service.title}
                </h2>
                {isFeatured && (
                  <span
                    style={{
                      color: "#60A5FA",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#CBD5E1",
                  fontSize: "15px",
                  lineHeight: 1.55,
                }}
              >
                {service.desc}
              </p>
            </div>
          </div>

          <p
            style={{
              margin: "12px 0",
              color: "#F1F5F9",
              fontSize: "14px",
              lineHeight: 1.7,
              overflowWrap: "anywhere",
            }}
          >
            {service.features.join(" · ")}
          </p>

          <button
            type="button"
            onClick={() => router.push(service.link)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: 0,
              border: 0,
              background: "transparent",
              color: "#60A5FA",
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            {service.linkText}
            <ArrowRight size={16} />
          </button>
        </div>
      );
    })}
  </div>
</section>

      {/* PROCESS */}
      <section
        data-animate="process"
        style={{
          ...getAnimation(
            "process"
          ),
          padding: isMobile
          ? "60px 20px"
          : "120px 20px",
          background: "#111827",
          borderTop:
            "1px solid rgba(255,255,255,0.06)",
          borderBottom:
            "1px solid rgba(255,255,255,0.06)"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto"
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile
                ? "30px"
                : "60px",
            }}
          >
            <div
              style={{
                color: "#60A5FA",
                marginBottom: "14px",
                textTransform:
                  "uppercase",
                fontSize: "13px"
              }}
            >
              Our Approach
            </div>

            <h2
            style={{
              fontSize: isMobile
                ? "30px"
                : "54px",

              lineHeight: 1.05,

              marginBottom: "16px",

              letterSpacing: "-1px",
            }}
          >
            Structured Process.
            <br />
            Proven Results.
          </h2>
          <div
  style={{
    textAlign: "center",
    marginBottom: isMobile
      ? "30px"
      : "50px",
  }}
>
  <p
    style={{
      color: "#94A3B8",
      maxWidth: "700px",
      margin: "0 auto",

      fontSize: isMobile
        ? "14px"
        : "18px",

      lineHeight: 1.8,
    }}
  >
    Every engagement follows a structured framework
    designed to reduce hiring risks, improve decision
    quality, and deliver long-term workforce success.
  </p>
</div>
          </div>

          <div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(4,minmax(0,1fr))",
    gap: isMobile ? "16px" : "24px",
  }}
>
  {[
    {
      step: "01",
      title: "Understand Needs",
      icon: Search,
      desc: "We analyze your workforce challenges, hiring goals, and business requirements.",
    },
    {
      step: "02",
      title: "Evaluate & Assess",
      icon: UserCheck,
      desc: "Structured evaluation ensures the right talent and solutions are identified.",
    },
    {
      step: "03",
      title: "Deliver Solutions",
      icon: GraduationCap,
      desc: "We implement tailored HR, recruitment, and workforce solutions.",
    },
    {
      step: "04",
      title: "Support Growth",
      icon: Rocket,
      desc: "Ongoing support helps organizations build sustainable long-term success.",
    },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.step}
        style={{
          position: "relative",

          background:
            "linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))",

          border:
            "1px solid rgba(255,255,255,.08)",

          backdropFilter: "blur(18px)",

          borderRadius: isMobile
            ? "18px"
            : "24px",

          padding: isMobile
            ? "20px"
            : "30px",

          overflow: "hidden",

          minHeight: isMobile
            ? "220px"
            : "300px",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",

            width: "140px",
            height: "140px",

            background:
              "rgba(96,165,250,.12)",

            filter: "blur(60px)",

            borderRadius: "50%",
          }}
        />

        {/* STEP NUMBER */}
<div
  style={{
    position: "absolute",
    top: isMobile ? "18px" : "24px",
    right: isMobile ? "18px" : "24px",

    width: isMobile ? "48px" : "60px",
    height: isMobile ? "48px" : "60px",

    borderRadius: "16px",

    background:
      "rgba(96,165,250,.10)",

    border:
      "1px solid rgba(96,165,250,.15)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#60A5FA",
    fontWeight: 700,
    fontSize: isMobile ? "18px" : "24px",
  }}
>
  {item.step}
</div>

{/* ICON */}
<div
  style={{
    width: isMobile ? "64px" : "84px",
    height: isMobile ? "64px" : "84px",

    borderRadius: "20px",

    background:
      "rgba(96,165,250,.08)",

    border:
      "1px solid rgba(96,165,250,.10)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: "24px",
  }}
>
  <Icon
    size={isMobile ? 28 : 40}
    color="#60A5FA"
  />
</div>

{/* TITLE */}
<h3
  style={{
    fontSize: isMobile ? "22px" : "28px",
    lineHeight: 1.1,
    margin: "0 0 16px 0",
    color: "#fff",
    fontWeight: 700,
  }}
>
  {item.title}
</h3>

{/* DESCRIPTION */}
<p
  style={{
    color: "#94A3B8",
    fontSize: isMobile ? "15px" : "18px",
    lineHeight: isMobile ? 1.7 : 1.8,
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
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        data-animate="contact"
        style={{
          ...getAnimation(
            "contact"
          ),
          padding:
            "120px 20px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "auto"
          }}
        >
          <h2
            style={{
              fontSize: isMobile
                ? "38px"
                : "58px",
              lineHeight: "1.2",
              marginBottom: "24px"
            }}
          >
            Let’s Build Better Teams
            Together
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "40px"
            }}
          >
            Talk with our team to
            discuss how VD Fokus can
            support your organization
            with structured HR and
            talent solutions.
          </p>

          <a
            href="https://wa.me/6281212940797"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px 30px",
              borderRadius:
                "999px",
              background: "#3B82F6",
              border:
                "1px solid #7F1D1D",
              color: "#fff",
              textDecoration:
                "none",
              fontWeight: 600,
              fontSize: "16px"
            }}
          >
            Talk to Us

            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
