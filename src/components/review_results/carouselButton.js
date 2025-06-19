import React from 'react';

const CarouselButton = ({ direction, onClick }) => {
  const isLeft = direction === 'left';
  const svgPath = isLeft
    ? 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'
    : 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z';

  return (
    <button
      className="
        bg-white border border-gray-200 rounded-full w-11 h-11 cursor-pointer
        flex items-center justify-center shadow-sm transition-all duration-200 ease-out
        flex-shrink-0 hover:scale-110 hover:shadow-md
      "
      onClick={onClick}
    >
      <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24">
        <path fill="currentColor" d={svgPath} />
      </svg>
    </button>
  );
};

export default CarouselButton;