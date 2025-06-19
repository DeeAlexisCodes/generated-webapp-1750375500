import React from 'react';

const PageTitleSection = ({ title }) => {
  return (
    <main className="py-12">
      <div className="w-full max-w-6xl mx-auto px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">{title}</h1>
        </header>
      </div>
    </main>
  );
};

export default PageTitleSection;