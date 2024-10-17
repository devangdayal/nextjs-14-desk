"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import Header from "./Header";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>("dark");
  const [nextInfo, setNextInfo] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleNextInfo = async () => {
    setNextInfo(true);
    await new Promise<void>((resolve) => setTimeout(resolve, 10000));
    setNextInfo(false);
  };
  useEffect(() => {
    // Function to set theme based on media query
    const setThemeBasedOnPreference = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    // Check the default theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(prefersDark.matches ? "dark" : "light");

    // Listen for changes in the user's theme preference
    prefersDark.addEventListener("change", setThemeBasedOnPreference);

    // Cleanup listener on unmount
    return () => {
      prefersDark.removeEventListener("change", setThemeBasedOnPreference);
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        nextJsInfo={toggleNextInfo}
      />
      {children}
      <Modal isOpen={nextInfo} onClose={() => setNextInfo(false)} />
    </>
  );
}
