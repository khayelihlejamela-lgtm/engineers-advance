"use client";

import { useEffect } from "react";

export default function DesktopModeLoader() {
  useEffect(() => {
    if (localStorage.getItem("forceDesktop") === "true") {
      document.documentElement.classList.add("desktop-mode");
    }
  }, []);

  return null; // nothing visible
}
