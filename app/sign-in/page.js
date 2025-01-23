"use client";

import * as React from "react";
import { useEffect } from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";

const key = "email";
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
      <form onSubmit={(e) => signInWithEnterpriseSSO(e)}>
        <input type="email" name="email" placeholder="Enter email address" />
        <br></br>
        <br></br>
        <button>Sign in with Enterprise SSO</button>
      </form>
    </div>
  );
}
