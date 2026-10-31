
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ClipboardCheck,
  Workflow,
  Users,
  ShieldCheck,
  Search,
  FileText,
  Target,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Settings2,
  MessageCircle,
  Building2,
  AlertTriangle,
} from "lucide-react";

const BLUE = "#60A5FA";
const MUTED = "#A7B5CC";
const PANEL = "rgba(30, 41, 59, 0.58)";
const BORDER = "rgba(148, 163, 184, 0.20)";

const challenges = [
  {
    icon: FileText,
    title: "Outdated SOPs",
    text: "Procedures no longer reflect current business processes, systems, or organizational needs.",
  },
  {
    icon: Users,
    title: "Unclear Responsibilities",
    text: "Employees are uncertain about ownership, accountability, and approval authority.",
  },
  {
    icon: Workflow,
    title: "Inefficient Workflows",
    text: "Duplicated activities, unnecessary steps, and unclear handovers slow down execution.",
  },
  {
    icon: ShieldCheck,
    title: "Weak Control Points",
    text: "Important checks, approvals, and safeguards may be missing or inconsistently applied.",
  },
];

const services = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "SOP Review & Development",
    tagline: "Standardize. Clarify. Improve.",
    text: "Review existing procedures or develop new SOPs aligned with business operations, policies, and control requirements.",
    items: [
      "SOP Review & Gap Assessment",
      "New SOP Development",
      "Procedure Standardization",
      "Document Review & Revision",
    ],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Process Mapping & Workflow",
    tagline: "Visualize. Simplify. Optimize.",
    text: "Map business activities to identify bottlenecks, duplicated work, unclear handovers, and opportunities for improvement.",
    items: [
      "Current-State Process Mapping",
      "Workflow Analysis",
      "Process Improvement",
      "Future-State Workflow Design",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Roles & Responsibilities",
    tagline: "Define. Assign. Account.",
    text: "Clarify process ownership and accountability so employees understand who performs, reviews, and approves each activity.",
    items: [
      "Roles & Responsibilities Matrix",
      "Process Ownership",
      "Segregation of Duties Review",
      "Responsibility Clarification",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Approval Matrix & Control Points",
    tagline: "Authorize. Control. Protect.",
    text: "Establish approval requirements and control checkpoints to strengthen accountability and reduce avoidable operational errors.",
    items: [
      "Approval Authority Matrix",
      "Control Point Identification",
      "Review & Authorization Steps",
      "Control Improvement Recommendations",
    ],
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "Understand business objectives, existing documentation, and how work is actually performed.",
  },
  {
    number: "02",
    title: "Assess",
    text: "Identify process gaps, unclear responsibilities, inefficiencies, and control weaknesses.",
  },
  {
    number: "03",
    title: "Design",
    text: "Develop improved workflows, responsibilities, approval requirements, and procedures.",
  },
  {
    number: "04",
    title: "Validate",
    text: "Review proposed SOPs with relevant process owners and management.",
  },
  {
    number: "05",
    title: "Finalize",
    text: "Deliver agreed documentation and practical recommendations for implementation.",
  },
];

const deliverables = [
  "Reviewed or newly developed SOP documents",
  "Business process flowcharts",
  "Roles and responsibilities matrix",
  "Approval authority matrix",
  "Operational control points",
  "Process gap findings and recommendations",
];

const benefits = [
  "More consistent execution of business processes",
  "Clearer responsibilities and accountability",
  "Reduced duplicated work and avoidable errors",
  "Stronger approval procedures and internal controls",
  "Improved process transparency and documentation",
  "A clearer basis for monitoring and continuous improvement",
];

const industries = [
  "Distribution & Trading",
  "Manufacturing & FMCG",
  "Food & Beverage",
  "Professional Services",
  "Engineering & Technical Services",
  "Other Operational Businesses",
];

