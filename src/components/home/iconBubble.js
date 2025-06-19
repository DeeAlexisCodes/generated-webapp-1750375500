import React from 'react';

const IconBubble = ({ iconSvg, depth, xOffset, yOffset }) => {
  return (
    <div
      className="absolute will-change-[transform] transition-transform duration-200 ease-out w-20 h-20 bg-white rounded-3xl shadow-md flex items-center justify-center animate-float"
      style={{
        transform: `translate(${xOffset}px, ${yOffset}px)`,
      }}
    >
      <div
        className="w-10 h-10 text-orange-500"
        dangerouslySetInnerHTML={{ __html: iconSvg }}
      />
    </div>
  );
};

export default IconBubble;