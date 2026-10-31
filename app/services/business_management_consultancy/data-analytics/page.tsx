"use client";

import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  BarChart3,
  TrendingUp,
  Database,
  Activity,
} from "lucide-react";


export default function DataAnalyticsPage() {

  /* =====================================================
     RESPONSIVE STATE
  ===================================================== */

  const [isMobile, setIsMobile] = useState(false);


  /* =====================================================
     MOBILE DETECTION
  ===================================================== */

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkMobile
      );
    };

  }, []);


  /* =====================================================
     PAGE
  ===================================================== */

  return (

    <main
      style={{
        position: "relative",

        minHeight: "100vh",

        overflow: "hidden",

        background:
          "#020617",

        color:
          "#FFFFFF",

        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >


      {/* =====================================================
          DATA ANALYTICS CONSULTING PAGE
      ===================================================== */}

{/* DATA ANALYTICS CONSULTING PAGE */}

{/* HERO SECTION */}
<section
  id="data-analytics-hero"
  style={{
    padding: isMobile ? "100px 20px 65px" : "100px 50px",
    background:
      "radial-gradient(circle at top right, rgba(59,130,246,.18), transparent 45%)",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <p
      style={{
        color: "#60A5FA",
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "2px",
        marginBottom: "24px",
      }}
    >
      BUSINESS / MANAGEMENT CONSULTANCY
    </p>

    <h1
      style={{
        fontSize: isMobile ? "38px" : "64px",
        lineHeight: 1.1,
        fontWeight: 800,
        margin: "0 0 24px",
        letterSpacing: "-1px",
      }}
    >
      Turn Business Data
      <br />
      Into{" "}
      <span
        style={{
          background:
            "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Better Decisions.
      </span>
    </h1>

    <p
      style={{
        maxWidth: "720px",
        color: "#CBD5E1",
        fontSize: isMobile ? "15px" : "18px",
        lineHeight: 1.9,
        marginBottom: "30px",
      }}
    >
      VD Fokus helps businesses transform available data
      into actionable insights through performance analytics,
      KPI dashboards, trend analysis, and risk-focused data review.
    </p>

    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "14px",
        maxWidth: "460px",
      }}
    >
      <a
        href="https://wa.me/628161387821"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "16px 22px",
          borderRadius: "12px",
          background: "#2563EB",
          color: "#FFFFFF",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        <MessageCircle size={19} />
        Discuss Your Needs
      </a>

      <a
        href="#analytics-services"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "16px 22px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,.16)",
          color: "#FFFFFF",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Explore Services →
      </a>
    </div>

    {/* DASHBOARD PREVIEW */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "repeat(2,minmax(0,1fr))"
          : "repeat(4,minmax(0,1fr))",
        gap: "16px",
        marginTop: "55px",
      }}
    >
      {[
        { title: "Performance", value: "KPIs", icon: BarChart3 },
        { title: "Business Trends", value: "Trends", icon: TrendingUp },
        { title: "Data Quality", value: "Review", icon: Database },
        { title: "Risk Signals", value: "Alerts", icon: Activity },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            style={{
              padding: isMobile ? "18px 14px" : "24px",
              borderRadius: "18px",
              background:
                "linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))",
              border: "1px solid rgba(96,165,250,.18)",
            }}
          >
            <Icon
              size={25}
              color="#60A5FA"
              style={{ marginBottom: "16px" }}
            />
            <p
              style={{
                color: "#94A3B8",
                fontSize: "13px",
                margin: "0 0 8px",
              }}
            >
              {item.title}
            </p>
            <h3
              style={{
                color: "#60A5FA",
                fontSize: "22px",
                margin: 0,
              }}
            >
              {item.value}
            </h3>
          </div>
        );
      })}
    </div>

    <p
      style={{
        color: "#64748B",
        fontSize: "11px",
        marginTop: "12px",
      }}
    >
      Illustrative dashboard categories, not actual client data.
    </p>
  </div>
</section>

{/* BUSINESS CHALLENGE */}
<section
  id="analytics-challenge"
  style={{
    padding: isMobile ? "65px 20px" : "90px 40px",
    background: "#0B1220",
    borderTop: "1px solid rgba(96,165,250,.12)",
    borderBottom: "1px solid rgba(96,165,250,.12)",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: "45px" }}>
      <p
        style={{
          color: "#60A5FA",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "2px",
        }}
      >
        THE BUSINESS CHALLENGE
      </p>

      <h2
        style={{
          fontSize: isMobile ? "32px" : "46px",
          lineHeight: 1.2,
          margin: "18px 0",
        }}
      >
        Having Data Is Not Enough.
        <br />
        <span style={{ color: "#60A5FA" }}>
          Understanding It Matters.
        </span>
      </h2>

      <p
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          color: "#94A3B8",
          lineHeight: 1.8,
        }}
      >
        Business data creates value when it helps management
        understand performance, identify issues, and decide
        what action to take.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(4,minmax(0,1fr))",
        gap: "18px",
      }}
    >
      {[
        {
          title: "Scattered Data",
          description:
            "Information is spread across spreadsheets, reports, and business systems.",
        },
        {
          title: "Limited KPI Visibility",
          description:
            "Management lacks a consistent view of performance against targets.",
        },
        {
          title: "Hidden Trends",
          description:
            "Changes and recurring performance issues may go unnoticed.",
        },
        {
          title: "Unidentified Exceptions",
          description:
            "Unusual data patterns may require further review.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "#111E35",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Activity
            size={28}
            color="#60A5FA"
            style={{ marginBottom: "18px" }}
          />
          <h3 style={{ fontSize: "18px", margin: "0 0 12px" }}>
            {item.title}
          </h3>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "14px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ANALYTICS SERVICES */}
<section
  id="analytics-services"
  style={{
    padding: isMobile ? "65px 20px" : "100px 40px",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: "48px" }}>
      <p
        style={{
          color: "#60A5FA",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "2px",
        }}
      >
        OUR SERVICES
      </p>

      <h2
        style={{
          fontSize: isMobile ? "32px" : "48px",
          lineHeight: 1.2,
          margin: "18px 0",
        }}
      >
        Data Analytics Solutions
        <br />
        <span
          style={{
            background:
              "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Built for Business
        </span>
      </h2>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(2,minmax(0,1fr))",
        gap: "22px",
      }}
    >
      {[
        {
          title: "Business Performance Analytics",
          description:
            "Understand business performance through structured analysis of operational and financial data.",
          icon: BarChart3,
          features: [
            "Sales and revenue analysis",
            "Operational performance review",
            "Business performance measurement",
          ],
        },
        {
          title: "KPI Dashboard Development",
          description:
            "Turn business metrics into clear dashboards for monitoring results and supporting management decisions.",
          icon: Activity,
          features: [
            "KPI tracking",
            "Management dashboard design",
            "Performance monitoring",
          ],
        },
        {
          title: "Trend & Variance Analysis",
          description:
            "Identify performance patterns, deviations, and changes requiring management attention.",
          icon: TrendingUp,
          features: [
            "Historical trend analysis",
            "Actual versus target comparison",
            "Variance analysis",
          ],
        },
        {
          title: "Anomaly & Risk Analytics",
          description:
            "Analyze unusual patterns in available data that may require further review.",
          icon: Database,
          features: [
            "Unusual transaction patterns",
            "Exception analysis",
            "Risk indicator monitoring",
          ],
        },
      ].map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={service.title}
            style={{
              padding: isMobile ? "24px" : "32px",
              borderRadius: "22px",
              background:
                "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.015))",
              border: "1px solid rgba(96,165,250,.16)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "15px",
                  background: "rgba(96,165,250,.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={29} color="#60A5FA" />
              </div>

              <span
                style={{
                  color: "#475569",
                  fontSize: "24px",
                  fontWeight: 800,
                }}
              >
                0{index + 1}
              </span>
            </div>

            <h3
              style={{
                fontSize: "21px",
                lineHeight: 1.4,
                margin: "0 0 14px",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: "#94A3B8",
                fontSize: "14px",
                lineHeight: 1.8,
              }}
            >
              {service.description}
            </p>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,.08)",
                paddingTop: "18px",
                marginTop: "20px",
              }}
            >
              {service.features.map((feature) => (
                <p
                  key={feature}
                  style={{
                    color: "#CBD5E1",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    margin: "10px 0",
                  }}
                >
                  <span style={{ color: "#60A5FA" }}>✓ </span>
                  {feature}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* OUR APPROACH */}
<section
  id="analytics-approach"
  style={{
    padding: isMobile ? "65px 20px" : "90px 40px",
    background: "#0B1220",
    borderTop: "1px solid rgba(96,165,250,.12)",
    borderBottom: "1px solid rgba(96,165,250,.12)",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: "45px" }}>
      <p
        style={{
          color: "#60A5FA",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "2px",
        }}
      >
        OUR APPROACH
      </p>
      <h2
        style={{
          fontSize: isMobile ? "30px" : "44px",
          lineHeight: 1.2,
          margin: "18px 0",
        }}
      >
        From Business Questions
        <br />
        <span style={{ color: "#60A5FA" }}>
          to Actionable Insights
        </span>
      </h2>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(5,minmax(0,1fr))",
        gap: "16px",
      }}
    >
      {[
        {
          title: "Understand",
          description:
            "Define objectives and management questions.",
        },
        {
          title: "Collect & Prepare",
          description:
            "Review data sources and prepare relevant information.",
        },
        {
          title: "Analyze",
          description:
            "Examine KPIs, trends, variances, and patterns.",
        },
        {
          title: "Visualize",
          description:
            "Present findings through reports and dashboards.",
        },
        {
          title: "Recommend",
          description:
            "Translate findings into practical actions.",
        },
      ].map((step, index) => (
        <div
          key={step.title}
          style={{
            padding: "22px",
            borderRadius: "18px",
            background: "#111E35",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <p
            style={{
              color: "#60A5FA",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            STEP 0{index + 1}
          </p>
          <h3 style={{ fontSize: "18px", margin: "16px 0 12px" }}>
            {step.title}
          </h3>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "13px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* DELIVERABLES & BENEFITS */}
<section
  id="analytics-deliverables"
  style={{
    padding: isMobile ? "65px 20px" : "90px 40px",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "40px",
    }}
  >
    <div>
      <p
        style={{
          color: "#60A5FA",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "2px",
        }}
      >
        PROJECT DELIVERABLES
      </p>

      <h2
        style={{
          fontSize: isMobile ? "32px" : "42px",
          lineHeight: 1.2,
          margin: "18px 0",
        }}
      >
        Insights You Can
        <br />
        <span style={{ color: "#60A5FA" }}>
          Put Into Action
        </span>
      </h2>

      <p style={{ color: "#94A3B8", lineHeight: 1.9 }}>
        Deliverables are tailored to the agreed scope, available
        data, and intended business decisions.
      </p>
    </div>

    <div
      style={{
        padding: "28px",
        borderRadius: "22px",
        background: "#111E35",
        border: "1px solid rgba(96,165,250,.16)",
      }}
    >
      {[
        {
          title: "Analytical Reports",
          description: "Structured findings and variance analysis.",
        },
        {
          title: "KPI Dashboards",
          description: "Visual monitoring of agreed performance indicators.",
        },
        {
          title: "Findings & Exceptions",
          description: "Observations requiring management attention.",
        },
        {
          title: "Recommendations",
          description: "Prioritized improvement actions.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            padding: "16px 0",
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <h3 style={{ fontSize: "16px", margin: "0 0 8px" }}>
            <span style={{ color: "#60A5FA" }}>✓ </span>
            {item.title}
          </h3>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "13px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* WHY VD FOKUS */}
<section
  id="analytics-why-vdfokus"
  style={{
    padding: isMobile ? "65px 20px" : "90px 40px",
    background: "#0B1220",
    borderTop: "1px solid rgba(96,165,250,.12)",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <p
        style={{
          color: "#60A5FA",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "2px",
        }}
      >
        WHY VD FOKUS
      </p>
      <h2
        style={{
          fontSize: isMobile ? "31px" : "44px",
          margin: "18px 0",
        }}
      >
        Analytics With Business Context
      </h2>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(4,minmax(0,1fr))",
        gap: "18px",
      }}
    >
      {[
        {
          title: "Business-Focused",
          description:
            "Start with management questions and business objectives.",
        },
        {
          title: "Risk-Aware",
          description:
            "Connect relevant findings with business risks and controls.",
        },
        {
          title: "Performance-Oriented",
          description:
            "Focus on measurable indicators and performance gaps.",
        },
        {
          title: "Actionable",
          description:
            "Translate findings into practical recommendations.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "#111E35",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <h3 style={{ fontSize: "18px", margin: "0 0 12px" }}>
            {item.title}
          </h3>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "14px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA */}
<section
  id="analytics-consultation"
  style={{
    padding: isMobile ? "40px 20px 75px" : "50px 40px 100px",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: isMobile ? "30px 22px" : "55px",
      borderRadius: "26px",
      background:
        "linear-gradient(135deg,#0B1D4A,#10274D,#111827)",
      border: "1px solid rgba(96,165,250,.22)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: isMobile ? "30px" : "44px",
        lineHeight: 1.2,
        margin: "0 0 20px",
      }}
    >
      Ready to Make Better
      <br />
      <span style={{ color: "#60A5FA" }}>
        Data-Driven Decisions?
      </span>
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto 28px",
        color: "#CBD5E1",
        lineHeight: 1.9,
      }}
    >
      Tell us about your business objectives, available data,
      and analytical challenges. Let's discuss an approach
      tailored to your needs.
    </p>

    <a
      href="https://wa.me/628161387821"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "16px 25px",
        borderRadius: "12px",
        background: "#25D366",
        color: "#FFFFFF",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      <MessageCircle size={19} />
      Contact VD Fokus
    </a>
  </div>
</section>

{/* END DATA ANALYTICS CONSULTING PAGE */}

    </main>
  );
}



