
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  SearchCheck,
  FileSearch,
  FileCheck,
  Database,
  ClipboardCheck,
  Scale,
  AlertTriangle,
  ShoppingCart,
  ReceiptText,
  Fingerprint,
  Factory,
  ShoppingBag,
  HeartPulse,
  Truck,
  Landmark,
  Package,
  Building2,
  CheckCircle2,
  MessageCircle,
  Workflow,
  Target,
  LockKeyhole,
  Search,
} from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Suspected Fraud",
    description:
      "Investigate indications of improper benefits, suspected misconduct, or other activities that may harm the company.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Vendor Irregularities",
    description:
      "Examine unusual procurement decisions, vendor relationships, and transactions that require further verification.",
  },
  {
    icon: ReceiptText,
    title: "Unusual Transactions",
    description:
      "Identify inconsistencies across invoices, purchase orders, approvals, receiving records, and payment documents.",
  },
  {
    icon: LockKeyhole,
    title: "Potential Control Override",
    description:
      "Review indications of unauthorized changes, bypassed approvals, or weaknesses in access and transaction controls.",
  },
];

const services = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Fraud Investigation",
    description:
      "Examine suspected fraud and potential misconduct through structured review of relevant records, transactions, and evidence.",
    deliverables: [
      "Review of allegations and relevant records",
      "Transaction and event reconstruction",
      "Assessment of supporting and contradictory evidence",
    ],
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Procurement & Vendor Investigation",
    description:
      "Investigate potential irregularities in procurement activities and vendor relationships, including suspected improper commissions.",
    deliverables: [
      "Vendor master and transaction review",
      "Purchase order, invoice, and payment tracing",
      "Procurement control gap analysis",
    ],
  },
  {
    number: "03",
    icon: FileSearch,
    title: "Transaction and Document Review",
    description:
      "Trace transactions and compare supporting documents to identify inconsistencies, unusual patterns, and potential exceptions.",
    deliverables: [
      "Transaction reconciliation and tracing",
      "Document consistency checks",
      "List of exceptions requiring follow-up",
    ],
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Evidence Analysis & Investigation Report",
    description:
      "Analyze available evidence and prepare a structured report that separates verified facts, indications, conclusions, and limitations.",
    deliverables: [
      "Evidence analysis and event timeline",
      "Investigation findings and conclusions",
      "Root cause and control recommendations",
    ],
  },
];

const methodology = [
  {
    number: "01",
    title: "Mandate & Scope",
    description:
      "Define the allegation, objectives, period, relevant parties, authority, and boundaries of the investigation.",
  },
  {
    number: "02",
    title: "Preserve & Collect Evidence",
    description:
      "Identify relevant records and data, preserve their integrity, and document sources and collection procedures.",
  },
  {
    number: "03",
    title: "Examine & Trace",
    description:
      "Trace relevant transactions and examine documents, system records, approvals, and other available evidence.",
  },
  {
    number: "04",
    title: "Corroborate & Assess",
    description:
      "Compare independent sources, assess consistency, and consider both supporting and contradictory evidence.",
  },
  {
    number: "05",
    title: "Analyze Findings",
    description:
      "Evaluate established facts, unresolved questions, potential impact, and weaknesses in relevant controls.",
  },
  {
    number: "06",
    title: "Report & Recommend",
    description:
      "Present findings, conclusions, evidence limitations, and practical recommendations for management action.",
  },
];

const evidenceSources = [
  {
    icon: FileCheck,
    title: "Business Documents",
    description:
      "Purchase orders, invoices, contracts, approval records, receiving documents, and payment records.",
  },
  {
    icon: Database,
    title: "System & Transaction Logs",
    description:
      "Relevant ERP transaction logs, vendor master change logs, user access logs, and approval history, where available.",
  },
  {
    icon: Search,
    title: "Digital & Communication Evidence",
    description:
      "Relevant business emails, authorized communications, and digital records, subject to access rights and applicable requirements.",
  },
];

