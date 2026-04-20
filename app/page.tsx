"use client";
type Dot = {
  top: string;
  left: string;
};
import { useEffect, useState } from "react";
import {
  Building2,
  Users,
  FileText,
  Target,
  Factory,
  ShoppingCart,
  Laptop,
  Truck,
  HeartPulse,
  Landmark,
  Hotel,
  Building,
  Zap
} from "lucide-react";

export default function Page() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
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

  // 🔥 COUNTING ANIMATION
  useEffect(() => {
  let start = 0;

  const interval = setInterval(() => {
    start += 20;

    setCounts({
      industries: Math.min(Math.floor(start / 50), 20),
      clients: Math.min(start, 500),
      cv: Math.min(start * 200, 100000),
      talents: Math.min(start * 100, 50000)
    });

    if (start >= 500) clearInterval(interval);
  }, 30);

  return () => clearInterval(interval);
}, []);

  // ✅ SERVICES DATA (FIXED POSITION)
  const services = [
    {
      title: "Employee Placement",
      desc: "We source and place high-quality candidates tailored to your business needs."
    },
    {
      title: "Outsourcing",
      desc: "Flexible workforce solutions to support your operations efficiently."
    },
    {
      title: "Psychological Test",
      desc: "Assess candidate personality, cognitive ability, and job fit with structured evaluation."
    },
    {
      title: "Risk Management",
      desc: "Identify hiring risks and ensure better decision-making in recruitment and operations."
    },
    {
      title: "SOP Development",
      desc: "Design clear and scalable standard operating procedures for your organization."
    },
    {
      title: "Career Acceleration Service",
      desc: "Personalized CV optimization, interview preparation, and coaching to help professionals get selected faster.",
      type: "highlight"
    }
  ];

  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#0f172a", color: "#F1F5F9" }}>
{/* NAVBAR */}
<header
  style={{
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(11,18,32,0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(127,29,29,0.2)"
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      padding: "16px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >

    {/* LOGO */}
    <div style={{ fontWeight: 600, fontSize: "18px" }}>
      VD Fokus
    </div>

    {/* MENU */}
    <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      {[
        { name: "Home", id: "hero" },
        { name: "Services", id: "services" },
        { name: "Industries", id: "industry" },
        { name: "Positions", id: "positions" },
        { name: "Visit", id: "visit" }
      ].map((item, i) => (
        <span
          key={i}
          onClick={() => {
            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            cursor: "pointer",
            color: "#94a3b8",
            transition: "0.3s",
            position: "relative"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#F1F5F9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94a3b8";
          }}
        >
          {item.name}
        </span>
      ))}

      {/* CTA BUTTON */}
      <a
        href="https://wa.me/6281212940797"
        style={{
          padding: "10px 18px",
          borderRadius: "999px",
          background: "#3B82F6",
          border: "1px solid #7F1D1D",
          color: "#fff",
          textDecoration: "none",
          fontSize: "14px",
          transition: "0.3s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#7F1D1D";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#3B82F6";
        }}
      >
        Talk to Us
      </a>
    </nav>
  </div>

  {/* 🔥 RED ACCENT LINE */}
  <div
    style={{
      height: "2px",
      background: "linear-gradient(to right, transparent, #7F1D1D, transparent)",
      opacity: 0.6
    }}
  />
</header>
      {/* HERO */}
      <section id="hero"
  style={{
    maxWidth: "1100px",
    margin: "auto",
    padding: "100px 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center"
    
  }}
>
  {/* LEFT TEXT */}
  <div>
    <h1 style={{ fontSize: "48px", lineHeight: "1.2" }}>
      Hire the Right Talent — Not Just Available Talent
    </h1>

    <p style={{ marginTop: "20px", color: "#94a3b8" }}>
      We help companies find, evaluate, and place high-quality candidates using real hiring insight.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div
    style={{
      borderRadius: "20px",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)"
    }}
  >
    <img
      src="/hero.jpg"
      alt="Business meeting"
      style={{ width: "100%", display: "block", height:"auto" }}
    />
  </div>
</section>
{/* WHO WE ARE */}
<section
  data-animate="who"
  style={{
    ...getAnimation("who"),
    padding: "100px 20px",
    background: "#111827",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)"
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
      gap: "60px",
      alignItems: "center"
    }}
  >

    {/* LEFT */}
    <div>
      <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
        Who We Are
      </h2>

      <p style={{ color: "#94a3b8", lineHeight: "1.7" }}>
        VD Fokus is a talent and business solution partner specializing in employee placement, outsourcing, psychological assessment
      </p>

      <p style={{ color: "#94a3b8", marginTop: "14px", lineHeight: "1.7" }}>
        We help companies identify, evaluate, and place high-quality talent while reducing hiring risks and improving long-term performance.
      </p>

      <p style={{ color: "#64748b", marginTop: "16px" }}>
        Built on real hiring experience, we focus on delivering results — not just process.
      </p>
      <a
  href="/about"
  style={{
    display: "inline-block",
    marginTop: "24px",
    padding: "12px 20px",
    borderRadius: "999px",

    // 🔥 THEME MATCH
    background: "#3B82F6",
    border: "1px solid #7F1D1D",

    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,

    transition: "all 0.3s ease"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#7F1D1D";
    e.currentTarget.style.transform = "translateY(-2px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#3B82F6";
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
  Learn More About Us →
</a>
    </div>

    {/* RIGHT */}
    <div
      style={{
        padding: "30px",
        borderRadius: "20px",
        background: "#1F2937",
        border: "1px solid rgba(127,29,29,0.25)",
        boxShadow: "0 0 40px rgba(127,29,29,0.15)",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <h3 style={{ marginBottom: "16px" }}>
        What Makes Us Different
      </h3>

      {[
        "Real hiring & executive search experience",
        "Structured evaluation approach",
        "Quality over quantity",
        "Outcome-driven solutions"
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: "10px", color: "#cbd5f5" }}>
          ✔ {item}
        </div>
      ))}
    </div>

  </div>
  
</section>
      {/* SERVICES */}
      <section id="services"
        data-animate="services"
        style={{
          ...getAnimation("services"),
          padding: "100px 20px",
          background: "#0B1220"
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))"
          }}
        >
          {services.map((service, i) => {
  const isCAS = service.title === "Career Acceleration Service";

  return (
    <div
      key={i}
      onClick={() => {
        if (isCAS) {
          window.location.href = "/career-acceleration";
        }
      }}
      style={{
        padding: "24px",
        borderRadius: "16px",
        position: "relative",

        background:
          service.type === "highlight"
            ? "linear-gradient(135deg, #7F1D1D, #450A0A)"
            : "#1F2937",

        boxShadow:
          service.type === "highlight"
          ? "0 0 30px rgba(127,29,29,0.5)"
          : "none",

        border:
          service.type === "highlight"
            ? "none"
            : "1px solid rgba(127,29,29,0.25)",

        cursor: isCAS ? "pointer" : "default",
        transition: "all 0.3s ease"
        
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = isCAS
          ? "0 10px 30px rgba(127,29,29,0.4)"
          : "0 10px 30px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {service.type === "highlight" && (
  <div
    style={{
      position: "absolute",
      top: "12px",
      right: "12px",
      fontSize: "10px",
      padding: "4px 10px",
      borderRadius: "999px",

      background: "#7F1D1D",
      color: "#fff",

      boxShadow: "0 0 10px rgba(127,29,29,0.8)",
      animation: "pulseNew 1.5s infinite"
    }}
  >
    NEW
  </div>
)}
      <h3 style={{ marginBottom: "10px" }}>
        {service.title}
      </h3>

      <p style={{ color: "#94a3b8" }}>
        {service.desc}
      </p>

      {/* 🔥 ONLY FOR CAS */}
      {isCAS && (
        <p style={{
          marginTop: "12px",
          fontWeight: 600,
          color: "#fff"
        }}>
          Learn More →
        </p>
      )}
    </div>
  );
})}
        </div>
      </section>
      {/* IDUSTRY SECTION */}