const relatedServices = [
  {
    icon: ShieldCheck,
    title: "Risk Management",
    text: "Identify risks and determine which processes require stronger controls.",
    href: "/services/business_management_consultancy/risk-management",
  },
  {
    icon: Search,
    title: "Investigative Audit",
    text: "Investigate suspected irregularities and examine supporting evidence.",
    href: "/services/business_management_consultancy/investigative-audit",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    text: "Use operational data to monitor performance and identify unusual patterns.",
    href: "/services/business_management_consultancy/data-analytics",
  },
];

export default function SOPDevelopmentPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const container: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "0 22px" : "0 34px",
    boxSizing: "border-box",
  };

  const eyebrow: React.CSSProperties = {
    color: BLUE,
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "16px",
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: isMobile ? "30px" : "42px",
    lineHeight: 1.2,
    letterSpacing: "-1px",
    fontWeight: 800,
    margin: "0 0 18px",
  };

  const sectionText: React.CSSProperties = {
    color: MUTED,
    fontSize: "16px",
    lineHeight: 1.85,
    maxWidth: "760px",
    margin: "0 auto",
  };

  const card: React.CSSProperties = {
    background: PANEL,
    border: `1px solid ${BORDER}`,
    borderRadius: "20px",
    padding: isMobile ? "24px" : "28px",
    boxSizing: "border-box",
  };

  const primaryButton: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    background: "linear-gradient(135deg, #3B82F6, #6366F1)",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "15px 23px",
    borderRadius: "999px",
    fontWeight: 750,
    fontSize: "14px",
    boxShadow: "0 8px 30px rgba(59,130,246,0.24)",
  };

  const secondaryButton: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    border: `1px solid ${BORDER}`,
    background: "rgba(15,23,42,0.5)",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "14px 21px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "14px",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 12% 0%, rgba(37,99,235,0.16), transparent 36%), radial-gradient(ellipse at 95% 32%, rgba(99,102,241,0.10), transparent 32%), #020617",
        color: "#FFFFFF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* 01. HERO */}
      <section
        style={{
          padding: isMobile ? "112px 0 64px" : "108px 0 94px",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
              gap: isMobile ? "42px" : "70px",
              alignItems: "center",
            }}
          >
            <div>
              <div style={eyebrow}>BUSINESS MANAGEMENT CONSULTANCY</div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  padding: "8px 13px",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "999px",
                  color: "#CBD5E1",
                  fontSize: "12px",
                  marginBottom: "22px",
                  background: "rgba(30,41,59,0.4)",
                }}
              >
                <ClipboardCheck size={15} color={BLUE} />
                SOP DEVELOPMENT & PROCESS IMPROVEMENT
              </div>

              <h1
                style={{
                  fontSize: isMobile ? "42px" : "62px",
                  lineHeight: 1.08,
                  letterSpacing: "-2px",
                  fontWeight: 850,
                  margin: "0 0 24px",
                }}
              >
                Build Better Processes.
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #60A5FA, #818CF8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Strengthen Controls.
                </span>
              </h1>

              <p
                style={{
                  color: MUTED,
                  fontSize: isMobile ? "16px" : "18px",
                  lineHeight: 1.9,
                  margin: "0 0 30px",
                  maxWidth: "650px",
                }}
              >
                VD Fokus helps organizations review, develop, and improve
                Standard Operating Procedures to clarify responsibilities,
                streamline workflows, and strengthen operational controls.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <a href="#consultation" style={primaryButton}>
                  Discuss Your SOP Needs <ArrowRight size={17} />
                </a>
                <a href="#services" style={secondaryButton}>
                  Explore Our Services
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "30px",
                  color: "#CBD5E1",
                  fontSize: "13px",
                }}
              >
                <span><CheckCircle2 size={15} color={BLUE} style={{ verticalAlign: "middle", marginRight: 7 }} />Process clarity</span>
                <span><CheckCircle2 size={15} color={BLUE} style={{ verticalAlign: "middle", marginRight: 7 }} />Clear accountability</span>
                <span><CheckCircle2 size={15} color={BLUE} style={{ verticalAlign: "middle", marginRight: 7 }} />Stronger controls</span>
              </div>
            </div>

            <div
              style={{
                ...card,
                padding: isMobile ? "24px" : "32px",
                background:
                  "linear-gradient(145deg, rgba(30,41,59,0.92), rgba(15,23,42,0.88))",
                boxShadow: "0 25px 80px rgba(0,0,0,0.22)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "28px",
                  gap: "12px",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", color: MUTED }}>
                    THE SOP FRAMEWORK
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: 800, marginTop: 7 }}>
                    From Process to Control
                  </div>
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "15px",
                    background: "rgba(59,130,246,0.13)",
                    border: "1px solid rgba(96,165,250,0.25)",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <Workflow color={BLUE} size={25} />
                </div>
              </div>

              {[
                { n: "01", title: "Define the Process", text: "Map activities and handovers", icon: Target },
                { n: "02", title: "Assign Responsibility", text: "Clarify ownership and authority", icon: Users },
                { n: "03", title: "Establish Controls", text: "Define reviews and approvals", icon: ShieldCheck },
                { n: "04", title: "Document & Improve", text: "Standardize how work is performed", icon: FileText },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.n}
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                      padding: "17px 0",
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    <div
                      style={{
                        width: "43px",
                        height: "43px",
                        borderRadius: "13px",
                        display: "grid",
                        placeItems: "center",
                        background: "rgba(59,130,246,0.12)",
                        color: BLUE,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={21} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 750, fontSize: "14px" }}>
                        {item.title}
                      </div>
                      <div style={{ color: MUTED, fontSize: "12px", marginTop: 5 }}>
                        {item.text}
                      </div>
                    </div>
                    <span style={{ color: BLUE, fontSize: "12px", fontWeight: 800 }}>
                      {item.n}
                    </span>
                  </div>
                );
              })}
              <div
                style={{
                  marginTop: "18px",
                  padding: "15px",
                  borderRadius: "13px",
                  background: "rgba(96,165,250,0.08)",
                  color: "#BFDBFE",
                  fontSize: "13px",
                  lineHeight: 1.7,
                }}
              >
                Effective procedures connect people, processes, and controls.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. BUSINESS CHALLENGES */}
      <section style={{ padding: isMobile ? "68px 0" : "90px 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <div style={eyebrow}>BUSINESS CHALLENGES</div>
            <h2 style={sectionTitle}>
              When Processes Lack Clarity,
              <br />
              <span style={{ color: BLUE }}>Business Performance Suffers.</span>
            </h2>
            <p style={sectionText}>
              Procedures that are outdated, unclear, or difficult to follow
              can create operational inconsistencies and unnecessary risks.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(4, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={card}>
                  <div style={{ color: BLUE, marginBottom: "22px" }}>
                    <Icon size={30} />
                  </div>
                  <h3 style={{ fontSize: "18px", margin: "0 0 12px", lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. SERVICES */}
      <section
        id="services"
        style={{
          padding: isMobile ? "68px 0" : "90px 0",
          background: "rgba(15,23,42,0.48)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          scrollMarginTop: "100px",
        }}
      >
        <div style={container}>
          <div style={{ marginBottom: "42px" }}>
            <div style={eyebrow}>OUR SERVICES</div>
            <h2 style={sectionTitle}>
              SOP Development Services
            </h2>
            <p style={{ ...sectionText, margin: 0 }}>
              Practical support to help your organization establish clear
              procedures, efficient workflows, and appropriate controls.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
              gap: "20px",
            }}
          >
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  style={{
                    ...card,
                    padding: isMobile ? "25px" : "32px",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "14px",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "16px",
                        display: "grid",
                        placeItems: "center",
                        color: BLUE,
                        background: "rgba(59,130,246,0.13)",
                        border: "1px solid rgba(96,165,250,0.2)",
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span style={{ color: BLUE, fontWeight: 850, fontSize: "15px" }}>
                      {item.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "23px", margin: "0 0 9px", lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <div style={{ color: BLUE, fontWeight: 750, fontSize: "14px", marginBottom: "16px" }}>
                    {item.tagline}
                  </div>
                  <p style={{ color: MUTED, fontSize: "14px", lineHeight: 1.85, margin: "0 0 22px" }}>
                    {item.text}
                  </p>

                  <div style={{ display: "grid", gap: "13px" }}>
                    {item.items.map((point) => (
                      <div
                        key={point}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "13px",
                          color: "#E2E8F0",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2 size={16} color={BLUE} style={{ flexShrink: 0, marginTop: 1 }} />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. SOP, RISK & CONTROLS */}
      <section style={{ padding: isMobile ? "68px 0" : "90px 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: "42px" }}>
            <div style={eyebrow}>A CONNECTED APPROACH</div>
            <h2 style={sectionTitle}>
              SOP, Risk & Internal Controls
            </h2>
            <p style={sectionText}>
              SOPs are more effective when they are connected to risk
              management, investigation, and performance monitoring.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {relatedServices.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={card}>
                  <Icon size={29} color={BLUE} />
                  <h3 style={{ fontSize: "20px", margin: "20px 0 10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8, margin: "0 0 22px" }}>
                    {item.text}
                  </p>
                  <Link
                    href={item.href}
                    style={{
                      color: BLUE,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      fontWeight: 750,
                      textDecoration: "none",
                    }}
                  >
                    Explore Service <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div
            style={{
              ...card,
              marginTop: "22px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "18px",
              background: "rgba(37,99,235,0.08)",
              borderColor: "rgba(96,165,250,0.25)",
            }}
          >
            <AlertTriangle size={29} color={BLUE} />
            <div>
              <div style={{ fontWeight: 800, marginBottom: "7px" }}>
                Procedures should address real operational risks.
              </div>
              <p style={{ color: MUTED, margin: 0, fontSize: "14px", lineHeight: 1.8 }}>
                VD Fokus can help identify where responsibilities, approvals,
                documentation, and control checkpoints need improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. OUR APPROACH */}
      <section
        style={{
          padding: isMobile ? "68px 0" : "90px 0",
          background: "rgba(15,23,42,0.48)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <div style={eyebrow}>OUR APPROACH</div>
            <h2 style={sectionTitle}>From Assessment to Implementation</h2>
            <p style={sectionText}>
              A structured approach designed around your existing operations,
              business objectives, and practical requirements.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(5, minmax(0, 1fr))",
              gap: "15px",
            }}
          >
            {approach.map((item, index) => (
              <div key={item.number} style={{ ...card, padding: "23px 20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "23px",
                  }}
                >
                  <span style={{ color: BLUE, fontWeight: 850, fontSize: "22px" }}>
                    {item.number}
                  </span>
                  <div style={{ height: "1px", flex: 1, background: BORDER, marginLeft: "14px" }} />
                </div>
                <h3 style={{ fontSize: "17px", margin: "0 0 12px" }}>
                  {item.title}
                </h3>
                <p style={{ color: MUTED, fontSize: "13px", lineHeight: 1.8, margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. DELIVERABLES */}
      <section style={{ padding: isMobile ? "68px 0" : "90px 0" }}>
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr",
              gap: isMobile ? "35px" : "65px",
              alignItems: "center",
            }}
          >
            <div>
              <div style={eyebrow}>PROJECT DELIVERABLES</div>
              <h2 style={sectionTitle}>
                Clear Documentation.
                <br />
                Practical Outcomes.
              </h2>
              <p style={{ ...sectionText, margin: 0 }}>
                Deliverables are agreed based on project scope, process
                complexity, and the needs of the organization.
              </p>
            </div>

            <div style={card}>
              {deliverables.map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "13px",
                    alignItems: "flex-start",
                    padding: "15px 0",
                    borderBottom: index === deliverables.length - 1 ? "none" : `1px solid ${BORDER}`,
                    color: "#E2E8F0",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  <CheckCircle2 color={BLUE} size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07. BENEFITS */}
      <section
        style={{
          padding: isMobile ? "68px 0" : "85px 0",
          background: "rgba(15,23,42,0.48)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={eyebrow}>BUSINESS BENEFITS</div>
            <h2 style={sectionTitle}>Designed for Better Execution</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            {benefits.map((item) => (
              <div
                key={item}
                style={{
                  ...card,
                  display: "flex",
                  gap: "13px",
                  alignItems: "flex-start",
                  padding: "22px",
                }}
              >
                <CheckCircle2 size={20} color={BLUE} style={{ flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: "14px", lineHeight: 1.75, color: "#E2E8F0" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. INDUSTRIES */}
      <section style={{ padding: isMobile ? "68px 0" : "85px 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: "38px" }}>
            <div style={eyebrow}>INDUSTRIES WE SERVE</div>
            <h2 style={sectionTitle}>Processes That Fit Your Business</h2>
            <p style={sectionText}>
              SOP requirements differ by industry, operating model, and
              organizational complexity.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            {industries.map((item) => (
              <div
                key={item}
                style={{
                  ...card,
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "22px",
                }}
              >
                <Building2 size={23} color={BLUE} />
                <span style={{ fontWeight: 700, fontSize: "14px" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. WHY VD FOKUS */}
      <section
        style={{
          padding: isMobile ? "65px 0" : "80px 0",
          background: "rgba(15,23,42,0.48)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr",
              gap: isMobile ? "30px" : "65px",
              alignItems: "center",
            }}
          >
            <div>
              <div style={eyebrow}>WHY VD FOKUS</div>
              <h2 style={sectionTitle}>
                Beyond Documents.
                <br />
                Focused on Controls.
              </h2>
              <p style={{ ...sectionText, margin: 0 }}>
                We look at how people, processes, and controls work together
                to support consistent execution and better operational
                accountability.
              </p>
            </div>

            <div style={{ display: "grid", gap: "16px" }}>
              {[
                {
                  icon: Target,
                  title: "Practical and Business-Focused",
                  text: "Recommendations are developed around actual business processes and operational needs.",
                },
                {
                  icon: ShieldCheck,
                  title: "Risk and Control Awareness",
                  text: "Procedures are considered alongside responsibilities, approvals, and relevant control points.",
                },
                {
                  icon: Settings2,
                  title: "Structured and Collaborative",
                  text: "The approach supports process-owner input and management review before finalization.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    style={{
                      ...card,
                      display: "flex",
                      gap: "18px",
                      alignItems: "flex-start",
                    }}
                  >
                    <Icon size={25} color={BLUE} style={{ flexShrink: 0 }} />
                    <div>
                      <h3 style={{ margin: "0 0 9px", fontSize: "17px" }}>
                        {item.title}
                      </h3>
                      <p style={{ color: MUTED, margin: 0, fontSize: "14px", lineHeight: 1.8 }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section
        id="consultation"
        style={{
          padding: isMobile ? "75px 0" : "105px 0",
          scrollMarginTop: "100px",
        }}
      >
        <div style={container}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              padding: isMobile ? "38px 22px" : "68px 55px",
              borderRadius: "28px",
              border: "1px solid rgba(96,165,250,0.26)",
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.24), transparent 60%), linear-gradient(145deg, #111C32, #0B1222)",
            }}
          >
            <div style={{ color: BLUE, marginBottom: "20px" }}>
              <MessageCircle size={35} style={{ margin: "0 auto" }} />
            </div>

            <div style={eyebrow}>LET'S IMPROVE YOUR PROCESSES</div>
            <h2
              style={{
                ...sectionTitle,
                maxWidth: "760px",
                margin: "0 auto 20px",
              }}
            >
              Make Your Processes Work Better.
            </h2>
            <p style={{ ...sectionText, marginBottom: "30px" }}>
              Discuss your current SOP challenges with VD Fokus and explore
              practical opportunities to improve process clarity,
              accountability, and operational controls.
            </p>

            <a
              href="https://wa.me/628161387821"
              target="_blank"
              rel="noopener noreferrer"
              style={primaryButton}
            >
              Schedule a Consultation <ArrowRight size={17} />
            </a>

            <p style={{ color: "#94A3B8", fontSize: "12px", marginTop: "20px", lineHeight: 1.7 }}>
              The scope and deliverables will be tailored to your
              organization&apos;s needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
