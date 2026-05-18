"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ partnerMode = false }) {
  const pathname = usePathname();
  const hideNavbarOnDashboard = pathname.startsWith("/dashboard");

  const homeLinks = (
  <>
    <a 
    className="nav-link" href="/#about">About</a>
    <a className="nav-link" href="/#pathways">Pathways</a>
    <a className="nav-link" href="/#how-it-works">How It Works</a>
    <a className="nav-link" href="/partner">For Partners</a>
  </>
);

const partnerLinks = (
  <>
    <a className="nav-link" href="/">Home</a>
    <a className="nav-link" href="/partner#why-us">Why Us</a>
    <a className="nav-link" href="/partner#partnership-opportunities">Opportunities</a>
  </>
);


  if (hideNavbarOnDashboard) return null;

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[var(--brand-secondary)]/10 font-montserrat"
      style={{ height: "var(--navbar-height)" }}
    >
      <div className="w-full mx-auto h-full flex items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          className="
            flex items-center
            transition-all duration-200
            active:scale-95
            touch-manipulation
          "
        >
          <div className="h-full flex items-center">
            <Image
              src="/newlogo.png"
              alt="Engineers Advance Logo"
              width={150}
              height={150}
              className="h-full w-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </a>

        {/* RIGHT: Links + CTA */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-gray-700">
            {partnerMode ? partnerLinks : homeLinks}
          </div>

          <div>
            {partnerMode ? (
              <button
                onClick={() =>
                  document.getElementById("partner-form")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 
                  bg-[var(--brand-secondary)] text-white 
                  rounded-lg 
                  transition-all duration-300 
                  hover:bg-[var(--brand-primary)]
                  active:scale-95 active:bg-[var(--brand-primary)]
                  focus:ring-2 focus:ring-[var(--brand-secondary)] focus:ring-offset-2
                  touch-manipulation"
              >
                Partner With Us
              </button>
            ) : (
              <button
                onClick={() =>
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 
                  bg-[var(--brand-secondary)] text-white 
                  rounded-lg 
                  transition-all duration-300 
                  hover:bg-[var(--brand-primary)]
                  active:scale-95 active:bg-[var(--brand-primary)]
                  focus:ring-2 focus:ring-[var(--brand-secondary)] focus:ring-offset-2
                  touch-manipulation"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
