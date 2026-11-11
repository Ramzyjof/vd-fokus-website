"use client";

import { useState, type FormEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const WHATSAPP_NUMBER = "628129334994";

const serviceOptions = [
  "Employee Placement",
  "Outsourcing",
  "Psychological Assessment",
  "Risk Management",
  "Investigative Audit",
  "SOP Development",
  "Data Analytics",
  "Career Acceleration Service",
  "Other / General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceCategory =
      ["Risk Management", "Investigative Audit", "SOP Development", "Data Analytics"].includes(form.service)
        ? "Business & Management Consultancy"
        : ["Employee Placement", "Outsourcing", "Psychological Assessment"].includes(form.service)
          ? "HR Solutions"
          : form.service === "Career Acceleration Service"
            ? "Career Acceleration"
            : "General";

    // Do not send personal details to Analytics; only the selected service is tracked.
    sendGAEvent("event", "generate_lead", {
      service_name: form.service,
      service_category: serviceCategory,
      lead_channel: "Contact form to WhatsApp",
      page_path: window.location.pathname,
    });

    const message = [
      "Hello VD Fokus, I would like to discuss your services.",
      `Service: ${form.service}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Message: ${form.message}`,
    ].join("\n");

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
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
              <p style={{ color: "#94a3b8" }}>+62 812-9334-994</p>
              <p style={{ color: "#94a3b8" }}>+62 2128671999</p>
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
              <label htmlFor="service">Service</label>
              <select
                id="service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                style={inputStyle}
              >
                <option value="" disabled>Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
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
              <label htmlFor="email">Email</label>
              <input
                id="email"
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
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
              Continue to WhatsApp
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
  boxSizing: "border-box" as const,
};
