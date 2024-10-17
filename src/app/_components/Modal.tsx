"use client";

import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close modal"
        ></button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Next.js 14 Learning Resources
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Explore the latest features and best practices for building
          applications with Next.js 14.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            { title: "Official Documentation", url: "https://nextjs.org/docs" },
            { title: "Interactive Learning", url: "https://nextjs.org/learn" },
            {
              title: "YouTube Channel",
              url: "https://www.youtube.com/@VercelHQ",
            },
            {
              title: "Example Projects",
              url: "https://github.com/devangdayal/nextjs-14-desk",
            },
          ].map((resource, index) => (
            <li key={index}>
              <a
                href={resource.url}
                className="text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}
