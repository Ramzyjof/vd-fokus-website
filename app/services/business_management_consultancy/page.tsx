"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  SearchCheck,
  ClipboardList,
  ChartNoAxesCombined,
  AlertTriangle,
  Target,
  FileCheck,
  Factory,
  ShoppingBag,
  Laptop,
  HeartPulse,
  Truck,
  Landmark,
  Building2,
  CheckCircle2,
  MessageCircle,
  Users,
  Database,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Risk Management",
    subtitle: "Identify. Assess. Mitigate.",
    description:
      "Identify business risks, evaluate control effectiveness, and establish practical actions to protect business performance.",
    icon: ShieldCheck,
    items: [
      "People Risk Health Check",
      "Risk & Control Health Check",
      "Risk Assessment & Risk Register",
      "Risk Heat Map & CAPA Recommendations",
    ],
    href: "/services/business_management_consultancy/risk-management"
  },
  {
    number: "02",
    title: "Investigative Audit",
    subtitle: "Investigate. Analyze. Establish the Facts.",
    description:
      "Conduct structured, evidence-based investigations into suspected fraud, irregularities, and control weaknesses.",
    icon: SearchCheck,
    items: [
      "Fraud and Internal Irregularities",
      "Procurement & Vendor Investigation",
      "Transaction and Document Review",
      "Control Weakness Analysis",
    ],
    href: "/services/business_management_consultancy/investigative-audit",
  },
  {
    number: "03",
    title: "SOP Development",
    subtitle: "Standardize. Control. Improve.",
    description:
      "Develop and improve operating procedures to clarify responsibilities, strengthen controls, and support consistent execution.",
    icon: ClipboardList,
    items: [
      "SOP Review & Development",
      "Process Mapping & Workflow",
      "Roles & Responsibilities",
      "Approval Matrix & Control Points",
    ],
    href: "/services/business_management_consultancy/sop-development",
  },
  {
    number: "04",
    title: "Data Analytics",
    subtitle: "Analyze. Understand. Decide.",
    description:
      "Transform business data into useful insights that help management evaluate performance and make better decisions.",
    icon: ChartNoAxesCombined,
    items: [
      "Business Performance Dashboard",
      "Sales & Profitability Analysis",
      "Operational Performance Analysis",
      "Procurement & Vendor Spend Analysis",
    ],
    href: "/services/business_management_consultancy/data-analytics",
  },
];

const challenges = [
  {
    icon: AlertTriangle,
    title: "Unidentified Business Risks",
    description:
      "Risks and control gaps may remain unnoticed until they affect operations, finances, or reputation.",
  },
  {
    icon: SearchCheck,
    title: "Suspected Fraud or Irregularities",
    description:
      "Management needs reliable evidence and a structured process to understand potential misconduct.",
  },
  {
    icon: FileCheck,
    title: "Ineffective SOPs and Controls",
    description:
      "Unclear procedures and responsibilities can lead to inconsistent execution and control failures.",
  },
  {
    icon: Database,
    title: "Underutilized Business Data",
    description:
      "Business data may contain valuable insights that are not yet translated into management action.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand business objectives, processes, concerns, and the scope of work.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Review relevant information, processes, risks, controls, and available data.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Evaluate findings, identify gaps, and determine their business implications.",
  },
  {
    number: "04",
    title: "Recommend",
    description:
      "Provide practical recommendations prioritized according to business needs.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Support agreed action plans and improvement initiatives within the project scope.",
  },
];

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "FMCG", icon: ShoppingBag },
  { name: "Technology", icon: Laptop },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Logistics", icon: Truck },
  { name: "Financial Services", icon: Landmark },
  { name: "Retail", icon: Building2 },
  { name: "Professional Services", icon: Users },
];

const deliverables = [
  "Risk Assessment & Risk Heat Map",
  "Investigative Audit Report",
  "SOP Documents & Process Flowcharts",
  "Business Dashboards & Analytical Reports",
  "Control Gap Analysis",
  "Prioritized Recommendations & Action Plans",
];

const benefits = [
  "Better visibility of business risks",
  "Stronger internal controls and accountability",
  "Clearer and more consistent business processes",
  "Evidence-based management decisions",
  "Practical recommendations for continuous improvement",
];

const styles = {
  section: {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "90px 40px",
    boxSizing: "border-box" as const,
  },
  heading: {
    fontSize: "clamp(32px, 4vw, 54px)",
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: "-1.5px",
    margin: "0 0 20px",
  },
  paragraph: {
    color: "#94A3B8",
    fontSize: "17px",
    lineHeight: 1.8,
  },
  card: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.02))",
    border: "1px solid rgba(255,255,255,.09)",
    borderRadius: "22px",
    padding: "28px",
    boxSizing: "border-box" as const,
  },
  iconBox: {
    width: "54px",
    height: "54px",
    borderRadius: "15px",
    background: "rgba(96,165,250,.12)",
    border: "1px solid rgba(96,165,250,.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
};

