"use client";

import localFont from "next/font/local";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme; // Set the body class based on the theme
  }, [theme]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow min-h-[calc(90vh-4rem)]">
          {" "}
          {/* Adjust the 4rem to your header and footer heights */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
