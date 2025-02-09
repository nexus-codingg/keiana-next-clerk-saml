"use client";

import { SignInButton, SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import "./home.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/custom-saml");
  };
  return (
    <>
      <main className="bg-[#FAFAFA] relative">
        <div>
          <div className="p-10">
            <div className="relative flex gap-3">
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
                >
                  Dashboard
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
                    Sign up
                  </button>
                </SignUpButton>

                <button
                  onClick={handleClick}
                  className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
                >
                  Sign in with Enterprise SSO
                </button>
              </SignedOut>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
