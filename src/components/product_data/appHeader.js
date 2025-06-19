import React from 'react';

const AppHeader = () => {
  return (
    <header className="h-[60px] border-b border-gray-200 flex-shrink-0 bg-white">
      <div className="w-full max-w-[1600px] mx-auto px-6 flex items-center h-full justify-between">
        <a href="/" className="text-xl font-bold no-underline text-gray-900 flex items-center gap-2">
          <span className="text-orange-500">+</span> FrontrowMD
        </a>
        <a href="/" className="text-gray-900 flex items-center justify-center p-2 rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-200 hover:text-orange-500" aria-label="Go to homepage">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default AppHeader;