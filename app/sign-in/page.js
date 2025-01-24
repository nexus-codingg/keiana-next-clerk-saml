"use client";

import * as React from "react";
import { useEffect } from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";

const key = "email";

const inputStyleObj = {
  padding: "10px",
  width: "200px",
  borderRadius: "5px",
  border: "1px solid black",
  outline: "none",
  backgroundColor: "white",
  // color: "black",
};

const buttonStyleObj = {
  fontWeight: "bold",
  width: "100%",
  padding: "10px 5px",
  border: "none",
  background: "#ef6405",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
};
export default function Page() {
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();

  if (!signIn || !signUp) return null;

  const signInWithEnterpriseSSO = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    if (sessionStorage.getItem(key)) {
      sessionStorage.removeItem(key);
    }
    sessionStorage.setItem("email", email);
    signIn
      .authenticateWithRedirect({
        identifier: email,
        strategy: "enterprise_sso",
        redirectUrl: "/sign-up/sso-callback",
        redirectUrlComplete: "/dashboard",
      })
      .then((res) => {
        console.log("clerk res", res);
      })
      .catch((err) => {
        console.log(err.errors);
        console.error(err, null, 2);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center" /* Horizontal */,
        alignItems: "center" /* Vertical */,
        height: "100vh",
      }}
    >
      <form onSubmit={signInWithEnterpriseSSO}>
        <input
          style={inputStyleObj}
          type="email"
          name="email"
          placeholder="Enter email address"
          required
        />
        <br></br>
        <br></br>
        <button style={buttonStyleObj}>Sign In</button>
      </form>
    </div>
  );
}