const deliverables = [
  "Investigative Audit Report",
  "Event and Transaction Timeline",
  "Evidence Analysis and Findings",
  "Financial Exposure Assessment, where supportable",
  "Root Cause and Control Gap Analysis",
  "Recommendations and Corrective Action Plan",
];

const benefits = [
  "Better-informed management decisions",
  "Clearer understanding of established facts",
  "Identification of relevant financial exposure",
  "Improved accountability and control awareness",
  "Practical actions to reduce recurrence risk",
];

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "FMCG", icon: ShoppingBag },
  { name: "Distribution", icon: Package },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Financial Services", icon: Landmark },
  { name: "Logistics", icon: Truck },
  { name: "Retail", icon: Building2 },
  { name: "Professional Services", icon: Scale },
];

const reasons = [
  {
    icon: SearchCheck,
    title: "Evidence-Based Investigation",
    description:
      "Findings are evaluated against available evidence, including information that may contradict an initial allegation.",
  },
  {
    icon: Workflow,
    title: "Structured Transaction Analysis",
    description:
      "Relevant transactions, documents, approvals, and process steps are examined systematically.",
  },
  {
    icon: ShieldCheck,
    title: "Integrated Control Perspective",
    description:
      "The investigation considers control weaknesses and process failures that may have enabled an irregularity.",
  },
  {
    icon: Target,
    title: "Actionable Recommendations",
    description:
      "Recommendations focus on practical improvements aligned with the findings and the client's priorities.",
  },
];

