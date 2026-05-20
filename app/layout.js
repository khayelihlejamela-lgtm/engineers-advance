import "./globals.css";
import Navbar from "./(public)/components/Navbar";
import DesktopModeLoader from "./(public)/components/DesktopModeLoader";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Engineers Advance</title>
        <meta name="description" content="Empowering engineers to advance their careers through personalized coaching, skill development, and industry insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/png" href="/favicon1.png" />
      </head>
      <body>
        <Navbar />
        <DesktopModeLoader />
        {children}
      </body>
    </html>
  );
}
