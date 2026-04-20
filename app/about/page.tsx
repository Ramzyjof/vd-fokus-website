"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const getAnimation = (id: string) => ({
    opacity: visibleSections.includes(id) ? 1 : 0,
    transform: visibleSections.includes(id)
      ? "translateY(0)"
      : "translateY(30px)",
    transition: "all 0.7s ease"
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

  const container = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px"
  };

  const sectionSpacing = {
    padding: "90px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  };

  const titleStyle = {
    fontSize: "13px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#22c55e",
    marginBottom: "14px"
  };

  const headingStyle = {
    fontSize: "36px",
    lineHeight: "1.3",
    marginBottom: "20px"
  };

  const highlightText = {
    fontSize: "18px",
    color: "#e2e8f0",
    marginBottom: "20px",
    lineHeight: "1.6"
  };

  const textStyle = {
    color: "#94a3b8",
    lineHeight: "1.9",
    marginBottom: "16px"
  };

  return (
    <main style={{ background: "#0f172a", color: "#fff", fontFamily: "Inter, sans-serif" }}>

      {/* HERO */}
<section
  data-animate="hero"
  style={{ padding: "120px 20px 80px" }}
>
  <div style={container}>

    {/* LOGO */}
    <div
      style={{
        marginBottom: "30px",
        opacity: visibleSections.includes("hero") ? 1 : 0,
        transform: visibleSections.includes("hero")
          ? "translateY(0) scale(1)"
          : "translateY(20px) scale(0.95)",
        transition: "all 1s ease"
      }}
    >
      <img
        src="/logo.png"
        alt="VD Fokus Logo"
        style={{
          height: "50px",
          objectFit: "contain",
          animation: "float 4s ease-in-out infinite"
        }}
      />
    </div>

    {/* TITLE */}
    <p style={titleStyle}>About Us</p>

    <h1 style={{ fontSize: "52px", lineHeight: "1.2", marginBottom: "20px" }}>
      VD Fokus
    </h1>

    <p style={highlightText}>
      Delivering structured and professional human resource solutions
      to support sustainable business growth.
    </p>

  </div>
</section>

      {/* INTRO */}
      <section data-animate="intro" style={{ ...sectionSpacing, ...getAnimation("intro") }}>
        <div style={container}>
          <div style={{ borderLeft: "2px solid #22c55e", paddingLeft: "20px" }}>
            <p style={titleStyle}>Introduction</p>

            <h2 style={headingStyle}>
              A Professional Partner in Human Resource Solutions
            </h2>

            <p style={highlightText}>
              We help organizations build structured, scalable, and effective HR systems.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginTop: "30px"
          }}>
            <p style={textStyle}>
              VD Fokus is a consulting firm specializing in Human Resource solutions,
              established to support organizations in managing and optimizing their workforce effectively.
            </p>

            <p style={textStyle}>
              In today’s evolving business landscape, organizations face increasing complexity in
              workforce management, requiring a structured, responsive, and strategic approach.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section style={{ padding: "60px 20px" }}>
        <div style={container}>
         <img
  src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9iJTIwaW50ZXJ2aWV3fGVufDB8fDB8fHwy"
  alt="Business interview"
  style={{
    width: "100%",
    borderRadius: "12px",
    opacity: 0.9
  }}
/>
        </div>
      </section>

      {/* BACKGROUND */}
      <section data-animate="bg" style={{ ...sectionSpacing, ...getAnimation("bg") }}>
        <div style={container}>
          <div style={{ borderLeft: "2px solid #22c55e", paddingLeft: "20px" }}>
            <p style={titleStyle}>Background</p>

            <h2 style={headingStyle}>
              Over Two Decades of Experience
            </h2>

            <p style={highlightText}>
              More than 20 years of delivering HR solutions across industries.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginTop: "30px"
          }}>
            <p style={textStyle}>
              Since 2003, VD Fokus has developed extensive experience in delivering HR consulting services.
            </p>

            <p style={textStyle}>
              We understand that ineffective HR management can impact long-term performance,
              therefore we focus on structured and practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        data-animate="why"
        style={{
          ...sectionSpacing,
          ...getAnimation("why"),
          background: "linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)"
        }}
      >
        <div style={container}>
          <div style={{ borderLeft: "2px solid #22c55e", paddingLeft: "20px" }}>
            <p style={titleStyle}>Why Choose Us</p>

            <h2 style={headingStyle}>
              A Reliable and Responsive HR Partner
            </h2>

            <p style={highlightText}>
              Combining experience, responsiveness, and deep understanding of business challenges.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginTop: "40px"
          }}>
            {[
              "Extensive experience since 2003",
              "Comprehensive HR solutions",
              "Client-focused and attentive approach",
              "Strong listening capability",
              "Fast and responsive service",
              "High standards of professionalism",
              "Strict confidentiality and integrity"
            ].map((item, i) => (
              <div key={i} style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "12px"
              }}>
                <p style={{ color: "#e2e8f0" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAST */}
      <section data-animate="fast" style={{ ...sectionSpacing, ...getAnimation("fast") }}>
        <div style={container}>
          <div style={{ borderLeft: "2px solid #22c55e", paddingLeft: "20px" }}>
            <p style={titleStyle}>Service Commitment</p>

            <h2 style={headingStyle}>
              Focused on Delivering Value
            </h2>

            <p style={highlightText}>
              We prioritize responsiveness, accuracy, and client satisfaction.
            </p>
          </div>

          <div style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px"
          }}>
            {[
              "F — Focus",
              "A — Accurate",
              "S — Satisfaction",
              "T — Trustworthy"
            ].map((item, i) => (
              <div key={i} style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "10px"
              }}>
                <p style={{ color: "#e2e8f0" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Partner With Us
        </h2>

        <a
          href="https://wa.me/6281212940797"
          style={{
            padding: "14px 28px",
            border: "1px solid #22c55e",
            color: "#22c55e",
            textDecoration: "none",
            borderRadius: "999px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#22c55e";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#22c55e";
          }}
        >
          Contact Us →
        </a>
      </section>

    </main>
  );
}