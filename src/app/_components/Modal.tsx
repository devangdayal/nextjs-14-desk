// Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render anything if not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Next.js 14 Learning Resources
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Explore the latest features and best practices for building
          applications with Next.js 14.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-400">
          <li>
            <a
              href="https://nextjs.org/docs"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Documentation
            </a>
          </li>
          <li>
            <a
              href="https://nextjs.org/learn"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interactive Learning
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@VercelHQ"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Channel
            </a>
          </li>
          <li>
            <a
              href="https://github.com/devangdayal/nextjs-14-desk"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Example Projects
            </a>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
