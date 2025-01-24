"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const styleObj = {
  border: "none",
  width: "100px",
  height: "40px",
  borderRadius: "5px",
  color: "white",
  background: "#ef6405",
  fontSize: "15px",
  cursor: "pointer",
  marginTop: "20px",
};

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = sessionStorage.getItem("email");
      setEmail(data);
      if (!data) {
        router.replace("/");
      }
    }
  }, []);

  return email ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: "20px" }}>Discover Screen</h1>
        <button
          style={styleObj}
          onClick={() => {
            sessionStorage.removeItem("email");
            router.replace("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
