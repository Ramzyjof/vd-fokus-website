"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

function getServiceDetails(pathname: string) {
  const path = pathname.toLowerCase();

  if (path.includes("risk-management")) {
    return { service_name: "Risk Management", service_category: "Business & Management Consultancy" };
  }
  if (path.includes("investigative-audit")) {
    return { service_name: "Investigative Audit", service_category: "Business & Management Consultancy" };
  }
  if (path.includes("sop-development")) {
    return { service_name: "SOP Development", service_category: "Business & Management Consultancy" };
  }
  if (path.includes("data-analytics")) {
    return { service_name: "Data Analytics", service_category: "Business & Management Consultancy" };
  }
  if (path.includes("business_management_consultancy")) {
    return { service_name: "Business & Management Consultancy", service_category: "Business & Management Consultancy" };
  }
  if (path.includes("psychological-test")) {
    return { service_name: "Psychological Assessment", service_category: "HR Solutions" };
  }
  if (path.includes("placement_recruitment")) {
    return { service_name: "Employee Placement", service_category: "HR Solutions" };
  }
  if (path.includes("hr_solution")) {
    return { service_name: "HR Solutions", service_category: "HR Solutions" };
  }
  if (path.includes("int-prep")) {
    return { service_name: "Career Acceleration Service", service_category: "Career Acceleration" };
  }

  return { service_name: "General inquiry", service_category: "General" };
}

function trackWhatsAppClick(anchor: HTMLAnchorElement) {
  const service = getServiceDetails(window.location.pathname);
  const ctaLabel = anchor.innerText.trim().replace(/\s+/g, " ").slice(0, 100);

  sendGAEvent("event", "whatsapp_contact_click", {
    ...service,
    lead_channel: "WhatsApp",
    cta_label: ctaLabel || "WhatsApp link",
    page_path: window.location.pathname,
  });
}

export default function LeadTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!/^https?:\/\/(?:www\.)?wa\.me\//i.test(anchor.href)) return;

      trackWhatsAppClick(anchor);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
