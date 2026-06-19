"use client";
type Dot = {
  top: string;
  left: string;
};

import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";
import { useEffect, useState } from "react";
import {
  Building2,
  Users,
  UserCheck,
  Crown,
  Gem,
  Package,
  Search,
  FileText,
  Target,
  ShoppingCart,
  Laptop,
  Truck,
  HeartPulse,
  Landmark,
  Building,
  Zap,
  Brain,
  ShieldCheck,
  ClipboardList,
  Rocket,
  MessageCircle,
  ArrowRight,
  Factory,
  ShoppingBag,
  Store,
  Hammer,
  Car,
  Hotel,
  GraduationCap,
  Briefcase,
   MessageSquare,
  TrendingUp,
  Clock3,
  Phone,
  MapPin,
} from "lucide-react";

export default function Page() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const [startCounting, setStartCounting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const industries = [
  {
    name: "Manufacturing",
    icon: Factory,
  },
  {
    name: "FMCG",
    icon: ShoppingBag,
  },
  {
    name: "Retail",
    icon: Store,
  },
  {
    name: "Technology",
    icon: Laptop,
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
  },
  {
    name: "Logistics",
    icon: Truck,
  },
  {
    name: "Construction",
    icon: Hammer,
  },
  {
    name: "Financial Services",
    icon: Landmark,
  },
  {
    name: "Automotive",
    icon: Car,
  },
  {
    name: "Hospitality",
    icon: Hotel,
  },
  {
    name: "Education",
    icon: GraduationCap,
  },
  {
    name: "Professional Services",
    icon: Briefcase,
  },
];
{industries.map((industry) => {
  const Icon = industry.icon;

  return (
    <div
      key={industry.name}
      style={{
        background:
          "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",

        border:
          "1px solid rgba(255,255,255,.08)",

        backdropFilter: "blur(16px)",

        borderRadius: isMobile ? "16px" : "20px",

        padding: isMobile ? "18px" : "24px",

        display: "flex",
        alignItems: "center",
        gap: "12px",

        transition: "all .3s ease",
      }}
    >
      <div
        style={{
          width: isMobile ? "38px" : "46px",
          height: isMobile ? "38px" : "46px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: "12px",

          background:
            "rgba(96,165,250,.12)",

          flexShrink: 0,
        }}
      >
        <Icon
          size={isMobile ? 18 : 22}
          color="#60A5FA"
        />
      </div>

      <span
        style={{
          color: "#E2E8F0",

          fontSize: isMobile
            ? "13px"
            : "15px",

          fontWeight: 600,

          lineHeight: 1.4,
        }}
      >
        {industry.name}
      </span>
    </div>
  );
})}
  const logos = [
  "/logos/3m.png",
  "/logos/abbot.png",
  "/logos/atlas.png",
  "/logos/cola.png",
  "/logos/ecl.png",
  "/logos/freeport.png",
  "/logos/freesius.png",
  "/logos/fusheng.png",
  "/logos/gmk.png",
  "/logos/intertek.png",
  "/logos/mtu.png",
  "/logos/pz.png",
  "/logos/redpath.png",
  "/logos/rr.png",
  "/logos/sunindo.png",
];
const positions = [
  "HR Manager",
  "Recruitment Specialist",
  "HR Business Partner",
  "Finance Manager",
  "Accounting Staff",
  "Sales Manager",
  "Business Development",
  "Marketing Manager",
  "Digital Marketing",
  "Operations Manager",
  "Supply Chain Manager",
  "Procurement Specialist",
  "Production Supervisor",
  "Plant Manager",
  "Quality Assurance",
  "Warehouse Manager",
  "IT Support",
  "Software Engineer",
  "Project Manager",
  "General Manager",
];
const careerInsights = [
  {
    title: "Interview Preparation",
    description:
      "Master common interview questions and improve your confidence through structured preparation.",
    icon: MessageSquare,
  },
  {
    title: "CV Optimization",
    description:
      "Learn how recruiters evaluate resumes and make your profile stand out.",
    icon: FileText,
  },
  {
    title: "Career Development",
    description:
      "Build long-term career strategies and position yourself for future opportunities.",
    icon: TrendingUp,
  },
];
const { language } = useLanguage();

const t =
  translations[
    language as keyof typeof translations
  ];
  console.log("language =", language);
console.log("t =", t);
console.log("t.who =", t?.who);

const [index, setIndex] = useState(0);
  const [counts, setCounts] = useState({
    industries: 0,
    clients: 0,
    cv: 0,
    talents: 0
  });

  // 🔥 SCROLL ANIMATION
  const getAnimation = (id: string) => ({
    opacity: visibleSections.includes(id) ? 1 : 0,
    transform: visibleSections.includes(id)
      ? "translateY(0)"
      : "translateY(40px)",
    transition: "all 0.8s ease"
  });

  useEffect(() => {
    const sections = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-animate");
          if (id) {
            setVisibleSections((prev) => [...new Set([...prev, id])]);
          }
        }
      });
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize(); // run once on load
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  
useEffect(() => {
  if (!startCounting) return;

  let start = 0;

  const interval = setInterval(() => {
    start += 5; // 🔥 slower increment

    setCounts({
      industries: Math.min(Math.floor(start / 25), 20),
      clients: Math.min(start, 500),
      cv: Math.min(start * 200, 100000),
      talents: Math.min(start * 100, 50000)
    });

    if (start >= 500) clearInterval(interval);
  }, 40); // 🔥 slightly slower interval

  return () => clearInterval(interval);
}, [startCounting]);


