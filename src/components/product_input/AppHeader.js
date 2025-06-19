import React from 'react';

const AppHeader = () => {
  return (
    <header className="py-4">
      <div className="w-full max-w-6xl mx-auto px-8 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold no-underline text-neutral-900 flex items-center gap-2">
          <span className="text-orange-500">+</span>
          <span>FrontrowMD</span>
        </a>
      </div>
    </header>
  );
};

export default AppHeader;