import "./globals.css";

export const metadata = {
  title: "VD Fokus",
  description: "Talent & Career Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        
        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "#0f172a",
            position: "sticky",
            top: 0,
            zIndex: 1000
          }}
        >
          {/* LOGO */}
          <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
            VD Fokus
          </a>

          {/* MENU */}
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Home
            </a>
            <a href="/career-acceleration" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Career Acceleration
            </a>
            <a href="/about" style={{ color: "#94a3b8", textDecoration: "none" }}>
              About
            </a>
            <a href="/contact" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Contact
            </a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}