import React from 'react';

const ImageBubble = ({ imageUrl, altText, depth, xOffset, yOffset }) => {
  return (
    <div
      className="absolute transition-transform duration-200 ease-out w-[320px] h-[400px] top-1/2 left-1/2 bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] overflow-hidden"
      style={{
        transform: `translate(-50%, -50%) translate(${xOffset}px, ${yOffset}px)`
      }}
      data-depth={depth}
    >
      <img src={imageUrl} alt={altText} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageBubble;