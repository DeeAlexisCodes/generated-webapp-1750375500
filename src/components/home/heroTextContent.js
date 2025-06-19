import React from 'react';

const HeroTextContent = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
        AI-Powered <span className="font-normal text-gray-600">Doctor-Vetted</span> Review Generation
      </h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-gray-600 md:mx-0">
        Transform product pages into authentic, clinically-informed reviews that build trust and drive conversions.
      </p>
      <button
        className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 ease-in-out shadow-md hover:bg-orange-600 hover:-translate-y-1 hover:shadow-lg"
        onClick={() => console.log('Get Started clicked')} // Placeholder for actual action
      >
        Get Started
      </button>
    </div>
  );
};

export default HeroTextContent;