<section id="industry"
  style={{
    padding: "100px 20px",
    background: "#111827",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center",
    boxShadow: "0 0 60px rgba(127,29,29,0.1)"
  }}
>
  <h2 style={{ marginBottom: "10px" }}>
    Industries We Serve
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
    Supporting diverse sectors with tailored talent solutions
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "20px",
      maxWidth: "900px",
      margin: "auto"
    }}
  >
    {[
  { name: "Manufacturing", icon: Factory },
  { name: "Retail & FMCG", icon: ShoppingCart },
  { name: "Technology", icon: Laptop },
  { name: "Logistics & Supply Chain", icon: Truck },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Financial Services", icon: Landmark },
  { name: "Hospitality", icon: Hotel },
  { name: "Construction", icon: Building },
  { name: "Energy & Utilities", icon: Zap }
].map((item, i) => {
  const Icon = item.icon;

  return (
    <div
      key={i}
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "#1F2937",
        border: "1px solid rgba(127,29,29,0.25)",
        transition: "0.3s",
        textAlign: "center"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.background = "#273449";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "#1F2937";
      }}
    >
      {/* ICON */}
      <div style={{ marginBottom: "10px" }}>
        <Icon size={28} color={i % 2 === 0 ? "#3B82F6" : "#7F1D1D"} />
      </div>

      {/* TEXT */}
      <div style={{ fontSize: "14px" }}>
        {item.name}
      </div>
    </div>
  );
})}
  </div>
