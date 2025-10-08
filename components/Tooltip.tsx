import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full mb-2 w-max max-w-xs bg-gray-800 text-white dark:bg-gray-900 dark:text-white text-sm rounded-md py-1 px-3 z-10 shadow-lg border border-indigo-500">
          {text}
        </div>
      )}
    </div>
  );
};