// 🔥 LOGO CAROUSEL (SEPARATE EFFECT)
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % logos.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);

  // ✅ SERVICES DATA (FIXED POSITION)
  type Service = {
  title: string;
  desc: string;
  icon: any;

  features?: string[];

  link?: string;
  type?: string;
};
 const services: Service[] = [
  {
    title: "Employee Placement",
    desc: "We source and place high-quality candidates tailored to your business needs.",
    icon: Briefcase,
    link: "/services/placement",
  },
  {
    title: "Outsourcing",
    desc: "Flexible workforce solutions to support your operations efficiently.",
    icon: Users,
  },
  {
    title: "Psychological Assesment",
    desc: "Professional psychological consulting, aptitude interest testing, and candidate assessment services.",
    icon: Brain,
    type: "highlight",
    link: "/services/psychological-test",
  },
  {
    title: "Risk Management",
    desc: "Identify hiring risks and improve decision-making.",
    icon: ShieldCheck,
  },
  {
    title: "SOP Development",
    desc: "Design clear and scalable standard procedures.",
    icon: ClipboardList,
  },
  {
    title: "Career Acceleration Service",
    desc: "CV optimization, Interview preparation, & Mock Interview",
    icon: Rocket,
    type: "highlight",
    link: "/career-acceleration",
  },
];

  return (
  <main
    style={{
      position: "relative",

      width: "100%",
      maxWidth: "100vw",

      overflowX: "hidden",
      overflowY: "visible",

      fontFamily: "Inter, sans-serif",

      background:
        "radial-gradient(circle at top, #1e293b, #0f172a)",

      color: "#fff",

      minHeight: "100vh",
    }}
  >
      {/* HERO */}
<section
  id="home-hero"
  style={{
    position: "relative",
    minHeight: isMobile ? "92vh" : "800px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  {/* Background Image */}
  <img
  src={
    isMobile
      ? "hero-mobile.png"
      : "hero.png"
  }
  alt="VD Fokus"
  style={{
    position: "absolute",
    inset: 0,

    width: "100%",
    height: "100%",

    objectFit: isMobile
      ? "contain"
      : "cover",

    objectPosition: isMobile
      ? "center top"
      : "center 15%",

    background: "#020617",

    filter: isMobile
      ? "brightness(1.25) contrast(1.05)"
      : "none",
  }}
/>

  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: isMobile
  ? `
    linear-gradient(
      180deg,
      rgba(2,6,23,.55) 0%,
      rgba(2,6,23,.45) 45%,
      rgba(2,6,23,.80) 100%
    )
  `
        : `
        linear-gradient(
          90deg,
          rgba(2,6,23,.92) 0%,
          rgba(2,6,23,.78) 45%,
          rgba(2,6,23,.45) 100%
        )
      `,
      zIndex: 1,
    }}
  />

  {/* Glow */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(59,130,246,.35) 0%, transparent 70%)",
      filter: "blur(80px)",
      right: "-150px",
      top: "-100px",
      zIndex: 1,
    }}
  />

  {/* Content */}
  <div
  style={{
    position: "relative",
    zIndex: 2,

    width: "100%",
    maxWidth: "1400px",

    margin: "0 auto",

    padding: isMobile
      ? "120px 24px 80px"
      : "160px 60px",

    boxSizing: "border-box",
  }}
