import React from 'react';

const AppHeader = () => {
  return (
    <header className="py-4">
      <div className="w-full max-w-[1200px] mx-auto px-8 flex items-center">
        <a href="/" className="text-2xl font-bold no-underline text-[#121212] flex items-center gap-2">
          <span className="text-[#FF6B00]">+</span>
          <span>FrontrowMD</span>
        </a>
      </div>
    </header>
  );
};

export default AppHeader;