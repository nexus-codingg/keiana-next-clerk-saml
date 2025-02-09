"use client";

import * as React from "react";
import { useSignIn } from "@clerk/nextjs";

export default function CustomSAML() {
  const { signIn, isLoaded } = useSignIn();

  const signInWithEnterpriseSSO = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return null;

    const email = (e.target as HTMLFormElement).email.value;

    signIn
      .authenticateWithRedirect({
        identifier: email,
        strategy: "enterprise_sso",
        redirectUrl: "/custom-saml/sso-callback",
        redirectUrlComplete: "/saml",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.log(err.errors);
        console.error(err, null, 2);
      });
  };

  return (
    <div className="p-10">
      <form onSubmit={(e) => signInWithEnterpriseSSO(e)}>
      {/* TODO: this must be in the wrong spot because i'm still getting the error in the console
      https://clerk.com/docs/custom-flows/bot-sign-up-protection */}
      <div id="clerk-captcha"/>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email address"
        />
        <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
          Continue
        </button>
      </form>
    </div>
  );
}
