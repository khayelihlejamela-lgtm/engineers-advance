import "./globals.css";
import Navbar from "./(public)/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Engineers Advance</title>
        <meta name="description" content="Empowering engineers to advance their careers through personalized coaching, skill development, and industry insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/png" href="/favicon1.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const ua = navigator.userAgent;
              const isMobile = /iPhone|Android|Mobile|iPad/.test(ua);
              const isDesktopMode = isMobile && /Macintosh|Windows/.test(ua);

              if (isDesktopMode) {
                document.documentElement.classList.add("force-desktop");
              }
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
