"use client";
export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "100px",
        padding: "70px 20px 40px",

        background:
          "linear-gradient(to bottom,#0B1220,#020617)",

        borderTop:
          "1px solid rgba(127,29,29,0.25)",

        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* TOP GLOW */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",

          width: "60%",
          height: "1px",

          background:
            "linear-gradient(90deg,transparent,#7F1D1D,transparent)",

          opacity: 0.8,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",

            gap: "50px",
            marginBottom: "60px",
          }}
        >
          {/* BRAND */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              <img
                src="/logo.png"
                alt="VD Fokus"
                style={{
                  height: "48px",
                  width: "auto",

                  filter:
                    "drop-shadow(0 0 10px rgba(59,130,246,0.25))",
                }}
              />

              <div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  VD Fokus
                </div>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                  }}
                >
                  Talent & HR Solutions
                </div>
              </div>
            </div>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
                fontSize: "14px",
                maxWidth: "320px",
              }}
            >
              Helping organizations and professionals
              build stronger futures through strategic
              talent and career solutions.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontSize: "16px",
              }}
            >
              Navigation
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {[
                {
                  name: "Home",
                  href: "/",
                },
                {
                  name: "About",
                  href: "/about",
                },
                {
                  name: "Services",
                  href: "/services",
                },
                {
                  name:
                    "Career Acceleration",
                  href:
                    "/career-acceleration",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={{
                    color: "#94a3b8",
                    textDecoration: "none",
                    transition: "0.3s",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "#94a3b8";
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontSize: "16px",
              }}
            >
              Contact
            </h3>

            <div
              style={{
                color: "#94a3b8",
                lineHeight: "1.9",
                fontSize: "14px",
              }}
            >
              <p>
                PT VD Fokus
              </p>

              <p>
                City Walk 07, Citra Gran
              </p>

              <p>
                Bekasi, West Java
              </p>

              <p
                style={{
                  marginTop: "16px",
                }}
              >
                +62 851-2130-5329
              </p>

              <p>
                admin@vdfokus.co.id
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            paddingTop: "30px",

            borderTop:
              "1px solid rgba(255,255,255,0.06)",

            display: "flex",
            justifyContent:
              "space-between",

            alignItems: "center",

            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "#64748b",
              fontSize: "13px",
              margin: 0,
            }}
          >
            © 2026 VD Fokus.
            All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            <a
              href="https://wa.me/6285121305329"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              WhatsApp
            </a>

            <a
              href="https://linkedin.com"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}