import type {
  Metadata,
  Viewport,
} from "next";

import type {
  ReactNode,
} from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Engineers Advance — Early Access",

    template:
      "%s | Engineers Advance",
  },

  description:
    "Register your interest in the Engineers Advance MVP and help shape an evidence-led engineering competency platform.",

  icons: {
    icon:
      "/favicon1.png",
  },
};

export const viewport: Viewport = {
  width:
    "device-width",

  initialScale:
    1,

  themeColor:
    "#ffffff",
};

interface RootLayoutProps {
  children:
    ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}