>
    {/* Badge */}
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
          "1px solid rgba(255,255,255,.12)",
        backdropFilter: "blur(12px)",
        marginBottom: "28px",
      }}
    >
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "999px",
          background: "#3B82F6",
        }}
      />

      <span
        style={{
          color: "#E2E8F0",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "1px",
        }}
      >
        PROFESSIONAL HR & TALENT SOLUTIONS
      </span>
    </div>

    {/* Heading */}
     <h1
  style={{
    fontSize: isMobile ? "38px" : "65px",
    lineHeight: "0.95",
    fontWeight: 700,
    marginBottom: "10px",
  }}
>
  Hire the Right Talent,
</h1>

<div
  style={{
    fontSize: isMobile ? "30px" : "55px",
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
  Available Talent
</div>

    {/* Description */}
   <p
  style={{
    maxWidth: "650px",
    color: "#CBD5E1",
    fontSize: isMobile ? "16px" : "20px",
    lineHeight: 1.8,
    marginBottom: isMobile ? "22px" : "40px",
  }}
>
  We help companies find, evaluate,
  and place high-quality candidates
  using real hiring insight.
</p>

    {/* CTA */}
<div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "12px" : "16px",

    width: "100%",
    maxWidth: isMobile ? "100%" : "520px",

    marginTop: "32px",
    marginBottom: "32px",
  }}
>
  <a
  href="https://wa.me/628161387821"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    flex: isMobile ? undefined : 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "10px",

    width: "100%",

    height: isMobile ? "58px" : "60px",

    borderRadius: isMobile ? "18px" : "16px",

    background: "#25D366",

    color: "#fff",

    fontSize: isMobile ? "17px" : "16px",
    fontWeight: 700,

    textDecoration: "none",

    boxShadow:
      "0 12px 30px rgba(37,211,102,.25)",

    border: "none",
  }}
>
  <MessageCircle size={20} />

  <span>WhatsApp Us</span>
</a>

  <a
  href="#services"
  style={{
    flex: isMobile ? undefined : 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",

    height: isMobile ? "52px" : "60px",

    borderRadius: isMobile ? "18px" : "16px",

    background:
      "rgba(255,255,255,.04)",

    border:
      "1px solid rgba(255,255,255,.1)",

    backdropFilter: "blur(12px)",

    color: "#fff",

    fontSize: isMobile ? "16px" : "16px",
    fontWeight: 600,

    textDecoration: "none",
  }}
>
  Explore Services →
</a>
</div>

   {/* TRUST METRICS */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(2,1fr)"
      : "repeat(4,1fr)",

    gap: isMobile ? "12px" : "20px",

    maxWidth: "1100px",

    marginTop: isMobile ? "24px" : "48px",
  }}
>
  {[
    {
      value: "20+",
      label: "Years Experience",
    },
    {
      value: "500+",
      label: "Successful Placements",
    },
    {
      value: "1000+",
      label: "Candidates Evaluated",
    },
    {
      value: "30+",
      label: "Industries Served",
    },
  ].map((item) => (
    <div
      key={item.label}
      style={{
        background:
          "rgba(10,20,40,.75)",

        border:
          "1px solid rgba(255,255,255,.08)",

        backdropFilter: "blur(12px)",

        borderRadius: "20px",

        padding: isMobile
          ? "10px"
          : "28px",

        minHeight: isMobile
          ? "70px"
          : "140px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        transition:
          "all .3s ease",
      }}
    >
      <div
        style={{
          fontSize: isMobile
            ? "28px"
            : "44px",

          fontWeight: 700,

          color: "#60A5FA",

          lineHeight: 1,

          marginBottom: "10px",
          background:
          "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",

        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        }}
      >
        {item.value}
      </div>

      <div
        style={{
          color: "#CBD5E1",

          fontSize: isMobile
            ? "12px"
            : "15px",

          fontWeight: 500,

          lineHeight: 1.4,
        }}
      >
        {item.label}
      </div>
    </div>
  ))}
