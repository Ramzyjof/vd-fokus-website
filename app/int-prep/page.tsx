"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IntPrepRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/services/int-prep");
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#fff",
        fontFamily: "inherit",
        fontSize: "18px",
      }}
    >
      Redirecting...
    </div>
  );
}