import React from 'react';

const TextBubble = ({ text, depth, xOffset, yOffset }) => {
  // The 'depth' prop is typically used by a parent component
  // to calculate 'xOffset' and 'yOffset' for parallax effects.
  // It is included here as per the component plan, but not directly
  // used in the styling of this specific component.

  return (
    <div
      className="absolute will-change-transform transition-transform duration-200 ease-out bg-[#EBF5FF] text-[#005A9C] px-4 py-2 rounded-full font-medium shadow top-[15%] left-[70%]"
      style={{
        transform: `translate(${xOffset}px, ${yOffset}px)`
      }}
    >
      {text}
    </div>
  );
};

export default TextBubble;