</div>
  </div>
</section>
     
 {/* SERVICES */}
<section
  id="services"
  data-animate="services"
  style={{
    ...getAnimation("services"),
    padding: isMobile ? "60px 20px" : "90px 40px",
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
        marginBottom: isMobile ? "30px" : "50px"
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 18px",
          borderRadius: "999px",
          background: "rgba(255,255,255,.04)",
          border: "1px solid rgba(255,255,255,.08)",
          marginBottom: "24px",
        }}
      >
        <Building2 size={16} color="#60A5FA" />

        <span
          style={{
            color: "#CBD5E1",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          OUR SERVICES
        </span>
      </div>

      <h2
        style={{
          fontSize: isMobile ? "38px" : "64px",
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: "20px",
        }}
      >
        Talent Solutions
        <br />

        <span
          style={{
            background:
              "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Built For Growth
        </span>
      </h2>

      <p
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          color: "#94A3B8",
          lineHeight: 1.8,
          fontSize: isMobile ? "15px" : "18px",
        }}
      >
        Comprehensive recruitment, assessment,
        outsourcing, and business solutions
        designed to help organizations scale
        with confidence.
      </p>
    </div>

    {/* CARDS */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
        isMobile
          ? "repeat(2,minmax(0,1fr))"
          : "repeat(3,minmax(0,1fr))",
        gap: isMobile ? "16px" : "24px",
      }}
    >
      {services.map((service, i) => {
        const Icon = service.icon;

        const isCAS =
          service.title ===
          "Career Acceleration Service";

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

             padding:
              isMobile
                ? "18px"
                : "32px",

              borderRadius:
                isMobile
                  ? "16px"
                  : "24px",

              background: isCAS
                ? `
                  linear-gradient(
                  180deg,
                  rgba(59,130,246,.18),
                  rgba(167,139,250,.12)
                  )
                `
                : `
                  linear-gradient(
                  180deg,
                  rgba(255,255,255,.05),
                  rgba(255,255,255,.02)
                  )
                `,

              border: isCAS
                ? "1px solid rgba(96,165,250,.25)"
                : "1px solid rgba(255,255,255,.08)",

              backdropFilter:
                "blur(18px)",

              cursor: service.link
                ? "pointer"
                : "default",

              transition:
                "all .3s ease",

              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform =
                  "translateY(-8px)";

                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(0,0,0,.35)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";

              e.currentTarget.style.boxShadow =
                "none";
            }}
          >
            {isCAS && (
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",

                  padding: "6px 12px",

                  borderRadius: "999px",

                  background:
                    "linear-gradient(135deg,#60A5FA,#A78BFA)",

                  color: "#fff",

                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                FEATURED
              </div>
            )}

            {/* ICON */}
            <div
              style={{
               width: isMobile ? "48px" : "64px",
              height: isMobile ? "48px" : "64px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: "18px",

                background:
                  "rgba(96,165,250,.12)",

                marginBottom: "22px",
              }}
            >
              <Icon
              size={isMobile ? 22 : 30}
              color="#60A5FA"
            />
            </div>

            {/* TITLE */}
            <h3
              style={{
                fontSize: isMobile
                ? "18px"
                : "24px",
                fontWeight: 700,
                marginBottom: "14px",
              }}
            >
              {service.title}
            </h3>

            {/* DESC */}
            <p
              style={{
                color: "#94A3B8",

                fontSize: isMobile
                  ? "13px"
                  : "16px",

                lineHeight: 1.6,

                marginBottom:
                  isMobile
                    ? "16px"
                    : "24px",
              }}
>
              {service.desc}
            </p>

            {/* FEATURES */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {service.features?.map(
                (feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: isMobile
                      ? "6px"
                      : "10px",
                      color: "#CBD5E1",
                      fontSize: isMobile
                      ? "12px"
                      : "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius:
                          "999px",
                        background:
                          "#60A5FA",
                      }}
                    />

                    {feature}
                  </div>
                )
              )}
            </div>

            {service.link && (
              <div
                style={{
                  marginTop: "24px",

                  display: "flex",
                  alignItems: "center",
                  gap: "8px",

                  color: "#60A5FA",

                  fontWeight: 600,
                }}
              >
                Learn More

                <ArrowRight
                  size={16}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>
      {/* CLIENT LOGOS */}
<section
  style={{
    padding: "100px 20px",
    background: "#0B1220",

    // 🔥 SECTION SEPARATION
    borderTop: "1px solid rgba(127,29,29,0.3)",
    borderBottom: "1px solid rgba(127,29,29,0.3)",

    // 🔥 DEPTH
    boxShadow: "0 0 80px rgba(127,29,29,0.1) inset",

    textAlign: "center",
    overflow: "hidden"
  }}
>
  {/* 🔥 TITLE */}
  <h2
    style={{
      fontSize: "28px", // 🔥 bigger
      fontWeight: 600,
      color: "#e5e7eb",
      marginBottom: "10px"
    }}
  >
    Trusted by Professionals from Leading Companies
  </h2>

  {/* SUBTEXT */}
  <p
    style={{
      color: "#64748b",
      marginBottom: "50px",
      fontSize: "16px"
    }}
  >
    Built on over 20 years of real hiring experience
  </p>

  {/* CAROUSEL CONTAINER */}
  <div
  style={{
    overflow: "hidden",
    width: "100%",
    position: "relative"
  }}
>
  <div
    style={{
      display: "flex",
      width: "max-content",
      gap: "24px",
      animation:
        "scrollLogos 40s linear infinite",
    }}
  >
    {[...logos, ...logos].map((logo, i) => (
      <div
        key={i}
        style={{
          padding: "14px 24px",
          borderRadius: "18px",
          background:
            "rgba(255,255,255,0.03)",
          border:
            "1px solid rgba(255,255,255,0.05)",
          minWidth: "110px",
          height: "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.25s ease",
          backdropFilter: "blur(10px)"
          
        }}
        onMouseEnter={(e) => {
  e.currentTarget.style.transform =
    "scale(1.08) translateY(-4px)";

  e.currentTarget.style.boxShadow =
    "0 0 30px rgba(59,130,246,0.25)";

  e.currentTarget.style.border =
    "1px solid rgba(59,130,246,0.3)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform =
    "scale(1) translateY(0px)";

  e.currentTarget.style.boxShadow =
    "none";

  e.currentTarget.style.border =
    "1px solid rgba(255,255,255,0.05)";
}}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            height: "58px",
            width: "auto",
            maxWidth: "85%",
            objectFit: "contain",
            opacity: 1,
            transition: "all 0.3s ease",
            filter: "none"
          }}
        />
      </div>
    ))}
  </div>
</div>

  {/* ANIMATION */}
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
  
</section>
      
{/* INDUSTRIES WE SERVE */}
{/* HEADER */}

<div
  style={{
    textAlign: "center",

    paddingTop: isMobile
      ? "70px"
      : "120px",

    marginBottom: isMobile
      ? "40px"
      : "70px",
  }}
>
  <div
    style={{
      color: "#6EA8FF",
      fontSize: isMobile ? "13px" : "14px",
      letterSpacing: "3px",
      fontWeight: 600,
      marginBottom: "14px",
    }}
  >
    INDUSTRIES WE SERVE
  </div>

  <h2
    style={{
      fontSize: isMobile ? "42px" : "72px",
      fontWeight: 700,
      lineHeight: 1,
      margin: 0,
    }}
  >
    Experience Across
    <br />
    <span
      style={{
        background:
          "linear-gradient(90deg,#5B8CFF,#B08BFF,#FF6B81)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Diverse Industries
    </span>
  </h2>

  <p
    style={{
      color: "#94A3B8",
      maxWidth: "850px",
      margin: "24px auto 0",
      lineHeight: 1.8,
      fontSize: isMobile ? "15px" : "18px",
    }}
  >
    Our recruitment and consulting experience spans
    multiple sectors, enabling us to understand the
    unique talent challenges of each industry.
  </p>
</div>
<div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "repeat(3,1fr)"
      : "repeat(4,minmax(0,1fr))",
    gap: isMobile ? "12px" : "20px",
  }}
>
  {[
    {
      title: "Manufacturing",
      icon: Factory,
      color: "#60A5FA",
    },
    {
      title: "FMCG",
      icon: Package,
      color: "#34D399",
    },
    {
      title: "Retail",
      icon: Store,
      color: "#FBBF24",
    },
    {
      title: "Technology",
      icon: Laptop,
      color: "#A78BFA",
    },
    {
      title: "Healthcare",
      icon: HeartPulse,
      color: "#FB7185",
    },
    {
      title: "Logistics",
      icon: Truck,
      color: "#38BDF8",
    },
    {
      title: "Construction",
      icon: Hammer,
      color: "#FB923C",
    },
    {
      title: "Finance",
      icon: Landmark,
      color: "#10B981",
    },
    {
      title: "Automotive",
      icon: Car,
      color: "#818CF8",
    },
    {
      title: "Hospitality",
      icon: Hotel,
      color: "#F472B6",
    },
    {
      title: "Education",
      icon: GraduationCap,
      color: "#22C55E",
    },
    {
      title: "Professional",
      icon: Briefcase,
      color: "#6EA8FF",
    },
  ].map((industry) => {
    const Icon = industry.icon;

    return (
      <div
        key={industry.title}
        style={{
          position: "relative",
          overflow: "hidden",

          background:
            "linear-gradient(180deg,#0B1736,#050D1F)",

          border: `1px solid ${industry.color}22`,

          borderRadius: isMobile
            ? "16px"
            : "22px",

          minHeight: isMobile
            ? "80px"
            : "100px",

          padding: isMobile
            ? "8px"
            : "14px",

          boxShadow:
            "0 10px 40px rgba(0,0,0,.25)",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            right: "-40px",
            bottom: "-40px",

            width: "100px",
            height: "100px",

            background: industry.color,

            opacity: 0.15,

            filter: "blur(40px)",

            borderRadius: "50%",
          }}
        />

        {/* Icon */}
        <div
          style={{
            width: isMobile
              ? "38px"
              : "50px",

            height: isMobile
              ? "38px"
              : "50px",

            borderRadius: "14px",

            background: `${industry.color}15`,

            border: `1px solid ${industry.color}33`,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            marginBottom: isMobile
              ? "8px"
              : "12px",

            position: "relative",
            zIndex: 2,
          }}
        >
          <Icon
            size={isMobile ? 18 : 24}
            color={industry.color}
          />
        </div>

        {/* Title */}
        <h3
          style={{
            margin: 0,

            color: "#fff",

            fontWeight: 700,

            fontSize: isMobile
              ? "11px"
              : "16px",

            lineHeight: 1.25,

            position: "relative",
            zIndex: 2,
          }}
        >
          {industry.title}
        </h3>
      </div>
    );
  })}
</div>
{/* POSITIONS WE SUPPORT */}

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
        fontSize: isMobile ? "13px" : "14px",
        letterSpacing: "3px",
        fontWeight: 600,
        marginBottom: "14px",
      }}
    >
      POSITIONS WE SUPPORT
    </div>

    <h2
      style={{
        fontSize: isMobile ? "42px" : "72px",
        fontWeight: 700,
        lineHeight: 1,
        margin: 0,
      }}
    >
      Talent Across
      <br />
      <span
        style={{
          background:
            "linear-gradient(90deg,#5B8CFF,#B08BFF,#FF6B81)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Every Career Stage
      </span>
    </h2>

    <p
      style={{
        color: "#94A3B8",
        maxWidth: "800px",
        margin: "24px auto 0",
        lineHeight: 1.8,
        fontSize: isMobile ? "15px" : "18px",
      }}
    >
      From fresh graduates to executive leaders,
      we support recruitment across all levels
      of organizational leadership.
    </p>
  </div>

  {/* GRID */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
        ? "repeat(3,1fr)"
        : "repeat(4,minmax(0,1fr))",
      gap: isMobile ? "14px" : "24px",
    }}
  >
    {[
      {
        title: "Intern",
        icon: GraduationCap,
        color: "#38BDF8",
      },
      {
        title: "Staff",
        icon: Briefcase,
        color: "#60A5FA",
      },
      {
        title: "Senior Staff",
        icon: Briefcase,
        color: "#818CF8",
      },
      {
        title: "Supervisor",
        icon: UserCheck,
        color: "#A78BFA",
      },
      {
        title: "Asst. Manager",
        icon: Users,
        color: "#C084FC",
      },
      {
        title: "Manager",
        icon: Building2,
        color: "#F472B6",
      },
      {
        title: "Sr. Manager",
        icon: ShieldCheck,
        color: "#FB7185",
      },
      {
        title: "General Manager",
        icon: Landmark,
        color: "#FB923C",
      },
      {
        title: "Director",
        icon: Landmark,
        color: "#FBBF24",
      },
      {
        title: "VP",
        icon: TrendingUp,
        color: "#34D399",
      },
      {
        title: "SVP",
        icon: Crown,
        color: "#2DD4BF",
      },
      {
        title: "C-Level",
        icon: Gem,
        color: "#FFD700",
      },
    ].map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
          style={{
            position: "relative",
            overflow: "hidden",

            background:
              "linear-gradient(180deg,#0B1736,#050D1F)",

            border: `1px solid ${item.color}22`,

            borderRadius: isMobile
              ? "18px"
              : "24px",

            minHeight: isMobile
              ? "90px"
              : "130px",

            padding: isMobile
              ? "10px"
              : "18px",

            boxShadow:
              "0 10px 40px rgba(0,0,0,.25)",
          }}
        >
          {/* GLOW */}

          <div
            style={{
              position: "absolute",
              right: "-40px",
              bottom: "-40px",

              width: "120px",
              height: "120px",

              background: item.color,

              opacity: 0.18,

              filter: "blur(45px)",

              borderRadius: "50%",
            }}
          />

          {/* ICON */}

          <div
            style={{
              width: isMobile
                ? "46px"
                : "60px",

              height: isMobile
                ? "46px"
                : "60px",

              borderRadius: "16px",

              background: `${item.color}15`,

              border: `1px solid ${item.color}33`,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              marginBottom: "16px",

              position: "relative",
              zIndex: 2,
            }}
          >
            <Icon
              size={isMobile ? 22 : 30}
              color={item.color}
            />
          </div>

          {/* TITLE */}

          <h3
            style={{
              margin: 0,

              color: "#fff",

              fontWeight: 700,

              fontSize: isMobile
                ? "13px"
                : "22px",

              lineHeight: 1.25,

              position: "relative",
              zIndex: 2,
            }}
          >
            {item.title}
          </h3>
        </div>
      );
    })}
  </div>
