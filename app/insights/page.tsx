"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Page() { 
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <main
      style={{
        fontFamily: "Inter, sans-serif",
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "#fff",
        minHeight: "100vh"
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "120px 20px 80px",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "18px"
          }}
        >
          VD Fokus Insights
        </h1>

        <p
          style={{
            color: "#94a3b8",
            maxWidth: "720px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "17px"
          }}
        >
          Interview tips, recruitment insights, and career knowledge
          from professionals with executive search experience.
        </p>
      </section>

      {/* ARTICLES */}
      {/* ARTICLES */}
<section
  style={{
    maxWidth: "1200px",
    margin: "auto",
    padding: isMobile
      ? "0 16px 70px"
      : "0 20px 100px",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "18px" : "24px",
    }}
  >
    {[
      {
        title: "Why Candidates Fail Interviews",
        category: "Interview",
        date: "May 2026",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop",
        desc:
          "Many candidates fail interviews because they struggle to communicate their value effectively.",
      },
      {
        title: "What Recruiters Actually Look For",
        category: "Recruitment",
        date: "May 2026",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
        desc:
          "Recruiters evaluate communication, professionalism, mindset, and cultural alignment.",
      },
      {
        title: "How To Stand Out During Hiring",
        category: "Career",
        date: "May 2026",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop",
        desc:
          "Simple improvements in preparation and communication can significantly improve hiring outcomes.",
      },
    ].map((article, i) => (
      <div
        key={i}
        style={{
          padding: isMobile ? "16px" : "22px",
          borderRadius: isMobile ? "18px" : "22px",
          background: "#1F2937",
          border: "1px solid rgba(127,29,29,0.2)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform =
              "translateY(-4px)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform =
              "translateY(0)";
          }
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "320px 1fr",
            gap: isMobile ? "14px" : "24px",
            alignItems: "center",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              width: "100%",
              height: isMobile
                ? "180px"
                : "200px",
              overflow: "hidden",
              borderRadius: isMobile
                ? "14px"
                : "16px",
              position: "relative",
            }}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              loading="lazy"
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {/* CONTENT */}
          <div>
            {/* TOP ROW */}
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                marginBottom: isMobile
                  ? "10px"
                  : "14px",
              }}
            >
              <div
                style={{
                  padding: isMobile
                    ? "4px 8px"
                    : "5px 10px",
                  borderRadius: "999px",
                  background:
                    "rgba(127,29,29,0.2)",
                  color: "#fca5a5",
                  fontSize: isMobile
                    ? "10px"
                    : "11px",
                  fontWeight: 600,
                }}
              >
                {article.category}
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: isMobile
                    ? "11px"
                    : "12px",
                }}
              >
                {article.date}
              </div>
            </div>

            {/* TITLE */}
            <h2
              style={{
                fontSize: isMobile
                  ? "22px"
                  : "28px",
                marginBottom: isMobile
                  ? "10px"
                  : "14px",
                lineHeight: 1.3,
                marginTop: 0,
              }}
            >
              {article.title}
            </h2>

            {/* DESC */}
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.7,
                marginBottom: isMobile
                  ? "14px"
                  : "20px",
                fontSize: isMobile
                  ? "14px"
                  : "15px",
                marginTop: 0,
              }}
            >
              {article.desc}
            </p>

            {/* CTA */}
            <div
              style={{
                color: "#60A5FA",
                fontWeight: 600,
                fontSize: isMobile
                  ? "13px"
                  : "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Read More →
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}