"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);

    // later: connect to webhook / email API
    alert("Message sent successfully!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "120px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        {/* HEADER */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
            Contact Us
          </h1>
          <p style={{ color: "#94a3b8", marginTop: "10px" }}>
            Let’s talk about how we can help you
          </p>
        </div>

        {/* CONTENT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {/* LEFT SIDE */}
          <div>
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
              Get in Touch
            </h2>

            <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
              Have questions about our services? Reach out and we’ll get
              back to you within 24 hours.
            </p>

            <div style={{ marginBottom: "15px" }}>
              <strong>Email:</strong>
              <p style={{ color: "#94a3b8" }}>
                admin@vdfokus.co.id
              </p>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <strong>Phone:</strong>
              <p style={{ color: "#94a3b8" }}>+62 816-1387-821</p>
            </div>

            <div>
              <strong>Location:</strong>
              <p style={{ color: "#94a3b8" }}>
                City Walk 07, Citra Gran Jl. Alternatif Cibubur No.12, Jatikarya, Kec. Jatisampurna, Kota Bks, Jawa Barat 17435
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ marginBottom: "15px" }}>
              <label>Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#3b82f6",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#2563eb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#3b82f6")
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "6px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white",
};