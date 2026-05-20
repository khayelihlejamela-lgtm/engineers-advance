import MobileDesktopToggle from "./MobileDesktopToggle";

export default function Footer() {
  return (
    <footer className="pt-2 pb-2 px-6 bg-gray-900 text-gray-300 text-center">

      {/* Logo */}
      <img
        src="/logo1.png"
        alt="Engineers Advance Logo"
        href="/"
        className="h-10 w-auto mx-auto 
            transition-all duration-200
            active:scale-95
            touch-manipulation"
      />

      {/* Email */}
      <p className="pt-2 text-sm">
        Contact Us:{" "}
        <a
          href="mailto:info@engineersadvance.com"
          className="footer-link"
        >
          info@engineersadvance.com
        </a>
      </p>

      {/* Partner Link */}
      <p className="text-sm pt-1">
        <a
          href="/partner"
          className="footer-link"
        >
          Partner With Us
        </a>
      </p>

      {/* Mobile/Desktop Toggle */}
      <MobileDesktopToggle />

      {/* Copyright */}
      <p className="text-xs mt-2 text-gray-200/70">
        © {new Date().getFullYear()} Engineers Advance. All rights reserved.
      </p>
    </footer>
  );
}