</div>
      {/* STATS SECTION */}
<section
  data-animate="stats"
  id="track-record"
  ref={(el) => {
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
  }}
  style={{
    ...getAnimation("stats"),
    padding: "100px 20px",
    background: "#0B1220",
    borderTop: "1px solid rgba(127,29,29,0.2)",
    borderBottom: "1px solid rgba(127,29,29,0.2)",
  }}
>

  {/* ✅ TITLE + TEXT */}
  <div style={{ textAlign: "center", marginBottom: "50px" }}>
    <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
      Our Track Record
    </h2>

    <p style={{ color: "#64748b", marginTop: "10px" }}>
      Delivering measurable results across industries and talent solutions
    </p>
  </div>

  {/* ✅ STATS GRID */}
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
      gap: "30px"
    }}
  >

    {/* INDUSTRIES */}
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <Building2 size={36} color="#7F1D1D" />
        <h3 style={{ fontSize: "32px", margin: 0 }}>
  {counts.industries}+
</h3>
        <p style={{ color: "#94a3b8" }}>Industries</p>
      </div>
    </div>

    {/* CLIENTS */}
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <Users size={36} color="#7F1D1D" />
        <h3 style={{ fontSize: "32px", margin: 0 }}>
  {counts.clients}+
</h3>
        <p style={{ color: "#94a3b8" }}>Clients</p>
      </div>
    </div>

    {/* CV DATABASE */}
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <FileText size={36} color="#7F1D1D" />
        <h3 style={{ fontSize: "32px", margin: 0 }}>
  {(counts.cv / 1000).toFixed(0)}K+
