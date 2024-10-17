import React from "react";

interface CardProps {
  title: string;
  text: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, text, children }) => {
  return (
    <div className="relative flex flex-col my-6 border-2 rounded-lg shadow-lg m-5 p-5 transition-transform duration-300 transform hover:scale-90 dark:border-gray-600 bg-white dark:bg-gray-800">
      <span className="text-4xl text-blue-800 dark:text-blue-300">{title}</span>
      <div className="w-3/4 border-2 border-indigo-200 dark:border-indigo-500 my-4" />
      <span className="text-2xl text-gray-800 dark:text-gray-200">{text}</span>
      {children}
    </div>
  );
};

export default Card;