export default function InvestigativeAuditPage() {
  return (
    <main className="ia-page">
      {/* SECTION 1: HERO */}
      <section className="ia-hero">
        <div className="ia-glow" />

        <div className="ia-container ia-hero-content">
          <div className="ia-eyebrow">
            <ShieldCheck size={17} />
            VD FOKUS / INVESTIGATIVE AUDIT
          </div>

          <h1 className="ia-hero-title">
            Investigate Irregularities.
            <br />
            <span>Establish the Facts.</span>
          </h1>

          <p className="ia-hero-description">
            VD Fokus helps organizations investigate suspected fraud and
            business irregularities through structured examination of
            transactions, documents, relevant digital evidence, and
            internal controls.
          </p>

          <div className="ia-actions">
            <a href="#consultation" className="ia-button ia-button-primary">
              Discuss an Investigation
              <ArrowRight size={18} />
            </a>

            <a href="#methodology" className="ia-button ia-button-secondary">
              Our Methodology
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="ia-focus-list">
            {["Evidence", "Transactions", "Controls", "Findings"].map(
              (item) => (
                <span key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2: BUSINESS CHALLENGES */}
      <section className="ia-section ia-container">
        <div className="ia-section-heading">
          <p className="ia-label">WHEN AN INVESTIGATION IS NEEDED</p>
          <h2>
            When Something Doesn't Add Up,
            <br />
            <span>Establish the Facts.</span>
          </h2>
          <p>
            An unusual transaction or allegation requires careful examination.
            An indication is a reason to investigate, not proof of misconduct.
          </p>
        </div>

        <div className="ia-grid ia-grid-four">
          {challenges.map((item) => {
            const Icon = item.icon;

            return (
              <article className="ia-card" key={item.title}>
                <div className="ia-icon">
                  <Icon size={27} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: INVESTIGATIVE AUDIT SERVICES */}
      <section id="services" className="ia-section ia-section-dark">
        <div className="ia-container">
          <div className="ia-section-heading ia-heading-left">
            <p className="ia-label">OUR INVESTIGATIVE AUDIT SERVICES</p>
            <h2>
              Structured Investigation.
              <br />
              <span>Evidence-Based Findings.</span>
            </h2>
            <p>
              Our services are tailored to the allegation, available
              information, agreed scope, and the company's investigation needs.
            </p>
          </div>

          <div className="ia-grid ia-grid-two">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="ia-service-card" key={service.number}>
                  <div className="ia-service-top">
                    <div className="ia-icon">
                      <Icon size={28} />
                    </div>
                    <span className="ia-number">{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="ia-service-list">
                    {service.deliverables.map((item) => (
                      <div key={item}>
                        <CheckCircle2 size={17} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: INVESTIGATION METHODOLOGY */}
      <section id="methodology" className="ia-section ia-container">
        <div className="ia-section-heading">
          <p className="ia-label">OUR INVESTIGATION METHODOLOGY</p>
          <h2>
            From Initial Allegation
            <br />
            <span>to Evidence-Based Findings.</span>
          </h2>
          <p>
            A structured process helps maintain focus, document investigative
            steps, and support conclusions with relevant evidence.
          </p>
        </div>

        <div className="ia-grid ia-grid-three">
          {methodology.map((step) => (
            <article className="ia-card ia-method-card" key={step.number}>
              <span className="ia-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 5: EVIDENCE AND DELIVERABLES */}
      <section className="ia-section ia-section-dark">
        <div className="ia-container">
          <div className="ia-section-heading ia-heading-left">
            <p className="ia-label">EVIDENCE, FINDINGS & DELIVERABLES</p>
            <h2>
              From Evidence
              <br />
              <span>to Actionable Findings.</span>
            </h2>
            <p>
              The scope of evidence collection and analysis depends on the
              allegation, available records, access authorization, and
              agreed investigation mandate.
            </p>
          </div>

          <div className="ia-grid ia-grid-three">
            {evidenceSources.map((source) => {
              const Icon = source.icon;

              return (
                <article className="ia-card" key={source.title}>
                  <div className="ia-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{source.title}</h3>
                  <p>{source.description}</p>
                </article>
              );
            })}
          </div>

          <div className="ia-grid ia-grid-two ia-deliverables-layout">
            <div className="ia-panel">
              <p className="ia-label">WHAT YOU RECEIVE</p>
              <h3>Investigation Deliverables</h3>

              <div className="ia-check-list">
                {deliverables.map((item) => (
                  <div key={item}>
                    <FileCheck size={19} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ia-panel ia-benefit-panel">
              <div className="ia-icon">
                <Target size={27} />
              </div>
              <h3>Business Benefits</h3>
              <p>
                Clear findings help management understand the facts,
                evaluate exposure, and determine appropriate next steps.
              </p>

              <div className="ia-check-list">
                {benefits.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={19} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES WE SERVE */}
      <section className="ia-section ia-container">
        <div className="ia-section-heading">
          <p className="ia-label">INDUSTRIES WE SERVE</p>
          <h2>
            Investigation for
            <br />
            <span>Diverse Business Environments.</span>
          </h2>
          <p>
            Investigative work can be tailored to different business
            processes, transaction types, and operational risk exposures.
          </p>
        </div>

        <div className="ia-grid ia-industry-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div className="ia-industry-card" key={industry.name}>
                <Icon size={27} />
                <span>{industry.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 7: WHY VD FOKUS */}
      <section className="ia-section ia-section-dark">
        <div className="ia-container ia-grid ia-grid-two ia-align-center">
          <div>
            <p className="ia-label">WHY VD FOKUS</p>
            <h2 className="ia-content-title">
              Beyond the Incident.
              <br />
              <span>Into the Root Cause.</span>
            </h2>
            <p className="ia-paragraph">
              VD Fokus combines structured investigation with an understanding
              of business processes and internal controls. The objective is
              to establish what the available evidence supports and identify
              practical opportunities for improvement.
            </p>

            <Link
              href="/services/business-consultancy"
              className="ia-text-link"
            >
              Explore Business / Management Consultancy
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="ia-reasons">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article className="ia-reason" key={reason.title}>
                  <div className="ia-icon">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA / CONSULTATION */}
      <section id="consultation" className="ia-section ia-container">
        <div className="ia-cta">
          <div className="ia-icon ia-cta-icon">
            <MessageCircle size={28} />
          </div>

          <p className="ia-label">CONFIDENTIAL BUSINESS DISCUSSION</p>
          <h2>
            Need to
            <br />
            <span>Establish the Facts?</span>
          </h2>

          <p>
            Discuss your concerns with VD Fokus to determine an appropriate
            investigation scope, relevant evidence, and practical next steps.
          </p>

          <div className="ia-actions ia-actions-center">
            <a
              href="https://wa.me/628129334994"
              target="_blank"
              rel="noopener noreferrer"
              className="ia-button ia-button-primary"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

            <a
              href="mailto:info@vdfokus.com?subject=Investigative%20Audit%20Consultation"
              className="ia-button ia-button-secondary"
            >
              Discuss an Investigation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="ia-footer">
        © {new Date().getFullYear()} PT Vera Diana Fokus. All rights reserved.
      </footer>

      {/* RESPONSIVE PAGE STYLES */}
      <style jsx>{`
        .ia-page {
          min-height: 100vh;
          overflow-x: hidden;
          background: radial-gradient(
            circle at top,
            #1e293b 0%,
            #0f172a 48%,
            #080f1e 100%
          );
          color: #f8fafc;
          font-family: Inter, Arial, sans-serif;
        }

        .ia-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
          box-sizing: border-box;
        }

        .ia-hero {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(96, 165, 250, 0.15);
        }

        .ia-glow {
          position: absolute;
          top: -160px;
          right: -150px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.28),
            transparent 70%
          );
          filter: blur(45px);
          pointer-events: none;
        }

        .ia-hero-content {
          position: relative;
          padding-top: 125px;
          padding-bottom: 105px;
        }

        .ia-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          margin-bottom: 28px;
          border: 1px solid rgba(96, 165, 250, 0.25);
          border-radius: 999px;
          background: rgba(96, 165, 250, 0.08);
          color: #93c5fd;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .ia-hero-title {
          max-width: 1000px;
          margin: 0 0 24px;
          font-size: clamp(42px, 6vw, 76px);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -2px;
        }

        .ia-hero-title span,
        .ia-section-heading h2 span,
        .ia-content-title span,
        .ia-cta h2 span {
          background: linear-gradient(
            90deg,
            #60a5fa,
            #a78bfa,
            #f472b6
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ia-hero-description {
          max-width: 760px;
          margin: 0 0 32px;
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.8;
        }

        .ia-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .ia-button {
          display: inline-flex;
          min-height: 54px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 22px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          box-sizing: border-box;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .ia-button:hover {
          transform: translateY(-2px);
        }

        .ia-button-primary {
          background: #2563eb;
          color: #ffffff;
        }

        .ia-button-primary:hover {
          background: #1d4ed8;
        }

        .ia-button-secondary {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          color: #f8fafc;
        }

        .ia-focus-list {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 34px;
        }

        .ia-focus-list span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #cbd5e1;
          font-size: 14px;
        }

        .ia-focus-list svg {
          color: #60a5fa;
        }

        .ia-section {
          padding-top: 90px;
          padding-bottom: 90px;
        }

        .ia-section-dark {
          background: rgba(2, 6, 23, 0.35);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ia-section-heading {
          max-width: 850px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .ia-heading-left {
          margin-left: 0;
          text-align: left;
        }

        .ia-label {
          margin: 0 0 16px;
          color: #60a5fa;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.3px;
          line-height: 1.6;
        }

        .ia-section-heading h2,
        .ia-content-title,
        .ia-cta h2 {
          margin: 0 0 20px;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -1px;
        }

        .ia-section-heading > p:last-child,
        .ia-paragraph {
          color: #94a3b8;
          font-size: 16px;
          line-height: 1.8;
        }

        .ia-grid {
          display: grid;
          gap: 22px;
        }

        .ia-grid-four {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ia-grid-three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ia-grid-two {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ia-card,
        .ia-service-card {
          min-width: 0;
          padding: 27px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.02)
          );
          box-sizing: border-box;
        }

        .ia-card h3,
        .ia-service-card h3 {
          margin: 20px 0 12px;
          color: #f8fafc;
          font-size: 20px;
          line-height: 1.4;
        }

        .ia-card p,
        .ia-service-card > p,
        .ia-method-card p {
          margin: 0;
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.8;
        }

        .ia-icon {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 15px;
          background: rgba(96, 165, 250, 0.12);
          color: #60a5fa;
        }

        .ia-service-card {
          display: flex;
          flex-direction: column;
        }

        .ia-service-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .ia-number {
          color: #60a5fa;
          font-size: 22px;
          font-weight: 800;
        }

        .ia-service-card h3 {
          margin-top: 24px;
          font-size: 24px;
        }

        .ia-service-list,
        .ia-check-list {
          display: grid;
          gap: 14px;
          margin: 24px 0 0;
        }

        .ia-service-list > div,
        .ia-check-list > div {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.7;
        }

        .ia-service-list svg,
        .ia-check-list svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #60a5fa;
        }

        .ia-method-card .ia-number {
          display: inline-block;
          margin-bottom: 5px;
        }

        .ia-deliverables-layout {
          margin-top: 30px;
          align-items: stretch;
        }

        .ia-panel {
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.025);
          box-sizing: border-box;
        }

        .ia-panel h3 {
          margin: 0;
          font-size: 25px;
          line-height: 1.4;
        }

        .ia-benefit-panel {
          border-color: rgba(96, 165, 250, 0.2);
          background: linear-gradient(
            145deg,
            rgba(37, 99, 235, 0.13),
            rgba(255, 255, 255, 0.025)
          );
        }

        .ia-benefit-panel h3 {
          margin-top: 22px;
        }

        .ia-benefit-panel > p {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.8;
        }

        .ia-industry-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ia-industry-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 14px;
          min-height: 120px;
          padding: 22px;
          border: 1px solid rgba(96, 165, 250, 0.16);
          border-radius: 18px;
          background: linear-gradient(180deg, #0b1736, #050d1f);
          color: #e2e8f0;
          font-size: 14px;
          font-weight: 650;
          box-sizing: border-box;
        }

        .ia-industry-card svg {
          color: #60a5fa;
        }

        .ia-align-center {
          align-items: center;
        }

        .ia-reasons {
          display: grid;
          gap: 15px;
        }

        .ia-reason {
          display: flex;
          align-items: flex-start;
          gap: 17px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .ia-reason h3 {
          margin: 2px 0 8px;
          font-size: 17px;
          line-height: 1.5;
        }

        .ia-reason p {
          margin: 0;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.75;
        }

        .ia-text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          color: #60a5fa;
          font-size: 14px;
          font-weight: 750;
          line-height: 1.6;
          text-decoration: none;
        }

        .ia-cta {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(30px, 6vw, 70px);
          border: 1px solid rgba(96, 165, 250, 0.25);
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            #102653,
            #0b1736 55%,
            #111827
          );
          text-align: center;
          box-sizing: border-box;
        }

        .ia-cta-icon {
          margin: 0 auto 24px;
        }

        .ia-cta > p:not(.ia-label) {
          max-width: 700px;
          margin: 0 auto 28px;
          color: #94a3b8;
          font-size: 16px;
          line-height: 1.8;
        }

        .ia-actions-center {
          justify-content: center;
        }

        .ia-footer {
          padding: 25px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          color: #64748b;
          font-size: 13px;
          text-align: center;
        }

        @media (max-width: 1050px) {
          .ia-grid-four,
          .ia-industry-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ia-grid-three {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .ia-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .ia-hero-content {
            padding-top: 90px;
            padding-bottom: 70px;
          }

          .ia-hero-title {
            font-size: clamp(38px, 10vw, 52px);
            letter-spacing: -1.4px;
          }

          .ia-hero-description {
            font-size: 15px;
          }

          .ia-section {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .ia-grid-four,
          .ia-grid-three,
          .ia-grid-two {
            grid-template-columns: minmax(0, 1fr);
          }

          .ia-industry-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ia-card,
          .ia-service-card,
          .ia-panel {
            padding: 23px;
          }

          .ia-actions {
            flex-direction: column;
          }

          .ia-button {
            width: 100%;
          }

          .ia-focus-list {
            gap: 14px;
          }

          .ia-cta {
            padding: 30px 20px;
          }

          .ia-industry-card {
            min-height: 100px;
            padding: 15px;
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
