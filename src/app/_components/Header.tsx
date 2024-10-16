import Link from "next/link";
import React from "react";
import { MdSunny } from "react-icons/md";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
  nextJsInfo: () => void;
}

export default function Header({
  theme,
  toggleTheme,
  nextJsInfo,
}: React.PropsWithChildren<HeaderProps>) {
  return (
    <header>
      <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-800 dark:text-blue-300">
              NextJs 14 - Devang Dayal
            </span>
          </Link>

          <div className="hidden lg:flex lg:w-auto">
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 space-x-6 dark:text-gray-400 sm:mt-0">
              <li>
                <Link href="/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/folder" className="hover:underline">
                  Folder
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className={`flex items-center space-x-2 rounded-lg px-4 py-2 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-amber-300 text-black hover:bg-amber-400"
                      : "bg-blue-800 text-white hover:bg-blue-700"
                  }`}
                >
                  <MdSunny />
                  <span>
                    Toggle to {theme === "dark" ? "light" : "dark"} mode
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={nextJsInfo}
                  className={`flex items-center space-x-2 rounded-lg px-4 py-2 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-amber-300 text-black hover:bg-amber-400"
                      : "bg-blue-800 text-white hover:bg-blue-700"
                  }`}
                >
                  <MdSunny />
                  <span>Next.js Information</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
