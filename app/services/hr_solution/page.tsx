"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  UsersRound,
} from "lucide-react";

const services = [
  {
    id: "placement_recruitment",
    number: "01",
    title: "Placement & Recruitment",
    description:
      "Find the right people to help your organization move forward. We support recruitment through placement, executive search, and headhunting.",
    href: "/services/hr_solution/placement_recruitment",
    linkText: "Explore Placement",
    icon: UsersRound,
    accent: "#83A9FF",
  },
  {
    id: "outsourcing",
    number: "02",
    title: "Outsourcing",
    description:
      "Get workforce support aligned with your operational needs, with outsourcing and managed services tailored to your organization.",
    href: "/contact",
    linkText: "Discuss Your Needs",
    icon: BriefcaseBusiness,
    accent: "#B69AFF",
  },
  {
    id: "psychological_assessment",
    number: "03",
    title: "Psychological Assessment",
    description:
      "Gain a clearer understanding of candidates’ competencies, potential, and suitability for the role through structured assessment.",
    href: "/services/psychological-test",
    linkText: "Explore Assessment",
    icon: Brain,
    accent: "#71D6C3",
  },
];

export default function HrSolutionPage() {
  return (
    <main className="hr-page">
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />

        <div className="container hero-content">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            PEOPLE. PERFORMANCE. PROGRESS.
          </p>

          <h1>
            Build a workplace
            <br />
            <span>ready for what’s next.</span>
          </h1>

          <p className="hero-description">
            Every organization has different people needs. Find the right
            talent, access workforce support, and make more informed people
            decisions with VD Fokus.
          </p>

          <Link className="primary-button" href="#hr-services">
            Explore our HR solutions
            <ArrowRight size={18} />
          </Link>

          <div className="hero-note">
            <span className="note-line" />
            Practical people solutions for changing business needs
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>HR</span>
          <span className="index-line" />
          <span>01 — 03</span>
        </div>
      </section>

      <section className="services-section" id="hr-services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">OUR SERVICES</p>
              <h2>
                Support for every stage
                <br />
                of your workforce.
              </h2>
            </div>

            <p className="section-intro">
              From building your team to understanding talent, our HR services
              are designed around your organization’s priorities.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.id}>
                  <div className="card-top">
                    <span className="card-number">{service.number}</span>
                    <span
                      className="card-icon"
                      style={{ color: service.accent }}
                    >
                      <Icon size={23} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p className="card-description">{service.description}</p>
                  </div>

                  <Link className="card-link" href={service.href}>
                    {service.linkText}
                    <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container approach-content">
          <div>
            <p className="section-kicker">A PEOPLE-FIRST APPROACH</p>
            <h2>
              The right solution
              <br />
              starts with listening.
            </h2>
          </div>

          <div className="approach-copy">
            <p>
              We begin by understanding your organization, the roles involved,
              and the outcomes you want to achieve. Then we help you identify a
              practical next step for your people and your business.
            </p>
            <Link className="text-link" href="/contact">
              Talk to our team
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-content">
          <div>
            <p className="section-kicker">LET’S MOVE FORWARD</p>
            <h2>What does your team need next?</h2>
          </div>

          <Link className="closing-button" href="/contact">
            Discuss your HR needs
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .hr-page {
          --navy: #0b1324;
          --ink: #111c31;
          --muted: #657187;
          --blue: #83a9ff;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .hero {
          min-height: 620px;
          display: flex;
          align-items: flex-start;
          position: relative;
          isolation: isolate;
          background:
            radial-gradient(
              ellipse at 78% 25%,
              rgba(70, 111, 209, 0.23),
              transparent 34%
            ),
            linear-gradient(125deg, #0b1324 0%, #101c34 60%, #111b30 100%);
        }

        .hero-glow {
          position: absolute;
          z-index: -1;
          width: 420px;
          height: 420px;
          right: 8%;
          bottom: -180px;
          border-radius: 50%;
          background: rgba(92, 130, 216, 0.17);
          filter: blur(90px);
        }

        .hero-content {
          padding-top: 150px;
          padding-bottom: 80px;
        }

        .eyebrow,
        .section-kicker {
          margin: 0 0 22px;
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #83a9ff;
          box-shadow: 0 0 14px rgba(131, 169, 255, 0.9);
        }

        .hero h1 {
          max-width: 850px;
          margin: 0;
          font-size: clamp(44px, 7vw, 78px);
          line-height: 0.99;
          letter-spacing: -0.055em;
          font-weight: 700;
        }

        .hero h1 span {
          color: #91b1ff;
        }

        .hero-description {
          max-width: 610px;
          margin: 25px 0 30px;
          color: #c6cfdd;
          font-size: 17px;
          line-height: 1.8;
        }

        .primary-button,
        .closing-button {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 0 22px;
          border-radius: 999px;
          color: #0b1324;
          background: #a9c1ff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 180ms ease,
            background 180ms ease;
        }

        .primary-button:hover,
        .closing-button:hover {
          transform: translateY(-2px);
          background: #c0d0ff;
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 56px;
          color: #9ca9bd;
          font-size: 12px;
        }

        .note-line {
          width: 32px;
          height: 1px;
          background: #536681;
        }

        .hero-index {
          position: absolute;
          right: max(24px, calc((100vw - 1180px) / 2));
          bottom: 54px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8491a6;
          font-size: 11px;
          letter-spacing: 0.12em;
        }

        .hero-index > span:first-child {
          color: #c3d1ee;
          font-size: 20px;
          font-weight: 700;
        }

        .index-line {
          width: 38px;
          height: 1px;
          background: #536681;
        }

        .services-section {
          padding: 104px 0 112px;
          color: var(--ink);
          background: #f5f7fb;
        }

        .section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 36px;
          margin-bottom: 42px;
        }

        .section-kicker {
          margin-bottom: 16px;
          color: #5879bb;
        }

        .section-heading h2,
        .approach-content h2,
        .closing-content h2 {
          margin: 0;
          color: var(--ink);
          font-size: clamp(32px, 4.5vw, 50px);
          line-height: 1.08;
          letter-spacing: -0.045em;
        }

        .section-intro {
          max-width: 380px;
          margin: 0 0 4px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
          gap: 18px;
        }

        .service-card {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 28px;
          padding: 26px;
          border: 1px solid #e1e6ef;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 12px 34px rgba(16, 28, 52, 0.045);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: #c5d3ef;
          box-shadow: 0 18px 42px rgba(16, 28, 52, 0.1);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-number {
          color: #8792a4;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #f2f5fb;
        }

        .service-card h3 {
          margin: 0 0 12px;
          color: var(--ink);
          font-size: 21px;
          line-height: 1.25;
          letter-spacing: -0.025em;
        }

        .card-description {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.75;
        }

        .card-link,
        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: #315ca9;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .card-link:hover,
        .text-link:hover {
          color: #173c83;
        }

        .approach-section {
          padding: 90px 0;
          background: #fff;
        }

        .approach-content {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          align-items: center;
          gap: 60px;
        }

        .approach-copy p {
          margin: 0 0 22px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.85;
        }

        .closing-section {
          padding: 52px 0;
          background: #eaf0fc;
        }

        .closing-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .closing-content .section-kicker {
          margin-bottom: 12px;
        }

        .closing-content h2 {
          font-size: clamp(28px, 4vw, 40px);
        }

        .closing-button {
          flex-shrink: 0;
          color: #fff;
          background: #172c50;
        }

        .closing-button:hover {
          background: #244474;
        }

        @media (max-width: 700px) {
          .container {
            width: min(100% - 36px, 560px);
          }

          .hero {
            min-height: 590px;
          }

          .hero-content {
            padding-top: 120px;
            padding-bottom: 78px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-note {
            max-width: 260px;
            margin-top: 42px;
            line-height: 1.6;
          }

          .hero-index {
            right: 18px;
            bottom: 24px;
          }

          .services-section {
            padding: 72px 0;
          }

          .section-heading {
            display: block;
            margin-bottom: 28px;
          }

          .section-intro {
            margin-top: 18px;
          }

          .service-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .service-card {
            min-height: 260px;
          }

          .approach-section {
            padding: 70px 0;
          }

          .approach-content {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .closing-content {
            align-items: flex-start;
            flex-direction: column;
          }
        }.hr-page {
  --ink: #f8fafc;
  --muted: #cbd5e1;
  background: radial-gradient(circle at top, #1e293b, #0f172a);
}

.services-section {
  color: #fff;
  background: #0f172a;
}

.section-heading h2,
.approach-content h2,
.closing-content h2 {
  color: #f8fafc;
}

.section-intro,
.card-description,
.approach-copy p {
  color: #cbd5e1;
}

.service-card {
  border-color: rgba(148, 163, 184, 0.2);
  background: linear-gradient(
    145deg,
    rgba(30, 41, 59, 0.96),
    rgba(15, 23, 42, 0.98)
  );
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.18);
}

.service-card h3 {
  color: #f8fafc;
}

.card-number {
  color: #94a3b8;
}

.card-icon {
  background: rgba(96, 165, 250, 0.12);
}

.card-link,
.text-link {
  color: #60a5fa;
}

.card-link:hover,
.text-link:hover {
  color: #bfdbfe;
}

.approach-section {
  background: #111c31;
}

.closing-section {
  background: linear-gradient(120deg, #172c50, #1e3a6d);
}

.closing-button {
  color: #fff;
  background: linear-gradient(135deg, #2563eb, #60a5fa);
}

.closing-button:hover {
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
}
      `}</style>
      
    </main>
  );
}
