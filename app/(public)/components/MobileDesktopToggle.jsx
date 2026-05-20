"use client";

export default function MobileDesktopToggle() {
  return (
    <div className="block md:hidden mt-6 text-center">
      <button
        onClick={() => {
          document.documentElement.classList.add("desktop-mode");
          localStorage.setItem("forceDesktop", "true");
        }}
        className="text-sm font-medium text-white underline opacity-80"
      >
        Switch to Desktop View
      </button>
    </div>
  );
}
