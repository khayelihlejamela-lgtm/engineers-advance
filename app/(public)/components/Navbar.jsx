"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ partnerMode = false }) {
  const pathname = usePathname();
  const hideNavbarOnDashboard = pathname.startsWith("/dashboard");

  const homeLinks = (
  <>
    <a 
    className="hover:text-[var(--brand-secondary)]" href="/#about">About</a>
    <a className="hover:text-[var(--brand-secondary)]" href="/#pathways">Pathways</a>
    <a className="hover:text-[var(--brand-secondary)]" href="/#how-it-works">How It Works</a>
    <a className="hover:text-[var(--brand-secondary)]" href="/partner">For Partners</a>
  </>
);

const partnerLinks = (
  <>
    <a className="hover:text-[var(--brand-secondary)]" href="/">Home</a>
    <a className="hover:text-[var(--brand-secondary)]" href="/partner#why-us">Why Us</a>
    <a className="hover:text-[var(--brand-secondary)]" href="/partner#partnership-opportunities">Opportunities</a>
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
        <a href="/" className="flex items-center">
          <div className="h-full flex items-center">
            <Image
              src="/newlogo.png"
              alt="Engineers Advance Logo"
              width={150}
              height={150}
              className="h-full w-auto object-contain transition-all duration-300"
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
                className="bg-[var(--brand-secondary)] text-white px-4 py-2 rounded-md hover:bg-[var(--brand-primary)]"
              >
                Partner With Us
              </button>
            ) : (
              <button
                onClick={() =>
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[var(--brand-secondary)] text-white px-4 py-2 rounded-md hover:bg-[var(--brand-primary)]"
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
