"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const styleObj = {
  border: "none",
  width: "100px",
  height: "40px",
  borderRadius: "5px",
  color: "white",
  background: "navy",
  fontSize: "15px",
  cursor: "pointer",
};
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (sessionStorage.getItem("email")) {
      router.replace("/dashboard");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center" /* Horizontal */,
        alignItems: "center" /* Vertical */,
        height: "100vh",
      }}
    >
      <button style={styleObj} onClick={() => router.replace("/sign-in")}>
        Sign In
      </button>
    </div>
  );
}
