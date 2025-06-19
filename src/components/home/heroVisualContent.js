import React, { useState, useEffect, useRef } from 'react';

const HeroVisualContent = () => {
  const visualContainerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (visualContainerRef.current) {
        const heroRect = visualContainerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the center of the container, normalized to -1 to 1
        const x = (e.clientX - heroRect.left - heroRect.width / 2) / (heroRect.width / 2);
        const y = (e.clientY - heroRect.top - heroRect.height / 2) / (heroRect.height / 2);
        setMousePos({ x, y });
      }
    };

    const currentRef = visualContainerRef.current;
    // Add mousemove listener only if preferred motion is not reduced
    if (currentRef && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      currentRef.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup function to remove event listener
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and cleans up on unmount

  // Function to calculate the transform style for each element based on depth and mouse position
  const getTransformStyle = (depth, isImageBubble = false) => {
    // Calculate movement based on normalized mouse position and depth
    const moveX = -mousePos.x * (depth * 25);
    const moveY = -mousePos.y * (depth * 25);
    // Image bubble has an initial translate(-50%, -50%) for centering
    const baseTransform = isImageBubble ? 'translate(-50%, -50%)' : '';
    return { transform: `${baseTransform} translate(${moveX}px, ${moveY}px)` };
  };

  return (
    <div
      ref={visualContainerRef}
      // Tailwind classes: relative positioning, hidden by default, block on medium screens (768px+),
      // minimum height, perspective for 3D transforms, and a fade-in transition for desktop visibility.
      className="relative hidden md:block min-h-[450px] [perspective:1000px] transition-opacity duration-500 ease-out opacity-0 md:opacity-100"
    >
      {/* Image Bubble */}
      <div
        className="absolute transition-transform duration-200 ease-out motion-reduce:transition-none 
                   w-80 h-[400px] top-1/2 left-1/2 bg-white rounded-3xl shadow-md overflow-hidden"
        data-depth="0.1"
        style={getTransformStyle(0.1, true)} // Apply dynamic transform, specify it's an image bubble
      >
        <img
          src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="A friendly, professional doctor in a modern setting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Icon Bubble - Graph */}
      <div
        className="absolute transition-transform duration-200 ease-out motion-reduce:transition-none 
                   w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center top-[20%] left-[10%]"
        data-depth="0.3"
        style={getTransformStyle(0.3)} // Apply dynamic transform
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      </div>

      {/* Text Bubble */}
      <div
        className="absolute transition-transform duration-200 ease-out motion-reduce:transition-none 
                   bg-blue-50 text-blue-800 p-2 px-4 rounded-full font-medium shadow-sm top-[15%] left-[70%]"
        data-depth="0.4"
        style={getTransformStyle(0.4)} // Apply dynamic transform
      >
        Evidence-Based
      </div>

      {/* Icon Bubble - Shield */}
      <div
        className="absolute transition-transform duration-200 ease-out motion-reduce:transition-none 
                   w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center top-[65%] left-[80%]"
        data-depth="0.2"
        style={getTransformStyle(0.2)} // Apply dynamic transform
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>
    </div>
  );
};

export default HeroVisualContent;