</h3>
        <p style={{ color: "#94a3b8" }}>CV Database</p>
      </div>
    </div>

    {/* TALENTS */}
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <Target size={36} color="#7F1D1D" />
        <h3 style={{ fontSize: "32px", margin: 0 }}>
  {(counts.talents / 1000).toFixed(0)}K+
</h3>
        <p style={{ color: "#94a3b8" }}>Talents Placed</p>
      </div>
    </div>

  </div>
</section>
   {/* CAREER INSIGHTS */}
<section
  id="career-insights"
  style={{
    padding: isMobile ? "60px 20px" : "90px 40px",
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
        marginBottom: isMobile ? "30px" : "50px"
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 18px",
          borderRadius: "999px",
          background: "rgba(255,255,255,.04)",
          border: "1px solid rgba(255,255,255,.08)",
          marginBottom: "20px",
        }}
      >
        <TrendingUp
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
          CAREER INSIGHTS
        </span>
      </div>

      <h2
        style={{
          fontSize: isMobile ? "34px" : "58px",
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: "16px",
        }}
      >
        Insights For
        <br />

        <span
          style={{
            background:
              "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Career Growth
        </span>
      </h2>

      <p
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          color: "#94A3B8",
          fontSize: isMobile ? "14px" : "18px",
          lineHeight: 1.8,
        }}
      >
        Practical career advice, interview
        strategies, and professional development
        resources to help you move forward.
      </p>
    </div>

    {/* INSIGHT CARDS */}
    <div
      style={{
        display: "grid",

        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(3,minmax(0,1fr))",

        gap: isMobile ? "16px" : "24px",
      }}
    >
      {careerInsights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            style={{
              background:
                "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",

              border:
                "1px solid rgba(255,255,255,.08)",

              backdropFilter: "blur(16px)",

              borderRadius:
                isMobile ? "18px" : "24px",

              padding:
                isMobile ? "22px" : "32px",

              transition:
                "all .3s ease",
            }}
          >
            <div
              style={{
                width:
                  isMobile ? "52px" : "64px",

                height:
                  isMobile ? "52px" : "64px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: "16px",

                background:
                  "rgba(96,165,250,.12)",

                marginBottom: "20px",
              }}
            >
              <Icon
                size={isMobile ? 24 : 30}
                color="#60A5FA"
              />
            </div>

            <h3
              style={{
                fontSize:
                  isMobile ? "18px" : "24px",

                fontWeight: 700,

                marginBottom: "12px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#94A3B8",

                fontSize:
                  isMobile ? "13px" : "16px",

                lineHeight: 1.7,

                marginBottom: "20px",
              }}
            >
              {item.description}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",

                color: "#60A5FA",

                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Read More

              <ArrowRight size={16} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* VISIT US */}
