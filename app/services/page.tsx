"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Users,
  Briefcase,
  Brain,
  ShieldCheck,
  ClipboardList,
  Rocket,
  ArrowRight,
  Factory,
  Search,
  UserCheck,
  Building2,
  FileCheck,
  GraduationCap
} from "lucide-react";

export default function Page() {
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
  title: "Employee Placement",
  link: "/services/placement",
  icon: Users,
  desc:
    "We identify and place high-quality candidates tailored to your operational and strategic business needs.",
  features: [
    "Talent sourcing",
    "Candidate screening",
    "Interview coordination",
    "Executive search support"
  ]
},

    {
      title: "Outsourcing",
      icon: Briefcase,
      desc:
        "Flexible workforce solutions designed to improve efficiency while reducing operational complexity.",
      features: [
        "Operational staffing",
        "Administrative support",
        "Contract workforce",
        "Scalable manpower solutions"
      ]
    },

    {
      title: "Psychological Assessment",
      link: "/services/psychological-test",
      icon: Brain,
      desc:
         "Professional psychological consulting, aptitude interest testing, and candidate assessment services.",
      type : "highlight",
         features: [
        "Personality testing",
        "Cognitive assessment",
        "Behavior analysis",
        "Job fit evaluation"
      ]
    },

    {
      title: "Risk Management",
      icon: ShieldCheck,
      desc:
        "Reduce hiring and operational risks through structured evaluation and strategic workforce planning.",
      features: [
        "Hiring risk analysis",
        "Workforce evaluation",
        "Compliance support",
        "Decision support"
      ]
    },

    {
      title: "SOP Development",
      icon: ClipboardList,
      desc:
        "Build clear, scalable, and structured operational procedures to improve consistency and efficiency.",
      features: [
        "Workflow mapping",
        "Process standardization",
        "Operational structure",
        "Documentation support"
      ]
    },

    {
  title:
    "Career Acceleration Service",

  link: "/int-prep",

  icon: Rocket,

  desc:
    "Professional CV optimization, interview preparation, and coaching to help candidates get selected faster.",

  features: [
    "CV optimization",
    "Mock interview",
    "Interview coaching",
    "Career consultation"
  ]
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
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              borderRadius: "999px",
              background:
                "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(127,29,29,0.2)",
              marginBottom: "26px"
            }}
          >
            <Building2
              size={16}
              color="#3B82F6"
            />

            <span
              style={{
                fontSize: "13px",
                color: "#cbd5e1"
              }}
            >
              Professional HR &
              Talent Solutions
            </span>
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
      maxWidth: "1150px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(320px,1fr))",
      gap: "28px"
    }}
  >
    {services.map((service, i) => {
      const Icon = service.icon;

      return (
        <div
          key={i}
          onClick={() => {
            if (service.link) {
              window.location.href =
                service.link;
            }
          }}
          style={{
            position: "relative",
            padding: "34px",
            borderRadius: "24px",

            display: "flex",
            flexDirection: "column",
            justifyContent:
              "space-between",

            background:
              "rgba(255,255,255,0.04)",

            border:
              "1px solid rgba(127,29,29,0.2)",

            backdropFilter:
              "blur(12px)",

            cursor: service.link
              ? "pointer"
              : "default",

            transition:
              "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-8px)";

            e.currentTarget.style.boxShadow =
              "0 20px 50px rgba(0,0,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0)";

            e.currentTarget.style.boxShadow =
              "none";
          }}
        >
          {/* TOP CONTENT */}
          <div>

            {/* ICON */}
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "18px",
                background:
                  "rgba(255,255,255,0.06)",

                display: "flex",
                alignItems: "center",
                justifyContent:
                  "center",

                marginBottom: "24px"
              }}
            >
              <Icon
                size={34}
                color="#3B82F6"
              />
            </div>

            {/* TITLE */}
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "18px",
                lineHeight: "1.3"
              }}
            >
              {service.title}
            </h2>

            {/* DESC */}
            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
                marginBottom: "24px"
              }}
            >
              {service.desc}
            </p>

            {/* FEATURES */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              {service.features.map(
                (feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: "10px",
                      color: "#e2e8f0"
                    }}
                  >
                    <FileCheck
                      size={16}
                      color="#22c55e"
                    />

                    <span>
                      {feature}
                    </span>
                  </div>
                )
              )}
            </div>

          </div>

          {/* BOTTOM RIGHT ARROW */}
          {service.link && (
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                justifyContent:
                  "flex-end"
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius:
                    "999px",

                  background:
                    "rgba(59,130,246,0.15)",

                  display: "flex",
                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  color: "#3B82F6",

                  transition:
                    "all 0.3s ease"
                }}
              >
                <ArrowRight size={18} />
              </div>
            </div>
          )}
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