export default function BusinessConsultancyPage() {
  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, #1e293b 0%, #0f172a 48%, #080F1E 100%)",
        color: "#F8FAFC",
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* 01. HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(96,165,250,.15)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            right: "-150px",
            top: "-150px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,.25), transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            ...styles.section,
            minHeight: "650px",
            display: "flex",
            alignItems: "flex-start",
            padding: "clamp(110px, 9.7vw, 130px) clamp(20px, 3vw, 40px) 90px",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: "900px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid rgba(96,165,250,.25)",
                background: "rgba(96,165,250,.08)",
                padding: "10px 16px",
                borderRadius: "999px",
                color: "#93C5FD",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                marginBottom: "28px",
              }}
            >
              <ShieldCheck size={17} />
              BUSINESS / MANAGEMENT CONSULTANCY
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 76px)",
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-2px",
                margin: "0 0 24px",
              }}
            >
              Better Decisions.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Stronger Controls.
              </span>
              <br />
              Lower Business Risk.
            </h1>

            <p
              style={{
                ...styles.paragraph,
                maxWidth: "720px",
                fontSize: "18px",
                marginBottom: "34px",
              }}
            >
              VD Fokus helps organizations identify business risks,
              investigate potential irregularities, strengthen SOPs,
              and turn business data into actionable insights.
            </p>

            <div
              className="bc-hero-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <a
                href="https://wa.me/628129334994"
                target="_blank"
                rel="noopener noreferrer"
                className="bc-primary-button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "17px 24px",
                  borderRadius: "14px",
                  background: "#2563EB",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                <MessageCircle size={19} />
                Discuss Your Business Challenges
                <ArrowRight size={18} />
              </a>

              <a
                href="#consultancy-services"
                className="bc-secondary-button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "17px 24px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,.15)",
                  background: "rgba(255,255,255,.04)",
                  color: "#F8FAFC",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Explore Our Services <ArrowRight size={18} />
              </a>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "22px",
                marginTop: "38px",
                color: "#CBD5E1",
                fontSize: "14px",
              }}
            >
              {["People", "Process", "Controls", "Data"].map((item) => (
                <span
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <CheckCircle2 size={16} color="#60A5FA" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. BUSINESS CHALLENGES */}
      <section style={styles.section}>
        <div
          style={{
            maxWidth: "780px",
            textAlign: "center",
            margin: "0 auto 48px",
          }}
        >
          <p className="bc-eyebrow">THE BUSINESS CHALLENGE</p>
          <h2 style={styles.heading}>
            Business Challenges Need{" "}
            <span style={{ color: "#60A5FA" }}>Practical Solutions.</span>
          </h2>
          <p style={styles.paragraph}>
            Unidentified risks, weak controls, inconsistent procedures,
            and underutilized data can limit business performance.
            Understanding these challenges is the first step toward improvement.
          </p>
        </div>

        <div className="bc-grid bc-grid-4">
          {challenges.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} style={styles.card}>
                <div style={styles.iconBox}>
                  <Icon size={26} color="#60A5FA" />
                </div>
                <h3 className="bc-card-title">{item.title}</h3>
                <p className="bc-card-description">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* 03. FOUR CONSULTANCY SERVICES */}
      <section
        id="consultancy-services"
        style={{
          ...styles.section,
          maxWidth: "none",
          background: "rgba(2,6,23,.32)",
          borderTop: "1px solid rgba(255,255,255,.05)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
        }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div
            style={{
              maxWidth: "800px",
              marginBottom: "48px",
            }}
          >
            <p className="bc-eyebrow">OUR CONSULTANCY SERVICES</p>
            <h2 style={styles.heading}>
              Four Services.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One Business Focus.
              </span>
            </h2>
            <p style={styles.paragraph}>
              We help organizations strengthen risk management,
              establish facts through investigation, improve procedures,
              and make better use of business data.
            </p>
          </div>

          <div className="bc-grid bc-grid-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  style={{
                    ...styles.card,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <div style={styles.iconBox}>
                      <Icon size={27} color="#60A5FA" />
                    </div>
                    <span
                      style={{
                        color: "#60A5FA",
                        fontSize: "14px",
                        fontWeight: 800,
                        letterSpacing: "2px",
                      }}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "27px",
                      fontWeight: 750,
                      margin: "24px 0 8px",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: "#93C5FD",
                      fontSize: "14px",
                      fontWeight: 650,
                      margin: "0 0 14px",
                    }}
                  >
                    {service.subtitle}
                  </p>

                  <p className="bc-card-description">
                    {service.description}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gap: "12px",
                      margin: "14px 0 26px",
                    }}
                  >
                    {service.items.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          color: "#CBD5E1",
                          fontSize: "14px",
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircle2
                          size={17}
                          color="#60A5FA"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <Link
                      href={service.href}
                      className="bc-service-link"
                    >
                      Explore {service.title} <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. OUR APPROACH */}
      <section style={styles.section}>
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 48px",
          }}
        >
          <p className="bc-eyebrow">OUR APPROACH</p>
          <h2 style={styles.heading}>
            From Understanding
            <br />
            <span style={{ color: "#60A5FA" }}>to Improvement.</span>
          </h2>
          <p style={styles.paragraph}>
            Every engagement starts with understanding the client’s
            needs and ends with clear findings and practical recommendations.
          </p>
        </div>

        <div className="bc-grid bc-grid-5">
          {approach.map((item) => (
            <article key={item.number} style={styles.card}>
              <div className="bc-step-number">{item.number}</div>
              <h3 className="bc-card-title">{item.title}</h3>
              <p className="bc-card-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 05. DELIVERABLES & BENEFITS */}
      <section
        style={{
          ...styles.section,
          maxWidth: "none",
          background: "#0B1220",
          borderTop: "1px solid rgba(96,165,250,.12)",
          borderBottom: "1px solid rgba(96,165,250,.12)",
        }}
      >
        <div
          className="bc-grid bc-grid-2"
          style={{ maxWidth: "1320px", margin: "0 auto" }}
        >
          <div>
            <p className="bc-eyebrow">WHAT YOU RECEIVE</p>
            <h2 style={styles.heading}>
              Clear Findings.
              <br />
              <span style={{ color: "#60A5FA" }}>Actionable Outputs.</span>
            </h2>
            <p style={styles.paragraph}>
              Deliverables are tailored to the agreed scope, business
              objectives, and information available for each engagement.
            </p>

            <div style={{ display: "grid", gap: "15px", marginTop: "28px" }}>
              {deliverables.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    color: "#CBD5E1",
                    lineHeight: 1.6,
                  }}
                >
                  <FileCheck
                    size={19}
                    color="#60A5FA"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              ...styles.card,
              alignSelf: "center",
              background:
                "linear-gradient(145deg,rgba(37,99,235,.15),rgba(255,255,255,.025))",
            }}
          >
            <div style={styles.iconBox}>
              <Target size={27} color="#60A5FA" />
            </div>
            <h3 style={{ fontSize: "27px", margin: "24px 0 12px" }}>
              Business Benefits
            </h3>
            <p className="bc-card-description">
              Our goal is to help management understand priorities
              and take informed, practical action.
            </p>

            <div style={{ display: "grid", gap: "18px", marginTop: "26px" }}>
              {benefits.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    color: "#E2E8F0",
                    lineHeight: 1.6,
                  }}
                >
                  <CheckCircle2
                    size={19}
                    color="#60A5FA"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06. INDUSTRIES WE SERVE */}
      <section style={styles.section}>
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 45px",
          }}
        >
          <p className="bc-eyebrow">INDUSTRIES WE SERVE</p>
          <h2 style={styles.heading}>
            Solutions Across
            <br />
            <span style={{ color: "#60A5FA" }}>Diverse Industries.</span>
          </h2>
          <p style={styles.paragraph}>
            Our consultancy services can be tailored to the operating
            environment, processes, and risk exposure of each organization.
          </p>
        </div>

        <div className="bc-grid bc-grid-4 bc-industries">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.name}
                className="bc-industry-card"
              >
                <Icon size={25} color="#60A5FA" />
                <span>{industry.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 07. WHY VD FOKUS */}
      <section
        style={{
          ...styles.section,
          maxWidth: "none",
          background: "rgba(2,6,23,.35)",
          borderTop: "1px solid rgba(255,255,255,.05)",
        }}
      >
        <div
          className="bc-grid bc-grid-2"
          style={{ maxWidth: "1320px", margin: "0 auto", alignItems: "center" }}
        >
          <div>
            <p className="bc-eyebrow">WHY VD FOKUS</p>
            <h2 style={styles.heading}>
              Connecting People,
              <br />
              <span style={{ color: "#60A5FA" }}>
                Process, Controls & Data.
              </span>
            </h2>
            <p style={styles.paragraph}>
              VD Fokus combines an understanding of people and organizational
              processes with risk, control, investigation, and data analysis
              perspectives to help clients address business challenges.
            </p>
          </div>

          <div style={{ display: "grid", gap: "16px" }}>
            {[
              {
                icon: Users,
                title: "People-Centered Perspective",
                text: "Consider people-related risks, accountability, and responsibilities.",
              },
              {
                icon: ShieldCheck,
                title: "Risk & Control Focus",
                text: "Identify weaknesses and prioritize practical improvements.",
              },
              {
                icon: Workflow,
                title: "Process-Oriented Solutions",
                text: "Connect procedures, workflows, and controls to business needs.",
              },
              {
                icon: ChartNoAxesCombined,
                title: "Evidence & Data-Informed Insights",
                text: "Use relevant evidence and available data to support recommendations.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "18px",
                    padding: "20px",
                    borderRadius: "17px",
                    background: "rgba(255,255,255,.035)",
                    border: "1px solid rgba(255,255,255,.07)",
                  }}
                >
                  <div style={styles.iconBox}>
                    <Icon size={24} color="#60A5FA" />
                  </div>
                  <div>
                    <h3 style={{ margin: "2px 0 8px", fontSize: "18px" }}>
                      {item.title}
                    </h3>
                    <p className="bc-card-description">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08. CTA / CONSULTATION */}
      <section
        id="consultation"
        style={{
          ...styles.section,
          paddingTop: "100px",
          paddingBottom: "110px",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "clamp(30px, 6vw, 72px)",
            textAlign: "center",
            borderRadius: "30px",
            border: "1px solid rgba(96,165,250,.25)",
            background:
              "linear-gradient(135deg,#102653 0%,#0B1736 55%,#111827 100%)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              ...styles.iconBox,
              margin: "0 auto 24px",
            }}
          >
            <MessageCircle size={27} color="#60A5FA" />
          </div>

          <p className="bc-eyebrow">LET'S TALK BUSINESS</p>

          <h2
            style={{
              ...styles.heading,
              maxWidth: "780px",
              margin: "0 auto 20px",
            }}
          >
            Let’s Strengthen Your Business{" "}
            <span style={{ color: "#60A5FA" }}>Together.</span>
          </h2>

          <p
            style={{
              ...styles.paragraph,
              maxWidth: "700px",
              margin: "0 auto 30px",
            }}
          >
            Discuss your business challenges with VD Fokus and explore
            practical solutions tailored to your organization’s needs.
          </p>

          <a
            href="https://wa.me/628129334994"
            target="_blank"
            rel="noopener noreferrer"
            className="bc-primary-button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "17px 26px",
              borderRadius: "14px",
              background: "#2563EB",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            <MessageCircle size={19} />
            Contact VD Fokus
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* PAGE FOOTER */}
      <footer
        style={{
          padding: "25px 20px",
          textAlign: "center",
          color: "#64748B",
          fontSize: "13px",
          borderTop: "1px solid rgba(255,255,255,.06)",
        }}
      >
        © {new Date().getFullYear()} PT Vera Diana Fokus. All rights reserved.
      </footer>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        .bc-eyebrow {
          color: #60a5fa;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          line-height: 1.5;
          margin: 0 0 18px;
        }

        .bc-grid {
          display: grid;
          gap: 22px;
        }

        .bc-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .bc-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .bc-grid-5 {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .bc-card-title {
          font-size: 20px;
          line-height: 1.35;
          margin: 22px 0 12px;
          font-weight: 750;
        }

        .bc-card-description {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        .bc-step-number {
          color: #60a5fa;
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .bc-service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #60a5fa;
          font-size: 14px;
          font-weight: 750;
          text-decoration: none;
          margin-top: 8px;
        }

        .bc-service-link:hover {
          color: #93c5fd;
        }

        .bc-industry-card {
          min-height: 115px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 14px;
          border-radius: 18px;
          background: linear-gradient(180deg, #0b1736, #050d1f);
          border: 1px solid rgba(96, 165, 250, 0.16);
          color: #e2e8f0;
          font-size: 14px;
          font-weight: 650;
          box-sizing: border-box;
        }

        .bc-primary-button,
        .bc-secondary-button {
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .bc-primary-button:hover,
        .bc-secondary-button:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1000px) {
          .bc-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bc-grid-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .bc-grid-2,
          .bc-grid-4,
          .bc-grid-5 {
            grid-template-columns: minmax(0, 1fr);
          }

          .bc-industries {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bc-industry-card {
            padding: 15px;
            min-height: 100px;
            font-size: 12px;
          }

          .bc-hero-actions {
            flex-direction: column;
          }

          .bc-hero-actions a {
            width: 100%;
            box-sizing: border-box;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