<section
  id="visit-us"
  style={{
    marginTop: isMobile ? "60px" : "100px",
    padding: isMobile ? "30px 20px" : "70px",
    borderRadius: isMobile ? "24px" : "36px",

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
      marginBottom: isMobile ? "30px" : "50px",
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

  {/* MAIN CONTENT */}
  <div
    style={{
      display: "grid",

      gridTemplateColumns:
        isMobile
          ? "1fr"
          : "0.9fr 1.1fr",

      gap:
        isMobile
          ? "36px"
          : "60px",

      alignItems: "center",
    }}
  >
    {/* LEFT SIDE */}
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
        Visit our office to discuss recruitment,
        assessment, outsourcing, and HR consulting
        solutions tailored to your organization.
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
              VD Fokus
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
              PT Vera Diana Fokus
              <br/>
              City Walk 07, Citra Gran Cibubur
              <br/>
              Jl. Alternatif Cibubur No.12
              <br/>
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
              +62 816-1387-821
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

    {/* RIGHT SIDE MAP */}
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
    href="google.com/maps?q=PT+Vera+Diana+Fokus"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",

      marginTop: "18px",

      height: isMobile
        ? "52px"
        : "60px",

      borderRadius: "999px",

      background:
        "linear-gradient(135deg,#2563EB,#60A5FA)",

      color: "#fff",

      textDecoration: "none",

      fontWeight: 700,

      fontSize: isMobile
        ? "14px"
        : "16px",

      boxShadow:
        "0 10px 30px rgba(37,99,235,.25)",

      transition: "all .3s ease",
    }}
  >
    <MapPin size={18} />

    Get Directions
  </a>
</div>
  </div>
</section>

      
    </main>
  );
}