</section>
{/* POSITION SECTION */}
<section id="positions"
  style={{
    padding: "100px 20px",
    background: "#0B1220",
    textAlign: "center"
  }}
>
  <h2 style={{ marginBottom: "10px" }}>
    Positions We Support
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
    From operational roles to leadership positions
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "auto"
    }}
  >
    {[
      {
        title: "Operational Roles",
        items: ["Admin", "Customer Service", "Technicians", "Operators"]
      },
      {
        title: "Professional Roles",
        items: ["HR", "Finance", "Marketing", "IT"]
      },
      {
        title: "Specialized Roles",
        items: ["Engineers", "Data Analysts", "Supply Chain", "QA/QC"]
      },
      {
        title: "Leadership Roles",
        items: ["Supervisors", "Managers", "Directors", "Executives"]
      }
    ].map((group, i) => (
      <div
        key={i}
        style={{
          padding: "24px",
          borderRadius: "16px",
          background: "#1F2937",
          border: "1px solid rgba(127,29,29,0.25)",
          textAlign: "left",
          transition: "0.3s"
        }}
        onMouseEnter={(e) => {
         e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.background = "#2A1A1A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "#1F2937";
        }}
      >
        <h3 style={{ marginBottom: "12px" }}>
          {group.title}
        </h3>

        {group.items.map((item, idx) => (
          <p key={idx} style={{ color: "#94a3b8", marginBottom: "6px" }}>
            • {item}
          </p>
        ))}
      </div>
    ))}
  </div>
</section>
      {/* STATS SECTION */}
<section
  data-animate="stats"
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
    
{/* VISIT US */}
<section id="visit"
  data-animate="visit"
  style={{
    ...getAnimation("visit"),
    padding: "100px 20px",
    background: "#111827",
    borderTop: "1px solid rgba(127,29,29,0.2)",
    borderBottom: "1px solid rgba(127,29,29,0.2)",
    
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
      gap: "50px",
      alignItems: "center"
    }}
  >

    {/* LEFT — TEXT */}
    <div>
      <h2 style={{ fontSize: "32px", fontWeight: 600 }}>
        Visit Us
      </h2>

      <p style={{ color: "#94a3b8", marginTop: "16px", lineHeight: "1.7" }}>
        PT Vera Diana Fokus
      </p>

      <p style={{ color: "#94a3b8", lineHeight: "1.7" }}>
       City Walk 07, Citra Gran Jl. Alternatif Cibubur No.12, Jatikarya, Kec. Jatisampurna, Kota Bks, Jawa Barat 17435
      </p>

      <p style={{ color: "#64748b", marginTop: "12px" }}>
        Serving clients across Indonesia
      </p>

      <a
        href="https://www.google.com/maps/place/PT+Vera+Diana+Fokus/@-6.3836475,106.9222585,17z"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "20px",
          color: "#22c55e",
          textDecoration: "none",
          fontWeight: 600
        }}
      >
        Open in Google Maps →
      </a>
    </div>

    {/* RIGHT — MAP */}
    <div
  style={{
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid rgba(127,29,29,0.3)",
    transition: "all 0.3s ease"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.02)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
      <iframe
        src="https://www.google.com/maps?q=-6.3836475,106.9248334&z=17&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>
      {/* CTA */}
      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2 style={{ fontSize: "32px" }}>
          Build Your Team With Confidence
        </h2>

        <a
          href="https://wa.me/6281212940797"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "16px 28px",
            borderRadius: "999px",
            background: "#3bf641",
            border: "1px solid #7F1D1D",
            color: "#fff",
            textDecoration: "none"
          }}
        >
          👉 Talk to Us
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        textAlign: "center",
        color: "#64748b"
      }}>
        VD Fokus — Talent & Career Solutions
      </footer>
    </main>
  );
}


