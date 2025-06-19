import React from 'react';

const ReviewCard = ({ review, isActive, onClick }) => {
  const shortText = review.reviewText.split('</p>')[0].replace('<p>', '') + '...';

  return (
    <div
      className={`
        bg-white rounded-2xl shadow-sm p-8 text-center flex-shrink-0 mx-[10px] max-w-[400px]
        cursor-pointer transition-all duration-400 ease-out
        ${isActive ? 'scale-100 opacity-100' : 'scale-85 opacity-60'}
        md:basis-3/5
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="flex flex-col items-center gap-2 mb-4">
        <img
          src={review.doctorImg}
          alt={review.doctorName}
          className="w-20 h-20 rounded-full object-cover shadow-sm"
        />
        <span className="font-bold">{review.doctorName}</span>
      </div>
      <h2 className="text-xl font-bold mb-2">{review.reviewTitle}</h2>
      <p className="text-gray-600">{shortText}</p>
    </div>
  );
};

export default ReviewCard;